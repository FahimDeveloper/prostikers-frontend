/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Checkbox, Form, Input } from "antd";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { useAppDispatch } from "../../hooks/useAppHooks";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { loggedInUser } from "../../redux/features/auth/authSlice";
const Login = () => {
  const dispatch = useAppDispatch();
  const [login, { data, isLoading, isError, isSuccess, error }] =
    useLoginMutation();
  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        text: `${data?.message}`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        iconColor: "#0ABAC3",
      });
      dispatch(loggedInUser(data?.results));
    }
    if (isError) {
      Swal.fire({
        title: "Oops..",
        text: `${(error as any)?.data?.message}`,
        icon: "error",
        confirmButtonColor: "#0ABAC3",
      });
    }
  }, [isError, isSuccess, error, data, dispatch]);
  const onFinish = (values: any) => {
    login(values);
  };
  const onSocialLogin = () => {
    Swal.fire({
      title: "Progress",
      text: `We are currently working on it`,
      icon: "info",
      confirmButtonColor: "#0ABAC3",
    });
  };
  return (
    <div className="w-full min-h-svh py-10 flex flex-col justify-center gap-5 items-center">
      <h2 className="text-center font-poppins font-medium text-4xl leading-[46px] text-[#043E41]">
        Welcome to ProStrikers
      </h2>
      <div className="w-[480px] space-y-3">
        <h3 className="text-center font-poppins text-2xl font-medium text-[#022B2D]">
          Login first to your account
        </h3>
        <Form onFinish={onFinish} layout="vertical" className="space-y-4">
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
            label="Email"
            className="m-0"
          >
            <Input
              className="h-10"
              prefix={<AiOutlineUser className="size-5" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
            label="Password"
            className="m-0"
          >
            <Input.Password
              className="h-10"
              prefix={<AiOutlineLock className="size-5" />}
              placeholder="Password"
            />
          </Form.Item>
          <div className="flex justify-between">
            <Form.Item name="remember" valuePropName="checked" className="m-0">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link to="/forget-password">
              <span className="font-poppins text-primary">
                Forgot Password?
              </span>
            </Link>
          </div>
          <Form.Item>
            <Button
              loading={isLoading}
              className="primary-btn-2 w-full"
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <p className="flex gap-1 justify-center">
          New here?
          <Link
            to="/registration"
            className="no-underline font-medium block text-primary"
          >
            Create your account
          </Link>
        </p>
        <p className="text-center text-[#687588] font-medium text-sm">
          Or continue with
        </p>
        <div className="flex justify-center gap-5">
          <div
            onClick={onSocialLogin}
            className="flex gap-2 items-center justify-center border border-[#A2A8A0] border-solid rounded-md py-2 w-full cursor-pointer"
          >
            <FcGoogle className="size-7" />
            <span className="text-base font-medium text-[#111827]">Google</span>
          </div>
          <div
            onClick={onSocialLogin}
            className="flex gap-2 items-center justify-center border border-[#A2A8A0] border-solid rounded-md py-2 w-full cursor-pointer"
          >
            <FaFacebookSquare className="size-7 text-blue-600" />
            <span className="text-base font-medium text-[#111827]">
              Facebook
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
