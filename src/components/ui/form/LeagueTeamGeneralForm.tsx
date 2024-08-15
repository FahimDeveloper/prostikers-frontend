import { DatePicker, Form, Input, Select } from "antd";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LeagueTeamGeneralForm = ({ form }: { form: any }) => {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-[#07133D]">General Details</h3>
        <p className="text-[#929292] text-base">
          Fill out this form to regester for upcoming trainings
        </p>
      </div>
      <Form form={form} layout="vertical">
        <div className="grid grid-cols-3 gap-4">
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Type here..."
              className="w-full rounded-full p-2"
            />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Type here..."
              className="w-full rounded-full p-2"
            />
          </Form.Item>
          <Form.Item
            label="Skill Lavel"
            name="skill_lavel"
            rules={[{ required: true }]}
          >
            <Select
              className=""
              placeholder="Select skill"
              options={[
                { value: "8:00 am", label: "8:00 am " },
                { value: "10:00 am", label: "10:00 am" },
                { value: "12:00 pm", label: "12:00 pm" },
              ]}
            />
          </Form.Item>
        </div>
        <div className="grid grid-cols-2 gap-4">
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
        </div>
        <div className="grid grid-cols-3 gap-4">
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
            label="Training preferred time"
            name="preferred_time"
            rules={[{ required: true }]}
          >
            <Select
              className=""
              placeholder="Select time"
              options={[
                { value: "8:00 am", label: "8:00 am " },
                { value: "10:00 am", label: "10:00 am" },
                { value: "12:00 pm", label: "12:00 pm" },
                { value: "2:00 pm", label: "2:00 pm" },
                { value: "4:00 pm", label: "4:00 pm" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Training preferred date"
            name="preferred_date"
            rules={[{ required: true }]}
          >
            <DatePicker
              className="w-full rounded-full p-2"
              placeholder="select date"
            />
          </Form.Item>
        </div>
        <div className="grid grid-cols-2 gap-x-5">
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
          <Form.Item
            label="City"
            name="city"
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
        </div>
      </Form>
    </div>
  );
};

export default LeagueTeamGeneralForm;
