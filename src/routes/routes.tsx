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
import BaseBallOneTraining from "../pages/OneTrainingManagment/BaseBallOneTraining/BaseBallOneTraining";
import CricketOneTraining from "../pages/OneTrainingManagment/CricketOneTraining/CricketOneTraining";
import SoccerOneTraining from "../pages/OneTrainingManagment/SoccerOneTraining/SoccerOneTraining";
import HockyOneTraining from "../pages/OneTrainingManagment/HockyOneTraining/HockyOneTraining";
import SoftballOneTraining from "../pages/OneTrainingManagment/SoftballOneTraining/SoftballOneTraining";
import CricketGroupTraining from "../pages/GroupTrainingManagement/CricketGroupTraining/CricketGroupTraining";
import SoccerGroupTraining from "../pages/GroupTrainingManagement/SoccerGroupTraining/SoccerGroupTraining";
import HockyGroupTraining from "../pages/GroupTrainingManagement/HockyGroupTraining/HockyGroupTraining";
import SoftballGroupTraining from "../pages/GroupTrainingManagement/SoftballGroupTraining/SoftballGroupTraining";
import CricketKidsTraining from "../pages/KidsTrainingManagement/CricketKidsTraining/CricketKidsTraining";
import SoccerKidsTraining from "../pages/KidsTrainingManagement/SoccerKidsTraining/SoccerKidsTraining";
import SoftballKidsTraining from "../pages/KidsTrainingManagement/SoftballKidsTraining/SoftballKidsTraining";
import CricketBootcampTraining from "../pages/BootcampTrainingManagement/CricketBootcampTraining/CricketBootcampTraining";
import SoccerBootcampTraining from "../pages/BootcampTrainingManagement/SoccerBootcampTraining/SoccerBootcampTraining";
import HockyBootcampTraining from "../pages/BootcampTrainingManagement/HockyBootcampTraining/HockyBootcampTraining";
import SoftballBootcampTraining from "../pages/BootcampTrainingManagement/SoftballBootcampTraining/SoftballBootcampTraining";
import BaseBallGroupTraining from "../pages/GroupTrainingManagement/BaseBallGroupTraining/BaseBallGroupTraining";
import BaseBallKidsTraining from "../pages/KidsTrainingManagement/BaseBallKidsTraining/BaseBallKidsTraining";
import BaseBallBootcampTraining from "../pages/BootcampTrainingManagement/BaseBallBootcampTraining/BaseBallBootcampTraining";
import Affiliate from "../pages/Affiliate/Affiliate";
import Franchise from "../pages/Franchise/Franchise";

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
        path: "/sport/hockey",
        element: <SportHocky />,
      },
      {
        path: "/programs/one-training",
        element: <App />,
        children: [
          {
            path: "/programs/one-training",
            element: <OneTraining />,
          },
          {
            path: "baseball",
            element: <BaseBallOneTraining />,
          },
          {
            path: "cricket",
            element: <CricketOneTraining />,
          },
          {
            path: "soccer",
            element: <SoccerOneTraining />,
          },
          {
            path: "hockey",
            element: <HockyOneTraining />,
          },
          {
            path: "softball",
            element: <SoftballOneTraining />,
          },
        ],
      },
      {
        path: "/programs/group-training",
        element: <App />,
        children: [
          {
            path: "/programs/group-training",
            element: <GroupTraining />,
          },
          {
            path: "baseball",
            element: <BaseBallGroupTraining />,
          },
          {
            path: "cricket",
            element: <CricketGroupTraining />,
          },
          {
            path: "soccer",
            element: <SoccerGroupTraining />,
          },
          {
            path: "hockey",
            element: <HockyGroupTraining />,
          },
          {
            path: "softball",
            element: <SoftballGroupTraining />,
          },
        ],
      },
      {
        path: "/programs/kids-training",
        element: <App />,
        children: [
          {
            path: "/programs/kids-training",
            element: <KidsTraining />,
          },
          {
            path: "baseball",
            element: <BaseBallKidsTraining />,
          },
          {
            path: "cricket",
            element: <CricketKidsTraining />,
          },
          {
            path: "soccer",
            element: <SoccerKidsTraining />,
          },
          {
            path: "softball",
            element: <SoftballKidsTraining />,
          },
        ],
      },
      {
        path: "/programs/bootcamp-training",
        element: <App />,
        children: [
          {
            path: "/programs/bootcamp-training",
            element: <BootcampTraining />,
          },
          {
            path: "baseball",
            element: <BaseBallBootcampTraining />,
          },
          {
            path: "cricket",
            element: <CricketBootcampTraining />,
          },
          {
            path: "soccer",
            element: <SoccerBootcampTraining />,
          },
          {
            path: "hockey",
            element: <HockyBootcampTraining />,
          },
          {
            path: "softball",
            element: <SoftballBootcampTraining />,
          },
        ],
      },
      {
        path: "/programs/tten-league",
        element: <TtenLeague />,
      },
      {
        path: "/franchise",
        element: <Franchise />,
      },
      {
        path: "/affiliate",
        element: <Affiliate />,
      },
    ],
  },
]);
