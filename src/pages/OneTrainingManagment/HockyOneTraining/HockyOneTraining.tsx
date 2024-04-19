import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import gallery1 from "../../../assets/images/gallery/hockey/hockey-gallery-1-min.webp";
import gallery2 from "../../../assets/images/gallery/hockey/hockey-gallery-2-min.webp";
import gallery3 from "../../../assets/images/gallery/hockey/hockey-gallery-3-min.webp";
import gallery4 from "../../../assets/images/gallery/hockey/hockey-gallery-4-min.webp";
import gallery5 from "../../../assets/images/gallery/hockey/hockey-gallery-5-min.webp";
import Container from "../../../components/Container";
import GallerySection from "../../../common/GallerySection";

const HockyOneTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  return (
    <Container>
      <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection
          title="Field Hokey One on One Training"
          gallery={gallery}
        />
        <GeneralTrainingBookingSection
          title="Specialized Hockey Skill Development"
          description="Master the art of field hockey with our specialized one-on-one coaching. ProStrikers offers personalized guidance to refine your stick work, tactical play, and game sense, ensuring you dominate the field with skill and strategy."
        />
      </div>
    </Container>
  );
};

export default HockyOneTraining;
