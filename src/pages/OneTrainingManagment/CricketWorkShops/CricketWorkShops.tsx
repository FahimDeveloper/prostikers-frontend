import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/cricket-workshop-banner.jpg";
import OneTrainingSection from "../../../common/OneTrainingSection";

const CricketWorkShops = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Cricket One on One Workshop" image={banner} />
      <OneTrainingSection
        title="Intensive Cricket Workshops"
        description="Deep dive into the nuances of cricket with ProStrikers' exclusive Workshops. Perfect for players seeking to focus intensively on specific aspects of their game, these sessions are led by experts passionate about developing your abilities in a one-on-one setting."
      />
    </div>
  );
};

export default CricketWorkShops;
