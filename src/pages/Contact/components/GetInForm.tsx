import { Button, Checkbox, Form, Input, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { baseUrl } from "../../../config";
import { useState } from "react";
import Paragraph from "antd/es/typography/Paragraph";
import PrivacyPolicy from "../../../components/PrivacyPolicy";
import TermsCondition from "../../../components/TermsCondition";

const GetInForm = () => {
  const [form] = useForm();
  const [checked, setChecked] = useState(false);
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
  const onChecked = () => {
    setChecked(!checked);
  };

  return (
    <>
      {contextHolder}
      <Form form={form} onFinish={onFinish} className="space-y-3">
        <Form.Item name="name" rules={[{ required: true }]} className="m-0">
          <Input
            placeholder="Your name"
            className="bg-[#FAFFFF] placeholder-[#215757] text-base w-full border-[1px] border-[#D4D4D4] p-3 rounded-md"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, type: "email" }]}
          className="m-0"
        >
          <Input
            placeholder="Your email"
            className="bg-[#FAFFFF] placeholder-[#215757] text-base w-full border-[1px] border-[#D4D4D4] p-3 rounded-md"
          />
        </Form.Item>
        <Form.Item
          name="phone_number"
          rules={[{ required: true, type: "number" }]}
          className="m-0"
        >
          <Input
            placeholder="Phone Number"
            className="bg-[#FAFFFF] placeholder-[#215757] text-base w-full border-[1px] border-[#D4D4D4] p-3 rounded-md"
          />
        </Form.Item>
        <Form.Item name="message" rules={[{ required: true }]} className="m-0">
          <TextArea
            placeholder="Message"
            rows={5}
            className="bg-[#FAFFFF] placeholder-[#215757] text-lg w-full border-[1px] border-[#D4D4D4] p-3 rounded-md"
          />
        </Form.Item>
        <Form.Item className="m-0">
          <Checkbox onChange={onChecked}>
            <Paragraph
              ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
              style={{ marginBottom: 0 }}
            >
              I authorize <strong>Pro Strikers</strong> to contact me via text
              on the submitted number for enrollment reminders, review requests,
              coaching plan updtates, special offers, alternate schedules, and
              customer support. Message frequency varies. Standard message and
              data rates may apply. Reply STOP to opt out, HELP for assistance.
              View
              <span className="flex gap-1">
                our
                <TermsCondition>
                  <span className="text-blue-500">Terms</span>
                </TermsCondition>
                <span>&</span>
                <PrivacyPolicy>
                  <span className="text-blue-500">Privacy</span>
                </PrivacyPolicy>
              </span>
            </Paragraph>
          </Checkbox>
        </Form.Item>
        <Form.Item className="m-0">
          <Button
            disabled={!checked}
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
