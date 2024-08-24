import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import gallery1 from "../../../assets/images/gallery/softball/softball-gallery-1-min.webp";
import gallery2 from "../../../assets/images/gallery/softball/softball-gallery-2-min.webp";
import gallery3 from "../../../assets/images/gallery/softball/softball-gallery-3-min.webp";
import gallery4 from "../../../assets/images/gallery/softball/softball-gallery-4-min.webp";
import gallery5 from "../../../assets/images/gallery/softball/softball-gallery-5-min.webp";
import GallerySection from "../../../common/GallerySection";
import Container from "../../../components/Container";

const SoftballKidsTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  return (
    <Container>
      <div className="lg:py-16 py-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection title="Kids Softball Training" gallery={gallery} />
        <GeneralTrainingBookingSection
          title="Customized Softball Training"
          description="Unlock your potential on the diamond with our personalized Softball Training sessions. Work on your pitching, improve your batting average, or sharpen your fielding skills with coaches who understand the intricacies of the game and how to bring out your best."
        />
      </div>
    </Container>
  );
};

export default SoftballKidsTraining;
