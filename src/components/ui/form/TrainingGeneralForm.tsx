/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, InputNumber } from "antd";

const TrainingGeneralForm = ({
  form,
  onFinish,
  loading,
}: {
  form: any;
  onFinish: any;
  loading: boolean;
}) => {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-[#07133D]">General Details</h3>
        <p className="text-[#929292] text-base">
          Fill out this form for group training reservation
        </p>
      </div>
      <Form onFinish={onFinish} form={form} layout="vertical">
        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="First Name"
            name="first_name"
            className="m-0"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Type here..."
              className="w-full rounded-full p-2"
            />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="last_name"
            className="m-0"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Type here..."
              className="w-full rounded-full p-2"
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            className="m-0"
            rules={[{ required: true }]}
          >
            <Input
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
            rules={[{ required: true, message: "Enter your city" }]}
          >
            <Input
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
          <Form.Item
            label="State/Province"
            name="state"
            className="m-0"
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
            className="m-0"
            rules={[{ required: true }]}
          >
            <Input
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
        </div>
        <div className="flex justify-end mt-5">
          <Form.Item>
            <Button className="primary-btn" loading={loading} htmlType="submit">
              Procced
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default TrainingGeneralForm;
