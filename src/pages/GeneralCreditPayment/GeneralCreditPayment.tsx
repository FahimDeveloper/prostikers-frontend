import Swal from "sweetalert2";
import Checkout from "../../components/Checkout";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAddGeneralCreditMutation } from "../../redux/features/client/clientApi";

const GeneralCreditPayment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const [transactionId, setTransactionId] = useState("");
  const [addCredit, { data, isError, isLoading, isSuccess, error }] =
    useAddGeneralCreditMutation();

  useEffect(() => {
    if (!state?.amount || !state?.data) {
      navigate("/");
    }
  }, [state]);

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        icon: "success",
        text: `${data?.message}`,
        iconColor: "#0ABAC3",
        confirmButtonColor: "#0ABAC3",
      });
      navigate("/dashboard#membership");
    }
    if (isError) {
      Swal.fire({
        title: "Oops!..",
        icon: "error",
        text: `${(error as any)?.data?.message || "something went wrong"}`,
        confirmButtonColor: "#0ABAC3",
      });
    }
  }, [isSuccess, isError, error]);
  const onSubmit = () => {
    const payload = {
      credit_info: { ...state?.data },
      payment_info: {
        transaction_id: transactionId,
        email: user?.email,
        amount: state?.amount,
      },
    };
    addCredit({ id: user?._id, payload });
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

export default GeneralCreditPayment;
