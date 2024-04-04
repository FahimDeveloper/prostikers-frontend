import BannerSection from "../../../common/BannerSection";
import GeneralRentalSection from "../../../common/GeneralRentalSection";
import banner from "../../../assets/images/programsBanner/hocky-banner.jpg";

const HockyOneTraining = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Hokey One on One Training" image={banner} />
      <GeneralRentalSection
        title="Specialized Hockey Skill Development"
        description="Master the art of field hockey with our specialized one-on-one coaching. ProStrikers offers personalized guidance to refine your stick work, tactical play, and game sense, ensuring you dominate the field with skill and strategy."
      />
    </div>
  );
};

export default HockyOneTraining;
