import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import gallery1 from "../../../assets/images/gallery/soccer/soccer-gallery-1.webp";
import gallery2 from "../../../assets/images/gallery/soccer/soccer-gallery-2.webp";
import gallery3 from "../../../assets/images/gallery/soccer/soccer-gallery-3.webp";
import gallery4 from "../../../assets/images/gallery/soccer/soccer-gallery-4.webp";
import gallery5 from "../../../assets/images/gallery/soccer/soccer-gallery-5.webp";
import Container from "../../../components/Container";
import GallerySection from "../../../common/GallerySection";

const SoccerOneTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  return (
    <Container>
      <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection title="Soccer One on One Training" gallery={gallery} />
        <GeneralTrainingBookingSection
          title="Tailored Soccer Training Sessions"
          description="Take your place on the pitch with confidence after our One on One Soccer Training. From dribbling past defenders to striking the ball with precision, our bespoke training is your path to excelling in every position on the field."
        />
      </div>
    </Container>
  );
};

export default SoccerOneTraining;
