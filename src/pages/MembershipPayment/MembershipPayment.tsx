import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import MembershipCheckout from "../../components/MembershipCheckout";

const MembershipPayment = () => {
  const { state } = useLocation();
  const { data, amount } = state;
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!state?.amount || !state?.data) {
      navigate("/membership");
    }
  }, [state]);

  return (
    <div className="min-h-svh py-16 flex justify-center items-center">
      {state?.amount && state?.data && (
        <MembershipCheckout
          email={user?.email!}
          plan={data?.plan}
          membership={data?.package_name}
          amount={amount}
        />
      )}
    </div>
  );
};

export default MembershipPayment;
