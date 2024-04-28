import { Outlet, ScrollRestoration } from "react-router-dom";

const OneTrainingOutlet = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default OneTrainingOutlet;
