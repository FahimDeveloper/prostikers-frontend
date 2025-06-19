import { Link } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import { Tooltip } from "antd";
import { useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
//cricket icons
import cricketCap from "../../../assets/images/shopify/cricket-icons/cap.png";
import cricketBall from "../../../assets/images/shopify/cricket-icons/cricket-ball.png";
import cricketBat from "../../../assets/images/shopify/cricket-icons/cricket-bat.png";
import cricketGlove from "../../../assets/images/shopify/cricket-icons/cricket-glove.png";
import cricketHelmet from "../../../assets/images/shopify/cricket-icons/cricket-helmet.png";
import cricketKeeper from "../../../assets/images/shopify/cricket-icons/keeper.png";
import cricketPads from "../../../assets/images/shopify/cricket-icons/pads.png";
import cricketShoes from "../../../assets/images/shopify/cricket-icons/shoes.png";
import cricketTShirt from "../../../assets/images/shopify/cricket-icons/t-shirt.png";
//baseball icons
import baseballBag from "../../../assets/images/shopify/baseball-softball-icons/baseball-bag.png";
import baseballBall from "../../../assets/images/shopify/baseball-softball-icons/baseball-ball.png";
import baseballBat from "../../../assets/images/shopify/baseball-softball-icons/baseball-bat.png";
import baseballMitt from "../../../assets/images/shopify/baseball-softball-icons/baseball-mitt.png";
import baseballShoes from "../../../assets/images/shopify/baseball-softball-icons/baseball-shoes.png";
import baseballBattingHelmet from "../../../assets/images/shopify/baseball-softball-icons/batting-helmet.png";
import baseballCap from "../../../assets/images/shopify/baseball-softball-icons/cap.png";
import baseballCatcher from "../../../assets/images/shopify/baseball-softball-icons/catcher.png";
import baseballFootwear from "../../../assets/images/shopify/baseball-softball-icons/footwear.png";
import baseballGlove from "../../../assets/images/shopify/baseball-softball-icons/glove.png";
//softball icons
import softballBag from "../../../assets/images/shopify/baseball-softball-icons/baseball-bag.png";
import softballBall from "../../../assets/images/shopify/baseball-softball-icons/baseball-ball.png";
import softballBat from "../../../assets/images/shopify/baseball-softball-icons/baseball-bat.png";
import softballMitt from "../../../assets/images/shopify/baseball-softball-icons/baseball-mitt.png";
import softballShoes from "../../../assets/images/shopify/baseball-softball-icons/baseball-shoes.png";
import softballBattingHelmet from "../../../assets/images/shopify/baseball-softball-icons/batting-helmet.png";
import softballCap from "../../../assets/images/shopify/baseball-softball-icons/cap.png";
import softballCatcher from "../../../assets/images/shopify/baseball-softball-icons/catcher.png";
import softballFootwear from "../../../assets/images/shopify/baseball-softball-icons/footwear.png";
import softballGlove from "../../../assets/images/shopify/baseball-softball-icons/glove.png";
//soccer icons
import soccerBall from "../../../assets/images/shopify/soccer-icons/ball.png";
import soccerJersy from "../../../assets/images/shopify/soccer-icons/jersey.png";
import soccerShoes from "../../../assets/images/shopify/soccer-icons/shoes.png";
//hockey icons
import hockeyCompositeSticks from "../../../assets/images/shopify/hockey-icons/field-hockey.png";
import hockeyClothing from "../../../assets/images/shopify/hockey-icons/hockey-jersey.png";
import hockeyProtection from "../../../assets/images/shopify/hockey-icons/protection.png";
import hockeyShoes from "../../../assets/images/shopify/hockey-icons/shoes.png";
import hockeyBags from "../../../assets/images/shopify/hockey-icons/sport-bag.png";

const CategorySlider = () => {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    swipe: false,
  };

  const categories = [
    { name: "Cricket Cap", logo: cricketCap },
    { name: "Cricket Balls", logo: cricketBall },
    { name: "Cricket Bats", logo: cricketBat },
    { name: "Cricket Player Gloves", logo: cricketGlove },
    { name: "Cricket Helmet", logo: cricketHelmet },
    { name: "Cricket Keeper Gloves", logo: cricketKeeper },
    { name: "Batting Pads", logo: cricketPads },
    { name: "Cricket Shoes", logo: cricketShoes },
    { name: "Cricket Clothes", logo: cricketTShirt },
    { name: "Baseball Bag", logo: baseballBag },
    { name: "Baseball Ball", logo: baseballBall },
    { name: "Baseball Bat", logo: baseballBat },
    { name: "Baseball Mitt", logo: baseballMitt },
    { name: "Baseball Shoes", logo: baseballShoes },
    { name: "Batting Helmet", logo: baseballBattingHelmet },
    { name: "Baseball Cap", logo: baseballCap },
    { name: "Catcher Gear", logo: baseballCatcher },
    { name: "Footwear", logo: baseballFootwear },
    { name: "Baseball Glove", logo: baseballGlove },
    { name: "Softball Bag", logo: softballBag },
    { name: "Softball Ball", logo: softballBall },
    { name: "Softball Bat", logo: softballBat },
    { name: "Softball Mitt", logo: softballMitt },
    { name: "Softball Shoes", logo: softballShoes },
    { name: "Softball Batting Helmet", logo: softballBattingHelmet },
    { name: "Softball Cap", logo: softballCap },
    { name: "Softball Catcher Gear", logo: softballCatcher },
    { name: "Softball Footwear", logo: softballFootwear },
    { name: "Softball Glove", logo: softballGlove },
    { name: "Soccer Ball", logo: soccerBall },
    { name: "Soccer Jersey", logo: soccerJersy },
    { name: "Soccer Shoes", logo: soccerShoes },
    { name: "Hockey Composite Sticks", logo: hockeyCompositeSticks },
    { name: "Hockey Clothing", logo: hockeyClothing },
    { name: "Hockey Protection", logo: hockeyProtection },
    { name: "Hockey Shoes", logo: hockeyShoes },
    { name: "Hockey Bags", logo: hockeyBags },
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
                    {/* <span className="text-3xl">{category.logo}</span> */}
                    <img
                      src={category.logo}
                      className="size-10"
                      alt={category.name}
                    />
                  </div>
                  <Tooltip title={category.name} placement="top">
                    <p className="text-base mt-5 -mb-3 tracking-wider truncate font-medium">
                      {category.name}
                    </p>
                  </Tooltip>
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
