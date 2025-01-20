import { Button, Form, Input, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { baseUrl } from "../../../config";
import { useState } from "react";

const GetInForm = () => {
  const [form] = useForm();
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const response = await fetch(baseUrl.FEEDBACK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      console.log("Success:", responseData);
      api["success"]({
        message: "Success",
        description: "Successfully submitted your feedback",
      });
      form.resetFields();
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      api["error"]({
        message: "Failed",
        description: "Failed to submitted your information",
      });
    }
  };
  return (
    <>
      {contextHolder}
      <Form form={form} onFinish={onFinish} className="space-y-3">
        <Form.Item name="name" rules={[{ required: true }]}>
          <Input
            placeholder="Your name"
            className="bg-[#FAFFFF] placeholder-[#215757] text-base w-full border-[1px] border-[#D4D4D4] p-4 rounded-md"
          />
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
          <Input
            placeholder="Your email"
            className="bg-[#FAFFFF] placeholder-[#215757] text-base w-full border-[1px] border-[#D4D4D4] p-4 rounded-md"
          />
        </Form.Item>
        <Form.Item name="message" rules={[{ required: true }]}>
          <TextArea
            placeholder="Message"
            rows={7}
            className="bg-[#FAFFFF] placeholder-[#215757] text-lg w-full border-[1px] border-[#D4D4D4] p-4 rounded-md"
          />
        </Form.Item>
        <Form.Item>
          <Button
            loading={loading}
            htmlType="submit"
            className="btn btn-primary hover:btn-secondary w-full text-white"
          >
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default GetInForm;
