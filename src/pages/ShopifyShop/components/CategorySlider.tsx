import { useRef } from "react";
import { CiBasketball } from "react-icons/ci";
import { GiBaseballBat, GiCricketBat } from "react-icons/gi";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import {
  PiBaseballCapLight,
  PiBoxingGloveLight,
  PiCricketLight,
  PiHockeyLight,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import Slider, { Settings } from "react-slick";

const CategorySlider = () => {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
  };

  const categories = [
    { name: "Cricket Bats", logo: <PiCricketLight /> },
    { name: "Baseball Bats", logo: <GiBaseballBat /> },
    { name: "Hockey Bats", logo: <PiHockeyLight /> },
    { name: "Gloves Bats", logo: <PiBoxingGloveLight /> },
    { name: "Caps", logo: <PiBaseballCapLight /> },
    { name: "Balls", logo: <CiBasketball /> },
    { name: "Softball Bats", logo: <GiCricketBat /> },
  ];

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-3xl">Browse By Category</h3>
        <div className="flex items-center gap-5">
          <div
            onClick={previous}
            className="cursor-pointer size-10 bg-slate-100 flex items-center justify-center rounded-full"
          >
            <GoArrowLeft />
          </div>
          <div
            onClick={next}
            className="cursor-pointer size-10 bg-slate-100 flex items-center justify-center rounded-full"
          >
            <GoArrowRight />
          </div>
        </div>
      </div>
      <div className="shop-category-slider overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {categories.map((category, index) => (
            <Link
              to={"/shop/products"}
              className="block no-underline text-secondary"
            >
              <div key={index} className="cursor-pointer">
                <div className="bg-[#F0FFFE] border-8 border-solid border-white py-6 px-[10px] rounded-xl text-center">
                  <div className="size-[70px] mx-auto rounded-full bg-[#C7F2F2] flex items-center justify-center">
                    <span className="text-3xl">{category.logo}</span>
                  </div>
                  <p className="text-base mt-5 -mb-3 tracking-wider font-medium">
                    {category.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategorySlider;
