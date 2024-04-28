import { Outlet, ScrollRestoration } from "react-router-dom";

const KidsTrainingOutlet = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default KidsTrainingOutlet;
