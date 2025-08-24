import { Button } from "antd";
import gloves1 from "../../../assets/images/shopify/baseball-1-min.png";
import gloves2 from "../../../assets/images/shopify/baseball-2-min.png";
import gloves3 from "../../../assets/images/shopify/baseball-3-min.png";
import baseball1 from "../../../assets/images/shopify/baseball-4-min.png";
import baseball2 from "../../../assets/images/shopify/baseball-5-min.png";
import baseball3 from "../../../assets/images/shopify/baseball-6-min.png";
import cricket1 from "../../../assets/images/shopify/cricket-1-min.png";
import cricket2 from "../../../assets/images/shopify/cricket-2-min.png";
import cricket3 from "../../../assets/images/shopify/cricket-3-min.png";
import { Link } from "react-router-dom";

const CategoryGallery = () => {
  return (
    <div className="space-y-14">
      <div className="grid grid-cols-12 lg:gap-10 gap-7">
        <div className="lg:col-span-7 md:col-span-6 col-span-12">
          <div className="grid grid-cols-2 gap-3">
            <img
              src={gloves1}
              alt="Softball"
              className="rounded-md h-[396px] w-full object-left-right object-cover"
            />
            <div className="grid grid-rows-2 gap-3">
              <img
                src={gloves2}
                alt="Cricket"
                className="rounded-md h-48 w-full object-left-right object-cover"
              />
              <img
                src={gloves3}
                alt="Soccer"
                className="rounded-md h-48 w-full object-left-top object-cover"
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 md:col-span-6 col-span-12 py-3 space-y-3">
          <span className="text-lg text-primary leading-4 font-medium uppercase tracking-wider">
            Baseball Gloves
          </span>
          <h3 className="lg:text-[40px] md:text-4xl text-3xl lg:leading-[45px] font-semibold text-secondary">
            Premium Leather, Game-Ready Performance
          </h3>
          <p className="text-[#717171] text-lg tracking-wide">
            Step onto the field with confidence in the Rawlings Heart of the
            Hide Baseball Glove , crafted from top-grain leather for unmatched
            durability and comfort.
          </p>
          <ul className="list-disc list-inside text-lg font-semibold space-y-1">
            <li>Pro-grade leather for superior feel</li>
            <li>Strategic padding for impact protection</li>
            <li>Custom fit options available</li>
          </ul>
          <Link className="block" to={"#"}>
            <Button type="primary" size="large">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-12 lg:gap-10 gap-7">
        <div className="lg:col-span-7 md:col-span-6 col-span-12 md:order-2">
          <div className="grid grid-cols-2 gap-3">
            <img
              src={cricket1}
              alt="Softball"
              className="rounded-md h-[396px] w-full object-left-right object-cover"
            />
            <div className="grid grid-rows-2 gap-3">
              <img
                src={cricket2}
                alt="Cricket"
                className="rounded-md h-48 w-full object-left-right object-cover"
              />
              <img
                src={cricket3}
                alt="Soccer"
                className="rounded-md h-48 w-full object-left-top object-cover"
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 md:col-span-6 col-span-12 py-3 space-y-3 md:order-1">
          <span className="text-lg text-primary leading-4 font-medium uppercase tracking-wider">
            Baseball Gloves
          </span>
          <h3 className="lg:text-[40px] md:text-4xl text-3xl lg:leading-[45px] font-semibold text-secondary">
            Premium Leather, Game-Ready Performance
          </h3>
          <p className="text-[#717171] text-lg tracking-wide">
            Step onto the field with confidence in the Rawlings Heart of the
            Hide Baseball Glove , crafted from top-grain leather for unmatched
            durability and comfort.
          </p>
          <ul className="list-disc list-inside text-lg font-semibold space-y-1">
            <li>Pro-grade leather for superior feel</li>
            <li>Strategic padding for impact protection</li>
            <li>Custom fit options available</li>
          </ul>
          <Link className="block" to={"#"}>
            <Button type="primary" size="large">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-12 lg:gap-10 gap-7">
        <div className="lg:col-span-7 md:col-span-6 col-span-12">
          <div className="grid grid-cols-2 gap-3">
            <img
              src={baseball1}
              alt="Softball"
              className="rounded-md h-[396px] w-full object-left-right object-cover"
            />
            <div className="grid grid-rows-2 gap-3">
              <img
                src={baseball2}
                alt="Cricket"
                className="rounded-md h-48 w-full object-left-right object-cover"
              />
              <img
                src={baseball3}
                alt="Soccer"
                className="rounded-md h-48 w-full object-left-top object-cover"
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 md:col-span-6 col-span-12 py-3 space-y-3">
          <span className="text-lg text-primary leading-4 font-medium uppercase tracking-wider">
            Baseball Gloves
          </span>
          <h3 className="lg:text-[40px] md:text-4xl text-3xl lg:leading-[45px] font-semibold text-secondary">
            Premium Leather, Game-Ready Performance
          </h3>
          <p className="text-[#717171] text-lg tracking-wide">
            Step onto the field with confidence in the Rawlings Heart of the
            Hide Baseball Glove , crafted from top-grain leather for unmatched
            durability and comfort.
          </p>
          <ul className="list-disc list-inside text-lg font-semibold space-y-1">
            <li>Pro-grade leather for superior feel</li>
            <li>Strategic padding for impact protection</li>
            <li>Custom fit options available</li>
          </ul>
          <Link className="block" to={"#"}>
            <Button type="primary" size="large">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryGallery;
