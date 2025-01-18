import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import Swal from "sweetalert2";
import Checkout from "../../components/Checkout";
import { usePlaceOrderMutation } from "../../redux/features/order/orderApi";

const ShopPayment = () => {
  const { state } = useLocation();
  const [transactionId, setTransactionId] = useState("");
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [create, { data: createData, isError, isLoading, isSuccess, error }] =
    usePlaceOrderMutation();

  useEffect(() => {
    if (!state?.amount || !state?.data) {
      navigate("/shop");
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
      localStorage.removeItem("cart");
      window.dispatchEvent(new CustomEvent("cartUpdated"));
      navigate("/shop");
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
      orders: [...state?.data],
      payment_info: {
        transaction_id: transactionId,
        user: user?._id,
        email: user?.email,
        amount: state?.amount,
        service: "shop",
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

export default ShopPayment;
