import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/cricket-banner.jpg";
import KidsRentalSection from "../../../common/KidsRentalSection";

const CricketKidsTraining = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Kids Cricket Training" image={banner} />
      <KidsRentalSection
        title="Little Wicket Warriors: Kids Cricket Training"
        description="Jumpstart your child's cricket journey with ProStrikers’ Kids Cricket Training. Our junior program introduces the basics of batting, bowling, and fielding through enjoyable and interactive drills. Watch your child develop hand-eye coordination, team play, and a passion for cricket with every session."
      />
    </div>
  );
};

export default CricketKidsTraining;
