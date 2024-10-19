import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useClientQuery } from "../../../redux/features/client/clientApi";
import ProfileSection from "./components/ProfileSection";
import MembershipSection from "./components/MembershipSection";
import PaymentSection from "./components/PaymentSection";

const Profile = () => {
  const user = useSelector(selectCurrentUser);
  const { data: userData } = useClientQuery(user?._id);
  return (
    <div className="lg:pb-14 md:pb-12 pb-10 space-y-10">
      <ProfileSection data={userData?.results} />
      <MembershipSection data={userData?.results} />
      <PaymentSection />
    </div>
  );
};

export default Profile;
