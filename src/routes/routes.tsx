/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import LazyLoad from "../components/LazyLoad";
import { lazy } from "react";
import PrivetRoute from "./PrivetRoute";
import ProtectAuthRoute from "./ProtectAuthRoute";
import ViewCart from "../pages/ViewCart/ViewCart";
import ShopCheckOut from "../pages/ShopCheckOut/ShopCheckOut";
const ShopPayment = LazyLoad(
  lazy(() => import("../pages/ShopPayment/ShopPayment"))
);
const ProductPage = LazyLoad(
  lazy(() => import("../pages/ProductPage/ProductPage"))
);
const MyBundleCreditPacks = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/DashboardManagement/MyBundleCreditPacks/MyBundleCreditPacks"
      )
  )
);

const BundleCagePayment = LazyLoad(
  lazy(() => import("../pages/BundleCagePayment/BundleCagePayment"))
);

const VerifyUser = LazyLoad(
  lazy(() => import("../pages/VerifyUser/VerifyUser"))
);
// const BlackFridayMembership = LazyLoad(
//   lazy(() => import("../pages/BlackFridayMembership/BlackFridayMembership"))
// );

const ChristmasSpecialMembership = LazyLoad(
  lazy(
    () =>
      import("../pages/ChristmasSpecialMembership/ChristmasSpecialMembership")
  )
);
const Dashboard = LazyLoad(
  lazy(() => import("../pages/DashboardManagement/Dashboard/Dashboard"))
);
const Profile = LazyLoad(
  lazy(() => import("../pages/DashboardManagement/Profile/Profile"))
);
const MyClasses = LazyLoad(
  lazy(() => import("../pages/DashboardManagement/MyClasses/MyClasses"))
);
const MyRentalFacilities = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/DashboardManagement/MyRentalFacilities/MyRentalFacilities"
      )
  )
);
const MyBootcamps = LazyLoad(
  lazy(() => import("../pages/DashboardManagement/MyBootcamps/MyBootcamps"))
);
const MyGroupAppointments = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/DashboardManagement/MyGroupAppointments/MyGroupAppointments"
      )
  )
);
const MyOneOnOneAppointments = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/DashboardManagement/MyOneOnOneAppointments/MyOneOnOneAppointments"
      )
  )
);
const MyGroupEvents = LazyLoad(
  lazy(() => import("../pages/DashboardManagement/MyGroupEvents/MyGroupEvents"))
);
const MyIndividualEvents = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/DashboardManagement/MyIndividualEvents/MyIndividualEvents"
      )
  )
);
const MembershipPayment = LazyLoad(
  lazy(() => import("../pages/MembershipPayment/MembershipPayment"))
);
const KidsTrainingPayment = LazyLoad(
  lazy(() => import("../pages/KidsTrainingPayment/KidsTrainingPayment"))
);
const Blogs = LazyLoad(lazy(() => import("../pages/Blogs/Blogs")));
const SingleBlog = LazyLoad(
  lazy(() => import("../pages/SingleBlog/SingleBlog"))
);
const BaseballGroupTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/GroupTrainingManagement/BaseballGroupTrainingReservation/BaseballGroupTrainingReservation"
      )
  )
);
const SoccerGroupTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/GroupTrainingManagement/SoccerGroupTrainingReservation/SoccerGroupTrainingReservation"
      )
  )
);
const HockeyGroupTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/GroupTrainingManagement/HockeyGroupTrainingReservation/HockeyGroupTrainingReservation"
      )
  )
);
const SoftballGroupTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/GroupTrainingManagement/SoftballGroupTrainingReservation/SoftballGroupTrainingReservation"
      )
  )
);
const CricketGroupTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/GroupTrainingManagement/CricketGroupTrainingReservation/CricketGroupTrainingReservation"
      )
  )
);
// const RentalMembership = LazyLoad(
//   lazy(() => import("../pages/RentalMembership/RentalMembership"))
// );
const RentalBookingPage = LazyLoad(
  lazy(() => import("../pages/RentalBookingPage/RentalBookingPage"))
);
const BaseballOneTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/OneTrainingManagment/BaseballOneTrainingReservation/BaseballOneTrainingReservation"
      )
  )
);
const CricketOneTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/OneTrainingManagment/CricketOneTrainingReservation/CricketOneTrainingReservation"
      )
  )
);
const SoccerOneTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/OneTrainingManagment/SoccerOneTrainingReservation/SoccerOneTrainingReservation"
      )
  )
);
const HockeyOneTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/OneTrainingManagment/HockeyOneTrainingReservation/HockeyOneTrainingReservation"
      )
  )
);
const ResetPassword = LazyLoad(
  lazy(() => import("../pages/ResetPassword/ResetPassword"))
);
const VerifyCode = LazyLoad(
  lazy(() => import("../pages/VerifyCode/VerifyCode"))
);
const ForgetPassword = LazyLoad(
  lazy(() => import("../pages/FogetPassword/ForgetPassword"))
);
const BootcampPayment = LazyLoad(
  lazy(() => import("../pages/BootcampPayment/BootcampPayment"))
);
const GroupAppointmentPayment = LazyLoad(
  lazy(() => import("../pages/GroupAppointmentPayment/GroupAppointmentPayment"))
);
const OneOnOneAppointmentPayment = LazyLoad(
  lazy(
    () =>
      import("../pages/OneOnOneAppointmentPayment/OneOnOneAppointmentPayment")
  )
);
const FacilityPayment = LazyLoad(
  lazy(() => import("../pages/FacilityPayment/FacilityPayment"))
);
const EventGroupPayment = LazyLoad(
  lazy(() => import("../pages/EventGroupPayment/EventGroupPayment"))
);
const EventIndividualPayment = LazyLoad(
  lazy(() => import("../pages/EventIndividualPayment/EventIndividualPayment"))
);
const BaseballKidsTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/KidsTrainingManagement/BaseballKidsTrainingReservation/BaseballKidsTrainingReservation"
      )
  )
);
const CricketKidsTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/KidsTrainingManagement/CricketKidsTrainingReservation/CricketKidsTrainingReservation"
      )
  )
);
const SoccerKidsTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/KidsTrainingManagement/SoccerKidsTrainingReservation/SoccerKidsTrainingReservation"
      )
  )
);
const HockeyKidsTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/KidsTrainingManagement/HockeyKidsTrainingReservation/HockeyKidsTrainingReservation"
      )
  )
);
const SoftballKidsTrainingReservation = LazyLoad(
  lazy(
    () =>
      import(
        "../pages/KidsTrainingManagement/SoftballKidsTrainingReservation/SoftballKidsTrainingReservation"
      )
  )
);
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
const RentalFacility = LazyLoad(
  lazy(() => import("../pages/RentalFacility/RentalFacility"))
);
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
      // {
      //   path: "/black-friday/membership",
      //   element: <BlackFridayMembership />,
      // },
      {
        path: "/christmas-special/membership",
        element: <ChristmasSpecialMembership />,
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
        path: "/forget-password",
        element: (
          <ProtectAuthRoute>
            <ForgetPassword />
          </ProtectAuthRoute>
        ),
      },
      {
        path: "/reset-password/:id/:token",
        element: (
          <ProtectAuthRoute>
            <ResetPassword />
          </ProtectAuthRoute>
        ),
      },
      {
        path: "/reset-password/:id/:token/verify",
        element: (
          <ProtectAuthRoute>
            <VerifyCode />
          </ProtectAuthRoute>
        ),
      },
      {
        path: "/user/verify/:token",
        element: <VerifyUser />,
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
        path: "/facility-payment",
        element: (
          <PrivetRoute>
            <FacilityPayment />
          </PrivetRoute>
        ),
      },
      {
        path: "/event-group-payment",
        element: (
          <PrivetRoute>
            <EventGroupPayment />
          </PrivetRoute>
        ),
      },
      {
        path: "/shop-payment",
        element: (
          <PrivetRoute>
            <ShopPayment />
          </PrivetRoute>
        ),
      },
      {
        path: "/event-individual-payment",
        element: (
          <PrivetRoute>
            <EventIndividualPayment />
          </PrivetRoute>
        ),
      },
      {
        path: "/bootcamp-payment",
        element: (
          <PrivetRoute>
            <BootcampPayment />
          </PrivetRoute>
        ),
      },
      {
        path: "/group-appointment-payment",
        element: (
          <PrivetRoute>
            <GroupAppointmentPayment />
          </PrivetRoute>
        ),
      },
      {
        path: "/one-appointment-payment",
        element: (
          <PrivetRoute>
            <OneOnOneAppointmentPayment />
          </PrivetRoute>
        ),
      },
      {
        path: "/bundle-cage-payment",
        element: (
          <PrivetRoute>
            <BundleCagePayment />
          </PrivetRoute>
        ),
      },
      {
        path: "/class-payment",
        element: (
          <PrivetRoute>
            <KidsTrainingPayment />
          </PrivetRoute>
        ),
      },
      {
        path: "/membership-payment",
        element: (
          <PrivetRoute>
            <MembershipPayment />
          </PrivetRoute>
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
        path: "/cart",
        element: <ViewCart />,
      },
      {
        path: "/checkout",
        element: <ShopCheckOut />,
      },
      {
        path: "/shop/products/:id",
        element: <ProductPage />,
      },
      {
        path: "/rental-facility",
        element: <RentalFacility />,
      },
      // {
      //   path: "/rental-membership",
      //   element: (
      //     <PrivetRoute>
      //       <RentalMembership />
      //     </PrivetRoute>
      //   ),
      // },
      {
        path: "/rental-booking",
        element: (
          <PrivetRoute>
            <RentalBookingPage />
          </PrivetRoute>
        ),
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
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
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
          {
            path: "baseball/:id",
            element: (
              <PrivetRoute>
                <BaseballOneTrainingReservation />
              </PrivetRoute>
            ),
          },
          {
            path: "cricket/:id",
            element: (
              <PrivetRoute>
                <CricketOneTrainingReservation />
              </PrivetRoute>
            ),
          },
          {
            path: "soccer/:id",
            element: (
              <PrivetRoute>
                <SoccerOneTrainingReservation />
              </PrivetRoute>
            ),
          },
          {
            path: "hockey/:id",
            element: (
              <PrivetRoute>
                <HockeyOneTrainingReservation />
              </PrivetRoute>
            ),
          },
          {
            path: "softball/:id",
            element: (
              <PrivetRoute>
                <SoftballGroupTrainingReservation />
              </PrivetRoute>
            ),
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
          {
            path: "baseball/:id",
            element: (
              <PrivetRoute>
                <BaseballGroupTrainingReservation />
              </PrivetRoute>
            ),
          },
          {
            path: "cricket/:id",
            element: (
              <PrivetRoute>
                <CricketGroupTrainingReservation />
              </PrivetRoute>
            ),
          },
          {
            path: "soccer/:id",
            element: (
              <PrivetRoute>
                <SoccerGroupTrainingReservation />
              </PrivetRoute>
            ),
          },
          {
            path: "hockey/:id",
            element: (
              <PrivetRoute>
                <HockeyGroupTrainingReservation />
              </PrivetRoute>
            ),
          },
          {
            path: "softball/:id",
            element: (
              <PrivetRoute>
                <SoftballGroupTrainingReservation />
              </PrivetRoute>
            ),
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
          {
            path: "baseball/:id",
            element: (
              <PrivetRoute>
                <BaseballKidsTrainingReservation />
              </PrivetRoute>
            ),
          },
          {
            path: "cricket/:id",
            element: (
              <PrivetRoute>
                <CricketKidsTrainingReservation />
              </PrivetRoute>
            ),
          },
          {
            path: "soccer/:id",
            element: (
              <PrivetRoute>
                <SoccerKidsTrainingReservation />
              </PrivetRoute>
            ),
          },
          {
            path: "hockey/:id",
            element: (
              <PrivetRoute>
                <HockeyKidsTrainingReservation />
              </PrivetRoute>
            ),
          },
          {
            path: "softball/:id",
            element: (
              <PrivetRoute>
                <SoftballKidsTrainingReservation />
              </PrivetRoute>
            ),
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
            path: "group",
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
            path: "group/:id",
            element: (
              <PrivetRoute>
                <JoinAsTeamRegistration />
              </PrivetRoute>
            ),
          },
        ],
      },
      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <Dashboard />
          </PrivetRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: (
              <PrivetRoute>
                <Profile />
              </PrivetRoute>
            ),
          },
          {
            path: "my-bundle-credit-packs",
            element: (
              <PrivetRoute>
                <MyBundleCreditPacks />
              </PrivetRoute>
            ),
          },
          {
            path: "my-classes",
            element: (
              <PrivetRoute>
                <MyClasses />
              </PrivetRoute>
            ),
          },
          {
            path: "my-group-appointments",
            element: (
              <PrivetRoute>
                <MyGroupAppointments />
              </PrivetRoute>
            ),
          },
          {
            path: "my-one-on-one-appointments",
            element: (
              <PrivetRoute>
                <MyOneOnOneAppointments />
              </PrivetRoute>
            ),
          },
          {
            path: "my-rental-facilities",
            element: (
              <PrivetRoute>
                <MyRentalFacilities />
              </PrivetRoute>
            ),
          },
          {
            path: "my-bootcamps",
            element: (
              <PrivetRoute>
                <MyBootcamps />
              </PrivetRoute>
            ),
          },
          {
            path: "my-individual-events",
            element: (
              <PrivetRoute>
                <MyIndividualEvents />
              </PrivetRoute>
            ),
          },
          {
            path: "my-team-events",
            element: (
              <PrivetRoute>
                <MyGroupEvents />
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
