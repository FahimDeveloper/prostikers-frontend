import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useClientQuery } from "../../../redux/features/client/clientApi";
import ProfileSection from "./components/ProfileSection";
import MembershipSection from "./components/MembershipSection";
import PaymentSection from "./components/PaymentSection";
import { FaSpinner } from "react-icons/fa";

const Profile = () => {
  const user = useSelector(selectCurrentUser);
  const { data: userData, isLoading } = useClientQuery(user?._id);
  return (
    <div className="lg:pb-14 md:pb-12 pb-10 space-y-10">
      {isLoading ? (
        <div className="h-44 flex justify-center items-center">
          <FaSpinner className="animate-spin size-7 text-primary" />
        </div>
      ) : (
        <>
          <ProfileSection data={userData?.results} />
          <MembershipSection data={userData?.results} />
        </>
      )}
      <PaymentSection />
    </div>
  );
};

export default Profile;
