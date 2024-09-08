/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Select } from "antd";
import { useState } from "react";
import DateSlider from "../../../components/DateSlider";
import { useRentalFacilityQuery } from "../../../redux/features/facility/facilityApi";
import BookingTimeSlots from "../../../components/BookingTimeSlots";
import moment from "moment";
import { IoCalendarOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import {
  useAddToCartSlotMutation,
  useDeleteBookingSlotMutation,
  useFacilityBookedSlotsQuery,
  useGetBookingSlotsQuery,
} from "../../../redux/features/slotBooking/slotBookingApi";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { ImSpinner } from "react-icons/im";

const RentalBooking = () => {
  const user = useSelector(selectCurrentUser);
  const [deleteSlot] = useDeleteBookingSlotMutation();
  const [activeDate, setActiveDate] = useState(new Date());
  const [selectSlots, setSelectSlots] = useState<any[]>([]);
  const createCartBooking = useAddToCartSlotMutation();
  const [facilityCage, setFacilityCage] = useState<string | undefined>(
    undefined
  );
  const { data: facility, isFetching } = useRentalFacilityQuery(
    { facility: facilityCage },
    { skip: facilityCage ? false : true }
  );
  const slotsCartQuery = useGetBookingSlotsQuery(
    {
      training: facility?.results._id,
      date: activeDate.toISOString().split("T")[0],
    },
    { skip: user && facility?.results?._id ? false : true }
  );
  const slotsBookedQuery = useFacilityBookedSlotsQuery(
    {
      training: facility?.results._id,
      date: activeDate.toISOString().split("T")[0],
    },
    { skip: user && facility?.results?._id ? false : true }
  );
  const onChange = (value: string) => {
    setFacilityCage(value);
  };

  const onDelete = (date: any, slot: any) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#0ABAC3",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        const slotId = `${facility?.results._id}${
          date.toISOString().split("T")[0]
        }${slot.split(" ").join("")}`;
        deleteSlot(slotId)
          .unwrap()
          .then(() => {
            toast.success("Deleted successfully");
            const updatedSlots = selectSlots
              ?.map((slots: any) => {
                if (slots.date === date && slots.slots.length > 1) {
                  return {
                    ...slots,
                    slots: slots.slots.filter(
                      (oldSlot: string) => oldSlot !== slot
                    ),
                  };
                } else if (slots.date === date && slots.slots.length == 1) {
                  return null;
                }
                return slots;
              })
              .filter(Boolean);
            setSelectSlots(updatedSlots);
          })
          .catch((error) => toast.error(`${error.data.message}`));
      }
    });
  };
  const totalPrice = selectSlots.reduce((total, facilitySlots) => {
    return total + facilitySlots.slots.length * facility?.results.price;
  }, 0);
  return (
    <div className="bg-[#F9FAFB] py-10 rounded-2xl space-y-6 px-5">
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
              label: "Cricket Cage",
              value: "cricket cage",
            },
            {
              label: "Soccer Cage",
              value: "soccer cage",
            },
            {
              label: "Baseball Cage",
              value: "baseball cage",
            },
            {
              label: "Softball Cage",
              value: "softball cage",
            },
            {
              label: "Hockey Cage",
              value: "hockey cage",
            },
          ]}
        />
      </div>
      {facility?.results._id && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#07133D]">
            Booking Date and Time
          </h3>
          <div className="flex justify-between">
            <div className="flex gap-x-5 items-center">
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
            <div>Facility lane: {facility.results.lane}</div>
            <div className="flex gap-1">
              Per slot fee:
              <span className="font-medium">${facility.results.price}</span>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-lg text-[#07133D] font-medium text-center">
              {activeDate.toLocaleDateString("en-US", { month: "long" })}
            </p>
            <DateSlider activeDate={activeDate} setActiveDate={setActiveDate} />
          </div>
          {facility?.results && (
            <BookingTimeSlots
              activeDate={activeDate}
              training={facility?.results}
              slotsCartQuery={slotsCartQuery}
              slotsBookedQuery={slotsBookedQuery}
              addToCart={createCartBooking}
              selectSlots={selectSlots}
              setSelectSlots={setSelectSlots}
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
          <div className="space-y-2">
            {selectSlots.map((dateSlots, index) => (
              <div className="space-y-2" key={index}>
                {dateSlots.slots.map((slot: string, index: number) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-white p-3"
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
                    <div className="text-sm font-medium text-secondary">
                      ${facility?.results?.price}
                    </div>
                    <MdDeleteOutline
                      className="size-5 cursor-pointer"
                      onClick={() => onDelete(dateSlots.date, slot)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <p className="text-2xl font-bold">US${totalPrice}</p>
            <Link
              to="/rental-membership"
              state={{
                slotsData: {
                  training: facility?.results._id,
                  slots: selectSlots,
                  price: facility?.results.price,
                  sport: facility?.results.sport,
                },
              }}
              className="block"
            >
              <Button className="primary-btn-2">Book now</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentalBooking;
