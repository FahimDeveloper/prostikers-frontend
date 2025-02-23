/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useAppSelector } from "./hooks/useAppHooks";
import { selectCurrentUser } from "./redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import UpdateUserInfoModal from "./components/ui/modal/UpdateUserInfoModal";
import { IUser } from "./types/user.types";
import logo from "./assets/icons/logo.svg";

const App = () => {
  const user = useAppSelector(selectCurrentUser);
  const [visible, setVisible] = useState(false);
  const allProperties: (keyof IUser)[] = [
    "first_name",
    "last_name",
    "image",
    "gender",
    "phone",
    "date_of_birth",
    // "country",
    // "zip_code",
    // "city",
    // "state",
    // "street_address",
  ];
  // const show = sessionStorage.getItem("show");
  // useEffect(() => {
  //   if (user) {
  //     const missingProperties = allProperties.filter((key) => !(key in user));
  //     if (missingProperties.length > 0 && show !== "inActive") {
  //       setVisible(true);
  //     } else {
  //       setVisible(false);
  //     }
  //   } else {
  //     setVisible(false);
  //   }
  // }, [user, show]);
  // const handleRemind = () => {
  //   setVisible(false);
  //   sessionStorage.setItem("show", "inActive");
  // };
  useEffect(() => {
    if (user) {
      const missingProperties = allProperties.filter((key) => !(key in user));
      if (missingProperties.length > 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    } else {
      setVisible(false);
    }
  }, [user]);
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
      <Modal
        closable={false}
        centered
        open={visible}
        maskClosable={false}
        footer={[
          // <Button onClick={handleRemind}>Remind me later</Button>,
          <div className="text-center">
            <UpdateUserInfoModal record={user} type="primary" />
          </div>,
        ]}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <div className="space-y-3 text-center">
          <img loading="lazy" src={logo} className="w-32" alt="logo" />
          <h3 className="sm:text-xl text-lg">Welcome To ProStrikers!</h3>
          {user?.verified ? (
            <p className="sm:text-base text-sm text-gray-600">
              We're excited to have you join our community! Please update your
              profile information to get the most out of ProStrikers.
            </p>
          ) : (
            <p className="sm:text-base text-sm text-gray-600">
              We're excited to have you join our community! We have sent you a
              verification email. Please complete your verification and update
              your profile information to get the most out of ProStrikers.
            </p>
          )}
        </div>
      </Modal>
      {/* nice job reviews popup */}
      <div className="nj-engage" data-position="left"></div>
    </>
  );
};

export default App;
