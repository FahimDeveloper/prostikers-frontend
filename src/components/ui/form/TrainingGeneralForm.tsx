/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, InputNumber } from "antd";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useEffect } from "react";

const TrainingGeneralForm = ({
  form,
  onFinish,
}: {
  form: any;
  onFinish: any;
}) => {
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    form.setFieldsValue({
      first_name: user?.first_name,
      last_name: user?.last_name,
      email: user?.email,
      phone: user?.phone,
    });
  }, [user, form]);
  return (
    <div className="bg-[#F9FBFF] p-16 border border-solid border-[#F9FBFF] rounded-2xl space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-[#07133D]">General Details</h3>
        <p className="text-[#929292] text-base">
          Fill out this form to regester
        </p>
      </div>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="First Name"
            name="first_name"
            className="m-0"
            rules={[{ required: true }]}
          >
            <Input
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="last_name"
            className="m-0"
            rules={[{ required: true }]}
          >
            <Input
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            className="m-0"
            rules={[{ required: true }]}
          >
            <Input
              readOnly
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            className="m-0"
            rules={[{ required: true }]}
          >
            <Input
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            className="m-0"
            rules={[{ required: true }]}
          >
            <InputNumber
              className="w-full rounded-full p-1"
              placeholder="Type here.."
              min={0}
              max={99}
            />
          </Form.Item>
          <Form.Item
            label="Sport"
            name="sport"
            className="m-0"
            rules={[{ required: true }]}
          >
            <Input
              className="w-full rounded-full p-2 capitalize"
              placeholder="Type here.."
              readOnly
            />
          </Form.Item>
          <Form.Item
            label="Street Address"
            name="street_address"
            className="m-0"
            rules={[{ required: true }]}
          >
            <Input
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            className="m-0"
            rules={[{ required: true }]}
          >
            <Input
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
          <Form.Item
            label="State/Province"
            name="state"
            rules={[{ required: true }]}
          >
            <Input
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
          <Form.Item
            label="Zip/Postal Code"
            name="zip_code"
            rules={[{ required: true }]}
          >
            <Input
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
        </div>
        <Form.Item className="flex justify-end">
          <Button htmlType="submit" className="primary-btn">
            Proceed
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TrainingGeneralForm;
