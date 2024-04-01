import Container from "../../../components/Container";
import banner from "../../../assets/images/about/about-cover.webp";

const AboutProstrikersSection = () => {
  return (
    <div className="lg:py-16 md:py-12 py-10">
      <div
        className="lg:h-[450px] md:h-[400px]"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      ></div>
      <Container>
        <div className="pt-10 space-y-5">
          <h2 className="text-center lg:text-[64px] md:text-5xl text-3xl font-semibold lg:leading-[74px] md:leading-[50px] leading-9">
            <span className="block text-[#787878]">About ProStrikers: </span>
            Your Gateway to Sporting Greatness
          </h2>
          <p className="text-[#07133D] md:text-lg md:leading-7 leading-6 text-center">
            At ProStrikers, we’re not just a sports facility; we're a thriving
            community where champions are born and bred. Located in the heart of
            Sacramento, we’ve created a haven for athletes across various
            disciplines – Baseball, Softball, Cricket, Soccer, and Hockey.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutProstrikersSection;
