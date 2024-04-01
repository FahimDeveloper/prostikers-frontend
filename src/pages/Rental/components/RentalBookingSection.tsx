import RentalBooking from "./RentalBooking";
import RentalDetailSection from "./RentalDetailSection";
import RentalSidebar from "./RentalSidebar";

const RentalBookingSection = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-y-5">
      <div className="col-span-2 space-y-5">
        <RentalBooking />
      </div>
      <RentalSidebar />
      <div className="col-span-2">
        <RentalDetailSection />
      </div>
    </div>
  );
};

export default RentalBookingSection;
