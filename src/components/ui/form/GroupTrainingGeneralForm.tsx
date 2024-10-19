/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, InputNumber } from "antd";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useEffect } from "react";

const GroupTrainingGeneralForm = ({ form }: any) => {
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    form.setFieldsValue({
      first_name: user?.first_name,
      last_name: user?.last_name,
      email: user?.email,
      phone: user?.phone,
    });
  }, [user, form]);

  const validateUSPhoneNumber = (_: any, value: string) => {
    const phoneNumberRegex =
      /^(?:\+1\s*?)?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const hasCountryCode = /^\+1/.test(value);
    if (!hasCountryCode) {
      return Promise.reject(
        new Error("Please Enter number with the country code (+1)")
      );
    }
    if (value && !phoneNumberRegex.test(value)) {
      return Promise.reject(
        new Error("Please enter a valid USA phone number.")
      );
    }

    return Promise.resolve();
  };

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-[#07133D]">General Details</h3>
        <p className="text-[#929292] text-base">
          Fill out this form to regester for upcoming trainings
        </p>
      </div>
      <Form form={form} layout="vertical">
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
              readOnly
              className="w-full rounded-full p-2"
              placeholder="Type here.."
            />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            className="m-0"
            rules={[
              { required: true, message: "" },
              { validator: validateUSPhoneNumber },
            ]}
          >
            <Input
              className="w-full rounded-full p-2"
              prefix={"USA"}
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
      </Form>
    </div>
  );
};

export default GroupTrainingGeneralForm;
