import GallerySection from "../../../../common/GallerySection";
import Container from "../../../../components/Container";
import RentalBookingSection from "../../components/RentalBookingSection";
import gallery1 from "../../../../assets/images/facility/baseball/baseball-1.jpg";
import gallery2 from "../../../../assets/images/facility/baseball/baseball-2.jpg";
import gallery3 from "../../../../assets/images/facility/baseball/baseball-3.jpg";
import gallery4 from "../../../../assets/images/facility/baseball/baseball-4.jpg";
import gallery5 from "../../../../assets/images/facility/baseball/baseball-5.jpg";

const FacilityBaseball = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  return (
    <Container>
      <div className="py-16 mt-16 space-y-7">
        <GallerySection title="Baseball Facility" gallery={gallery} />
        <RentalBookingSection facility="baseball cage" />
      </div>
    </Container>
  );
};

export default FacilityBaseball;
