import { useState } from "react";
import BookingSidebar from "../../../components/BookingSidebar/BookingSidebar";
import RentalBooking from "./RentalBooking";
import RentalDetailSection from "./RentalDetailSection";

const RentalBookingSection = () => {
  const [facilityCage, setFacilityCage] = useState<string | undefined>(
    undefined
  );
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-y-5">
      <div className="col-span-2 space-y-5">
        <RentalBooking
          facilityCage={facilityCage}
          setFacilityCage={setFacilityCage}
        />
      </div>
      <BookingSidebar />
      <div className="col-span-2">
        <RentalDetailSection facilityCage={facilityCage} />
      </div>
    </div>
  );
};

export default RentalBookingSection;
