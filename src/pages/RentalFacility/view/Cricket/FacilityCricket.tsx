import GallerySection from "../../../../common/GallerySection";
import Container from "../../../../components/Container";
import RentalBookingSection from "../../components/RentalBookingSection";
import gallery1 from "../../../../assets/images/facility/cricket/cricket-1.png";
import gallery2 from "../../../../assets/images/facility/cricket/cricket-2.jpg";
import gallery3 from "../../../../assets/images/facility/cricket/cricket-3.jpg";
import gallery4 from "../../../../assets/images/facility/cricket/cricket-4.jpg";
const FacilityCricket = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4];
  return (
    <Container>
      <div className="py-16 mt-16 space-y-7">
        <GallerySection title="Cricket Facility" gallery={gallery} />
        <RentalBookingSection facility="cricket cage" />
      </div>
    </Container>
  );
};

export default FacilityCricket;
