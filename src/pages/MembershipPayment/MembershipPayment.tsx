/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Checkout from "../../components/Checkout";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import { useCreateMembershipMutation } from "../../redux/features/user/userApi";

const MembershipPayment = () => {
  const { state } = useLocation();
  const [transactionId, setTransactionId] = useState("");
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [create, { data: createData, isError, isLoading, isSuccess, error }] =
    useCreateMembershipMutation();

  useEffect(() => {
    if (!state?.amount || !state?.data) {
      navigate("/membership");
    }
  }, [state]);

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        icon: "success",
        text: `${createData?.message}`,
        iconColor: "#0ABAC3",
        confirmButtonColor: "#0ABAC3",
      });
      navigate("/membership");
    }
    if (isError) {
      Swal.fire({
        title: "Oops!..",
        icon: "error",
        text: `${(error as any)?.data?.message || "something went wrong"}`,
        confirmButtonColor: "#0ABAC3",
      });
    }
  }, [isSuccess, isError]);
  const onSubmit = () => {
    const { data, month, amount } = state;
    data.status = true;
    const issueDate = new Date();
    data.issue_date = issueDate.toISOString();
    const expiryDate = new Date(issueDate);
    if (data?.plan === "monthly") {
      if (month) {
        expiryDate.setMonth(expiryDate.getMonth() + month);
      } else {
        expiryDate.setMonth(expiryDate.getMonth() + 1);
      }
    } else if (data?.plan === "yearly") {
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    }
    data.expiry_date = expiryDate.toISOString();
    const payload = {
      membership: { ...data },
      payment_info: {
        transaction_id: transactionId,
        email: user?.email,
        amount: amount,
      },
    };
    create({ id: user?._id, payload: payload });
  };
  return (
    <div className="min-h-svh py-16 flex justify-center items-center">
      {state?.amount && state?.data && (
        <Checkout
          setTransactionId={setTransactionId}
          isLoading={isLoading}
          amount={state?.amount}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

export default MembershipPayment;
