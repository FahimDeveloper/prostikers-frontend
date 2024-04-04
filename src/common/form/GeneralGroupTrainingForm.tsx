/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Form, Input, Select } from "antd";
import Container from "../../components/Container";

const GeneralGroupTrainingForm = ({ form, onFinish, next }: any) => {
  return (
    <Container>
      <div className="bg-[#F9FBFF] p-5">
        <h3 className="text-3xl font-bold">General details</h3>
        <p className="text-[#929292] text-base">
          Fill out this form to regester for upcoming cricket trainings
        </p>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <div className="grid grid-cols-2 gap-5">
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "Enter your first name" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: "Enter your last name" }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Enter your email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Enter your phone" }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <Form.Item
              label="Date of Birth"
              name="date_of_birth"
              rules={[{ required: true, message: "Enter your date of birth" }]}
            >
              <DatePicker className="w-full" />
            </Form.Item>
            <Form.Item
              label="Training preferred time"
              name="preferred_time"
              rules={[
                { required: true, message: "Select your preferred time" },
              ]}
            >
              <Select
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
              rules={[
                { required: true, message: "Select your preferred date" },
              ]}
            >
              <DatePicker className="w-full" />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Form.Item
              label="Street Address"
              name="address"
              rules={[{ required: true, message: "Enter your street address" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: "Enter your city" }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Form.Item
              label="State/Province"
              name="state"
              rules={[{ required: true, message: "Enter your state/province" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Zip/Postal Code"
              name="zip"
              rules={[
                { required: true, message: "Enter your zip/postal code" },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div>
            <Form.Item>
              <button onClick={next} className="primary-btn">
                Next
              </button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default GeneralGroupTrainingForm;
