import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/hocky-banner.jpg";
import OneTrainingSection from "../../../common/OneTrainingSection";

const HockyOneTraining = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Hokey One on One Training" image={banner} />
      <OneTrainingSection
        title="Specialized Hockey Skill Development"
        description="Master the art of field hockey with our specialized one-on-one coaching. ProStrikers offers personalized guidance to refine your stick work, tactical play, and game sense, ensuring you dominate the field with skill and strategy."
      />
    </div>
  );
};

export default HockyOneTraining;
