import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ForceUpdateModal from "./components/ui/modal/ForceUpdateModal";
import WaiverSign from "./components/WaiverSign";
import EmitrrChat from "./components/EmitrrChat";
import BlackFridayGiftModal from "./components/ui/modal/BlackFridayGiftModal";

const App = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
      <ForceUpdateModal />
      {/* <SubscribeModal /> */}
      <WaiverSign />
      <EmitrrChat />
      <BlackFridayGiftModal />
      {/* <BlackFridayMembershipModal /> */}
      <div className="nj-engage" data-position="left"></div>
    </>
  );
};

export default App;
