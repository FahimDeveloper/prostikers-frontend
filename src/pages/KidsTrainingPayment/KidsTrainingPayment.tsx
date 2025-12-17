/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate } from "react-router-dom";
import Checkout from "../../components/Checkout";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useCreateClassReservationMutation } from "../../redux/features/class/classApi";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { Spin } from "antd";

const KidsTrainingPayment = () => {
  const { state } = useLocation();
  const [transactionId, setTransactionId] = useState(crypto.randomUUID());
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [create, { data: createData, isError, isLoading, isSuccess, error }] =
    useCreateClassReservationMutation();
  const onSubmit = () => {
    const payload = {
      class_data: { ...state?.data },
      payment_info: {
        transaction_id: transactionId,
        email: user?.email,
        amount: state?.amount,
        trainer: state?.data?.trainer,
      },
    };
    create(payload);
  };

  useEffect(() => {
    if (!state?.data) {
      navigate("/programs/kids-training");
    } else if (state?.amount == 0) {
      onSubmit();
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
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = state?.location;
        }
      });
    }
  }, [isSuccess, isError, error]);

  return (
    <div className="min-h-svh py-16 flex justify-center items-center">
      {state?.amount &&
      state?.amount !== 0 &&
      state?.data &&
      state?.location ? (
        <Checkout
          setTransactionId={setTransactionId}
          isLoading={isLoading}
          amount={state?.amount}
          onSubmit={onSubmit}
        />
      ) : (
        isLoading && <Spin size="large" />
      )}
    </div>
  );
};

export default KidsTrainingPayment;
