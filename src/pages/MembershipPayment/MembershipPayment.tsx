/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useUpdateClientMutation } from "../../redux/features/client/clientApi";
import Checkout from "../../components/Checkout";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";

const MembershipPayment = () => {
  const { state } = useLocation();
  const { amount, data } = state;
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [update, { isError, isLoading, isSuccess, error }] =
    useUpdateClientMutation();
  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        icon: "success",
        text: `Membership proccess success`,
        iconColor: "#0ABAC3",
        confirmButtonColor: "#0ABAC3",
      });
      navigate("/");
    }
    if (isError) {
      Swal.fire({
        title: "Oops!..",
        icon: "error",
        text: `${(error as any)?.createData?.message}`,
        confirmButtonColor: "#0ABAC3",
      });
    }
  }, [isSuccess, isError, error, navigate]);
  const onSubmit = () => {
    data.status = true;
    const issueDate = new Date();
    data.issue_date = issueDate.toISOString();
    const expiryDate = new Date(issueDate);
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    data.expiry_date = expiryDate.toISOString();
    update({ id: user?._id, payload: data });
  };
  return (
    <div className="min-h-svh py-16 flex justify-center items-center">
      {amount && data && location && (
        <Checkout isLoading={isLoading} amount={amount} onSubmit={onSubmit} />
      )}
    </div>
  );
};

export default MembershipPayment;
