/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { useFogotPasswordMutation } from "../../redux/features/auth/authApi";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const [send, { data, isLoading, isError, isSuccess, error }] =
    useFogotPasswordMutation();
  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        text: `${data?.message}`,
        icon: "success",
        showConfirmButton: true,
        iconColor: "#0ABAC3",
        confirmButtonColor: "#0ABAC3",
      });
      form.resetFields();
      navigate("/login");
    }
    if (isError) {
      Swal.fire({
        title: "Oops..",
        text: `${(error as any)?.data?.message}`,
        icon: "error",
        confirmButtonColor: "#0ABAC3",
      });
    }
  }, [isError, isSuccess, error, data, form, navigate]);
  const onFinish = (values: any) => {
    send(values);
  };
  return (
    <div className="w-[480px] h-svh mx-auto flex flex-col justify-center gap-7 items-center">
      <h2 className="text-center font-poppins font-medium text-4xl leading-[46px] text-[#043E41]">
        Prostrikers Validations
      </h2>
      <div className="space-y-5 w-full">
        <h3 className="text-center text-lg text-[#022B2D]">
          Enter your valid email address
        </h3>
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className="space-y-4"
        >
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
          <Form.Item>
            <Button
              loading={isLoading}
              className="primary-btn w-full"
              htmlType="submit"
            >
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;