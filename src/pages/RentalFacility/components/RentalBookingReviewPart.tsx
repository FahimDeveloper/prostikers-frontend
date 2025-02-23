import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Button, Form, Input, message, Select, Tooltip } from "antd";
import { IoCalendarOutline } from "react-icons/io5";
import moment from "moment";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useDeleteBookingSlotMutation } from "../../../redux/features/slotBooking/slotBookingApi";
import { useVoucherMutation } from "../../../redux/features/voucher/voucherApi";
import { useGetSportAddonsQuery } from "../../../redux/features/addon/addonApi";
import { IAddon } from "../../../types/addon.types";
import { FaSpinner } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import dayjs from "dayjs";

const RentalBookingReviewPart = ({
  addons,
  setAddons,
  selectSlots,
  setSelectSlots,
  setVoucherApplied,
  setTotalPrice,
  facility,
  totalPrice,
  bookings,
}: {
  addons: any;
  setAddons: any;
  selectSlots: any;
  setSelectSlots: any;
  setTotalPrice: any;
  setVoucherApplied: any;
  totalPrice: any;
  facility: any;
  bookings: any;
}) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const [messageApi, contextHolder] = message.useMessage();
  const [use, { data, isLoading, isSuccess, isError, error }] =
    useVoucherMutation();

  const [deleteSlot] = useDeleteBookingSlotMutation();
  const { data: addonsData, isFetching } = useGetSportAddonsQuery({
    sport: facility?.results?.sport,
  });

  const onSlotDelete = (date: any, lane: string, slot: string) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#0ABAC3",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        const slotId = `${facility?.results?._id}${date}${slot
          .split(" ")
          .join("")}${lane?.split(" ").join("+")}`;
        deleteSlot(slotId)
          .unwrap()
          .then(() => {
            messageApi.open({
              type: "success",
              content: "Success",
            });
            const updatedSlots = selectSlots
              ?.map((slots: any) => {
                if (
                  slots.date.toISOString().split("T")[0] === date &&
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
                  slots.date.toISOString().split("T")[0] === date &&
                  slots.lane === lane &&
                  slots.slots.length == 1
                ) {
                  return null;
                }
                return slots;
              })
              .filter(Boolean);
            setSelectSlots(updatedSlots);
          })
          .catch((error) =>
            messageApi.open({
              type: "error",
              content: `${error.data.message}`,
            })
          );
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
        ini_price: values.addon_ini_price,
        price: values.addon_price,
        type: values.addon_type,
        hours: values?.addon_type === "half_hourly" ? 0.5 : 1,
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

  let slotsPrice: number;
  if (bookings.length > 1) {
    slotsPrice = bookings.length * facility?.results?.price;
  } else {
    slotsPrice = bookings.length * facility?.results?.ini_price;
  }

  const addonsPrice = addons.reduce((total: number, addon: any) => {
    const hours = addon?.type === "half_hourly" ? 0.5 : 1;
    const basePrice = addon?.ini_price;
    const additionalPrice = (addon.hours / hours - 1) * addon.price;
    return total + basePrice + additionalPrice;
  }, 0);

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

  const halfHourlyAddonOptions = [
    {
      value: 0.5,
      label: "30 minutes",
    },
    {
      value: 1,
      label: "1 hour",
    },
    {
      value: 1.5,
      label: "1.5 hour",
    },
    {
      value: 2,
      label: "2 hours",
    },
    {
      value: 2.5,
      label: "2.5 hours",
    },
    {
      value: 3,
      label: "3 hours",
    },
    {
      value: 3.5,
      label: "3.5 hours",
    },
    {
      value: 4,
      label: "4 hours",
    },
    {
      value: 4.5,
      label: "4.5 hours",
    },
    {
      value: 5,
      label: "5 hours",
    },
  ];

  const hourlyAddonOptions = [
    {
      value: 1,
      label: "1 hour",
    },

    {
      value: 2,
      label: "2 hours",
    },

    {
      value: 3,
      label: "3 hours",
    },

    {
      value: 4,
      label: "4 hours",
    },
    {
      value: 5,
      label: "5 hours",
    },
  ];

  return (
    <>
      {contextHolder}
      <div className="space-y-5">
        <div className=" sm:p-7 p-5 rounded-2xl border border-solid border-[#F2F2F2] space-y-7">
          <div className="space-y-2">
            <h2 className="sm:text-2xl text-xl text-secondary font-semibold">
              Customize Your Practice Session
            </h2>
            <p className="text-base text-[#4B4B4B]">
              Enhance your practice with our range of add-ons. Click on any
              add-on for more details and to add it to your booking.
            </p>
          </div>
          {addonsData?.results?._id ? (
            (addonsData?.results as IAddon)?.addons?.map((addon, index) => (
              <div
                key={index}
                className="flex flex-wrap justify-between items-end"
              >
                <div className="flex sm:gap-5 gap-3 col-span-2 items-center">
                  <img
                    src={addon.addon_image}
                    className="sm:size-16 size-14 rounded-xl"
                    alt={addon.addon_title}
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="sm:text-lg text-base text-secondary font-medium">
                        {addon.addon_title}
                      </h4>
                      <Tooltip title={addon?.addon_description}>
                        <IoMdInformationCircleOutline className="size-6 text-primary cursor-pointer" />
                      </Tooltip>
                    </div>
                    <div>
                      <p className="text-sm text-primary font-semibold">
                        Add-ons type -{" "}
                        {addon.addon_type === "half_hourly"
                          ? "30 minutes"
                          : "Hourly"}
                      </p>
                      <div className="flex gap-x-2 flex-wrap">
                        <p className="text-sm text-primary font-semibold">
                          Base Fee - ${addon.addon_ini_price},
                        </p>
                        <p className="text-sm text-primary font-semibold">
                          Additional Fee - ${addon.addon_price}
                        </p>
                      </div>
                    </div>
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
            ))
          ) : isFetching ? (
            <div className="flex items-center justify-center h-16">
              <FaSpinner className="size-6 animate-spin text-primary" />
            </div>
          ) : (
            <p className="capitalize text-base">
              {facility?.results?.sport} rental facility dosen't have any
              add-ons
            </p>
          )}
        </div>
        <div className=" sm:p-7 py-4 px-3 rounded-2xl border border-solid border-[#F2F2F2] space-y-5">
          <h3 className="text-[#063232] text-lg font-medium text-center p-5 bg-[#F6FFFF]">
            Booking Summary
          </h3>
          {bookings?.map((slot: any, index: number) => (
            <div className="space-y-2" key={index}>
              <div
                key={index}
                className="flex justify-between gap-2 flex-wrap items-center bg-white py-3 sm:px-2"
              >
                <div className="flex xl:gap-5 gap-3 items-center">
                  <IoCalendarOutline className="size-4" />
                  <span className="text-sm font-medium text-secondary">
                    {moment(slot.date).format("D-MMM-YYYY")}
                  </span>
                </div>
                <div className="text-sm sm:block hidden font-medium text-secondary">
                  {slot.lane}
                </div>
                <div className="text-sm sm:block hidden font-medium text-secondary">
                  $
                  {bookings?.length > 1
                    ? facility?.results?.price
                    : facility?.results?.ini_price}
                </div>
                <div className="text-sm font-medium text-secondary">
                  {slot.time_slot}
                </div>
                <div className="flex justify-end">
                  <MdDeleteOutline
                    className={`size-5 cursor-pointer`}
                    onClick={() => {
                      onSlotDelete(slot.date, slot.lane, slot.time_slot);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
          {addons?.map((addon: any) => {
            const hours = addon?.type === "half_hourly" ? 0.5 : 1;
            const totalAddonPrice =
              addon.hours > hours
                ? addon.ini_price + (addon.hours / hours - 1) * addon.price
                : addon.ini_price;
            return (
              <div
                className="flex justify-between items-center sm:px-2"
                key={addon.id}
              >
                <img
                  src={addon.image}
                  alt={addon.name}
                  className="sm:size-14 size-12 rounded-xl"
                />
                <p>
                  <Select
                    onChange={(value) => onHourChange(value, addon.id)}
                    className="2xl:w-24 sm:w-36 w-28"
                    defaultValue={addon?.type === "half_hourly" ? 0.5 : 1}
                    options={
                      addon?.type === "half_hourly"
                        ? halfHourlyAddonOptions.map((option, index) => {
                            if (bookings.length >= index + 1) {
                              return {
                                value: option.value,
                                label: option.label,
                              };
                            } else {
                              return {
                                value: option.value,
                                label: option.label,
                                disabled: true,
                              };
                            }
                          })
                        : hourlyAddonOptions.map((option, index) => {
                            if (bookings.length >= index + 1) {
                              return {
                                value: option.value,
                                label: option.label,
                              };
                            } else {
                              return {
                                value: option.value,
                                label: option.label,
                                disabled: true,
                              };
                            }
                          })
                    }
                  />
                </p>
                <p>${totalAddonPrice}</p>
                <MdDeleteOutline
                  onClick={() => onAddonDelete(addon.id)}
                  className="size-5 cursor-pointer"
                />
              </div>
            );
          })}
          {data?.results && (
            <div className="flex justify-between">
              <p className="text-secondary sm:text-base text-base">
                Voucher Applied
              </p>
              <p className="sm:block hidden text-secondary text-base capitalize">
                {data?.results.discount_type}
              </p>
              {data?.results.discount_type === "amount" ? (
                <p className="text-secondary sm:text-lg text-base">
                  -${data?.results.discount_value}
                </p>
              ) : (
                <p className="text-secondary sm:text-lg text-base">
                  -{data?.results.discount_value}%
                </p>
              )}
            </div>
          )}
          <div className="flex justify-between">
            <p className="text-secondary text-lg font-medium">Total Price</p>
            <p className="text-secondary text-lg font-medium">${totalPrice}</p>
          </div>
          <div className="space-y-2">
            <p className="text-base">Apply voucher</p>
            <Form onFinish={onFinish} layout="vertical" className="flex gap-1">
              <Form.Item
                name="voucher_code"
                className="m-0 w-full"
                rules={[{ required: true }]}
              >
                <Input
                  readOnly={data ? true : false}
                  className="sm:py-[5px] rounded-full w-full"
                  placeholder="Enter your voucher code"
                />
              </Form.Item>
              <Form.Item className="m-0">
                <Button
                  disabled={data}
                  loading={isLoading}
                  htmlType="submit"
                  type="primary"
                  className="lg:text-base text-sm font-bold sm:px-8 px-5 rounded-full"
                >
                  Apply
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalBookingReviewPart;
