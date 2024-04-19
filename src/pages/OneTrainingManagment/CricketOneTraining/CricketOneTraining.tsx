import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import gallery1 from "../../../assets/images/gallery/cricket/cricket-gallery-1-min.webp";
import gallery2 from "../../../assets/images/gallery/cricket/cricket-gallery-2-min.webp";
import gallery3 from "../../../assets/images/gallery/cricket/cricket-gallery-3-min.webp";
import gallery4 from "../../../assets/images/gallery/cricket/cricket-gallery-4-min.webp";
import gallery5 from "../../../assets/images/gallery/cricket/cricket-gallery-5-min.webp";
import Container from "../../../components/Container";
import GallerySection from "../../../common/GallerySection";

const CricketOneTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  return (
    <Container>
      <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection title="Cricket One on One Training" gallery={gallery} />
        <GeneralTrainingBookingSection
          title="Personalized Cricket Coaching"
          description="Elevate your cricket game with individualized attention from seasoned professionals. Our One on One Cricket Training targets your specific needs - whether it's mastering the sweep shot or perfecting your seam bowling. Each session is a step towards becoming the cricketer you aspire to be."
        />
      </div>
    </Container>
  );
};

export default CricketOneTraining;
