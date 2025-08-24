import baseball from "../../../assets/images/shopify/baseball.jpg";
import cricket from "../../../assets/images/shopify/cricket.jpg";
import soccer from "../../../assets/images/shopify/soccer.jpg";
import softball from "../../../assets/images/shopify/softball.jpg";
import hockey from "../../../assets/images/shopify/hockey.jpg";
import { Button } from "antd";
import { Link } from "react-router-dom";

const CategoryShopNow = () => {
  const categories = [
    {
      id: "1754568537311",
      name: "Baseball",
      description: "Power Your Game with Premium Baseball Essentials",
      image: baseball,
    },
    {
      id: "1754568564392",
      name: "Hockey",
      description: "Elevate Your Stick Skills with Pro-Level Gear",
      image: hockey,
    },
    {
      id: "1754568419074",
      name: "Cricket",
      description: "Step Into the Crease with Confidence",
      image: cricket,
    },
    {
      id: "1754568647661",
      name: "Softball",
      description: "Complete Softball Equipment",
      image: softball,
    },
    {
      id: "1754568631791",
      name: "Soccer",
      description: "Kick Off in Style with best Kits and Gear",
      image: soccer,
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-4 ">
      {categories.map((category, index) => {
        let colSpanClass = "col-span-12 md:col-span-6 lg:col-span-4";
        if (index === 0)
          colSpanClass = "col-span-12 md:col-span-12 lg:col-span-7";
        else if (index === 1)
          colSpanClass = "col-span-12 md:col-span-6 lg:col-span-5";

        return (
          <div key={index} className={`${colSpanClass}`}>
            <div
              className="relative h-80 rounded-lg bg-cover bg-center bg-no-repeat overflow-hidden"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-0" />
              <div className="absolute bottom-0 w-full z-10">
                <div className="flex justify-between items-end p-4">
                  <div className="space-y-2">
                    <h3 className="text-3xl uppercase text-white font-bold tracking-wider">
                      {category.name}
                    </h3>
                    <p className="text-lg text-white tracking-wider text-wrap">
                      {category.description}
                    </p>
                  </div>
                  <Link className="block" to={`#`}>
                    <Button type="primary" size="large">
                      Shop Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryShopNow;
