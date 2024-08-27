/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, InputNumber, Select } from "antd";

const LeagueIndividualForm = ({
  form,
  onFinish,
  loading,
}: {
  form: any;
  onFinish: any;
  loading: boolean;
}) => {
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
            label="Player Name"
            name="player_name"
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
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
          <div className="col-span-2 grid grid-cols-3 gap-4">
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
              rules={[{ required: true }]}
              name="skill_level"
              className="m-0"
              label="Skill Level"
            >
              <Select
                placeholder="Select level"
                options={[
                  {
                    label: "Basic",
                    value: "basic",
                  },
                  {
                    label: "Intermediate",
                    value: "intermediate",
                  },
                  {
                    label: "Advanced",
                    value: "advanced",
                  },
                ]}
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
          </div>
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
          <Button htmlType="submit" loading={loading} className="primary-btn">
            Proceed
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LeagueIndividualForm;
