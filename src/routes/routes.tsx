import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Membership from "../pages/Membership/Membership";
import Rental from "../pages/Rental/Rental";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import SportBaseball from "../pages/SportBaseball/SportBaseball";
import SportHocky from "../pages/SportHocky/SportHocky";
import SportSoftball from "../pages/SportSoftball/SportSoftball";
import SportCricket from "../pages/SportCricket/SportCricket";
import SportSoccer from "../pages/SportSoccer/SportSoccer";

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
        path: "/program-baseball",
        element: <SportBaseball />,
      },
      {
        path: "/program-soccer",
        element: <SportSoccer />,
      },
      {
        path: "/program-cricket",
        element: <SportCricket />,
      },
      {
        path: "/program-softball",
        element: <SportSoftball />,
      },
      {
        path: "/program-hocky",
        element: <SportHocky />,
      },
    ],
  },
]);
