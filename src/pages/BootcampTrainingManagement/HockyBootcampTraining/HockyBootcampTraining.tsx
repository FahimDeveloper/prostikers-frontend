import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import GallerySection from "../../../common/GallerySection";
import gallery1 from "../../../assets/images/booking/facility-gallery-1.webp";
import gallery2 from "../../../assets/images/booking/facility-gallery-2.webp";
import gallery3 from "../../../assets/images/booking/facility-gallery-3.webp";
import gallery4 from "../../../assets/images/booking/facility-gallery-4.webp";
import gallery5 from "../../../assets/images/booking/facility-gallery-5.webp";
import gallery6 from "../../../assets/images/booking/facility-gallery-6.webp";
import Container from "../../../components/Container";

const HockyBootcampTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
  return (
    <Container>
      <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection title="Hockey Training Bootcamps" gallery={gallery} />
        <GeneralTrainingBookingSection
          title="Specialized Hockey Skill Development"
          description="Master the art of field hockey with our specialized one-on-one coaching. ProStrikers offers personalized guidance to refine your stick work, tactical play, and game sense, ensuring you dominate the field with skill and strategy."
        />
      </div>
    </Container>
  );
};

export default HockyBootcampTraining;
