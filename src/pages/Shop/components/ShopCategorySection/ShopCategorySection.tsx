import Container from "../../../../components/Container";
import { Link } from "react-router-dom";
import { useCategoriesQuery } from "../../../../redux/features/category/categoryApi";
import { FaSpinner } from "react-icons/fa";

const ShopCategorySection = () => {
  const { data, isLoading } = useCategoriesQuery({
    page: 1,
    limit: 100,
  });
  return (
    <Container>
      <div className="lg:py-16 md:py-12 py-10 space-y-14">
        <div className="space-y-5">
          <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-3xl lg:leading-[68px] md:leading-[50px] leading-9">
            Gear Up at Pro-shop: <br /> Your Ultimate Sports Arsenal
          </h2>
          <article className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] space-y-4 text-justify">
            <p>
              Welcome to the Pro-shop, where every item is a game-changer! Our
              curated collection of sports gear is designed to meet the demands
              of athletes who settle for nothing but the best.
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
        {isLoading ? (
          <div className="h-48 w-full flex justify-center items-center">
            <FaSpinner className="animate-spin size-8 text-primary" />
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {data?.results?.map((category, index) => {
              return (
                <div
                  className={`${
                    index === 1 || index === 2 || index === 5
                      ? "lg:col-span-2"
                      : "lg:col-span-1"
                  }`}
                >
                  <Link
                    key={index}
                    to={category.name.split(" ").join("-")}
                    // to="/coming-soon"
                    className="no-underline"
                  >
                    <div
                      style={{
                        backgroundImage: `url(${
                          category.image
                            ? category.image
                            : "https://placehold.co/600x400/black/white?text=Category"
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      className={`sm:h-80 h-72 rounded-xl p-2`}
                    >
                      <h3
                        className={`font-semibold text-4xl m-5 text-white capitalize`}
                      >
                        {category.name}
                      </h3>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export default ShopCategorySection;
