import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/baseball-banner.webp";
import GroupTrainingSection from "../../../common/GroupTrainingSection";

const BaseBallGroupTraining = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Baseball Group Training Programs" image={banner} />
      <GroupTrainingSection
        title="Team-Oriented Baseball Training"
        description="Experience the camaraderie of our Group Baseball Training. Perfect your pitches, swings, and slides with collective exercises and team-building challenges. Our training encourages mutual growth and shared passion for every inning."
      />
    </div>
  );
};

export default BaseBallGroupTraining;
