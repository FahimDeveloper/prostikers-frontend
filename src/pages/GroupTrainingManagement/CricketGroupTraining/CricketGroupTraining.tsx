import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import gallery1 from "../../../assets/images/booking/facility-gallery-1.webp";
import gallery2 from "../../../assets/images/booking/facility-gallery-2.webp";
import gallery3 from "../../../assets/images/booking/facility-gallery-3.webp";
import gallery4 from "../../../assets/images/booking/facility-gallery-4.webp";
import gallery5 from "../../../assets/images/booking/facility-gallery-5.webp";
import gallery6 from "../../../assets/images/booking/facility-gallery-6.webp";
import Container from "../../../components/Container";
import GallerySection from "../../../common/GallerySection";

const CricketGroupTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
  return (
    <Container>
      <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection title="Group Cricket Training" gallery={gallery} />
        <GeneralTrainingBookingSection
          title="Dynamic Group Cricket Training Sessions"
          description="Experience the camaraderie and competition with ProStrikers' Group Cricket Training. Designed to mimic real-match scenarios, our group sessions enhance team dynamics, communication, and strategic play. Perfect for players looking to excel in collaborative environments while pushing each other towards collective excellence."
        />
      </div>
    </Container>
  );
};

export default CricketGroupTraining;
