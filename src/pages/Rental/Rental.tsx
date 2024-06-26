import GallerySection from "../../common/GallerySection";
import Container from "../../components/Container";
import RentalBookingSection from "./components/RentalBookingSection";
import gallery1 from "../../assets/images/booking/facility-gallery-1.webp";
import gallery2 from "../../assets/images/booking/facility-gallery-2.webp";
import gallery3 from "../../assets/images/booking/facility-gallery-3.webp";
import gallery4 from "../../assets/images/booking/facility-gallery-4.webp";
import gallery5 from "../../assets/images/booking/facility-gallery-5.webp";
import gallery6 from "../../assets/images/booking/facility-gallery-6.webp";

const Rental = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
  return (
    <Container>
      <div className="py-16 mt-16 space-y-7">
        <GallerySection title="Rental Facility" gallery={gallery} />
        <RentalBookingSection />
      </div>
    </Container>
  );
};

export default Rental;
