import GallerySection from "../../../../common/GallerySection";
import Container from "../../../../components/Container";
import RentalBookingSection from "../../components/RentalBookingSection";
import gallery1 from "../../../../assets/images/facility/softball/softball-1.jpg";
import gallery2 from "../../../../assets/images/facility/softball/softball-2.jpg";
import gallery3 from "../../../../assets/images/facility/softball/softball-3.jpg";
import gallery4 from "../../../../assets/images/facility/softball/softball-4.jpg";
const FacilitySoftball = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4];
  return (
    <Container>
      <div className="py-16 mt-16 space-y-7">
        <GallerySection title="Softball Facility" gallery={gallery} />
        <RentalBookingSection facility="softball cage" />
      </div>
    </Container>
  );
};

export default FacilitySoftball;
