/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
import { auth, facebookProvider, googleProvider } from "../../firebase.config";
import { useContinueWithSocialMutation } from "../redux/features/auth/authApi";
import { useEffect } from "react";
import { loggedInUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../hooks/useAppHooks";
import { Button } from "antd";

const SocialLogin = () => {
  const [create, { data, isLoading, isSuccess, isError, error }] =
    useContinueWithSocialMutation();
  const dispatch = useAppDispatch();
  const onGoogleLogin = () => {
    signInWithPopup(auth, googleProvider).then((data) => {
      const userData = {
        first_name: data.user.displayName,
        email: data.user.email,
        image: data.user.photoURL || undefined,
        phone: data.user.phoneNumber || undefined,
        provider: "google",
      };
      create(userData);
    });
  };
  const onFacebookLogin = () => {
    signInWithPopup(auth, facebookProvider).then((data) => {
      if (!data.user.email) {
        Swal.fire({
          title: "Oops!..",
          icon: "error",
          text: "Facebook account does not have an email address. We need email address",
        });
        return;
      } else {
        const userData = {
          first_name: data.user.displayName,
          email: data.user.email,
          image: data.user.photoURL || undefined,
          phone: data.user.phoneNumber || undefined,
          provider: "facebook",
        };
        create(userData);
      }
    });
  };
  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        icon: "success",
        text: `${data?.message || "something went wrong"}`,
        iconColor: "#0ABAC3",
        showConfirmButton: false,
        timer: 2000,
      });
      dispatch(loggedInUser(data?.results));
    }
    if (isError) {
      Swal.fire({
        title: "Oops!..",
        icon: "error",
        text: `${(error as any)?.data?.message || "something went wrong"}`,
      });
    }
  }, [isSuccess, isError, error]);
  return (
    <div className="flex justify-center gap-5">
      <Button
        disabled={isLoading}
        loading={isLoading}
        onClick={onGoogleLogin}
        className="flex gap-2 items-center justify-center bg-white w-full py-5"
      >
        <FcGoogle className="size-7" />
        <span className="text-base text-[#111827]">Google</span>
      </Button>
      <Button
        disabled={isLoading}
        loading={isLoading}
        onClick={onFacebookLogin}
        className="flex gap-2 items-center justify-center bg-white w-full py-5"
      >
        <FaFacebookSquare className="size-7 text-blue-600" />
        <span className="text-base text-[#111827]">Facebook</span>
      </Button>
    </div>
  );
};

export default SocialLogin;
