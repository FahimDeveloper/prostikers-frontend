import GallerySection from "../../../../common/GallerySection";
import Container from "../../../../components/Container";
import RentalBookingSection from "../../components/RentalBookingSection";
import gallery1 from "../../../../assets/images/facility/hockey/hockey-1.png";
import gallery2 from "../../../../assets/images/facility/hockey/hockey-2.png";
import gallery3 from "../../../../assets/images/facility/hockey/hockey-3.png";
import gallery4 from "../../../../assets/images/facility/hockey/hockey-4.png";
const FacilityHockey = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4];
  return (
    <Container>
      <div className="py-16 mt-16 space-y-7">
        <GallerySection title="Hockey Facility" gallery={gallery} />
        <RentalBookingSection facility="hockey" />
      </div>
    </Container>
  );
};

export default FacilityHockey;
