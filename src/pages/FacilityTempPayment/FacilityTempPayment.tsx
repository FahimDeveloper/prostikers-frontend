import { Link, useNavigate, useParams } from "react-router-dom";
import { usePaymentlinkVerifyQuery } from "../../redux/features/auth/authApi";
import { FaSpinner } from "react-icons/fa";
import { Button } from "antd";
import { useConfirmFacilityReservationMutation } from "../../redux/features/facility/facilityApi";
import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import Checkout from "../../components/Checkout";
import { jwtDecode } from "jwt-decode";

const FacilityTempPayment = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [transactionId, setTransactionId] = useState("");
  const {
    isLoading: isVerifyLoading,
    isSuccess: isVerifySuccess,
    isError: isVerifyError,
    error: verifyError,
  } = usePaymentlinkVerifyQuery({
    token,
  });
  const [confirm, { data: confirmData, isError, isLoading, isSuccess, error }] =
    useConfirmFacilityReservationMutation();

  const decoded: any = useMemo(
    () => (token ? jwtDecode(token) : null),
    [token]
  );

  const onSubmit = () => {
    const payload = {
      email: decoded?.e,
      reservation_id: decoded?.r,
      payment_id: decoded?.p,
      transaction_id: transactionId,
    };
    confirm(payload);
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        icon: "success",
        text: `${confirmData?.message}`,
        iconColor: "#0ABAC3",
        confirmButtonColor: "#0ABAC3",
      });
      navigate("/rental-facility");
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
    <>
      {isVerifyLoading && (
        <div className="h-svh flex items-center justify-center w-full">
          <FaSpinner className="size-8 text-primary animate-spin" />
        </div>
      )}
      {isVerifySuccess && decoded && (
        <div className="min-h-svh py-16 flex justify-center items-center">
          <Checkout
            setTransactionId={setTransactionId}
            isLoading={isLoading}
            amount={decoded?.payment_info?.amount}
            onSubmit={onSubmit}
          />
        </div>
      )}
      {isVerifyError && (
        <div className="h-svh flex items-center justify-center w-full">
          <div className="space-y-5">
            <div className="">
              {(verifyError as any)?.data?.message === "jwt expired" ? (
                <div className="space-y-3">
                  <h3 className="text-center font-poppins font-medium text-4xl leading-[46px] text-[#043E41]">
                    Link is already expired
                  </h3>
                  <p className="w-[500px] text-center text-base">
                    You did not complete your payment between duration. Link is
                    already expired. Please contact with support for furture
                    process.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-center font-poppins font-medium text-4xl leading-[46px] text-[#043E41]">
                    Invalid link
                  </h3>
                </>
              )}
            </div>
            <Link to="/" className="block text-center">
              <Button type="primary" size="large" className="primary-btn">
                Go Back
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default FacilityTempPayment;
