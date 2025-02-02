/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useAppSelector } from "./hooks/useAppHooks";
import { selectCurrentUser } from "./redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import UpdateUserInfoModal from "./components/ui/modal/UpdateUserInfoModal";
import { IUser } from "./types/user.types";

const App = () => {
  const user = useAppSelector(selectCurrentUser);
  const [visible, setVisible] = useState(false);
  const allProperties: (keyof IUser)[] = [
    "first_name",
    "last_name",
    "image",
    "gender",
    "phone",
    "street_address",
    "zip_code",
    "city",
    "state",
    "country",
    "date_of_birth",
  ];
  const show = sessionStorage.getItem("show");
  useEffect(() => {
    if (user) {
      const missingProperties = allProperties.filter((key) => !(key in user));
      if (missingProperties.length > 0 && show !== "inActive") {
        setVisible(true);
      } else {
        setVisible(false);
      }
    } else {
      setVisible(false);
    }
  }, [user, show]);
  const handleRemind = () => {
    setVisible(false);
    sessionStorage.setItem("show", "inActive");
  };
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
          <Button onClick={handleRemind}>Remind me later</Button>,
          <UpdateUserInfoModal record={user} type="primary" />,
        ]}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <div className="space-y-3">
          <h3 className="text-xl text-center">Welcome To ProStrikers!</h3>
          <p className="text-base text-gray-600 text-center">
            We're excited to have you join our community! Please verify and
            update your profile information to get the most out of ProStrikers.
          </p>
        </div>
      </Modal>
      {/* nice job reviews popup */}
      <div className="nj-engage" data-position="left"></div>
    </>
  );
};

export default App;
