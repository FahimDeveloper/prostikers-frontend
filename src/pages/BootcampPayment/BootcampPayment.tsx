/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate } from "react-router-dom";
import Checkout from "../../components/Checkout";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useCreateBootcampReservationMutation } from "../../redux/features/bootcamp/bootcampApi";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const BootcampPayment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [transactionId, setTransactionId] = useState("");
  const user = useSelector(selectCurrentUser);
  const { amount, data, location } = state;
  const [create, { data: createData, isError, isLoading, isSuccess, error }] =
    useCreateBootcampReservationMutation();
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
      course_data: { ...data },
      payment_info: {
        transaction_id: transactionId,
        user: user?._id,
        email: user?.email,
        amount: amount,
        service: "bootcamp",
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

export default BootcampPayment;
