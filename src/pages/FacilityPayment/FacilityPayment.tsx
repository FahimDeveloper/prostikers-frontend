/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useBlocker, useLocation, useNavigate } from "react-router-dom";
import Checkout from "../../components/Checkout";
import { useCreateFacilityReservationMutation } from "../../redux/features/facility/facilityApi";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import RouteBlocker from "../../utils/RouteBlocker";

const FacilityPayment = () => {
  const { state } = useLocation();
  const [transactionId, setTransactionId] = useState("");
  const { amount, data } = state;
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const [create, { data: createData, isLoading, isSuccess, isError, error }] =
    useCreateFacilityReservationMutation();
  const [block, setBlock] = useState(true);
  const blocker = useBlocker(block);
  const onSubmit = () => {
    // if (membershipData) {
    //   const membership = { ...membershipData };
    //   delete membership.price;
    //   membership.status = true;
    //   membership.membership = true;
    //   const issueDate = new Date();
    //   membership.issue_date = issueDate.toISOString();
    //   const expiryDate = new Date(issueDate);
    //   expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    //   membership.expiry_date = expiryDate.toISOString();
    //   payload = {
    //     facility_data: { ...data },
    //     membership_info: {
    //       user_id: user?._id,
    //       membership: membership,
    //     },
    //     payment_info: {
    //       transaction_id: transactionId,
    //       user: user?._id,
    //       email: user?.email,
    //       amount: amount,
    //       service: "facility",
    //     },
    //   };
    //   create({ id: user?._id, payload: payload });
    // }
    const payload = {
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
    setBlock(false);
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
        text: `${(error as any)?.data?.message || "something went wrong"}`,
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
      <RouteBlocker block={block} blocker={blocker} />
    </div>
  );
};

export default FacilityPayment;
