import GallerySection from "../../../common/GallerySection";
import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import gallery1 from "../../../assets/images/gallery/soccer/soccer-gallery-1.webp";
import gallery2 from "../../../assets/images/gallery/soccer/soccer-gallery-2.webp";
import gallery3 from "../../../assets/images/gallery/soccer/soccer-gallery-3.webp";
import gallery4 from "../../../assets/images/gallery/soccer/soccer-gallery-4.webp";
import gallery5 from "../../../assets/images/gallery/soccer/soccer-gallery-5.webp";
import Container from "../../../components/Container";

const SoccerBootcampTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  return (
    <Container>
      <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection title="Soccer Training Bootcamps" gallery={gallery} />
        <GeneralTrainingBookingSection
          title="Soccer Training Bootcamps: Elevate Your Game"
          description="Transform your soccer skills at ProStrikers’ Soccer Training Bootcamps. Concentrated sessions will enhance your footwork, control, and strategy, all while fostering the physical and mental toughness needed to succeed on the pitch. Join and become a part of soccer excellence."
          glofox="https://app.glofox.com/portal/#/branch/6602d2195caae7e89503f729/classes-week-view?filters_classes=667b23f544d83233cd087731&header=classes"
        />
      </div>
    </Container>
  );
};

export default SoccerBootcampTraining;
