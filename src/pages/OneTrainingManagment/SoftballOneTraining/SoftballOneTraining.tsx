import BannerSection from "../../../common/BannerSection";
import GeneralRentalSection from "../../../common/GeneralRentalSection";
import banner from "../../../assets/images/programsBanner/softball-banner.jpg";

const SoftballOneTraining = () => {
  return (
    <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto">
      <BannerSection title="Softball One on One Training" image={banner} />
      <GeneralRentalSection
        title="Customized Softball Training"
        description="Unlock your potential on the diamond with our personalized Softball Training sessions. Work on your pitching, improve your batting average, or sharpen your fielding skills with coaches who understand the intricacies of the game and how to bring out your best."
      />
    </div>
  );
};

export default SoftballOneTraining;