import Marquee from "react-fast-marquee";
import slide1 from "../../../assets/images/featured/slide1.png";
import slide2 from "../../../assets/images/featured/slide2.png";
import slide3 from "../../../assets/images/featured/slide3.png";
import slide4 from "../../../assets/images/featured/slide4.png";
import slide5 from "../../../assets/images/featured/slide5.png";
import slide6 from "../../../assets/images/featured/slide6.png";
import slide7 from "../../../assets/images/featured/slide7.png";
import Container from "../../../components/Container";

const FeaturedSection = () => {
  const marqueeData = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];
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
        <Marquee>
          {marqueeData.map((img, index) => {
            return (
              <img
                loading="lazy"
                key={index}
                src={img}
                className="w-48"
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
