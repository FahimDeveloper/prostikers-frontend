/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

const MembershipCancellationForm = ({
  form,
  onFinish,
  loading,
}: {
  form: any;
  onFinish: any;
  loading: boolean;
}) => {
  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className="space-y-3"
    >
      <Form.Item
        name="package_name"
        label="Select your current package"
        className="w-full m-0"
        rules={[
          {
            required: true,
            message: "Please select Package",
          },
        ]}
      >
        <Select
          placeholder="Select package"
          options={[
            { label: "Individual pro", value: "individual pro" },
            {
              label: "Individual pro unlimited",
              value: "individual pro unlimited",
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        name="plan"
        label="Select your current plan"
        className="w-full m-0"
        rules={[{ required: true }]}
      >
        <Select
          placeholder="Select Plan"
          options={[
            {
              label: "Monthly",
              value: "monthly",
            },
            {
              label: "Yearly",
              value: "yearly",
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        className="w-full m-0"
        rules={[{ required: true }]}
      >
        <TextArea
          rows={6}
          placeholder="Please describe your cancellation reason"
        />
      </Form.Item>
      <Form.Item className="flex justify-end">
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MembershipCancellationForm;
