import { HiOutlineUserCircle } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Modal } from "antd";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed w-full z-50 lg:top-5 top-4">
      <div className="sm:px-14 px-5">
        <div
          style={{ backgroundColor: "rgba(255,255,255,0.8" }}
          className="flex items-center justify-between py-2 px-4 border border-solid border-gray-200 rounded-full"
        >
          <Link to="/">
            <img src={logo} className="w-full" alt="logo" />
          </Link>
          <nav className="lg:block hidden">
            <ul className="list-none flex justify-center text-lg font-medium items-center gap-7">
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
                  to="#"
                  className="no-underline text-[#1C1C1C] inline-block"
                >
                  Shop
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
                  to="/rental"
                  className="no-underline text-[#1C1C1C] inline-block"
                >
                  Rental
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="no-underline text-[#1C1C1C] inline-block"
                >
                  League
                </Link>
              </li>
            </ul>
          </nav>
          <div className="lg:flex items-center gap-5 hidden">
            <div className="flex items-center gap-2 text-md cursor-pointer">
              <IoCartOutline className="size-6" /> Cart
            </div>
            <div className="bg-[#EAFFFF] cursor-pointer border border-solid rounded-full text-[#006566] border-[#C0E5E5] flex items-center justify-center gap-3 py-2 px-5">
              <HiOutlineUserCircle className="size-7" />
              Account
            </div>
          </div>
          <div className="flex gap-5 lg:hidden">
            <IoCartOutline className="size-7" />
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
                <img src={logo} className="w-24" alt="logo" />
              </Link>
              <nav className="py-5">
                <ul className="list-none flex flex-col gap-2 text-lg font-medium">
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
                      to="#"
                      className="no-underline text-[#1C1C1C] flex justify-between items-center"
                    >
                      Shop
                      <IoIosArrowForward className="size-4" />
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 border-solid border-x-0 border-t-0 py-3">
                    <Link
                      onClick={() => setOpen(false)}
                      to="#"
                      className="no-underline text-[#1C1C1C] flex justify-between items-center"
                    >
                      Academy
                      <IoIosArrowForward className="size-4" />
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 border-solid border-x-0 border-t-0 py-3 \">
                    <Link
                      onClick={() => setOpen(false)}
                      to="/rental"
                      className="no-underline text-[#1C1C1C] flex justify-between items-center"
                    >
                      Rental
                      <IoIosArrowForward className="size-4" />
                    </Link>
                  </li>
                  <li className="py-3">
                    <Link
                      onClick={() => setOpen(false)}
                      to="#"
                      className="no-underline text-[#1C1C1C] flex justify-between items-center"
                    >
                      League
                      <IoIosArrowForward className="size-5" />
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="bg-[#EAFFFF] cursor-pointer font-semibold text-lg border border-solid rounded-full text-[#006566] border-[#C0E5E5] flex items-center justify-center gap-3 py-2 px-5">
                <HiOutlineUserCircle className="size-8" />
                Account
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
