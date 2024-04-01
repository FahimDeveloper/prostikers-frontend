import Container from "../../components/Container";
import RentalBookingSection from "./components/RentalBookingSection";
import RentalFacilitySection from "./components/RentalFacilitySection";

const Rental = () => {
  return (
    <Container>
      <div className="py-16 mt-16 space-y-7">
        <RentalFacilitySection />
        <RentalBookingSection />
      </div>
    </Container>
  );
};

export default Rental;
