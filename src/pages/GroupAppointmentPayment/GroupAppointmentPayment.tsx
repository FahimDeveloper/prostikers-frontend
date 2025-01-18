import { useLocation, useNavigate } from "react-router-dom";
import Checkout from "../../components/Checkout";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useCreateAppointmentGroupReservationMutation } from "../../redux/features/appointment/appointmentApi";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const GroupAppointmentPayment = () => {
  const { state } = useLocation();
  const [transactionId, setTransactionId] = useState("");
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [create, { data: createData, isError, isLoading, isSuccess, error }] =
    useCreateAppointmentGroupReservationMutation();

  useEffect(() => {
    if (!state?.amount || !state?.data) {
      navigate("/programs/group-training");
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
      navigate(state?.location || "/");
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
      appointment_data: { ...state?.data },
      payment_info: {
        transaction_id: transactionId,
        trainer: state?.data?.trainer,
        email: user?.email,
        amount: state?.amount,
      },
    };
    create(payload);
  };
  return (
    <div className="min-h-svh py-16 flex justify-center items-center">
      {state?.amount && state?.data && state?.location && (
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

export default GroupAppointmentPayment;
