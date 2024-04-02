/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import banner1 from "../../../assets/images/home/banners/banner1.webp";
import banner2 from "../../../assets/images/home/banners/banner2.webp";
import banner3 from "../../../assets/images/home/banners/banner3.webp";
import banner4 from "../../../assets/images/home/banners/banner4.webp";
import banner5 from "../../../assets/images/home/banners/banner5.webp";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
const TopSliderSection = () => {
  const bannerData = [
    {
      title: "Elevate Your Game to Major League Standards",
      description:
        "Harness the power of professional coaching and state-of-the-art facilities at ProStrikers. Our baseball training programs are designed to refine your skills, improve your pitching and batting, and ready you for the big leagues.",
      image: banner1,
      link: "/rental",
    },
    {
      title: "Softball Success Starts Here: Power, Precision, Play",
      description:
        "Experience a breakthrough in your softball career with tailored coaching that focuses on enhancing your power hitting and defensive skills. ProStrikers' expert-led training gives you the competitive edge you need to shine.",
      image: banner2,
      link: "/rental",
    },
    {
      title: "Cricket Mastery Through Professional Coaching",
      description:
        "Join the ranks of cricket elites by training under the guidance of seasoned pros. ProStrikers offers a comprehensive approach to cricket training, focusing on technical skills, strategic understanding, and mental toughness.",
      image: banner3,
      link: "/rental",
    },
    {
      title: "Transform Your Soccer Skills into Championship Wins",
      description:
        "Elevate your soccer prowess with ProStrikers' holistic training programs. From mastering ball control to sharpening your goal-scoring instincts, our dedicated coaches will prepare you to dominate on the field.",
      image: banner4,
      link: "/rental",
    },
    {
      title: "Become a Field Hockey Phenomenon",
      description:
        "Step into ProStrikers' training programs to unleash your field hockey potential. Our targeted coaching methods focus on agility, technique, and game intelligence, setting you apart as a leader on the field.",
      image: banner5,
      link: "/rental",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    autoplayHoverPause: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div
        style={{
          paddingBottom: "50px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        className="banner-dot"
        style={{
          color: "white",
        }}
      >
        <GoDotFill className="size-7" />
      </div>
    ),
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {bannerData.map((slide) => {
          return (
            <div>
              <div
                className="h-svh flex items-end rounded-b-3xl"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: "bottom right",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="lg:w-[800px] w-full sm:space-y-10 space-y-7 px-16 pb-24">
                  <div className="space-y-3">
                    <h2 className="font-extrabold text-white lg:text-[56px] sm:text-[44px] [0.5px] text-3xl lg:leading-[67px] sm:leading-[45px] leading-8">
                      {slide.title}
                    </h2>
                    <p className="sm:text-lg text-base lg:leading-[27px] sm:leading-6 leading-5 text-white tracking-[0.2px]">
                      {slide.description}
                    </p>
                  </div>
                  <Link to={slide.link} className="inline-block">
                    <button className="primary-btn rounded-full">
                      Book now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopSliderSection;
