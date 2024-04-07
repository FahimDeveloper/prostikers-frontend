import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/soccer-banner.jpg";
import GroupTrainingSection from "../../../common/GroupTrainingSection";

const SoccerGroupTraining = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Soccer Group Training Programs" image={banner} />
      <GroupTrainingSection
        title="Soccer Dynamic Group Soccer Training"
        description="Take to the pitch with ProStrikers' Group Soccer Training. Develop your soccer skills in a team setting, where cooperative play and group strategies lay the groundwork for on-field success and sportsmanship."
      />
    </div>
  );
};

export default SoccerGroupTraining;
