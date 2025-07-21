import BookingSidebar from "../../../components/BookingSidebar/BookingSidebar";
import RentalBooking from "./RentalBooking";
import RentalDetailSection from "./RentalDetailSection";

const RentalBookingSection = ({ facility }: { facility: string }) => {
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-y-5">
        <div className="col-span-2 space-y-5">
          <RentalBooking facilityCage={facility} />
        </div>
        <BookingSidebar />
      </div>
      <div className="col-span-2">
        <RentalDetailSection facilityCage={facility} />
      </div>
    </>
  );
};

export default RentalBookingSection;
