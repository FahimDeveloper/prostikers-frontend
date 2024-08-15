/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Form, Input, Radio } from "antd";

const LeagueIndividualForm = ({
  form,
  onFinish,
}: {
  form: any;
  onFinish: any;
}) => {
  return (
    <div className="bg-[#F9FBFF] p-16 border border-solid border-[#F9FBFF] rounded-2xl space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-[#07133D]">General Details</h3>
        <p className="text-[#929292] text-base">
          Fill out this form to regester for upcoming trainings
        </p>
      </div>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <div className="grid grid-cols-2 gap-x-5">
          <Form.Item
            label="Player Name"
            name="player_name"
            rules={[{ required: true }]}
          >
            <Input
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
          <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
            <Input
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
          <Form.Item
            label="Date of birth"
            name="date_of_birth"
            rules={[{ required: true }]}
          >
            <DatePicker
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
          <Form.Item
            label="Street Address"
            name="address"
            rules={[{ required: true }]}
          >
            <Input
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
          <Form.Item label="City" name="city" rules={[{ required: true }]}>
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
            name="zip"
            rules={[{ required: true }]}
          >
            <Input
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
          <Form.Item
            label="Play Mode"
            name="play_mode"
            rules={[{ required: true, message: "Please select play mode" }]}
          >
            <Radio.Group className="flex text-center" buttonStyle="solid">
              <Radio.Button className="w-full h-full py-1" value="batsman">
                Batsman
              </Radio.Button>
              <Radio.Button className="w-full h-full py-1" value="bowler">
                Bowler
              </Radio.Button>
              <Radio.Button className="w-full h-full py-1" value="all-rounder">
                All-rounder
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
        </div>
        <Form.Item className="flex justify-end">
          <button type="submit" className="primary-btn">
            Proceed
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LeagueIndividualForm;
