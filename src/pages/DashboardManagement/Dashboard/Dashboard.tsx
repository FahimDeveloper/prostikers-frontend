/* eslint-disable @typescript-eslint/no-explicit-any */
import { Radio, RadioChangeEvent } from "antd";
import Container from "../../../components/Container";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    navigate(value);
  };
  const scrollRef = useRef<any | null>(null);
  let isDown = false;
  let startX: any;
  let scrollLeft: any;

  const handleMouseDown = (e: { pageX: number }) => {
    isDown = true;
    scrollRef.current.classList.add("active");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseMove = (e: {
    preventDefault: () => void;
    pageX: number;
  }) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <div className="min-h-svh mt-32">
      <Container>
        <div className="space-y-10">
          <div
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
