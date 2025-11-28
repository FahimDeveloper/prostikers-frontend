import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Checkout from "../../components/Checkout";
import Swal from "sweetalert2";
import { usePurchaseGiftCardMutation } from "../../redux/features/giftCard/giftCardApi";

const GiftCardPayment = () => {
  const { state } = useLocation();
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();
  const [create, { data: createData, isError, isLoading, isSuccess, error }] =
    usePurchaseGiftCardMutation();

  useEffect(() => {
    if (!state?.amount || !state?.data) {
      navigate("/black-friday/gift-cards");
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
      navigate("/");
    }
    if (isError) {
      Swal.fire({
        title: "Oops!..",
        icon: "error",
        text: `${
          (error as any)?.data?.message || "something went wrong"
        }, Don't be afraid, Hopefully your payment already succeeded but our proccess failed. This is your transaction ID [${transactionId}], Contact with support`,
        confirmButtonColor: "#0ABAC3",
      });
    }
  }, [isSuccess, isError]);
  const onSubmit = () => {
    const payload = {
      gift_info: {
        ...state?.data,
      },
      payment_info: {
        transaction_id: transactionId,
        email: state?.data?.gift_by,
        amount: state?.amount,
      },
    };
    create(payload);
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

export default GiftCardPayment;
