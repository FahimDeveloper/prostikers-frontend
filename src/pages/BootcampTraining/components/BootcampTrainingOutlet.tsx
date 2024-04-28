import { Outlet, ScrollRestoration } from "react-router-dom";

const BootcampTrainingOutlet = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default BootcampTrainingOutlet;
