import { Radio, Select } from "antd";
import { useEffect, useState } from "react";
import DateSlider from "../../../components/DateSlider";
import { useRentalFacilityQuery } from "../../../redux/features/facility/facilityApi";
import {
  useAddToCartSlotMutation,
  useFacilityBookedSlotsQuery,
  useGetBookingSlotsQuery,
} from "../../../redux/features/slotBooking/slotBookingApi";
import { useBlocker, useNavigate } from "react-router-dom";
import { ImSpinner } from "react-icons/im";
import FacilityBookingTimeSlots from "../../../components/FacilityBookingTimeSlots";
import RouteBlocker from "../../../utils/RouteBlocker";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import RentalBookingReviewPart from "./RentalBookingReviewPart";
import { useAppSelector } from "../../../hooks/useAppHooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import FacilityPaymentModal from "../../../components/ui/modal/FacilityPaymentModal";
const RentalBooking = ({
  facilityCage,
  setFacilityCage,
}: {
  facilityCage: string | undefined;
  setFacilityCage: any;
}) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const [activeDate, setActiveDate] = useState(
    dayjs().tz("America/Los_Angeles")
  );
  const [selectSlots, setSelectSlots] = useState<any[]>([]);
  const navigate = useNavigate();
  const [block, setBlock] = useState(false);
  const [proceed, setProceed] = useState(false);
  const blocker = useBlocker(block);
  const createCartBooking = useAddToCartSlotMutation();
  const { data: facility, isFetching } = useRentalFacilityQuery(
    { facility: facilityCage },
    { skip: facilityCage ? false : true }
  );
  const [lane, setLane] = useState<string | undefined>(undefined);

  const slotsBookedQuery = useFacilityBookedSlotsQuery(
    {
      training: facility?.results._id,
      date: activeDate.toISOString().split("T")[0],
      lane: lane,
    },
    { skip: facility?.results?._id && lane !== undefined ? false : true }
  );
  const slotsCartQuery = useGetBookingSlotsQuery(
    {
      date: activeDate.toISOString().split("T")[0],
      lane: lane,
    },
    { skip: facility?.results?._id && lane !== undefined ? false : true }
  );
  const [addons, setAddons] = useState([]);
  const user = useAppSelector(selectCurrentUser);
  const [totalPrice, setTotalPrice] = useState(0);
  const [voucherApplied, setVoucherApplied] = useState(false);
  const [bookings, setBookings] = useState<Array<any>>([]);
  const [finalData, setFinalData] = useState<any>({});

  const onChange = (value: string) => {
    setFacilityCage(value);
  };

  useEffect(() => {
    if (facility?.results?._id) {
      setLane(facility?.results?.lanes[0]);
    }
  }, [facility]);

  useEffect(() => {
    if (selectSlots.length < 1) {
      setAddons([]);
    }
    if (selectSlots.length > 0) {
      const slotsData: any = [];
      selectSlots?.forEach((dateSlots: any) =>
        dateSlots.slots.forEach((slot: string) => {
          const date = new Date(dateSlots.date);
          slotsData.push({
            date: date.toISOString().split("T")[0],
            time_slot: slot,
            lane: dateSlots.lane,
            training: facility?.results?._id,
          });
        })
      );
      setBookings(slotsData);
    }
  }, [selectSlots]);

  const addonsPrice = addons?.reduce((total: number, addon: any) => {
    if (addon?.type === "hourly") {
      const iniPrice = addon?.ini_price;
      const basePrice = addon?.price;
      if (addon?.hours < 2) {
        return total + addon?.hours * iniPrice;
      } else {
        return total + addon?.hours * basePrice;
      }
    } else {
      const iniPrice = addon?.ini_price;
      const basePrice = addon?.price;
      if (addon?.hours < 1) {
        return total + iniPrice;
      } else {
        return total + addon?.hours * basePrice;
      }
    }
  }, 0);

  let slotsPrice: number;
  if (bookings.length > 1) {
    slotsPrice = bookings.length * facility?.results?.price;
  } else {
    slotsPrice = bookings.length * facility?.results?.ini_price;
  }

  useEffect(() => {
    setTotalPrice(slotsPrice + addonsPrice);
  }, [slotsPrice, addonsPrice]);

  useEffect(() => {
    if (proceed) {
      navigate("/dashboard/my-rental-facilities");
    }
  }, [proceed]);

  const onFinish = () => {
    const data = {
      user: user?._id,
      email: user?.email,
      bookings,
      facility: facility?.results?._id,
      addons,
      voucher_applied: voucherApplied,
      sport: facility?.results?.sport,
    };
    setFinalData(data);
  };

  const onProceed = () => {
    setProceed(true);
  };

  return (
    <>
      <div className="bg-[#F9FAFB] sm:py-10 rounded-2xl space-y-6 sm:px-5 py-7 px-3">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[#07133D]">
            Select Facility Type
          </h3>
          <Select
            onChange={onChange}
            disabled={selectSlots.length > 0 ? true : false}
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
                {activeDate.format("MMMM")}
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
          <>
            <RentalBookingReviewPart
              addons={addons}
              setAddons={setAddons}
              facility={facility}
              bookings={bookings}
              setSelectSlots={setSelectSlots}
              selectSlots={selectSlots}
              setTotalPrice={setTotalPrice}
              totalPrice={totalPrice}
              setVoucherApplied={setVoucherApplied}
            />
            <FacilityPaymentModal
              bookings={finalData}
              amount={totalPrice}
              onFinish={onFinish}
              setBlock={setBlock}
              onProceed={onProceed}
            />
          </>
        )}
        <RouteBlocker block={block} blocker={blocker} />
      </div>
    </>
  );
};

export default RentalBooking;
