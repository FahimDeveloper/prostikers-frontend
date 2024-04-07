import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/hocky-banner.jpg";
import GroupTrainingSection from "../../../common/GroupTrainingSection";

const HockyGroupTraining = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Hokey Group Training Programs" image={banner} />
      <GroupTrainingSection
        title="Engaging Group Hockey Training"
        description="Get ready for competitive play with our Group Hockey Training. Focused on strategic team plays and skill enhancement, our sessions help players make swift decisions and coordinate effectively on the field."
      />
    </div>
  );
};

export default HockyGroupTraining;
