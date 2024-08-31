/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate } from "react-router-dom";
import Checkout from "../../components/Checkout";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useCreateGroupEventReservationMutation } from "../../redux/features/event/eventApi";

const EventGroupPayment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { amount, data, location } = state;
  const [create, { data: createData, isError, isLoading, isSuccess, error }] =
    useCreateGroupEventReservationMutation();
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
        text: `${(error as any)?.createData?.message}`,
        confirmButtonColor: "#0ABAC3",
      });
    }
  }, [isSuccess, isError, error]);
  const onSubmit = () => {
    create(data);
  };
  return (
    <div className="min-h-svh py-16 flex justify-center items-center">
      {amount && data && location && (
        <Checkout isLoading={isLoading} amount={amount} onSubmit={onSubmit} />
      )}
    </div>
  );
};

export default EventGroupPayment;
