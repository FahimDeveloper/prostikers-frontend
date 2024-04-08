import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/cricket-banner.webp";
import BootcampTrainingSection from "../../../common/BootcampTrainingSection";

const CricketBootcampTraining = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Cricket Bootcamp" image={banner} />
      <BootcampTrainingSection
        title="Cricket Training Bootcamps: Fast-Track Your Mastery"
        description="Experience cricket like never before in our immersive Cricket Training Bootcamps. Engage in intense sessions focusing on all facets of the game, from technical batting drills to advanced bowling techniques, and fielding strategies that create agile, tactically aware players ready for any challenge."
      />
    </div>
  );
};

export default CricketBootcampTraining;
