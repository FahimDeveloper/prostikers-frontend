/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */ import {
  Button,
  message,
  Radio,
  Select,
} from "antd";
import { useEffect, useState } from "react";
import DateSlider from "../../../components/DateSlider";
import { useRentalFacilityQuery } from "../../../redux/features/facility/facilityApi";
import moment from "moment";
import { IoCalendarOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import {
  useAddToCartSlotMutation,
  useDeleteBookingSlotMutation,
  useFacilityBookedSlotsQuery,
  useGetBookingSlotsQuery,
} from "../../../redux/features/slotBooking/slotBookingApi";
import { useBlocker, useNavigate } from "react-router-dom";
import { ImSpinner } from "react-icons/im";
import FacilityBookingTimeSlots from "../../../components/FacilityBookingTimeSlots";
import { CiClock1 } from "react-icons/ci";
import RouteBlocker from "../../../utils/RouteBlocker";
const RentalBooking = ({
  facilityCage,
  setFacilityCage,
}: {
  facilityCage: string | undefined;
  setFacilityCage: any;
}) => {
  const navigate = useNavigate();
  const [deleteSlot] = useDeleteBookingSlotMutation();
  const [activeDate, setActiveDate] = useState(new Date());
  const [selectSlots, setSelectSlots] = useState<any[]>([]);
  const [block, setBlock] = useState(false);
  const [process, setProcess] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const blocker = useBlocker(block);
  const createCartBooking = useAddToCartSlotMutation();
  const { data: facility, isFetching } = useRentalFacilityQuery(
    { facility: facilityCage },
    { skip: facilityCage ? false : true }
  );
  const [lane, setLane] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (facility?.results?._id) {
      setLane(facility?.results?.lanes[0]);
    }
  }, [facility]);
  const slotsBookedQuery = useFacilityBookedSlotsQuery(
    {
      training: facility?.results._id,
      date: activeDate.toISOString().split("T")[0],
      lane: lane,
    },
    { skip: facility?.results?._id ? false : true }
  );
  const slotsCartQuery = useGetBookingSlotsQuery(
    {
      training: facility?.results._id,
      date: activeDate.toISOString().split("T")[0],
      lane: lane,
    },
    { skip: facility?.results?._id ? false : true }
  );
  const onChange = (value: string) => {
    setFacilityCage(value);
  };
  const onDelete = (date: any, slot: string, slot_lane: string) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#0ABAC3",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const slotId = `${facility?.results._id}${
          date.toISOString().split("T")[0]
        }${slot.split(" ").join("")}${slot_lane}`;
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
                  slots.date === date &&
                  slots.lane === slot_lane &&
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
                  slots.lane === slot_lane &&
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

  const totalPrice = selectSlots.reduce((total, facilitySlots) => {
    if (selectSlots.length > 1) {
      return total + facilitySlots.slots.length * facility?.results?.price;
    } else if (facilitySlots.slots.length > 1) {
      return total + facilitySlots.slots.length * facility?.results?.price;
    } else {
      return total + facilitySlots.slots.length * facility?.results?.ini_price;
    }
  }, 0);

  const onNavigate = () => {
    setBlock(false);
    sessionStorage.setItem(
      "rental-facility-slots",
      JSON.stringify(selectSlots)
    );
    navigate("/rental-booking", {
      state: {
        facilityInfo: {
          training: facility?.results._id,
          price: facility?.results.price,
          ini_price: facility?.results.ini_price,
          sport: facility?.results.sport,
        },
      },
    });
  };

  const onProcess = () => {
    setBlock(false);
    setProcess(true);
  };

  useEffect(() => {
    if (process) {
      onNavigate();
    }
  }, [process]);

  return (
    <>
      {contextHolder}
      <div className="bg-[#F9FAFB] sm:py-10 rounded-2xl space-y-6 sm:px-5 py-7 px-3">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[#07133D]">
            Select Facility Type
          </h3>
          <Select
            onChange={onChange}
            placeholder="Select facility"
            className="w-full h-9 rounded-full"
            options={[
              {
                label: "Baseball Cage",
                value: "baseball cage",
              },
              {
                label: "Soccer",
                value: "soccer",
              },
              {
                label: "Softball Cage",
                value: "softball cage",
              },
              {
                label: "Cricket Cage",
                value: "cricket cage",
              },
              {
                label: "Hockey",
                value: "hockey",
              },
            ]}
          />
        </div>
        {facility?.results._id && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#07133D]">
              Select Area
            </h3>
            <div className="flex gap-5">
              <Radio.Group
                onChange={(e) => setLane(e.target.value)}
                value={lane}
                className="w-full"
              >
                <div className="w-full flex flex-col gap-2">
                  {facility?.results?.lanes.map((lane: string) => (
                    <div className="w-full bg-gray-100 px-2 py-2 rounded-lg">
                      <Radio
                        value={lane}
                        className="w-full font-medium capitalize"
                      >
                        {lane}
                      </Radio>
                    </div>
                  ))}
                </div>
              </Radio.Group>
            </div>
            <h3 className="text-xl font-semibold text-[#07133D]">
              Booking Date and Time
            </h3>
            <p className="text-base font-medium">
              Information - {facility?.results?.description}
            </p>
            <div className="flex flex-wrap sm:gap-x-5 gap-3 items-center">
              <div className="flex gap-x-2 items-center">
                <span className="size-3 rounded-full border border-solid border-gray-300"></span>
                Available
              </div>
              <div className="flex gap-x-2 items-center">
                <span className="size-3 rounded-full bg-primary border border-solid border-gray-300"></span>
                Selected
              </div>
              <div className="flex gap-x-2 items-center">
                <span className="size-3 rounded-full border bg-gray-100 border-solid border-gray-300"></span>
                Unavailable
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-[#07133D] font-medium text-center">
                {activeDate.toLocaleDateString("en-US", { month: "long" })}
              </p>
              <DateSlider
                activeDate={activeDate}
                setActiveDate={setActiveDate}
              />
            </div>
            {facility?.results && (
              <FacilityBookingTimeSlots
                activeDate={activeDate}
                training={facility?.results}
                slotsCartQuery={slotsCartQuery}
                slotsBookedQuery={slotsBookedQuery}
                addToCart={createCartBooking}
                selectSlots={selectSlots}
                setSelectSlots={setSelectSlots}
                lane={lane || facility?.results?.lanes[0]}
                setBlock={setBlock}
              />
            )}
          </div>
        )}
        <>
          {isFetching ? (
            <div className="text-center h-96 flex items-center justify-center">
              <ImSpinner className="size-9 animate-spin text-primary" />
            </div>
          ) : (
            <>
              {facility && !facility?.results._id && (
                <div className="text-center h-96 flex items-center justify-center">
                  <h3 className="font-medium">Facility not found</h3>
                </div>
              )}
            </>
          )}
        </>

        {selectSlots.length > 0 && (
          <div className="space-y-5">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold text-secondary">
                Booking Details
              </h3>
              <div className="flex gap-1">
                <p>Total Price:</p>
                <p>${totalPrice}</p>
              </div>
            </div>
            <div className="sm:block hidden space-y-2">
              {selectSlots.map((dateSlots, index) => (
                <div className="space-y-2" key={index}>
                  {dateSlots.slots.map((slot: string, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-white p-3"
                    >
                      <div className="flex gap-3 items-center">
                        <IoCalendarOutline className="size-4" />
                        <span className="text-sm font-medium text-secondary">
                          {moment(dateSlots.date).format("D-MMM-YYYY")}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-secondary">
                        {dateSlots.lane}
                      </div>
                      <div className="flex gap-2 items-center">
                        <CiClock1 className="size-4" />
                        <span className="text-sm font-medium text-secondary">
                          {slot}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-secondary">
                        $
                        {selectSlots.length > 1
                          ? facility?.results?.price
                          : dateSlots?.slots?.length > 1
                          ? facility?.results?.price
                          : facility?.results?.ini_price}
                      </div>
                      <MdDeleteOutline
                        className="size-5 cursor-pointer"
                        onClick={() =>
                          onDelete(dateSlots.date, slot, dateSlots.lane)
                        }
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="sm:hidden block space-y-2">
              {selectSlots.map((dateSlots, index) => (
                <div className="space-y-2" key={index}>
                  {dateSlots.slots.map((slot: string, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between gap-5 flex-wrap items-center bg-white p-3"
                    >
                      <div className="space-y-2">
                        <div className="flex gap-3 items-center">
                          <IoCalendarOutline className="size-4" />
                          <span className="text-sm font-medium text-secondary">
                            {moment(dateSlots.date).format("D-MMM-YYYY")}
                          </span>
                        </div>
                        <div className="text-sm font-medium text-secondary">
                          Lane - {dateSlots.lane}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex gap-2 items-center">
                          <CiClock1 className="size-4" />
                          <span className="text-sm font-medium text-secondary">
                            {slot}
                          </span>
                        </div>
                        <div className="text-sm font-medium text-secondary">
                          Price - $
                          {selectSlots.length > 1
                            ? facility?.results?.price
                            : dateSlots?.slots?.length > 1
                            ? facility?.results?.price
                            : facility?.results?.ini_price}
                        </div>
                      </div>
                      <div className="text-end">
                        <MdDeleteOutline
                          className="size-5 cursor-pointer"
                          onClick={() =>
                            onDelete(dateSlots.date, slot, dateSlots.lane)
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <p className="lg:text-2xl sm:text-xl text-lg sm:font-bold font-semibold">
                US${totalPrice}
              </p>
              <Button onClick={onProcess} className="primary-btn-2">
                Book now
              </Button>
            </div>
          </div>
        )}
        <RouteBlocker block={block} blocker={blocker} />
      </div>
    </>
  );
};

export default RentalBooking;
