import banner from "../../../assets/images/membership/membership-banner.webp";
import Container from "../../../components/Container";
const MembershipBannerSection = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <div className="flex flex-col justify-center lg:h-96 md:h-72 sm:h-64 h-56">
          <h3 className="font-semibold lg:text-5xl sm:text-4xl text-3xl lg:leading-[58px] sm:leading-10 leading-7 text-white">
            Membership
          </h3>
        </div>
      </Container>
    </div>
  );
};

export default MembershipBannerSection;
