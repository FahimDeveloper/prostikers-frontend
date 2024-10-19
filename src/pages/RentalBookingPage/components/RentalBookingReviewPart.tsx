/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, InputNumber } from "antd";
import { IoCalendarOutline } from "react-icons/io5";
import moment from "moment";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useDeleteBookingSlotMutation } from "../../../redux/features/slotBooking/slotBookingApi";
import { useVoucherMutation } from "../../../redux/features/voucher/voucherApi";
import { useGetSportAddonsQuery } from "../../../redux/features/addon/addonApi";
import { IAddon } from "../../../types/addon.types";

const RentalBookingReviewPart = ({
  addons,
  setAddons,
  bookingData,
  setVoucherApplied,
  setTotalPrice,
  rentalInfo,
  totalPrice,
}: {
  addons: any;
  setAddons: any;
  bookingData: any;
  setTotalPrice: any;
  setVoucherApplied: any;
  totalPrice: any;
  rentalInfo: any;
}) => {
  const [rentalData, setRentalData] = useState(bookingData);
  // const [membership, setMemberhips] = useState(membershipData);
  const [use, { data, isLoading, isSuccess, isError, error }] =
    useVoucherMutation();

  const [deleteSlot] = useDeleteBookingSlotMutation();
  const { data: addonsData } = useGetSportAddonsQuery({
    sport: rentalInfo?.sport,
  });

  // const deleteMembership = () => {
  //   setMemberhips({});
  //   sessionStorage.removeItem("membership-info");
  // };

  const onSlotDelete = (date: any, lane: string, slot: string) => {
    const rentalDate = new Date(date);
    Swal.fire({
      title: "Are you sure?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#0ABAC3",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        const slotId = `${rentalInfo?.training}${
          rentalDate?.toISOString().split("T")[0]
        }${slot.split(" ").join("")}${lane}`;
        deleteSlot(slotId)
          .unwrap()
          .then(() => {
            toast.success("Deleted successfully");
            const updatedSlots = rentalData
              ?.map((slots: any) => {
                if (
                  slots.date === date &&
                  slots.lane === lane &&
                  slots.slots.length > 1
                ) {
                  return {
                    ...slots,
                    slots: slots.slots.filter(
                      (oldSlot: string) => oldSlot !== slot
                    ),
                  };
                } else if (
                  slots.date === date &&
                  slots.lane === lane &&
                  slots.slots.length == 1
                ) {
                  return null;
                }
                return slots;
              })
              .filter(Boolean);
            setRentalData(updatedSlots);
            sessionStorage.setItem(
              "rental-facility-slots",
              JSON.stringify(updatedSlots)
            );
          })
          .catch((error: any) => toast.error(`${error.data.message}`));
      }
    });
  };

  const onFinish = (values: any) => {
    values.voucher_type = "facility";
    use(values);
  };

  const onAddAddon = (values: any) => {
    setAddons([
      ...addons,
      {
        id: addons?.length,
        image: values.addon_image,
        name: values.addon_title,
        price: values.addon_price,
        hours: 1,
      },
    ]);
  };

  const onHourChange = (value: number, id: number) => {
    setAddons(
      addons.map((addon: any) =>
        addon.id === id ? { ...addon, hours: value } : addon
      )
    );
  };

  const onAddonDelete = (id: number) => {
    setAddons(addons.filter((addon: any) => addon.id !== id));
  };

  const slotsPrice = rentalData?.reduce((total: number, booking: any) => {
    return total + booking.slots.length * rentalInfo?.price;
  }, 0);
  const addonsPrice = addons.reduce((total: number, addon: any) => {
    return total + addon.price * addon.hours;
  }, 0);

  // if (membership?.price) {
  //   const some = slotsPrice + addonsPrice + membership?.price;
  //   if (data) {
  //     const { discount_type, discount_value } = data.results;
  //     if (discount_type === "amount") {
  //       setTotalPrice(some - discount_value);
  //     } else if (discount_type === "percentage") {
  //       const decimal = parseFloat(discount_value) / 100;
  //       setTotalPrice(some - some * decimal);
  //     }
  //   } else {
  //     setTotalPrice(some);
  //   }
  // } else {
  //   const some = slotsPrice + addonsPrice;
  //   if (data) {
  //     const { discount_type, discount_value } = data.results;
  //     if (discount_type === "amount") {
  //       setTotalPrice(some - discount_value);
  //     } else if (discount_type === "percentage") {
  //       const decimal = parseFloat(discount_value) / 100;
  //       setTotalPrice(some - some * decimal);
  //     }
  //   } else {
  //     setTotalPrice(some);
  //   }
  // }

  const some = slotsPrice + addonsPrice;
  if (data) {
    const { discount_type, discount_value } = data.results;
    if (discount_type === "amount") {
      setTotalPrice(some - discount_value);
    } else if (discount_type === "percentage") {
      const decimal = parseFloat(discount_value) / 100;
      setTotalPrice(some - some * decimal);
    }
  } else {
    setTotalPrice(some);
  }

  useEffect(() => {
    if (isSuccess) {
      setVoucherApplied(true);
      Swal.fire({
        title: "Success",
        text: `${data?.message}`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (isError) {
      Swal.fire({
        title: "Oops..",
        text: `${(error as any)?.data?.message || "something went wrong"}`,
        icon: "error",
        confirmButtonColor: "#0ABAC3",
      });
    }
  }, [isSuccess, isError]);
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-5 gap-7">
        <div className="col-span-3 p-7 rounded-2xl border border-solid border-[#F2F2F2] space-y-7">
          <div className="space-y-2">
            <h2 className="text-2xl text-secondary font-semibold">
              Customize Your Practice Session
            </h2>
            <p className="text-base text-[#4B4B4B]">
              Enhance your practice with our range of add-ons. Click on any
              add-on for more details and to add it to your booking.
            </p>
          </div>
          {(addonsData?.results as IAddon)?.addons?.map((addon, index) => (
            <div key={index} className="grid grid-cols-3 items-end">
              <div className="flex gap-5 col-span-2 items-center">
                <img
                  src={addon.addon_image}
                  className="size-16 rounded-xl"
                  alt={addon.addon_title}
                />
                <div className="space-y-2">
                  <h4 className="text-lg text-secondary font-medium">
                    {addon.addon_title}
                  </h4>
                  <p className="text-sm text-primary font-semibold">
                    +${addon.addon_price}/hours
                  </p>
                </div>
              </div>
              <div className="text-end">
                <Button
                  onClick={() => onAddAddon(addon)}
                  disabled={
                    addons.find((a: any) => a.name === addon.addon_title)
                      ? true
                      : false
                  }
                  className="bg-secondary px-4 h-8 text-white"
                >
                  + Add
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-2 p-7 rounded-2xl border border-solid border-[#F2F2F2] space-y-5">
          <h3 className="text-[#063232] text-lg font-medium text-center p-5 bg-[#F6FFFF]">
            Booking Summary
          </h3>
          <p>Per slot price: ${rentalInfo?.price}</p>
          {rentalData?.map((dateSlots: any, index: number) => (
            <div className="space-y-2" key={index}>
              {dateSlots.slots.map((slot: string, index: number) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white py-3 px-2"
                >
                  <div className="flex gap-5 items-center">
                    <IoCalendarOutline className="size-4" />
                    <span className="text-sm font-medium text-secondary">
                      {moment(dateSlots.date).format("D-MMM-YYYY")}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-secondary">
                    {slot}
                  </div>
                  <MdDeleteOutline
                    className={`size-5 ${
                      rentalData?.length > 1 || rentalData[0]?.slots.length > 1
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    }`}
                    onClick={() => {
                      if (
                        rentalData?.length < 2 &&
                        rentalData[0]?.slots.length < 2
                      ) {
                        return;
                      } else {
                        onSlotDelete(dateSlots.date, dateSlots.lane, slot);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
          {/* {membership?.price && (
            <div className="flex justify-between items-start px-2">
              <div className="space-y-2">
                <p className="capitalize">{membership?.package_name}</p>
                <p className="capitalize">{membership?.plan}</p>
              </div>
              <p>price: ${membership?.price}</p>
              <MdDeleteOutline
                onClick={deleteMembership}
                className="size-5 cursor-pointer"
              />
            </div>
          )} */}
          {addons?.map((addon: any) => (
            <div className="flex justify-between items-center px-2">
              <img
                src={addon.image}
                alt={addon.name}
                className="size-16 rounded-xl"
              />
              <p>
                Hours:{" "}
                <InputNumber
                  value={addon.hours}
                  min={1}
                  onChange={(value) => onHourChange(value, addon.id)}
                  className="w-16"
                />
              </p>
              <p>${addon.hours * addon.price}</p>
              <MdDeleteOutline
                onClick={() => onAddonDelete(addon.id)}
                className="size-5 cursor-pointer"
              />
            </div>
          ))}
          {data?.results && (
            <div className="flex justify-between">
              <p className="text-secondary text-base">Voucher Applied</p>
              <p className="text-secondary text-base capitalize">
                {data?.results.discount_type}
              </p>
              {data?.results.discount_type === "amount" ? (
                <p className="text-secondary text-lg">
                  -${data?.results.discount_value}
                </p>
              ) : (
                <p className="text-secondary text-lg">
                  -{data?.results.discount_value}%
                </p>
              )}
            </div>
          )}
          <div className="flex justify-between">
            <p className="text-secondary text-base font-medium">Total Price</p>
            <p className="text-secondary text-lg font-medium">${totalPrice}</p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-base">Apply voucher</p>
        <Form onFinish={onFinish} layout="vertical" className="flex gap-1">
          <Form.Item
            name="voucher_code"
            className="m-0"
            rules={[{ required: true }]}
          >
            <Input
              readOnly={data ? true : false}
              className="py-[7px] rounded-full w-96"
              placeholder="Enter your voucher code"
            />
          </Form.Item>
          <Form.Item className="m-0">
            <Button
              disabled={data}
              loading={isLoading}
              htmlType="submit"
              className="text-white bg-primary h-full lg:text-lg text-base font-bold px-10 rounded-full"
            >
              Apply
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RentalBookingReviewPart;
