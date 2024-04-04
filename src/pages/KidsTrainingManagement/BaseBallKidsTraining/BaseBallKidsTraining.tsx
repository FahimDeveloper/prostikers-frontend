import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/baseball-banner.jpg";
import KidsRentalSection from "../../../common/KidsRentalSection";

const BaseBallKidsTraining = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Kids Baseball Training" image={banner} />
      <KidsRentalSection
        title="Mini Sluggers: Kids Baseball Training"
        description="ProStrikers' Kids Baseball Training program turns your little ones into budding baseball stars. Our experienced coaches teach throwing, catching, batting, and base-running in a fun-filled environment that ensures learning and excitement go hand-in-hand. It's not just about hits and home runs; it's about building character and teamwork skills too!"
      />
    </div>
  );
};

export default BaseBallKidsTraining;
