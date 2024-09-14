import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  updateUserInfo,
} from "../../../redux/features/auth/authSlice";
import { useClientQuery } from "../../../redux/features/client/clientApi";
import ProfileSection from "./components/ProfileSection";
import MembershipSection from "./components/MembershipSection";
import PaymentSection from "./components/PaymentSection";
import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/useAppHooks";

const Profile = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const { data: userData } = useClientQuery(user?._id);
  useEffect(() => {
    if (userData) {
      dispatch(updateUserInfo(userData?.results));
    }
  }, [userData, dispatch]);
  return (
    <div className="lg:pb-14 md:pb-12 pb-10 space-y-10">
      <ProfileSection data={userData?.results} />
      <MembershipSection data={userData?.results} />
      <PaymentSection />
    </div>
  );
};

export default Profile;
