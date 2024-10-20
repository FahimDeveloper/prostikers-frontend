/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Checkbox, Form, Input, Select } from "antd";
import { AiOutlineLock, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppHooks";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { loggedInUser } from "../../redux/features/auth/authSlice";
import { useRegistrationMutation } from "../../redux/features/auth/authApi";
import TermsCondition from "../../components/TermsCondition";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import SocialLogin from "../../components/SocialLogin";
const Registration = () => {
  const [agree, setAgree] = useState(false);
  const dispatch = useAppDispatch();
  const [registration, { data, isLoading, isError, isSuccess, error }] =
    useRegistrationMutation();
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
        text: `${(error as any)?.data?.message || "something went wrong"}`,
        icon: "error",
        confirmButtonColor: "#0ABAC3",
      });
    }
  }, [isError, isSuccess, error, data, dispatch]);
  const onFinish = (values: any) => {
    if (values.password !== values.confirm_password) {
      Swal.fire({
        title: "Oops..",
        text: "Password does not match",
        icon: "error",
        confirmButtonColor: "#0ABAC3",
      });
      return;
    }
    delete values.confirm_password;
    registration(values);
  };

  const validateUSPhoneNumber = (_: any, value: string) => {
    const phoneNumberRegex =
      /^(?:\+1\s*?)?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const hasCountryCode = /^\+1/.test(value);
    if (!hasCountryCode) {
      return Promise.reject(
        new Error("Please Enter number with the country code (+1)")
      );
    }
    if (value && !phoneNumberRegex.test(value)) {
      return Promise.reject(new Error("Please enter a valid USA number"));
    }

    return Promise.resolve();
  };

  return (
    <div className="w-full min-h-svh py-10 flex flex-col justify-center gap-5 items-center">
      <h2 className="text-center font-poppins font-medium text-4xl leading-[46px] text-[#043E41]">
        Welcome to ProStrikers
      </h2>
      <div className="w-[480px] space-y-3">
        <h3 className="text-center font-poppins text-2xl font-medium text-[#022B2D]">
          Create your account
        </h3>
        <Form onFinish={onFinish} layout="vertical" className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Form.Item
              name="first_name"
              rules={[
                { required: true, message: "Please enter your first name!" },
              ]}
              label="First Name"
              className="m-0"
            >
              <Input
                className="h-10"
                prefix={<AiOutlineUser className="size-5" />}
                placeholder="First name"
              />
            </Form.Item>
            <Form.Item
              name="last_name"
              rules={[
                { required: true, message: "Please enter your last name!" },
              ]}
              label="Last Name"
              className="m-0"
            >
              <Input
                className="h-10"
                prefix={<AiOutlineUser className="size-5" />}
                placeholder="Last name"
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "" },
                { validator: validateUSPhoneNumber },
              ]}
              label="Phone"
              className="m-0"
            >
              <Input
                prefix={<AiOutlinePhone className="size-5" />}
                className="h-10"
                placeholder="Phone"
              />
            </Form.Item>
            <Form.Item
              name="gender"
              rules={[{ required: true, message: "Please select your gender" }]}
              label="Gender"
              className="m-0"
            >
              <Select
                className="h-10"
                placeholder="select gender"
                options={[
                  {
                    value: "male",
                    label: "Male",
                  },
                  {
                    value: "female",
                    label: "Female",
                  },
                ]}
              />
            </Form.Item>
          </div>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
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
            rules={[{ required: true, message: "Please enter your Password!" }]}
            label="Password"
            className="m-0"
          >
            <Input.Password
              className="h-10"
              prefix={<AiOutlineLock className="size-5" />}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="confirm_password"
            rules={[
              {
                required: true,
                message: "Please enter your confirm password!",
              },
            ]}
            label="Confirm Password"
            className="m-0"
          >
            <Input.Password
              className="h-10"
              prefix={<AiOutlineLock className="size-5" />}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Checkbox onChange={() => setAgree(!agree)}>
              <div className="flex gap-2">
                <p className="text-sm text-secondary">I agree with</p>
                <TermsCondition>
                  <p className="text-primary cursor-pointer">
                    Terms of service
                  </p>
                </TermsCondition>
                <p>&</p>
                <PrivacyPolicy>
                  <p className="text-primary cursor-pointer">Privacy policy</p>
                </PrivacyPolicy>
              </div>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              loading={isLoading}
              disabled={!agree}
              className="primary-btn-2 w-full"
              htmlType="submit"
            >
              Create Account
            </Button>
          </Form.Item>
        </Form>
        <p className="flex gap-1 justify-center">
          Already have an account?
          <Link
            to="/login"
            className="no-underline font-medium block text-primary"
          >
            Login
          </Link>
        </p>
        <p className="text-center text-[#687588] font-medium text-sm">
          Or continue with
        </p>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Registration;
