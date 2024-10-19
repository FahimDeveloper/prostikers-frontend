/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import { useLinkVerifyQuery } from "../../redux/features/auth/authApi";
import { FaSpinner } from "react-icons/fa";
import { Button } from "antd";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppHooks";
import { updateUserInfo } from "../../redux/features/auth/authSlice";

const VerifyUser = () => {
  const { token } = useParams();
  const dispatch = useAppDispatch();
  const {
    data,
    isLoading: isVerifyLoading,
    isSuccess: isVerifySuccess,
    isError: isVerifyError,
    error: verifyError,
  } = useLinkVerifyQuery({
    token,
  });
  useEffect(() => {
    dispatch(updateUserInfo(data?.results));
  }, [isVerifySuccess]);
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
            <Link to="/" className="block">
              <Button className="primary-btn w-full">Go Back</Button>
            </Link>
          </div>
        </div>
      )}
      {isVerifyError && (
        <div className="h-svh flex items-center justify-center w-full">
          <div className="space-y-5">
            <h2 className="text-center font-poppins font-medium text-4xl leading-[46px] text-[#043E41]">
              {(verifyError as any)?.data?.message === "jwt malformed"
                ? "Invalid link"
                : (verifyError as any)?.data?.message === "jwt expired"
                ? "Link Already Expired"
                : (verifyError as any)?.data?.message}
            </h2>
            <Link to="/" className="block">
              <Button className="primary-btn w-full">Go Back</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyUser;
