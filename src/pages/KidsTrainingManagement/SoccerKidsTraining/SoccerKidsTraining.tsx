import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import gallery1 from "../../../assets/images/booking/facility-gallery-1.webp";
import gallery2 from "../../../assets/images/booking/facility-gallery-2.webp";
import gallery3 from "../../../assets/images/booking/facility-gallery-3.webp";
import gallery4 from "../../../assets/images/booking/facility-gallery-4.webp";
import gallery5 from "../../../assets/images/booking/facility-gallery-5.webp";
import gallery6 from "../../../assets/images/booking/facility-gallery-6.webp";
import GallerySection from "../../../common/GallerySection";
import Container from "../../../components/Container";

const SoccerKidsTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
  return (
    <Container>
      <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection title="Kids Soccer Training" gallery={gallery} />
        <GeneralTrainingBookingSection
          title="Future Goal Scorers: Kids Soccer Training"
          description="Let your child bend it like the pros with ProStrikers' Kids Soccer Training. Our program is crafted to spark a love for soccer while teaching the essentials of dribbling, passing, and scoring goals. We emphasize fun, fitness, and fair play, ensuring every child feels like a part of our soccer family."
        />
      </div>
    </Container>
  );
};

export default SoccerKidsTraining;
