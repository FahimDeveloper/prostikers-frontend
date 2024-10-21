/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, InputNumber } from "antd";
import { useEffect } from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";

const LeagueTeamDetailsForm = ({
  form,
  formData,
}: {
  form: any;
  formData: any;
}) => {
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
          Fill out this form to regester for upcoming trainings
        </p>
      </div>
      <Form form={form} layout="vertical" className="space-y-3">
        <Form.Item
          className="m-0"
          label="Team Name"
          name="team_name"
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Enter your team name"
            className="sm:w-1/2 w-full rounded-full p-2"
          />
        </Form.Item>
        <Form.List name="team">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }, index) => (
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium md:text-lg text-base text-[#7B7B7B]">
                      Player
                      {index == 0
                        ? ` ${index + 1} (Team Lead)`
                        : ` ${index + 1}`}
                    </h4>
                    {index > 0 && (
                      <AiOutlineMinusCircle
                        className="size-4 cursor-pointer"
                        onClick={() => remove(name)}
                      />
                    )}
                  </div>
                  <div
                    key={key}
                    className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 sm:gap-3 gap-2 items-center"
                  >
                    <Form.Item
                      className="m-0"
                      label="First Name"
                      {...restField}
                      name={[name, "first_name"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input
                        readOnly={index < 1 ? true : false}
                        placeholder="Type here..."
                        className="w-full rounded-full sm:p-2 p-1"
                      />
                    </Form.Item>
                    <Form.Item
                      className="m-0"
                      label="Last Name"
                      {...restField}
                      name={[name, "last_name"]}
                      rules={[{ required: true, message: "Missing last name" }]}
                    >
                      <Input
                        readOnly={index < 1 ? true : false}
                        placeholder="Type here..."
                        className="w-full rounded-full sm:p-2 p-1"
                      />
                    </Form.Item>
                    <Form.Item
                      className="m-0"
                      label="Age"
                      {...restField}
                      name={[name, "age"]}
                      rules={[
                        { required: true, message: "Missing date of birth" },
                      ]}
                    >
                      <InputNumber
                        readOnly={index < 1 ? true : false}
                        placeholder="Type here..."
                        className="w-full rounded-full sm:p-1"
                        min={0}
                        max={99}
                      />
                    </Form.Item>
                    <Form.Item
                      className="m-0"
                      label="Email"
                      {...restField}
                      name={[name, "email"]}
                      rules={[{ required: true, message: "Missing email" }]}
                    >
                      <Input
                        readOnly={index < 1 ? true : false}
                        placeholder="Type here..."
                        className="w-full rounded-full sm:p-2 p-1"
                      />
                    </Form.Item>
                    <Form.Item
                      className="m-0"
                      label="Contact"
                      {...restField}
                      name={[name, "contact"]}
                      rules={[
                        { required: true, message: "" },
                        { validator: validateUSPhoneNumber },
                      ]}
                    >
                      <Input
                        readOnly={index < 1 ? true : false}
                        placeholder="Type here..."
                        prefix={"USA"}
                        className="w-full rounded-full sm:p-2 p-1"
                      />
                    </Form.Item>
                  </div>
                </div>
              ))}
              {fields.length <= 5 && (
                <Form.Item className="mt-5">
                  <Button
                    className="btn bg-[#07133D] hover:bg-[#07133D] text-white sm:text-base font-medium px-5 rounded-full"
                    onClick={() => add()}
                  >
                    Add Member
                  </Button>
                </Form.Item>
              )}
            </>
          )}
        </Form.List>
      </Form>
    </div>
  );
};

export default LeagueTeamDetailsForm;
