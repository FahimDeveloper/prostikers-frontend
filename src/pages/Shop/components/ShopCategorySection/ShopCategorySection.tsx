import Container from "../../../../components/Container";
import category1 from "../../../../assets/images/shop/category-bat.webp";
import category2 from "../../../../assets/images/shop/category-gloves.webp";
import category3 from "../../../../assets/images/shop/category-wearables.webp";
import category4 from "../../../../assets/images/shop/category-soccer.webp";
import category5 from "../../../../assets/images/shop/category-helmet.webp";
import category6 from "../../../../assets/images/shop/category-sports-bag.webp";
import { Link } from "react-router-dom";

const ShopCategorySection = () => {
  const categoryData = [
    {
      title: "Bat",
      image: category1,
      link: "/coming-soon",
    },
    {
      title: "Gloves",
      image: category2,
      link: "/coming-soon",
    },
    {
      title: "Wearables",
      image: category3,
      link: "/coming-soon",
    },
    {
      title: "Soccer Items",
      image: category4,
      link: "/coming-soon",
    },
    {
      title: "Helmet",
      image: category5,
      link: "/coming-soon",
    },
    {
      title: "Sports Bag",
      image: category6,
      link: "/coming-soon",
    },
  ];
  return (
    <Container>
      <div className="lg:py-16 md:py-12 py-10 space-y-14">
        <div className="space-y-5">
          <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
            Gear Up at ProStrikers Shop: <br /> Your Ultimate Sports Arsenal
          </h2>
          <article className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] space-y-4 text-justify">
            <p>
              Welcome to the ProStrikers Shop, where every item is a
              game-changer! Our curated collection of sports gear is designed to
              meet the demands of athletes who settle for nothing but the best.
            </p>
            <p>
              Whether you're on the hunt for the latest baseball mitts, the
              sturdiest cricket bats, ultralight soccer cleats, or field hockey
              sticks that promise precision, our shop is your one-stop
              destination. Each product is hand-selected for its quality,
              durability, and performance-enhancing features. So, what are you
              waiting for? Shop now and step into your next game with the
              confidence of a champion!
            </p>
          </article>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {categoryData.map((category, index) => {
            return (
              <div
                className={`${
                  index === 1 || index === 2 || index === 5
                    ? "col-span-2"
                    : "col-span-1"
                }`}
              >
                <Link key={index} to={category.link} className="no-underline">
                  <div
                    style={{
                      backgroundImage: `url(${category.image})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className={`h-72 rounded-xl`}
                  >
                    <h3
                      className={`font-semibold text-4xl m-5 ${
                        index === 2 ? "text-black" : "text-white"
                      }`}
                    >
                      {category.title}
                    </h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default ShopCategorySection;
