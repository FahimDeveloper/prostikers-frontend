import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import GallerySection from "../../../common/GallerySection";
import gallery1 from "../../../assets/images/gallery/cricket/cricket-gallery-1-min.webp";
import gallery2 from "../../../assets/images/gallery/cricket/cricket-gallery-2-min.webp";
import gallery3 from "../../../assets/images/gallery/cricket/cricket-gallery-3-min.webp";
import gallery4 from "../../../assets/images/gallery/cricket/cricket-gallery-4-min.webp";
import gallery5 from "../../../assets/images/gallery/cricket/cricket-gallery-5-min.webp";
import Container from "../../../components/Container";

const CricketBootcampTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  return (
    <Container>
      <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection title="Cricket Training Bootcamps" gallery={gallery} />
        <GeneralTrainingBookingSection
          title="Cricket Training Bootcamps: Fast-Track Your Mastery"
          description="Experience cricket like never before in our immersive Cricket Training Bootcamps. Engage in intense sessions focusing on all facets of the game, from technical batting drills to advanced bowling techniques, and fielding strategies that create agile, tactically aware players ready for any challenge."
          glofox="https://app.glofox.com/portal/#/branch/6602d2195caae7e89503f729/classes-week-view?filters_classes=667b229cc156bad942055aa7&header=classes"
        />
      </div>
    </Container>
  );
};

export default CricketBootcampTraining;
