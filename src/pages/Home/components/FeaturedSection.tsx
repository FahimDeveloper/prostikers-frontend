import Marquee from "react-fast-marquee";
import slider1 from "../../../assets/images/featured/featured-logo.webp";
import slider2 from "../../../assets/images/featured/featured-logo-2.png";
import slider3 from "../../../assets/images/featured/featured-logo-3.jpg";
import slider4 from "../../../assets/images/featured/featured-logo-4.jpg";
import slider5 from "../../../assets/images/featured/featured-logo-15.png";
import slider6 from "../../../assets/images/featured/featured-logo-6.jpg";
import slider7 from "../../../assets/images/featured/featured-logo-7.jpg";
import slider8 from "../../../assets/images/featured/featured-logo-8.png";
import slider9 from "../../../assets/images/featured/featured-logo-9.jpg";
import slider10 from "../../../assets/images/featured/featured-logo-10.jpg";
import slider11 from "../../../assets/images/featured/featured-logo-11.png";
import slider12 from "../../../assets/images/featured/featured-logo-12.jpg";
import slider13 from "../../../assets/images/featured/featured-logo-13.png";
import slider14 from "../../../assets/images/featured/featured-logo-14.jpg";
import slider15 from "../../../assets/images/featured/featured-logo-15.png";
import slider16 from "../../../assets/images/featured/featured-logo-16.jpg";
import slider17 from "../../../assets/images/featured/featured-logo-17.jpg";
import slider18 from "../../../assets/images/featured/featured-logo-18.jpeg";
import slider19 from "../../../assets/images/featured/featured-logo-19.jpg";
import slider20 from "../../../assets/images/featured/featured-logo-20.jpg";
import Container from "../../../components/Container";

const FeaturedSection = () => {
  const marqueeData = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider8,
    slider9,
    slider10,
    slider11,
    slider12,
    slider13,
    slider14,
    slider15,
    slider16,
    slider17,
    slider18,
    slider19,
    slider20,
  ];
  return (
    <Container>
      <div className="lg:py-14 md:py-12 py-10 text-center space-y-10">
        <div className="space-y-4">
          <h4 className="capitalize text-primary lg:text-2xl text-xl font-semibold leading-7">
            as featured in
          </h4>
          <h2 className="lg:text-[56px] md:text-[45px] text-3xl font-semibold lg:leading-[67px] md:leading-[50px]">
            Spotlight on Excellence
          </h2>
          <p className="text-[#929292] md:text-lg lg:leading-7 md:leading-6 leading-5 md:w-[700px] w-full mx-auto">
            ProStrikers is making headlines! Celebrated in sports communities
            and recognized by leading media, our commitment to nurturing
            athletic talent shines in the spotlight. Discover why we're the talk
            of the town.
          </p>
        </div>
        <Marquee speed={30} pauseOnHover>
          {marqueeData.map((img, index) => {
            return (
              <img
                loading="lazy"
                key={index}
                src={img}
                className="w-auto mx-4 h-24 object-cover"
                alt="slide"
              />
            );
          })}
        </Marquee>
      </div>
    </Container>
  );
};

export default FeaturedSection;
