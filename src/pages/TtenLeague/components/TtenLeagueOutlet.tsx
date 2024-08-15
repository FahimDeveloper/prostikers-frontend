import { Outlet, ScrollRestoration } from "react-router-dom";

const TtenLeagueOutlet = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default TtenLeagueOutlet;
