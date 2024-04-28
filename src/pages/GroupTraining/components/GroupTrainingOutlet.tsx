import { Outlet, ScrollRestoration } from "react-router-dom";

const GroupTrainingOutlet = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default GroupTrainingOutlet;
