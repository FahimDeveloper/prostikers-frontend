import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import Container from "../../../components/Container";
import gallery1 from "../../../assets/images/booking/facility-gallery-1.webp";
import gallery2 from "../../../assets/images/booking/facility-gallery-2.webp";
import gallery3 from "../../../assets/images/booking/facility-gallery-3.webp";
import gallery4 from "../../../assets/images/booking/facility-gallery-4.webp";
import gallery5 from "../../../assets/images/booking/facility-gallery-5.webp";
import gallery6 from "../../../assets/images/booking/facility-gallery-6.webp";
import GallerySection from "../../../common/GallerySection";

const BaseBallGroupTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
  return (
    <Container>
      <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection title="Baseball Group Training" gallery={gallery} />
        <GeneralTrainingBookingSection
          title="Team-Oriented Baseball Training"
          description="Experience the camaraderie of our Group Baseball Training. Perfect your pitches, swings, and slides with collective exercises and team-building challenges. Our training encourages mutual growth and shared passion for every inning."
        />
      </div>
    </Container>
  );
};

export default BaseBallGroupTraining;
