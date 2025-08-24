import { Link, useParams } from "react-router-dom";
import { usePaymentlinkVerifyQuery } from "../../redux/features/auth/authApi";
import { jwtDecode } from "jwt-decode";
import { useMemo } from "react";
import { FaSpinner } from "react-icons/fa";
import { Button } from "antd";
import TempMembershipCheckout from "../../components/TempMembershipCheckout";

const MembershipTempPayment = () => {
  const { id } = useParams();
  const {
    data: verifyData,
    isLoading: isVerifyLoading,
    isSuccess: isVerifySuccess,
    isError: isVerifyError,
    error: verifyError,
  } = usePaymentlinkVerifyQuery({
    id,
  });

  const decoded: any = useMemo(
    () =>
      verifyData?.results?.token ? jwtDecode(verifyData?.results?.token) : null,
    [isVerifySuccess]
  );

  return (
    <>
      {isVerifyLoading && (
        <div className="h-svh flex items-center justify-center w-full">
          <FaSpinner className="size-8 text-primary animate-spin" />
        </div>
      )}
      {isVerifySuccess && decoded && (
        <div className="min-h-svh py-16 flex justify-center items-center">
          <TempMembershipCheckout
            amount={decoded?.amount}
            membership={decoded?.membership}
            team={decoded?.team}
            email={decoded?.email}
          />
        </div>
      )}
      {isVerifyError && (
        <div className="h-svh flex items-center justify-center w-full">
          <div className="space-y-5">
            <div className="">
              {(verifyError as any)?.data?.message === "Expired" ? (
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

export default MembershipTempPayment;
