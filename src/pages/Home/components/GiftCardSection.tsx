import { Button } from "antd";
import { Link } from "react-router-dom";
import gift1 from "../../../assets/images/home/gift/50.jpg";
import gift2 from "../../../assets/images/home/gift/100.jpg";
import gift3 from "../../../assets/images/home/gift/200.jpg";
import gift4 from "../../../assets/images/home/gift/500.jpg";
import Container from "../../../components/Container";

const GiftCardSection = () => {
  return (
    <Container>
      <div className="lg:py-14 md:py-12 py-10 space-y-10">
        <div className="grid grid-cols-12 lg:gap-10 gap-7">
          <div className="lg:col-span-7 md:col-span-6 col-span-12 md:order-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="grid grid-rows-2 gap-3">
                <div className="bg-primary rounded-md">
                  <img
                    src={gift1}
                    alt="gift card 50"
                    className="rounded-md md:h-48 h-40 w-full object-contain"
                  />
                </div>
                <div className="bg-primary rounded-md">
                  <img
                    src={gift2}
                    alt="gift card 50"
                    className="rounded-md md:h-48 h-40 w-full object-contain"
                  />
                </div>
              </div>
              <div className="grid grid-rows-2 gap-3">
                <div className="bg-primary rounded-md">
                  <img
                    src={gift3}
                    alt="gift card 50"
                    className="rounded-md md:h-48 h-40 w-full object-contain"
                  />
                </div>
                <div className="bg-primary rounded-md">
                  <img
                    src={gift4}
                    alt="gift card 50"
                    className="rounded-md md:h-48 h-40 w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 md:col-span-6 col-span-12 py-3 space-y-3 md:order-1">
            <span className="text-lg text-primary leading-4 font-medium uppercase tracking-wider">
              Prostrikers Gift Cards
            </span>
            <h3 className="lg:text-[40px] md:text-4xl text-3xl lg:leading-[45px] font-semibold text-secondary">
              Holiday Gift Cards – 20% Bonus Value
            </h3>
            <p className="text-[#717171] text-lg tracking-wide">
              Give the perfect gift with instant-use cards. Easy, flexible, and
              ideal for every athlete this Holiday Season. Let them pick exactly
              what they want from their favorite sport.
            </p>
            <ul className="list-disc list-inside text-base space-y-2 text-[#717171]">
              <li>$50 Gift Card for Only $40</li>
              <li>$100 Gift Card for Only $80</li>
              <li>$200 Gift Card for Only $160</li>
              <li>$500 Gift Card for Only $400</li>
            </ul>
            <Link className="block" to={"/black-friday/gift-cards"}>
              <Button type="primary" size="large">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GiftCardSection;
