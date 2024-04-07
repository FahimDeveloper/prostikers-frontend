import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/cricket-banner.jpg";
import GroupTrainingSection from "../../../common/GroupTrainingSection";

const CricketGroupTraining = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Cricket Group Training Programs" image={banner} />
      <GroupTrainingSection
        title="Dynamic Group Cricket Training Sessions"
        description="Experience the camaraderie and competition with ProStrikers' Group Cricket Training. Designed to mimic real-match scenarios, our group sessions enhance team dynamics, communication, and strategic play. Perfect for players looking to excel in collaborative environments while pushing each other towards collective excellence."
      />
    </div>
  );
};

export default CricketGroupTraining;
