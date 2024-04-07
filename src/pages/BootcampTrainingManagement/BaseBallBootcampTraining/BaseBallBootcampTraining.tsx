import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/baseball-banner.jpg";
import BootcampTrainingSection from "../../../common/BootcampTrainingSection";

const BaseBallBootcampTraining = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Baseball Bootcamp" image={banner} />
      <BootcampTrainingSection
        title="Baseball Training Bootcamps: Perfect Your Play"
        description="Step into the batter's box with confidence after attending ProStrikers' Baseball Training Bootcamps. Our comprehensive program includes high-velocity pitching clinics, strategic hitting workshops, and defensive play simulations designed to refine your instincts and elevate your game."
      />
    </div>
  );
};

export default BaseBallBootcampTraining;
