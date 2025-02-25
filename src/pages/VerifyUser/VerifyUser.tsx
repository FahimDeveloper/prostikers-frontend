/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import { useVerifyUserQuery } from "../../redux/features/auth/authApi";
import { FaSpinner } from "react-icons/fa";
import { Button } from "antd";

const VerifyUser = () => {
  const { token } = useParams();
  const {
    data,
    isLoading: isVerifyLoading,
    isSuccess: isVerifySuccess,
    isError: isVerifyError,
    error: verifyError,
  } = useVerifyUserQuery({
    token,
  });
  return (
    <>
      {isVerifyLoading && (
        <div className="h-svh flex items-center justify-center w-full">
          <FaSpinner className="size-8 text-primary animate-spin" />
        </div>
      )}
      {isVerifySuccess && (
        <div className="h-svh flex items-center justify-center w-full">
          <div className="space-y-5">
            <h2 className="text-center font-poppins font-medium text-4xl leading-[46px] text-[#043E41]">
              {data?.message}
            </h2>
            <Link to="/" className="block text-center">
              <Button type="primary" size="large" className="primary-btn">
                Go Back
              </Button>
            </Link>
          </div>
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
                    You did not complete your verification between 30 days since
                    sign up. Link is already expired. Please contact with
                    support.
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

export default VerifyUser;
