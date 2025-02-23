/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import Container from "../../../components/Container";
import { Link, NavLink, Outlet } from "react-router-dom";
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
      label: "One on one Appointments",
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
  return (
    <div className="min-h-svh mt-28">
      <Container>
        <div className="space-y-5">
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
                        <NavLink
                          onClick={() => setOpen(false)}
                          to={option.value}
                          end
                          className={({ isActive }) =>
                            `no-underline flex justify-between items-center ${
                              isActive ? "text-primary" : "text-[#1C1C1C]"
                            }`
                          }
                        >
                          {option.label}
                          <IoIosArrowForward className="size-4" />
                        </NavLink>
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
