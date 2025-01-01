import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { usePurchaseCreditPackMutation } from "../../redux/features/purchasedBundlePackage/purchasedBundlePackageApi";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import Swal from "sweetalert2";
import Checkout from "../../components/Checkout";

const BundleCagePayment = () => {
  const { state } = useLocation();
  const [transactionId, setTransactionId] = useState("");
  const { amount, data } = state;
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [create, { data: createData, isError, isLoading, isSuccess, error }] =
    usePurchaseCreditPackMutation();
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
        text: `${(error as any)?.data?.message || "something went wrong"}`,
        confirmButtonColor: "#0ABAC3",
      });
    }
  }, [isSuccess, isError]);
  const onSubmit = () => {
    const validity = new Date();
    validity.setMonth(validity.getMonth() + 6);
    data.validity = validity.toISOString();
    const payload = {
      bundle: { ...data },
      payment_info: {
        transaction_id: transactionId,
        user: user?._id,
        email: user?.email,
        amount: amount,
        service: "facility",
      },
    };
    create(payload);
  };
  return (
    <div className="min-h-svh py-16 flex justify-center items-center">
      {amount && data && location && (
        <Checkout
          setTransactionId={setTransactionId}
          isLoading={isLoading}
          amount={amount}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

export default BundleCagePayment;
