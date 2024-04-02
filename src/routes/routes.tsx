import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Membership from "../pages/Membership/Membership";
import Rental from "../pages/Rental/Rental";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Academy from "../pages/Academy/Academy";
import SportBaseball from "../pages/SportBaseball/SportBaseball";
import SportSoccer from "../pages/SportSoccer/SportSoccer";
import SportCricket from "../pages/SportCricket/SportCricket";
import SportSoftball from "../pages/SportSoftball/SportSoftball";
import SportHocky from "../pages/SportHocky/SportHocky";
import OneTraining from "../pages/OneTraining/OneTraining";
import GroupTraining from "../pages/GroupTraining/GroupTraining";
import KidsTraining from "../pages/KidsTraining/KidsTraining";
import BootcampTraining from "../pages/BootcampTraining/BootcampTraining";
import TtenLeague from "../pages/TtenLeague/TtenLeague";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/rental",
        element: <Rental />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/academy",
        element: <Academy />,
      },
      {
        path: "/sport/baseball",
        element: <SportBaseball />,
      },
      {
        path: "/sport/soccer",
        element: <SportSoccer />,
      },
      {
        path: "/sport/cricket",
        element: <SportCricket />,
      },
      {
        path: "/sport/softball",
        element: <SportSoftball />,
      },
      {
        path: "/sport/hocky",
        element: <SportHocky />,
      },
      {
        path: "/program/one-training",
        element: <OneTraining />,
      },
      {
        path: "/program/group-training",
        element: <GroupTraining />,
      },
      {
        path: "/program/kids-training",
        element: <KidsTraining />,
      },
      {
        path: "/program/bootcamp-training",
        element: <BootcampTraining />,
      },
      {
        path: "/program/tten-league",
        element: <TtenLeague />,
      },
    ],
  },
]);
