import GallerySection from "../../../common/GallerySection";
import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import gallery1 from "../../../assets/images/gallery/baseball/baseball-gallery-1.webp";
import gallery2 from "../../../assets/images/gallery/baseball/baseball-gallery-2.webp";
import gallery3 from "../../../assets/images/gallery/baseball/baseball-gallery-3.webp";
import gallery4 from "../../../assets/images/gallery/baseball/baseball-gallery-4.webp";
import gallery5 from "../../../assets/images/gallery/baseball/baseball-gallery-5.webp";
import Container from "../../../components/Container";

const BaseBallBootcampTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  return (
    <Container>
      <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection title="Baseball Training Bootcamps" gallery={gallery} />
        <GeneralTrainingBookingSection
          title="Baseball Training Bootcamps: Perfect Your Play"
          description="Step into the batter's box with confidence after attending ProStrikers' Baseball Training Bootcamps. Our comprehensive program includes high-velocity pitching clinics, strategic hitting workshops, and defensive play simulations designed to refine your instincts and elevate your game."
          glofox="https://app.glofox.com/portal/#/branch/6602d2195caae7e89503f729/classes-week-view?filters_classes=667b22ecd25ab721ea0ea7b6&header=classes"
        />
      </div>
    </Container>
  );
};

export default BaseBallBootcampTraining;
