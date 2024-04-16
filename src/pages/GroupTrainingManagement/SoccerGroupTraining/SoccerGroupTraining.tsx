import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import gallery1 from "../../../assets/images/booking/facility-gallery-1.webp";
import gallery2 from "../../../assets/images/booking/facility-gallery-2.webp";
import gallery3 from "../../../assets/images/booking/facility-gallery-3.webp";
import gallery4 from "../../../assets/images/booking/facility-gallery-4.webp";
import gallery5 from "../../../assets/images/booking/facility-gallery-5.webp";
import gallery6 from "../../../assets/images/booking/facility-gallery-6.webp";
import Container from "../../../components/Container";
import GallerySection from "../../../common/GallerySection";

const SoccerGroupTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
  return (
    <Container>
      <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection title="Soccer Group Training" gallery={gallery} />
        <GeneralTrainingBookingSection
          title="Soccer Dynamic Group Soccer Training"
          description="Take to the pitch with ProStrikers' Group Soccer Training. Develop your soccer skills in a team setting, where cooperative play and group strategies lay the groundwork for on-field success and sportsmanship."
        />
      </div>
    </Container>
  );
};

export default SoccerGroupTraining;
