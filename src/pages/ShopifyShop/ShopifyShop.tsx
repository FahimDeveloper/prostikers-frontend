import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "../../components/Container";
import { GoChevronDown } from "react-icons/go";

const MegaMenu = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const megaMenuData = [
    {
      title: "Cricket",
      categories: [
        "Cricket Bats",
        "Cricket Shoes",
        "Cricket Balls",
        "Cricket Bags",
        "Batting Pads",
        "Cricket Gloves",
        "Keeper Gloves",
        "Clothes",
        "Helmet",
        "Cricket Cap",
        "Accessories",
      ],
      promos: [
        {
          title: "Premium",
          subtitle: "Top Bat Collection",
          image: "/images/cricket-bat.png",
          bg: "bg-blue-600",
        },
        {
          title: "Trending",
          subtitle: "Complete Kit Sets",
          image: "/images/cricket-kit.png",
          bg: "bg-pink-500",
        },
      ],
    },
    {
      title: "Baseball",
      categories: [
        "Apparel",
        "Bats",
        "Batting Helmets",
        "Bags",
        "Balls",
        "Batting Gloves",
        "Catcher Equipment",
        "Field Equipment",
        "Footwear",
        "Gloves",
        "Protective Gear",
        "Training Gear",
      ],
      promos: [
        {
          title: "Top Rated",
          subtitle: "Pro Bats Collection",
          image: "/images/baseball-bat.png",
          bg: "bg-orange-500",
        },
        {
          title: "Limited Time",
          subtitle: "Gloves & Helmets",
          image: "/images/baseball-glove.png",
          bg: "bg-purple-600",
        },
      ],
    },
    {
      title: "Softball",
      categories: [
        "Apparel",
        "Bats",
        "Batting Helmets",
        "Bags",
        "Balls",
        "Batting Gloves",
        "Catcher Equipment",
        "Field Equipment",
        "Footwear",
        "Gloves",
        "Protective Gear",
        "Training Gear",
      ],
      promos: [
        {
          title: "Top Rated",
          subtitle: "Pro Bats Collection",
          image: "/images/baseball-bat.png",
          bg: "bg-orange-500",
        },
        {
          title: "Limited Time",
          subtitle: "Gloves & Helmets",
          image: "/images/baseball-glove.png",
          bg: "bg-purple-600",
        },
      ],
    },
    {
      title: "Hockey",
      categories: [
        "Composite Sticks",
        "Clothing",
        "Hockey Shoes",
        "Bags",
        "Protection",
      ],
      promos: [
        {
          title: "Hot Pick",
          subtitle: "Top Hockey Sticks",
          image: "/images/hockey-stick.png",
          bg: "bg-red-500",
        },
        {
          title: "25% Off",
          subtitle: "Protective Gear Sale",
          image: "/images/hockey-protection.png",
          bg: "bg-indigo-700",
        },
      ],
    },
    {
      title: "Soccer",
      categories: [
        "Cleats & Shoes",
        "Fan Jerseys & Gear",
        "Apparel",
        "Soccer Balls",
        "Player Equipment",
        "Field Equipment",
      ],
      promos: [
        {
          title: "Best Seller",
          subtitle: "Soccer Cleats",
          image: "/images/soccer-cleats.png",
          bg: "bg-green-600",
        },
        {
          title: "New Arrival",
          subtitle: "Goal Keeper Kits",
          image: "/images/goalkeeper-kit.png",
          bg: "bg-yellow-500",
        },
      ],
    },
  ];

  const renderMenuContent = (categories: string[]) => (
    <div className="fixed left-0 right-0 top-[135px] bg-white shadow-md 2xl:max-w-[1300px] xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] mx-auto sm:px-10 z-40 p-5 flex gap-6">
      {/* Categories */}
      <div className="w-3/5 flex gap-6 flex-wrap">
        {[0, 1].map((col) => (
          <div key={col}>
            <ul className="space-y-3 text-gray-700 list-inside text-sm">
              {categories
                .filter((_, i) => i % 2 === col)
                .map((item, idx) => (
                  <Link to={"#"} className="block no-underline text-black">
                    <li
                      key={idx}
                      className="hover:underline cursor-pointer text-base"
                    >
                      {item}
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Promo Cards */}
      {/* <div className="w-2/5 flex gap-4">
        {promos.map((promo, idx) => (
          <div
            key={idx}
            className={`rounded-lg w-1/2 text-white p-4 ${promo.bg}`}
          >
            <p className="text-sm mb-1">{promo.title}</p>
            <h3 className="text-xl font-semibold">{promo.subtitle}</h3>
            <img src={promo.image} alt="Promo" className="w-16 mt-4" />
          </div>
        ))}
      </div> */}
    </div>
  );

  return (
    <div className="mt-24 relative z-10">
      <div className="bg-[#131B47] sm:block hidden text-white sticky top-[96px] z-50 mb-1">
        <Container>
          <div className="flex justify-center relative">
            {megaMenuData.map((menu, index) => (
              <div
                key={menu.title}
                className="cursor-pointer px-4 py-2 rounded hover:text-primary"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <div className="flex items-center gap-1">
                  <span className="text-base font-medium tracking-wider">
                    {menu.title}
                  </span>
                  <GoChevronDown className="size-5" />
                </div>

                {openIndex === index && (
                  <div
                    onMouseEnter={() => setOpenIndex(index)}
                    onMouseLeave={() => setOpenIndex(null)}
                  >
                    {renderMenuContent(menu.categories)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Outlet />
    </div>
  );
};

export default MegaMenu;
