import banner from "../../../../assets/images/about/about-cover.webp";

const FranchiseBannerSection = () => {
  return (
    <div
      className="lg:h-[450px] md:h-[400px] h-[260px]"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    ></div>
  );
};

export default FranchiseBannerSection;
