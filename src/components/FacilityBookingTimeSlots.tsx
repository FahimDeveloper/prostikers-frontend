import { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { FaSpinner } from "react-icons/fa";
import { createTimeSlots } from "../utils/createBookingTimeSlots";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../redux/features/auth/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { collectBookingTimeSlots } from "../utils/collectBookingTimeSlots";
import { message } from "antd";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import dayjs, { Dayjs } from "dayjs";
import { useDeleteBookingSlotMutation } from "../redux/features/slotBooking/slotBookingApi";

const FacilityBookingTimeSlots = ({
  activeDate,
  training,
  slotsCartQuery,
  addToCart,
  selectSlots,
  setSelectSlots,
  slotsBookedQuery,
  lane,
  setBlock,
}: {
  activeDate: Dayjs;
  training: any;
  slotsCartQuery: any;
  slotsBookedQuery: any;
  addToCart: any;
  selectSlots: any;
  setSelectSlots: any;
  lane: string | undefined;
  setBlock: any;
}) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const [
    create,
    {
      isLoading: createLoading,
      isSuccess: createSuccess,
      isError: isCreateError,
      error: createError,
    },
  ] = addToCart;
  const [
    deleteSlot,
    {
      isLoading: deleteLoading,
      isSuccess: deleteSuccess,
      isError: isDeleteError,
      error: deleteError,
    },
  ] = useDeleteBookingSlotMutation();
  const { data: slotsCartData, isLoading: slotsCartLoading } = slotsCartQuery;
  const { data: slotsBookedData, isLoading: slotsBookedLoading } =
    slotsBookedQuery;
  const [timeSlot, setTimeSlot] = useState("");
  const [slotIndex, setSlotIndex] = useState<number | null>(null);
  const [messageApi, contextHolder] = message.useMessage();
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const navigate = useNavigate();
  const location = useLocation();
  const date = dayjs().tz("America/Los_Angeles");
  const day = useMemo(() => {
    if (activeDate.month() < date.month()) {
      return;
    } else {
      return training?.schedules?.find(
        (schedule: any) => schedule.day === dayjs(activeDate).format("dddd") // Get the weekday name
      );
    }
  }, [training, activeDate]);

  const slots = useMemo(() => {
    if (day && day.active) {
      return createTimeSlots(
        day.start_time,
        day.end_time,
        training.duration,
        lane
      );
    }
    return [];
  }, [day, training.duration]);

  const checkPreparation = (slot: string) => {
    const [startTime] = slot.split(" - ");
    const formattedDate = dayjs(activeDate).format("YYYY-MM-DD");
    const slotDateTime = dayjs(
      `${formattedDate} ${startTime}`,
      "YYYY-MM-DD hh:mm A"
    );
    const oneHourFromNow = dayjs().add(1, "hour");
    return slotDateTime.isAfter(oneHourFromNow);
  };

  const checkTimeAvailable = (slot: string) => {
    const [_, endTime] = slot.split(" - ");
    const formattedDate = dayjs(activeDate)
      .tz("America/Los_Angeles")
      .format("YYYY-MM-DD");
    const slotDateTime = dayjs(
      `${formattedDate} ${endTime}`,
      "YYYY-MM-DD hh:mm A"
    ).tz("America/Los_Angeles");
    const oneHourFromNow = dayjs().tz("America/Los_Angeles");
    return slotDateTime.isBefore(oneHourFromNow);
  };

  const onSelect = (slot: string, index: number) => {
    if (!user && !token) {
      Swal.fire({
        title: "Welcome Back!",
        text: "To proceed, Please log in to your account.",
        showCancelButton: true,
        confirmButtonColor: "#0ABAC3",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go for login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    } else if (!checkPreparation(slot)) {
      Swal.fire({
        title: "Under preparation",
        html: `
          <div style="line-height: 1.5; letter-spacing: 0.5px;">
          This slot is under preparation. If you want to book within the next hour, please call us for confirmation.
          <p>Call: <a style="text-decoration:none;" href="tel:+19168905834">+1 (916) 890-5834</a></p>
          </div>
        `,
        showCloseButton: true,
        showConfirmButton: false,
        focusConfirm: false,
      });
    } else {
      setTimeSlot(slot);
      setSlotIndex(index);
      const date = activeDate.toISOString().split("T")[0];
      const slotId = `${training._id}${date}${slot.split(" ").join("")}${lane
        ?.split(" ")
        .join("+")}`;
      const isBooked = selectSlots.some(
        (slots: any) =>
          slots.date.toISOString().split("T")[0] === date &&
          slots.lane === lane &&
          slots.slots.includes(slot)
      );
      if (isBooked) {
        deleteSlot(slotId);
      } else {
        create({
          id: slotId,
          user: user?._id,
          date,
          time_slot: slot,
          lane,
        });
      }
    }
  };

  useEffect(() => {
    if (createSuccess) {
      messageApi.open({
        type: "success",
        content: "success",
      });
      setBlock(true);
      setSlotIndex(null);
      const dateSlotIndex = selectSlots.findIndex(
        (slots: any) =>
          slots.date.toISOString().split("T")[0] ===
            activeDate.toISOString().split("T")[0] && slots.lane === lane
      );
      if (dateSlotIndex !== -1) {
        selectSlots[dateSlotIndex].slots.push(timeSlot);
        setSelectSlots([...selectSlots]);
      } else {
        setSelectSlots([
          ...selectSlots,
          {
            date: activeDate,
            slots: [timeSlot],
            lane: lane,
          },
        ]);
      }
    }
    if (isCreateError) {
      setSlotIndex(null);
      Swal.fire({
        title: "Oops!..",
        icon: "info",
        text: `${
          createError?.data?.message.includes("exists")
            ? "Slot is already Unavailable"
            : createError?.data?.message || "Something went wrong"
        }`,
        confirmButtonColor: "#0ABAC3",
      });
    }
  }, [createSuccess, isCreateError]);

  useEffect(() => {
    if (deleteSuccess) {
      setSlotIndex(null);
      messageApi.open({
        type: "success",
        content: "Success",
      });
      const updatedSlots = selectSlots
        ?.map((slots: any) => {
          const slotDate = dayjs.tz(slots.date, "America/Los_Angeles");
          if (
            slotDate.date() === activeDate.date() &&
            slots.lane === lane &&
            slots.slots.length > 1
          ) {
            return {
              ...slots,
              slots: slots.slots.filter(
                (oldSlot: string) => oldSlot !== timeSlot
              ),
            };
          } else if (
            slotDate.date() === activeDate.date() &&
            slots.lane === lane &&
            slots.slots.length == 1
          ) {
            return null;
          }
          return slots;
        })
        .filter(Boolean);
      if (updatedSlots.length == 0) {
        setBlock(false);
      }
      setSelectSlots(updatedSlots);
    }
    if (isDeleteError) {
      setSlotIndex(null);
      messageApi.open({
        type: "error",
        content: `${(deleteError as any)?.data?.message}`,
      });
    }
  }, [deleteSuccess, isDeleteError]);

  const cartSlots = collectBookingTimeSlots(slotsCartData?.results, lane);
  const bookedSlots = collectBookingTimeSlots(slotsBookedData?.results, lane);
  const proceedSlots = [...cartSlots, ...bookedSlots];

  const parseTime = (timeRange: any) => {
    const [startTime, endTime] = timeRange.split(" - ");
    const parseSingleTime = (timeStr: string) => {
      const [time, modifier] = timeStr.split(" ");
      let [hours, minutes] = time.split(":").map(Number);

      if (modifier === "PM" && hours !== 12) hours += 12;
      if (modifier === "AM" && hours === 12) hours = 0;

      return hours * 60 + minutes;
    };
    return [parseSingleTime(startTime), parseSingleTime(endTime)];
  };

  const isOverlapping = (slotTimeRange: any, unavailableTimeRange: any) => {
    const [slotStart, slotEnd] = parseTime(slotTimeRange);
    const [unavailableStart, unavailableEnd] = parseTime(unavailableTimeRange);

    return slotStart < unavailableEnd && slotEnd > unavailableStart;
  };

  const isSlotUnavailable = (
    slot: string,
    unavailableSlots: any,
    lane: string
  ) => {
    const selectedLane = selectSlots.find(
      (selected: any) => selected.lane === lane
    );
    const selectedSlotList = selectedLane ? selectedLane.slots : [];

    const laneSlots = unavailableSlots.filter(
      (unavailable: any) => unavailable.lane === lane
    );

    return laneSlots.some((laneSlot: any) =>
      laneSlot.slots.some(
        (unavailableSlot: any) =>
          !selectedSlotList.includes(unavailableSlot) &&
          isOverlapping(slot, unavailableSlot)
      )
    );
  };

  return (
    <>
      {contextHolder}
      {
        <>
          {slots?.length > 0 ? (
            <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-1">
              {(
                slots as [
                  {
                    lane: string;
                    slots: string[];
                  }
                ]
              )[0].slots?.map((slot: string, index: number) => (
                <button
                  disabled={
                    createLoading ||
                    slotsCartLoading ||
                    slotsBookedLoading ||
                    isSlotUnavailable(slot, proceedSlots, lane!) ||
                    checkTimeAvailable(slot)
                  }
                  key={index}
                  onClick={() => onSelect(slot, index)}
                  className={`border border-solid rounded-md border-gray-200 h-12 px-1 disabled:cursor-not-allowed text-center text-black ${
                    createLoading || slotsCartLoading || slotsBookedLoading
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  } ${
                    selectSlots.find(
                      (slots: any) =>
                        slots.date.toISOString().split("T")[0] ===
                          activeDate.toISOString().split("T")[0] &&
                        slots.lane === lane &&
                        slots.slots.includes(slot)
                    )
                      ? "bg-primary text-white"
                      : isSlotUnavailable(slot, proceedSlots, lane!) ||
                        checkTimeAvailable(slot)
                      ? "bg-gray-100"
                      : "bg-white"
                  }`}
                >
                  {(createLoading ||
                    slotsCartLoading ||
                    slotsBookedLoading ||
                    deleteLoading) &&
                  index === slotIndex ? (
                    <FaSpinner
                      className={`animate-spin size-5 ${
                        deleteLoading ? "text-white" : "text-primary"
                      }`}
                    />
                  ) : (
                    <p className="text-xs font-medium">
                      {!selectSlots.find((slots: any) =>
                        slots.slots.includes(slot)
                      ) && isSlotUnavailable(slot, proceedSlots, lane!)
                        ? "Unavailable"
                        : slot}
                    </p>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-2xl h-40 items-center justify-center flex font-semibold">
              No slot available
            </p>
          )}
        </>
      }
    </>
  );
};

export default FacilityBookingTimeSlots;
