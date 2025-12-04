import { Modal } from "antd";
import { useAppSelector } from "../../../hooks/useAppHooks";
import { useEffect, useState } from "react";
import { IUser } from "../../../types/user.types";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import UpdateUserInfoModal from "./UpdateUserInfoModal";
import logo from "../../../assets/images/logo.png";

const ForceUpdateModal = () => {
  const user = useAppSelector(selectCurrentUser);
  const [visible, setVisible] = useState(false);
  const allProperties: (keyof IUser)[] = [
    "first_name",
    "last_name",
    "image",
    "gender",
    "phone",
    "date_of_birth",
  ];
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
    <Modal
      closable={false}
      centered
      open={visible}
      maskClosable={false}
      footer={null}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
    >
      <div className="space-y-3 text-center">
        <img loading="lazy" src={logo} className="w-32" alt="logo" />
        <h3 className="sm:text-xl text-lg">Welcome To ProStrikers!</h3>
        {user?.verified ? (
          <div className="space-y-3">
            <p className="sm:text-base text-sm text-gray-600">
              We're excited to have you join our community! Please update your
              profile information to get the most out of ProStrikers.
            </p>
            <div className="text-center">
              <UpdateUserInfoModal record={user} type="primary" size="large" />
            </div>
          </div>
        ) : (
          <p className="sm:text-base text-sm text-gray-600">
            We're excited to have you join our community! We have sent you a
            verification email. Please complete your verification.
          </p>
        )}
      </div>
    </Modal>
  );
};

export default ForceUpdateModal;
