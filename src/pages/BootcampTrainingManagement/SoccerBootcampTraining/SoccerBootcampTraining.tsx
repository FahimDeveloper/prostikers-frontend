import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/soccer-banner.webp";
import BootcampTrainingSection from "../../../common/BootcampTrainingSection";

const SoccerBootcampTraining = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Soccer Bootcamp" image={banner} />
      <BootcampTrainingSection
        title="Soccer Training Bootcamps: Elevate Your Game"
        description="Transform your soccer skills at ProStrikers’ Soccer Training Bootcamps. Concentrated sessions will enhance your footwork, control, and strategy, all while fostering the physical and mental toughness needed to succeed on the pitch. Join and become a part of soccer excellence."
      />
    </div>
  );
};

export default SoccerBootcampTraining;
