import Slider from "react-slick";
import banner1 from "../../../assets/images/shopify/baseball-slider.jpg";
import banner2 from "../../../assets/images/shopify/cricket-slider.jpg";
import banner3 from "../../../assets/images/shopify/soccer-slider.jpg";
import banner4 from "../../../assets/images/shopify/hockey-slider.jpg";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { Button } from "antd";

const ShopBanner = () => {
  const bannerData = [
    {
      title: "20% Off Franklin Gloves",
      description:
        "Durable, comfortable, and game ready upgrade your defense today",
      image: banner1,
      link: "/shop/products",
    },
    {
      title: "20% Off Cricket Accessories",
      description:
        "Durable, comfortable, and game ready upgrade your defense today",
      image: banner2,
      link: "/shop/products",
    },
    {
      title: "20% Off Soccer Gear",
      description:
        "Durable, comfortable, and game ready upgrade your defense today",
      image: banner3,
      link: "/shop/products",
    },
    {
      title: "20% Off Hockey Equipment",
      description:
        "Durable, comfortable, and game ready upgrade your defense today",
      image: banner4,
      link: "/shop/products",
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
        className="shop-banner-dot"
        style={{
          color: "white",
        }}
      >
        <GoDotFill className="size-6" />
      </div>
    ),
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {bannerData.map((slide, index) => {
          return (
            <div key={index}>
              <div
                className="max-h-[425px] flex lg:items-center sm:items-end items-center rounded-3xl"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent), url(${slide.image})`,
                  backgroundPosition: "center right",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="lg:w-[800px] w-full sm:space-y-4 space-y-3 md:px-16 md:mt-40 sm:px-10 px-6 sm:pb-24 pb-16 sm:pt-0 pt-20">
                  <div className="space-y-2">
                    <span className="text-primary text-lg tracking-wider font-semibold">
                      Flash Sale
                    </span>
                    <h2 className="font-extrabold w-[450px] text-white text-5xl leading-[60px]  tracking-wider">
                      {slide.title}
                    </h2>
                    <p className="font-medium text-lg tracking-wider w-80 text-white ">
                      {slide.description}
                    </p>
                  </div>
                  <Link to={slide.link} className="block">
                    <Button type="primary" size="large">
                      Shop Now
                    </Button>
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

export default ShopBanner;
