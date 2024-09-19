/* eslint-disable @typescript-eslint/no-explicit-any */

import program1 from "../../../assets/images/programs/journey-slide-1.webp";
import program2 from "../../../assets/images/programs/journey-slide-2.webp";
import program3 from "../../../assets/images/programs/journey-slide-3.webp";
import program4 from "../../../assets/images/programs/journey-slide-4.webp";
import program5 from "../../../assets/images/programs/journey-slide-5.webp";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { GoArrowLeft, GoArrowRight, GoDotFill } from "react-icons/go";
import Container from "../../../components/Container";

const JourneySection = () => {
  const programsData = [
    {
      title: "Baseball",
      image: program1,
      link: "/sport/baseball",
    },
    {
      title: "Softball",
      image: program2,
      link: "/sport/softball",
    },
    {
      title: "Cricket",
      image: program3,
      link: "/sport/cricket",
    },
    {
      title: "Soccer",
      image: program4,
      link: "/sport/soccer",
    },
    {
      title: "Field Hockey",
      image: program5,
      link: "/sport/hockey",
    },
  ];
  const settings = {
    className: "center",
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    nextArrow: <GoArrowRight />,
    prevArrow: <GoArrowLeft />,
    customPaging: () => (
      <div
        className="journey-slider-dot"
        style={{
          color: "black",
        }}
      >
        <GoDotFill className="size-6" />
      </div>
    ),
  };
  return (
    <Container>
      <div className="lg:py-14 md:py-12 py-10 text-center space-y-10">
        <div className="space-y-4">
          <h4 className="capitalize lg:text-2xl text-xl text-primary font-semibold leading-7">
            Begin Your Journey
          </h4>
          <h2 className="lg:text-[56px] md:text-[45px] text-3xl font-semibold lg:leading-[67px] md:leading-[50px]">
            Step Into the Arena
          </h2>
          <p className="text-[#929292] md:text-lg text-base lg:leading-7 md:leading-6 leading-5 md:w-[600px] w-full mx-auto">
            Ready to take the field? Our doors are open for all levels of
            passion and play. Gear up and join the ProStrikers family today —
            where every game is an opportunity to be your best.
          </p>
        </div>
        <div className="journey-slider">
          <Slider {...settings}>
            {programsData.map((program, index) => {
              return (
                <div key={index}>
                  <div
                    className="rounded-md flex items-end pb-5 px-3 xl:min-h-[450px] lg:min-h-[360px] md:min-h-[260px] sm:min-h-[300px] min-h-[240px] journey-slide"
                    style={{
                      backgroundImage: `url(${program?.image})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <Link to={program?.link} className="inline-block w-full">
                      <button className="btn w-full btn-info uppercase">
                        {program?.title}
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <Link to="/rental-facility" className="inline-block">
          <button className="primary-btn">Book now</button>
        </Link>
      </div>
    </Container>
  );
};

export default JourneySection;
