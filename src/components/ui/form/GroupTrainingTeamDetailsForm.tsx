/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, InputNumber } from "antd";
import { useEffect } from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";

const GroupTrainingTeamDetailsForm = ({ form, formData }: any) => {
  useEffect(() => {
    if (formData) {
      form.setFieldsValue({
        team: [
          {
            first_name: formData.first_name,
            last_name: formData.last_name,
            age: formData.age,
            email: formData.email,
            contact: formData.phone,
          },
        ],
      });
    }
  }, [formData, form]);

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
      return Promise.reject(new Error("Please enter a valid USA number"));
    }

    return Promise.resolve();
  };

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-[#07133D]">General Details</h3>
        <p className="text-[#929292] text-base">
          Fill out this form to regester
        </p>
      </div>
      <Form form={form} layout="vertical">
        <Form.Item
          label="Team Name"
          name="team_name"
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Enter your team name"
            className="w-1/2 rounded-full p-2"
          />
        </Form.Item>
        <Form.List name="team">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }, index) => (
                <div className="space-y-2" key={index}>
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium text-lg text-[#7B7B7B]">
                      Player
                      {index == 0
                        ? ` ${index + 1} (Team Lead)`
                        : ` ${index + 1}`}
                    </h4>
                    <AiOutlineMinusCircle
                      className="size-4 cursor-pointer"
                      onClick={() => remove(name)}
                    />
                  </div>
                  <div
                    key={key}
                    className="grid grid-cols-5 gap-3 items-center"
                  >
                    <Form.Item
                      label="First Name"
                      {...restField}
                      name={[name, "first_name"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input
                        placeholder="Type here..."
                        className="w-full rounded-full p-2"
                      />
                    </Form.Item>
                    <Form.Item
                      label="Last Name"
                      {...restField}
                      name={[name, "last_name"]}
                      rules={[{ required: true, message: "Missing last name" }]}
                    >
                      <Input
                        placeholder="Type here..."
                        className="w-full rounded-full p-2"
                      />
                    </Form.Item>
                    <Form.Item
                      label="Age"
                      {...restField}
                      name={[name, "age"]}
                      rules={[
                        { required: true, message: "Missing date of birth" },
                      ]}
                    >
                      <InputNumber
                        placeholder="Type here..."
                        className="w-full rounded-full p-1"
                        min={0}
                        max={99}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Email"
                      {...restField}
                      name={[name, "email"]}
                      rules={[{ required: true, message: "Missing email" }]}
                    >
                      <Input
                        placeholder="Type here..."
                        className="w-full rounded-full p-2"
                      />
                    </Form.Item>
                    <Form.Item
                      label="Contact"
                      {...restField}
                      name={[name, "contact"]}
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
                  </div>
                </div>
              ))}
              <Form.Item>
                <Button
                  className="btn bg-[#07133D] text-white text-base font-medium px-5 rounded-full"
                  onClick={() => add()}
                >
                  Add Member
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  );
};

export default GroupTrainingTeamDetailsForm;
