import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
      {/* nice job reviews popup */}
      <div className="nj-engage" data-position="left"></div>
    </>
  );
};

export default App;
