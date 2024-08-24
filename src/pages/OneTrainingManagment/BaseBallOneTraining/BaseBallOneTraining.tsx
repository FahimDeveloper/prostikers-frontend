import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import gallery1 from "../../../assets/images/gallery/baseball/baseball-gallery-1.webp";
import gallery2 from "../../../assets/images/gallery/baseball/baseball-gallery-2.webp";
import gallery3 from "../../../assets/images/gallery/baseball/baseball-gallery-3.webp";
import gallery4 from "../../../assets/images/gallery/baseball/baseball-gallery-4.webp";
import gallery5 from "../../../assets/images/gallery/baseball/baseball-gallery-5.webp";
import Container from "../../../components/Container";
import GallerySection from "../../../common/GallerySection";

const BaseBallOneTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  return (
    <Container>
      <div className="lg:py-16 py-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection
          title="Baseball One on One Training"
          gallery={gallery}
        />
        <GeneralTrainingBookingSection
          title="Customized Baseball Training"
          description="Unlock your potential on the diamond with our personalized Baseball Training sessions. Work on your pitching, improve your batting average, or sharpen your fielding skills with coaches who understand the intricacies of the game and how to bring out your best."
        />
      </div>
    </Container>
  );
};

export default BaseBallOneTraining;
