import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/soccer-banner.jpg";
import KidsTrainingSection from "../../../common/KidsTrainingSection";

const SoccerKidsTraining = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Kids Soccer Training" image={banner} />
      <KidsTrainingSection
        title="Future Goal Scorers: Kids Soccer Training"
        description="Let your child bend it like the pros with ProStrikers' Kids Soccer Training. Our program is crafted to spark a love for soccer while teaching the essentials of dribbling, passing, and scoring goals. We emphasize fun, fitness, and fair play, ensuring every child feels like a part of our soccer family."
      />
    </div>
  );
};

export default SoccerKidsTraining;
