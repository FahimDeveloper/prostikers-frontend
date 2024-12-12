/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useBlocker, useLocation, useNavigate } from "react-router-dom";
import Checkout from "../../components/Checkout";
import { useCreateAppointmentOneOnOneReservationMutation } from "../../redux/features/appointment/appointmentApi";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import RouteBlocker from "../../utils/RouteBlocker";

const OneOnOneAppointmentPayment = () => {
  const { state } = useLocation();
  const { amount, data, location } = state;
  const user = useSelector(selectCurrentUser);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();
  const [block, setBlock] = useState(true);
  const blocker = useBlocker(block);
  const [create, { data: createData, isError, isLoading, isSuccess, error }] =
    useCreateAppointmentOneOnOneReservationMutation();
  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        icon: "success",
        text: `${createData?.message}`,
        iconColor: "#0ABAC3",
        confirmButtonColor: "#0ABAC3",
      });
      navigate(location);
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
  }, [isSuccess, isError, error]);
  const onSubmit = () => {
    const payload = {
      appointment_data: { ...data },
      payment_info: {
        transaction_id: transactionId,
        user: user?._id,
        email: user?.email,
        amount: amount,
        service: "appointment",
      },
    };
    create({ id: user?._id, payload });
    setBlock(false);
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
      <RouteBlocker block={block} blocker={blocker} />
    </div>
  );
};

export default OneOnOneAppointmentPayment;
