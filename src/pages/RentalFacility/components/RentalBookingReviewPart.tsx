import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Button, Form, Input, message, Modal, Select, Tooltip } from "antd";
import { IoCalendarOutline } from "react-icons/io5";
import moment from "moment";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useDeleteBookingSlotMutation } from "../../../redux/features/slotBooking/slotBookingApi";
import { useVoucherMutation } from "../../../redux/features/voucher/voucherApi";
import { useGetSportAddonsQuery } from "../../../redux/features/addon/addonApi";
import { IAddon } from "../../../types/addon.types";
import { FaSpinner } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import dayjs from "dayjs";
import {
  halfHourlyAddonOptions,
  hourlyAddonOptions,
} from "../../../constant/addonOptions";
import { ExclamationCircleOutlined } from "@ant-design/icons";

interface Props {
  addons: any;
  setAddons: any;
  selectSlots: any;
  setSelectSlots: any;
  setVoucherApplied: any;
  setTotalPrice: any;
  facility: any;
  totalPrice: number;
  bookings: any;
  setBlock: any;
  sessionCredit: number; // session credit for bookings
  machineCredit: number; // machine credit for addons
  isUnlimited: boolean;
  setRemeningCredit: any;
  setUsedCredit: any;
}

const RentalBookingReviewPart = ({
  addons,
  setAddons,
  selectSlots,
  setSelectSlots,
  setTotalPrice,
  setVoucherApplied,
  facility,
  totalPrice,
  bookings,
  setBlock,
  sessionCredit,
  machineCredit,
  isUnlimited,
  setRemeningCredit,
  setUsedCredit,
}: Props) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const [messageApi, contextHolder] = message.useMessage();
  const [allow, setAllow] = useState(false);
  const [modal, modalContextHolder] = Modal.useModal();
  const [use, { data, isLoading, isSuccess, isError, error }] =
    useVoucherMutation();
  const [deleteSlot] = useDeleteBookingSlotMutation();
  const { data: addonsData, isFetching } = useGetSportAddonsQuery({
    sport: facility?.results?.sport,
  });

  const [displayBookings, setDisplayBookings] = useState<any[]>([]);
  const [displayAddons, setDisplayAddons] = useState<any[]>([]);

  const isPeakHour = (dateString: string, timeSlot: string) => {
    const date = moment(dateString);
    const day = date.format("dddd");
    const [startTime] = timeSlot.split(" - ");
    const hour = moment(startTime, ["h:mm A"]).hour();
    return (
      (day === "Wednesday" || day === "Thursday" || day === "Friday") &&
      hour >= 17 &&
      hour < 20
    );
  };

  useEffect(() => {
    if (isUnlimited) {
      const usedFreeHours: Record<string, number> = {};

      const updatedBookings = bookings.map((slot: any) => {
        const durationHr = facility?.results?.duration === 30 ? 0.5 : 1;
        const slotCredit = durationHr;

        const date = slot.date;
        const peak = isPeakHour(date, slot.time_slot);

        let price = 0;
        let usedCredit = 0;

        if (peak) {
          const alreadyUsed = usedFreeHours[date] || 0;
          const remainingFree = Math.max(1 - alreadyUsed, 0);

          if (remainingFree >= durationHr) {
            usedCredit = slotCredit;
            usedFreeHours[date] = alreadyUsed + durationHr;
            price = 0;
          } else if (remainingFree > 0) {
            usedFreeHours[date] = alreadyUsed + remainingFree;
            price = facility?.results?.price;
          } else {
            if (!allow) {
              price = facility?.results?.price;
              modal.confirm({
                title: "Confirm",
                icon: <ExclamationCircleOutlined />,
                content:
                  "You are trying to book more then 1 hour on peak time. Slot price will charged you. Proceed?",
                okText: "OK",
                cancelText: "Cancel",
                onOk: () => {
                  setAllow(true);
                },
                onCancel: () => {
                  const slotId = `${
                    facility?.results?._id
                  }${date}${slot?.time_slot.split(" ").join("")}${slot.lane
                    ?.split(" ")
                    .join("+")}`;
                  deleteSlot(slotId)
                    .unwrap()
                    .then(() => {
                      const updatedSlots = selectSlots
                        ?.map((slots: any) => {
                          if (
                            slots.date.format("YYYY-MM-DD") === date &&
                            slots.slots.length > 1
                          ) {
                            return {
                              ...slots,
                              slots: slots.slots.filter(
                                (oldSlot: string) => oldSlot !== slot?.time_slot
                              ),
                            };
                          } else if (
                            slots.date.format("YYYY-MM-DD") === date &&
                            slots.slots.length == 1
                          ) {
                            return null;
                          }
                          return slots;
                        })
                        .filter(Boolean);
                      if (updatedSlots.length == 0) setBlock(false);
                      setSelectSlots(updatedSlots);
                    })
                    .catch((error) =>
                      messageApi.open({
                        type: "error",
                        content: `${error.data.message}`,
                      })
                    );
                },
              });
            } else {
              price = facility?.results?.price;
            }
          }
        } else {
          usedCredit = slotCredit;
          price = 0;
        }
        setUsedCredit(usedCredit);
        return { ...slot, price, usedCredit };
      });

      setDisplayBookings(updatedBookings);
      return;
    }

    let remainingCredit = sessionCredit;
    const updatedBookings = bookings.map((slot: any) => {
      const slotCredit = facility?.results?.duration === 30 ? 0.5 : 1;
      let price = facility?.results?.price;
      let usedCredit = 0;

      if (remainingCredit >= slotCredit) {
        price = 0;
        usedCredit = slotCredit;
        remainingCredit -= slotCredit;
      } else if (remainingCredit > 0) {
        price = facility?.results?.price;
        usedCredit = remainingCredit;
        remainingCredit = 0;
      }
      setUsedCredit(sessionCredit - remainingCredit);
      setRemeningCredit(remainingCredit);
      return { ...slot, price, usedCredit };
    });

    setDisplayBookings(updatedBookings);
  }, [bookings, sessionCredit, facility, isUnlimited]);

  useEffect(() => {
    if (isUnlimited) {
      // Track free hour usage per date for addons too
      const usedFreeHours: Record<string, number> = {};

      const updatedAddons = addons.map((addon: any) => {
        // Try to map addon hours to bookings date/time
        const firstSlot = bookings[0];
        const date = firstSlot?.date;
        const timeSlot = firstSlot?.time_slot;

        const isPeak = date && timeSlot && isPeakHour(date, timeSlot);
        let price = 0;

        if (isPeak) {
          const alreadyUsed = usedFreeHours[date] || 0;
          const freeRemaining = Math.max(1 - alreadyUsed, 0);
          const freeUsed = Math.min(freeRemaining, addon.hours);
          const chargeable = addon.hours - freeUsed;
          usedFreeHours[date] = alreadyUsed + freeUsed;

          if (chargeable > 0) {
            price = addon.ini_price + addon.price * chargeable; // charge for remaining
          }
        }

        return { ...addon, price };
      });

      setDisplayAddons(updatedAddons);
      return;
    }

    // Default non-unlimited logic below
    let remainingCredit = machineCredit;
    const updatedAddons = addons.map((addon: any) => {
      const addonUnitCredit = addon?.type === "half_hourly" ? 1 : 1;
      let totalCreditNeeded = addon.hours * addonUnitCredit;
      let price = 0;

      if (remainingCredit >= totalCreditNeeded) {
        price = 0;
        remainingCredit -= totalCreditNeeded;
      } else if (remainingCredit > 0) {
        const creditCoveredHours = remainingCredit / addonUnitCredit;
        const coveredPrice =
          addon.ini_price + (addon.hours - creditCoveredHours) * addon.price;
        price = coveredPrice;
        remainingCredit = 0;
      } else {
        if (addon.type === "half_hourly") {
          price = addon.hours < 1 ? addon.ini_price : addon.price * addon.hours;
        } else {
          price = addon.hours < 2 ? addon.ini_price : addon.price * addon.hours;
        }
      }

      return { ...addon, price };
    });

    setDisplayAddons(updatedAddons);
  }, [addons, machineCredit, isUnlimited, bookings]);

  // Update total price whenever bookings or addons change
  useEffect(() => {
    const bookingsPrice = displayBookings.reduce((acc, b) => acc + b.price, 0);
    const addonsPrice = displayAddons.reduce((acc, a) => acc + a.price, 0);
    setTotalPrice(bookingsPrice + addonsPrice);
  }, [displayBookings, displayAddons]);

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
            messageApi.open({ type: "success", content: "Success" });
            const updatedSlots = selectSlots
              ?.map((slots: any) => {
                if (
                  slots.date.format("YYYY-MM-DD") === date &&
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
                  slots.date.format("YYYY-MM-DD") === date &&
                  slots.lane === lane &&
                  slots.slots.length == 1
                ) {
                  return null;
                }
                return slots;
              })
              .filter(Boolean);
            if (updatedSlots.length == 0) setBlock(false);
            setSelectSlots(updatedSlots);
          })
          .catch((error) =>
            messageApi.open({ type: "error", content: `${error.data.message}` })
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
        hours:
          values?.addon_type === "half_hourly"
            ? 0.5 * bookings.length
            : 1 * bookings.length,
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

  // Voucher effect
  useEffect(() => {
    if (data) {
      const { discount_type, discount_value } = data.results;
      if (discount_type === "amount")
        setTotalPrice(totalPrice - discount_value);
      else if (discount_type === "percentage")
        setTotalPrice(
          totalPrice - totalPrice * (parseFloat(discount_value) / 100)
        );
    }
  }, [data]);

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
    <>
      {modalContextHolder}
      {contextHolder}
      <div className="space-y-5">
        {/* Addon Selection */}
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
                    disabled={addons.find(
                      (a: any) => a.name === addon.addon_title
                    )}
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

        {/* Booking Summary */}
        <div className=" sm:p-7 py-4 px-3 rounded-2xl border border-solid border-[#F2F2F2] space-y-5">
          <h3 className="text-[#063232] text-lg font-medium text-center p-5 bg-[#F6FFFF]">
            Booking Summary
          </h3>

          {/* Bookings */}
          {displayBookings?.map((slot: any, index: number) => (
            <div className="space-y-2" key={index}>
              <div className="flex justify-between gap-2 flex-wrap items-center bg-white py-3 sm:px-2">
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
                  {slot.price === 0
                    ? `${slot?.usedCredit} credit`
                    : `$${slot.price}`}
                </div>
                <div className="text-sm font-medium text-secondary">
                  {slot.time_slot}
                </div>
                <div className="flex justify-end">
                  <MdDeleteOutline
                    className="size-5 cursor-pointer"
                    onClick={() =>
                      onSlotDelete(slot.date, slot.lane, slot.time_slot)
                    }
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Addons */}
          {displayAddons?.map((addon: any) => (
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
                  defaultValue={
                    addon?.type === "half_hourly"
                      ? bookings.length * 0.5
                      : bookings.length * 1
                  }
                  options={
                    addon?.type === "half_hourly"
                      ? halfHourlyAddonOptions.map((option, index) => ({
                          ...option,
                          disabled: bookings.length < index + 1,
                        }))
                      : hourlyAddonOptions.map((option, index) => ({
                          ...option,
                          disabled: bookings.length < index + 1,
                        }))
                  }
                />
              </p>
              <p>
                {addon.price === 0
                  ? `${
                      (addon.type === "half_hourly" ? 1 : 1) * addon.hours
                    } credit`
                  : `$${addon.price}`}
              </p>
              <MdDeleteOutline
                onClick={() => onAddonDelete(addon.id)}
                className="size-5 cursor-pointer"
              />
            </div>
          ))}

          {/* Voucher */}
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

          {/* Total Price */}
          <div className="flex justify-between">
            <p className="text-secondary text-lg font-medium">Total Price</p>
            <p className="text-secondary text-lg font-medium">${totalPrice}</p>
          </div>

          {/* Voucher Form */}
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
