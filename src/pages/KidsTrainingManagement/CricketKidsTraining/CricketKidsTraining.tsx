import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import gallery1 from "../../../assets/images/gallery/cricket/cricket-gallery-1-min.webp";
import gallery2 from "../../../assets/images/gallery/cricket/cricket-gallery-2-min.webp";
import gallery3 from "../../../assets/images/gallery/cricket/cricket-gallery-3-min.webp";
import gallery4 from "../../../assets/images/gallery/cricket/cricket-gallery-4-min.webp";
import gallery5 from "../../../assets/images/gallery/cricket/cricket-gallery-5-min.webp";
import GallerySection from "../../../common/GallerySection";
import Container from "../../../components/Container";

const CricketKidsTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  return (
    <Container>
      <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection title="Kids Cricket Training" gallery={gallery} />
        <GeneralTrainingBookingSection
          title="Little Wicket Warriors: Kids Cricket Training"
          description="Jumpstart your child's cricket journey with ProStrikers’ Kids Cricket Training. Our junior program introduces the basics of batting, bowling, and fielding through enjoyable and interactive drills. Watch your child develop hand-eye coordination, team play, and a passion for cricket with every session."
        />
      </div>
    </Container>
  );
};

export default CricketKidsTraining;
