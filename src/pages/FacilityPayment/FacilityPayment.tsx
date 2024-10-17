/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate } from "react-router-dom";
import Checkout from "../../components/Checkout";
import { useCreateFacilityReservationMutation } from "../../redux/features/facility/facilityApi";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useEffect, useState } from "react";

const FacilityPayment = () => {
  const { state } = useLocation();
  const [transactionId, setTransactionId] = useState("");
  const { amount, data, membershipData } = state;
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const [create, { data: createData, isLoading, isSuccess, isError, error }] =
    useCreateFacilityReservationMutation();
  const onSubmit = () => {
    let payload: any;
    if (membershipData) {
      const membership = { ...membershipData };
      delete membership.price;
      membership.status = true;
      membership.membership = true;
      const issueDate = new Date();
      membership.issue_date = issueDate.toISOString();
      const expiryDate = new Date(issueDate);
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      membership.expiry_date = expiryDate.toISOString();
      payload = {
        facility_data: { ...data },
        membership_info: {
          user_id: user?._id,
          membership: membership,
        },
        payment_info: {
          transaction_id: transactionId,
          user: user?._id,
          email: user?.email,
          amount: amount,
          service: "facility",
        },
      };
      create({ id: user?._id, payload: payload });
    } else {
      payload = {
        facility_data: { ...data },
        payment_info: {
          transaction_id: transactionId,
          user: user?._id,
          email: user?.email,
          amount: amount,
          service: "facility",
        },
      };
      create({ id: user?._id, payload: payload });
    }
  };
  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        icon: "success",
        text: `${createData?.message}`,
        confirmButtonColor: "#0ABAC3",
        iconColor: "#0ABAC3",
      });
      sessionStorage.clear();
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
  }, [isSuccess, isError, error]);
  return (
    <div className="min-h-svh py-16 flex justify-center items-center">
      {amount && data && (
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

export default FacilityPayment;
