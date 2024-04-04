import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/cricket-banner.jpg";
import GeneralRentalSection from "../../../common/GeneralRentalSection";

const CricketOneTraining = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Cricket One on One Training" image={banner} />
      <GeneralRentalSection
        title="Personalized Cricket Coaching"
        description="Elevate your cricket game with individualized attention from seasoned professionals. Our One on One Cricket Training targets your specific needs - whether it's mastering the sweep shot or perfecting your seam bowling. Each session is a step towards becoming the cricketer you aspire to be."
      />
    </div>
  );
};

export default CricketOneTraining;
