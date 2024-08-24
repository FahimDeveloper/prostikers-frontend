import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import gallery1 from "../../../assets/images/gallery/cricket/cricket-gallery-1-min.webp";
import gallery2 from "../../../assets/images/gallery/cricket/cricket-gallery-2-min.webp";
import gallery3 from "../../../assets/images/gallery/cricket/cricket-gallery-3-min.webp";
import gallery4 from "../../../assets/images/gallery/cricket/cricket-gallery-4-min.webp";
import gallery5 from "../../../assets/images/gallery/cricket/cricket-gallery-5-min.webp";
import Container from "../../../components/Container";
import GallerySection from "../../../common/GallerySection";

const CricketWorkShops = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  return (
    <Container>
      <div className="lg:py-16 py-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection title="Cricket One on One Workshop" gallery={gallery} />
        <GeneralTrainingBookingSection
          title="Intensive Cricket Workshops"
          description="Deep dive into the nuances of cricket with ProStrikers' exclusive Workshops. Perfect for players seeking to focus intensively on specific aspects of their game, these sessions are led by experts passionate about developing your abilities in a one-on-one setting."
        />
      </div>
    </Container>
  );
};

export default CricketWorkShops;
