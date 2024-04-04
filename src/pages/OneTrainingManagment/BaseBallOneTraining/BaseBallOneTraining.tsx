import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/baseball-banner.jpg";
import GeneralRentalSection from "../../../common/GeneralRentalSection";

const BaseBallOneTraining = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Baseball One on One Training" image={banner} />
      <GeneralRentalSection
        title="Customized Baseball Training"
        description="Unlock your potential on the diamond with our personalized Baseball Training sessions. Work on your pitching, improve your batting average, or sharpen your fielding skills with coaches who understand the intricacies of the game and how to bring out your best."
      />
    </div>
  );
};

export default BaseBallOneTraining;
