// import { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import Container from "../../components/Container";
// import { GoChevronDown } from "react-icons/go";

// const MegaMenu = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const megaMenuData = [
//     {
//       title: "Cricket",
//       categories: [
//         { id: 333826228392, name: "Cricket Bats" },
//         { id: 333826490536, name: "Cricket Shoes" },
//         { id: 333826261160, name: "Cricket Balls" },
//         { id: 333826523304, name: "Cricket Bags" },
//         { id: 333826359464, name: "Batting Pads" },
//         { id: 333826588840, name: "Cricket Gloves" },
//         { id: 333875052712, name: "GEM Collections" },
//         { id: 333826392232, name: "Keeper Gloves" },
//         { id: 333826654376, name: "Clothes" },
//         { id: 333826425000, name: "Helmet" },
//         { id: 333826687144, name: "Cricket Cap" },
//         { id: 333826457768, name: "Accessories" },
//       ],
//       promos: [
//         {
//           title: "Premium",
//           subtitle: "Top Bat Collection",
//           image: "/images/cricket-bat.png",
//           bg: "bg-blue-600",
//         },
//         {
//           title: "Trending",
//           subtitle: "Complete Kit Sets",
//           image: "/images/cricket-kit.png",
//           bg: "bg-pink-500",
//         },
//       ],
//     },
//     {
//       title: "Baseball",
//       categories: [
//         { name: "Apparel" },
//         { name: "Bats" },
//         { name: "Batting Helmets" },
//         { name: "Bags" },
//         { name: "Balls" },
//         { name: "Batting Gloves" },
//         { name: "Catcher Equipment" },
//         { name: "Field Equipment" },
//         { name: "Footwear" },
//         { name: "Gloves" },
//         { name: "Protective Gear" },
//         { name: "Training Gear" },
//       ],
//       promos: [
//         {
//           title: "Top Rated",
//           subtitle: "Pro Bats Collection",
//           image: "/images/baseball-bat.png",
//           bg: "bg-orange-500",
//         },
//         {
//           title: "Limited Time",
//           subtitle: "Gloves & Helmets",
//           image: "/images/baseball-glove.png",
//           bg: "bg-purple-600",
//         },
//       ],
//     },
//     {
//       title: "Softball",
//       categories: [
//         { name: "Apparel" },
//         { name: "Bats" },
//         { name: "Batting Helmets" },
//         { name: "Bags" },
//         { name: "Balls" },
//         { name: "Batting Gloves" },
//         { name: "Catcher Equipment" },
//         { name: "Field Equipment" },
//         { name: "Footwear" },
//         { name: "Gloves" },
//         { name: "Protective Gear" },
//         { name: "Training Gear" },
//       ],
//       promos: [
//         {
//           title: "Top Rated",
//           subtitle: "Pro Bats Collection",
//           image: "/images/baseball-bat.png",
//           bg: "bg-orange-500",
//         },
//         {
//           title: "Limited Time",
//           subtitle: "Gloves & Helmets",
//           image: "/images/baseball-glove.png",
//           bg: "bg-purple-600",
//         },
//       ],
//     },
//     {
//       title: "Hockey",
//       categories: [
//         { name: "Composite Sticks" },
//         { name: "Clothing" },
//         { name: "Hockey Shoes" },
//         { name: "Bags" },
//         { name: "Protection" },
//       ],
//       promos: [
//         {
//           title: "Hot Pick",
//           subtitle: "Top Hockey Sticks",
//           image: "/images/hockey-stick.png",
//           bg: "bg-red-500",
//         },
//         {
//           title: "25% Off",
//           subtitle: "Protective Gear Sale",
//           image: "/images/hockey-protection.png",
//           bg: "bg-indigo-700",
//         },
//       ],
//     },
//     {
//       title: "Soccer",
//       categories: [
//         { name: "Cleats & Shoes" },
//         { name: "Fan Jerseys & Gear" },
//         { name: "Apparel" },
//         { name: "Soccer Balls" },
//         { name: "Player Equipment" },
//         { name: "Field Equipment" },
//       ],
//       promos: [
//         {
//           title: "Best Seller",
//           subtitle: "Soccer Cleats",
//           image: "/images/soccer-cleats.png",
//           bg: "bg-green-600",
//         },
//         {
//           title: "New Arrival",
//           subtitle: "Goal Keeper Kits",
//           image: "/images/goalkeeper-kit.png",
//           bg: "bg-yellow-500",
//         },
//       ],
//     },
//   ];

//   const renderMenuContent = (categories: { id: number; name: string }[]) => (
//     <div className="fixed left-0 right-0 top-[135px] bg-white shadow-md 2xl:max-w-[1300px] xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] mx-auto sm:px-10 z-40 p-5 flex gap-6">
//       {/* Categories */}
//       <div className="w-3/5 flex gap-6 flex-wrap">
//         {[0, 1].map((col) => (
//           <div key={col}>
//             <ul className="space-y-3 text-gray-700 list-inside text-sm">
//               {categories
//                 .filter((_, i) => i % 2 === col)
//                 .map((item) =>
//                   item.id ? (
//                     <Link
//                       to={`/shop/${item.name
//                         .toLowerCase()
//                         .replace(/\s+/g, "-")}/${item.id}`}
//                       key={item.id}
//                       reloadDocument
//                       className="block no-underline text-black"
//                     >
//                       <li className="hover:underline cursor-pointer text-base">
//                         {item.name}
//                       </li>
//                     </Link>
//                   ) : (
//                     <Link
//                       to={`/shop/coming-soon`}
//                       reloadDocument
//                       className="block no-underline text-black"
//                     >
//                       <li className="hover:underline cursor-pointer text-base">
//                         {item.name}
//                       </li>
//                     </Link>
//                   )
//                 )}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* Promo Cards */}
//       {/* <div className="w-2/5 flex gap-4">
//         {promos.map((promo, idx) => (
//           <div
//             key={idx}
//             className={`rounded-lg w-1/2 text-white p-4 ${promo.bg}`}
//           >
//             <p className="text-sm mb-1">{promo.title}</p>
//             <h3 className="text-xl font-semibold">{promo.subtitle}</h3>
//             <img src={promo.image} alt="Promo" className="w-16 mt-4" />
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );

//   return (
//     <div className="mt-24 relative z-10">
//       <div className="bg-[#131B47] text-white sticky top-[96px] z-50 mb-1">
//         <Container>
//           <div
//             className="
//           flex
//           md:justify-center justify-start
//           relative
//           overflow-x-auto
//           whitespace-nowrap
//           scrollbar-hide
//         "
//           >
//             {megaMenuData.map((menu, index) => (
//               <div
//                 key={menu.title}
//                 className="cursor-pointer px-4 py-2 rounded hover:text-primary"
//                 onMouseEnter={() => setOpenIndex(index)}
//                 onMouseLeave={() => setOpenIndex(null)}
//               >
//                 <div className="flex items-center gap-1">
//                   <span className="text-base font-medium tracking-wider">
//                     {menu.title}
//                   </span>
//                   <GoChevronDown className="size-5" />
//                 </div>

//                 {openIndex === index && (
//                   <div
//                     onMouseEnter={() => setOpenIndex(index)}
//                     onMouseLeave={() => setOpenIndex(null)}
//                   >
//                     {renderMenuContent(menu.categories as any)}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </Container>
//       </div>

//       <Outlet />
//     </div>
//   );
// };

// export default MegaMenu;

import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ShopifyShop = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.open("https://shop.prostrikers.com", "_blank");
    navigate(location.state?.from || "/");
  }, [navigate]);

  return null;
};

export default ShopifyShop;
