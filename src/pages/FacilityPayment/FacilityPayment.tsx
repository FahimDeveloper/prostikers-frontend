/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate } from "react-router-dom";
import Checkout from "../../components/Checkout";
import { useCreateFacilityReservationMutation } from "../../redux/features/facility/facilityApi";
import { useEffect } from "react";
import Swal from "sweetalert2";

const FacilityPayment = () => {
  const { state } = useLocation();
  const { amount, data } = state;
  const navigate = useNavigate();
  const [create, { data: createData, isLoading, isError, isSuccess, error }] =
    useCreateFacilityReservationMutation();
  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        icon: "success",
        text: `${createData?.message}`,
        showConfirmButton: true,
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
  }, [isSuccess, isError, error]);
  const onSubmit = () => {
    create(data);
  };
  return (
    <div className="min-h-svh py-16 flex justify-center items-center">
      {amount && data && (
        <Checkout isLoading={isLoading} amount={amount} onSubmit={onSubmit} />
      )}
    </div>
  );
};

export default FacilityPayment;
