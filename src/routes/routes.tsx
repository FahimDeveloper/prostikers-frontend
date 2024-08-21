/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import LazyLoad from "../components/LazyLoad";
import { lazy } from "react";
import PrivetRoute from "./PrivetRoute";
import ProtectAuthRoute from "./ProtectAuthRoute";
const Login = LazyLoad(lazy(() => import("../pages/Login/Login")));
const Registration = LazyLoad(
  lazy(() => import("../pages/Registration/Registration"))
);
const EventOutlet = LazyLoad(
  lazy(() => import("../pages/Event/components/EventOutlet"))
);
const JoinAsIndividual = LazyLoad(
  lazy(
    () => import("../pages/EventManagement/JoinAsIndividual/JoinAsIndividual")
  )
);
const JoinAsTeam = LazyLoad(
  lazy(() => import("../pages/EventManagement/JoinAsTeam/JoinAsTeam"))
);
const JoinAsIndividualRegistration = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/EventManagement/JoinAsIndividualRegistration/JoinAsIndividualRegistration"
      )
  )
);
const JoinAsTeamRegistration = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/EventManagement/JoinAsTeamRegistration/JoinAsTeamRegistration"
      )
  )
);
const BaseBallBootcampTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/BootcampTrainingManagement/BaseBallBootcampTrainingReservation/BaseBallBootcampTrainingReservation"
      )
  )
);
const CricketBootcampTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/BootcampTrainingManagement/CricketBootcampTrainingReservation/CricketBootcampTrainingReservation"
      )
  )
);
const SoccerBootcampTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/BootcampTrainingManagement/SoccerBootcampTrainingReservation/SoccerBootcampTrainingReservation"
      )
  )
);
const HockeyBootcampTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/BootcampTrainingManagement/HockeyBootcampTrainingReservation/HockeyBootcampTrainingReservation"
      )
  )
);
const SoftballBootcampTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/BootcampTrainingManagement/SoftballBootcampTrainingReservation/SoftballBootcampTrainingReservation"
      )
  )
);
const KidsTrainingOutlet = LazyLoad(
  lazy(() => import("../pages/KidsTraining/components/KidsTrainingOutlet"))
);
const HockeyKidsTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/KidsTrainingManagement/HockeyKidsTraining/HockeyKidsTraining"
      )
  )
);
const App = LazyLoad(lazy(() => import("../App")));
const Home = LazyLoad(lazy(() => import("../pages/Home/Home")));
const Membership = LazyLoad(
  lazy(() => import("../pages/Membership/Membership"))
);
const Rental = LazyLoad(lazy(() => import("../pages/Rental/Rental")));
const About = LazyLoad(lazy(() => import("../pages/About/About")));
const Contact = LazyLoad(lazy(() => import("../pages/Contact/Contact")));
const Academy = LazyLoad(lazy(() => import("../pages/Academy/Academy")));
const SportBaseball = LazyLoad(
  lazy(() => import("../pages/SportBaseball/SportBaseball"))
);
const SportSoccer = LazyLoad(
  lazy(() => import("../pages/SportSoccer/SportSoccer"))
);
const SportCricket = LazyLoad(
  lazy(() => import("../pages/SportCricket/SportCricket"))
);
const SportSoftball = LazyLoad(
  lazy(() => import("../pages/SportSoftball/SportSoftball"))
);
const SportHocky = LazyLoad(
  lazy(() => import("../pages/SportHocky/SportHocky"))
);
const OneTraining = LazyLoad(
  lazy(() => import("../pages/OneTraining/OneTraining"))
);
const GroupTraining = LazyLoad(
  lazy(() => import("../pages/GroupTraining/GroupTraining"))
);
const KidsTraining = LazyLoad(
  lazy(() => import("../pages/KidsTraining/KidsTraining"))
);
const BootcampTraining = LazyLoad(
  lazy(() => import("../pages/BootcampTraining/BootcampTraining"))
);
const Event = LazyLoad(lazy(() => import("../pages/Event/Event")));
const BaseBallOneTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/OneTrainingManagment/BaseBallOneTraining/BaseBallOneTraining"
      )
  )
);
const CricketOneTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/OneTrainingManagment/CricketOneTraining/CricketOneTraining"
      )
  )
);
const SoccerOneTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/OneTrainingManagment/SoccerOneTraining/SoccerOneTraining"
      )
  )
);
const HockyOneTraining = LazyLoad(
  lazy(
    () =>
      import("../pages/OneTrainingManagment/HockyOneTraining/HockyOneTraining")
  )
);
const SoftballOneTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/OneTrainingManagment/SoftballOneTraining/SoftballOneTraining"
      )
  )
);
const CricketGroupTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/GroupTrainingManagement/CricketGroupTraining/CricketGroupTraining"
      )
  )
);
const SoccerGroupTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/GroupTrainingManagement/SoccerGroupTraining/SoccerGroupTraining"
      )
  )
);
const HockyGroupTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/GroupTrainingManagement/HockyGroupTraining/HockyGroupTraining"
      )
  )
);
const SoftballGroupTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/GroupTrainingManagement/SoftballGroupTraining/SoftballGroupTraining"
      )
  )
);
const CricketKidsTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/KidsTrainingManagement/CricketKidsTraining/CricketKidsTraining"
      )
  )
);
const SoccerKidsTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/KidsTrainingManagement/SoccerKidsTraining/SoccerKidsTraining"
      )
  )
);
const SoftballKidsTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/KidsTrainingManagement/SoftballKidsTraining/SoftballKidsTraining"
      )
  )
);
const CricketBootcampTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/BootcampTrainingManagement/CricketBootcampTraining/CricketBootcampTraining"
      )
  )
);
const SoccerBootcampTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/BootcampTrainingManagement/SoccerBootcampTraining/SoccerBootcampTraining"
      )
  )
);
const HockyBootcampTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/BootcampTrainingManagement/HockyBootcampTraining/HockyBootcampTraining"
      )
  )
);
const SoftballBootcampTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/BootcampTrainingManagement/SoftballBootcampTraining/SoftballBootcampTraining"
      )
  )
);
const BaseBallGroupTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/GroupTrainingManagement/BaseBallGroupTraining/BaseBallGroupTraining"
      )
  )
);
const BaseBallKidsTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/KidsTrainingManagement/BaseBallKidsTraining/BaseBallKidsTraining"
      )
  )
);
const BaseBallBootcampTraining = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/BootcampTrainingManagement/BaseBallBootcampTraining/BaseBallBootcampTraining"
      )
  )
);
const Affiliate = LazyLoad(lazy(() => import("../pages/Affiliate/Affiliate")));
const Franchise = LazyLoad(lazy(() => import("../pages/Franchise/Franchise")));
const ComingSoon = LazyLoad(
  lazy(() => import("../pages/ComingSoon/ComingSoon"))
);
const Shop = LazyLoad(lazy(() => import("../pages/Shop/Shop")));
const OneTrainingOutlet = LazyLoad(
  lazy(() => import("../pages/OneTraining/components/OneTrainingOutlet"))
);
const GroupTrainingOutlet = LazyLoad(
  lazy(() => import("../pages/GroupTraining/components/GroupTrainingOutlet"))
);
const BootcampTrainingOutlet = LazyLoad(
  lazy(
    () => import("../pages/BootcampTraining/components/BootcampTrainingOutlet")
  )
);
const Error = LazyLoad(lazy(() => import("../pages/Error/Error")));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <ProtectAuthRoute>
            <Login />
          </ProtectAuthRoute>
        ),
      },
      {
        path: "/registration",
        element: (
          <ProtectAuthRoute>
            <Registration />
          </ProtectAuthRoute>
        ),
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/shop",
        element: <Shop />,
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
        element: <OneTrainingOutlet />,
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
        element: <GroupTrainingOutlet />,
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
        element: <KidsTrainingOutlet />,
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
            path: "hockey",
            element: <HockeyKidsTraining />,
          },
          {
            path: "softball",
            element: <SoftballKidsTraining />,
          },
        ],
      },
      {
        path: "/programs/bootcamp-training",
        element: <BootcampTrainingOutlet />,
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
          {
            path: "baseball/:id",
            element: (
              <PrivetRoute>
                <BaseBallBootcampTrainingReservation />
              </PrivetRoute>
            ),
          },
          {
            path: "cricket/:id",
            element: (
              <PrivetRoute>
                <CricketBootcampTrainingReservation />
              </PrivetRoute>
            ),
          },
          {
            path: "soccer/:id",
            element: (
              <PrivetRoute>
                <SoccerBootcampTrainingReservation />
              </PrivetRoute>
            ),
          },
          {
            path: "hockey/:id",
            element: (
              <PrivetRoute>
                <HockeyBootcampTrainingReservation />
              </PrivetRoute>
            ),
          },
          {
            path: "softball/:id",
            element: (
              <PrivetRoute>
                <SoftballBootcampTrainingReservation />
              </PrivetRoute>
            ),
          },
        ],
      },
      {
        path: "/programs/events",
        element: <EventOutlet />,
        children: [
          {
            path: "/programs/events",
            element: <Event />,
          },
          {
            path: "individual",
            element: <JoinAsIndividual />,
          },
          {
            path: "team",
            element: <JoinAsTeam />,
          },
          {
            path: "individual/:id",
            element: (
              <PrivetRoute>
                <JoinAsIndividualRegistration />
              </PrivetRoute>
            ),
          },
          {
            path: "team/:id",
            element: (
              <PrivetRoute>
                <JoinAsTeamRegistration />
              </PrivetRoute>
            ),
          },
        ],
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
