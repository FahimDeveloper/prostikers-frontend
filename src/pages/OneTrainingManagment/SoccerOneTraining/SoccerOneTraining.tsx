import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/soccer-banner.jpg";
import OneTrainingSection from "../../../common/OneTrainingSection";

const SoccerOneTraining = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Soccer One on One Training" image={banner} />
      <OneTrainingSection
        title="Tailored Soccer Training Sessions"
        description="Take your place on the pitch with confidence after our One on One Soccer Training. From dribbling past defenders to striking the ball with precision, our bespoke training is your path to excelling in every position on the field."
      />
    </div>
  );
};

export default SoccerOneTraining;
