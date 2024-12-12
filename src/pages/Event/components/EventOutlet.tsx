import { Outlet, ScrollRestoration } from "react-router-dom";

const EventOutlet = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default EventOutlet;
