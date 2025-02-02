/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import Container from "../../../components/Container";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../../../assets/icons/login-logo.svg";
import { AiOutlineBars } from "react-icons/ai";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const options = [
    {
      label: "Profile Info",
      value: "/dashboard",
    },
    {
      label: "Bundle Credit Packs",
      value: "/dashboard/my-bundle-credit-packs",
    },
    {
      label: "Rental Facilities",
      value: "/dashboard/my-rental-facilities",
    },
    {
      label: "Shop Orders",
      value: "/dashboard/my-shop-orders",
    },
    {
      label: "Classes",
      value: "/dashboard/my-classes",
    },
    {
      label: "One Appointments",
      value: "/dashboard/my-one-on-one-appointments",
    },
    {
      label: "Group Appointments",
      value: "/dashboard/my-group-appointments",
    },
    {
      label: "Bootcamps",
      value: "/dashboard/my-bootcamps",
    },
    {
      label: "Individual Tournaments",
      value: "/dashboard/my-individual-tournaments",
    },
    {
      label: "Team Tournaments",
      value: "/dashboard/my-team-tournaments",
    },
  ];
  // const scrollRef = useRef<any | null>(null);
  // let isDown = false;
  // let startX: any;
  // let scrollLeft: any;

  // const handleMouseDown = (e: { pageX: number }) => {
  //   isDown = true;
  //   scrollRef.current.classList.add("active");
  //   startX = e.pageX - scrollRef.current.offsetLeft;
  //   scrollLeft = scrollRef.current.scrollLeft;
  // };

  // const handleMouseLeave = () => {
  //   isDown = false;
  //   scrollRef.current.classList.remove("active");
  // };

  // const handleMouseUp = () => {
  //   isDown = false;
  //   scrollRef.current.classList.remove("active");
  // };

  // const handleMouseMove = (e: {
  //   preventDefault: () => void;
  //   pageX: number;
  // }) => {
  //   if (!isDown) return;
  //   e.preventDefault();
  //   const x = e.pageX - scrollRef.current.offsetLeft;
  //   const walk = (x - startX) * 2;
  //   scrollRef.current.scrollLeft = scrollLeft - walk;
  // };
  return (
    <div className="min-h-svh mt-28">
      <Container>
        <div className="space-y-5">
          {/* <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="max-w-full whitespace-nowrap overflow-x-auto h-14 dashboard-menu"
          >
            <Radio.Group
              options={options}
              onChange={onChange}
              value={location.pathname}
              optionType="button"
              buttonStyle="solid"
              size="large"
            />
          </div> */}
          <div className="flex gap-5 justify-end">
            <AiOutlineBars
              className="size-7 me-5 cursor-pointer"
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
                  {options.map((option) => {
                    return (
                      <li
                        key={option.value}
                        className="border-b border-gray-200 border-solid border-x-0 border-t-0 py-3"
                      >
                        <Link
                          onClick={() => setOpen(false)}
                          to={option.value}
                          className="no-underline text-[#1C1C1C] flex justify-between items-center"
                        >
                          {option.label}
                          <IoIosArrowForward className="size-4" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </Modal>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
