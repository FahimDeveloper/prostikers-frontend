// import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Modal } from "antd";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";

const Header = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector(selectCurrentUser);
  return (
    <div className="fixed w-full z-50 lg:top-5 top-4">
      <div className="sm:px-14 px-5">
        <div
          style={{ backgroundColor: "rgba(255,255,255,0.8" }}
          className="flex items-center justify-between py-2 px-4 border border-solid border-gray-200 rounded-full"
        >
          <Link to="/">
            <img loading="lazy" src={logo} className="w-32" alt="logo" />
          </Link>
          <nav className="lg:block hidden">
            <ul className="list-none flex justify-center text-lg font-medium items-center gap-7">
              <li>
                <Link
                  to="/rental-facility"
                  className="no-underline text-[#1C1C1C] inline-block"
                >
                  Rental Facility
                </Link>
              </li>
              <li>
                <Link
                  to="/membership"
                  className="no-underline text-[#1C1C1C] inline-block"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  to="/academy"
                  className="no-underline text-[#1C1C1C] inline-block"
                >
                  Academy
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/events"
                  className="no-underline text-[#1C1C1C] inline-block"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="no-underline text-[#1C1C1C] inline-block"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="no-underline text-[#1C1C1C] inline-block"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>
          <div className="lg:block hidden">
            {!user ? (
              <Link to="/login" className="block no-underline">
                <div className="bg-[#EAFFFF] cursor-pointer border border-solid rounded-full text-[#006566] border-[#C0E5E5] flex items-center justify-center gap-3 py-2 px-5">
                  Login
                </div>
              </Link>
            ) : (
              <div className="lg:flex items-center gap-5">
                <Cart />
                <Link to="/dashboard" className="block no-underline">
                  <div className="bg-[#EAFFFF] border border-solid rounded-full text-[#006566] border-[#C0E5E5] flex items-center justify-evenly gap-3 py-2 px-2 w-28">
                    <img src={user?.image} className="size-8 rounded-full" />
                    <p className="font-medium text-base">Account</p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <div className="flex gap-5 lg:hidden">
            {/* <IoCartOutline className="size-7" /> */}
            <HiOutlineBars3BottomRight
              className="size-7"
              onClick={() => setOpen(true)}
            />
            <Modal
              footer={false}
              width={400}
              open={open}
              onCancel={() => setOpen(false)}
            >
              <Link to="/" onClick={() => setOpen(false)}>
                <img loading="lazy" src={logo} className="w-24" alt="logo" />
              </Link>
              <nav className="py-5">
                <ul className="list-none flex flex-col gap-2 text-lg font-medium">
                  <li className="border-b border-gray-200 border-solid border-x-0 border-t-0 py-3 \">
                    <Link
                      onClick={() => setOpen(false)}
                      to="/rental-facility"
                      className="no-underline text-[#1C1C1C] flex justify-between items-center"
                    >
                      Rental Facility
                      <IoIosArrowForward className="size-4" />
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 border-solid border-x-0 border-t-0 py-3">
                    <Link
                      onClick={() => setOpen(false)}
                      to="/membership"
                      className="no-underline text-[#1C1C1C] flex justify-between items-center"
                    >
                      Membership
                      <IoIosArrowForward className="size-4" />
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 border-solid border-x-0 border-t-0 py-3">
                    <Link
                      onClick={() => setOpen(false)}
                      to="/academy"
                      className="no-underline text-[#1C1C1C] flex justify-between items-center"
                    >
                      Academy
                      <IoIosArrowForward className="size-4" />
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 border-solid border-x-0 border-t-0 py-3">
                    <Link
                      onClick={() => setOpen(false)}
                      to="/programs/events"
                      className="no-underline text-[#1C1C1C] flex justify-between items-center"
                    >
                      Events
                      <IoIosArrowForward className="size-5" />
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 border-solid border-x-0 border-t-0 py-3">
                    <Link
                      onClick={() => setOpen(false)}
                      to="/shop"
                      className="no-underline text-[#1C1C1C] flex justify-between items-center"
                    >
                      Shop
                      <IoIosArrowForward className="size-4" />
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 border-solid border-x-0 border-t-0 py-3">
                    <Link
                      onClick={() => setOpen(false)}
                      to="/blogs"
                      className="no-underline text-[#1C1C1C] flex justify-between items-center"
                    >
                      Blogs
                      <IoIosArrowForward className="size-4" />
                    </Link>
                  </li>
                </ul>
              </nav>
              {!user ? (
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="block no-underline"
                >
                  <div className="bg-[#EAFFFF] cursor-pointer text-lg border border-solid rounded-full text-[#006566] border-[#C0E5E5] flex items-center justify-center gap-3 py-2 px-5">
                    Login
                  </div>
                </Link>
              ) : (
                <Link
                  to="/dashboard"
                  className="block no-underline"
                  onClick={() => setOpen(false)}
                >
                  <div className="bg-[#EAFFFF] cursor-pointer font-semibold text-lg border border-solid rounded-full text-[#006566] border-[#C0E5E5] flex items-center justify-center gap-3 py-2 px-5">
                    <img src={user?.image} className="size-8 rounded-full" />
                    <p className="font-semibold text-lg">Account</p>
                  </div>
                </Link>
              )}
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
