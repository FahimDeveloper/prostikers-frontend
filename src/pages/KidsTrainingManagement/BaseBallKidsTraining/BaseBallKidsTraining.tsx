import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import gallery1 from "../../../assets/images/gallery/baseball/baseball-gallery-1.webp";
import gallery2 from "../../../assets/images/gallery/baseball/baseball-gallery-2.webp";
import gallery3 from "../../../assets/images/gallery/baseball/baseball-gallery-3.webp";
import gallery4 from "../../../assets/images/gallery/baseball/baseball-gallery-4.webp";
import gallery5 from "../../../assets/images/gallery/baseball/baseball-gallery-5.webp";
import GallerySection from "../../../common/GallerySection";
import Container from "../../../components/Container";

const BaseBallKidsTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  return (
    <Container>
      <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection title="Kids Baseball Training" gallery={gallery} />
        <GeneralTrainingBookingSection
          title="Mini Sluggers: Kids Baseball Training"
          description="ProStrikers' Kids Baseball Training program turns your little ones into budding baseball stars. Our experienced coaches teach throwing, catching, batting, and base-running in a fun-filled environment that ensures learning and excitement go hand-in-hand. It's not just about hits and home runs; it's about building character and teamwork skills too!"
        />
      </div>
    </Container>
  );
};

export default BaseBallKidsTraining;
