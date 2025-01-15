/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate } from "react-router-dom";
import Checkout from "../../components/Checkout";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useCreateIndividualEventReservationMutation } from "../../redux/features/event/eventApi";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const EventIndividualPayment = () => {
  const { state } = useLocation();
  const [transactionId, setTransactionId] = useState("");
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const { amount, data, location } = state;
  const [create, { data: createData, isError, isLoading, isSuccess, error }] =
    useCreateIndividualEventReservationMutation();
  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        icon: "success",
        text: `${createData?.message}`,
        confirmButtonColor: "#0ABAC3",
        iconColor: "#0ABAC3",
      });
      navigate(location);
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
      event_data: { ...data },
      payment_info: {
        transaction_id: transactionId,
        email: user?.email,
        amount: amount,
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

export default EventIndividualPayment;
