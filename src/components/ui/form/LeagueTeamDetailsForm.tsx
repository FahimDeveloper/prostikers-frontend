import { Button, Checkbox, Form, Input } from "antd";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useAppSelector } from "../../../hooks/useAppHooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import TermsCondition from "../../TermsCondition";
import PrivacyPolicy from "../../PrivacyPolicy";
import { useState } from "react";

const LeagueTeamDetailsForm = ({
  form,
  onFinish,
}: {
  form: any;
  onFinish: any;
}) => {
  const user = useAppSelector(selectCurrentUser);
  const validateUSPhoneNumber = (_: any, value: string) => {
    const phoneNumberRegex = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/;

    if (!phoneNumberRegex.test(value.trim())) {
      return Promise.reject(new Error("Please enter a valid USA phone number"));
    }
    return Promise.resolve();
  };
  const [agree, setAgree] = useState(false);

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-[#07133D]">General Details</h3>
        <p className="text-[#929292] text-base">
          Fill out this form to regester for upcoming trainings
        </p>
      </div>
      <Form
        onFinish={onFinish}
        form={form}
        layout="vertical"
        className="space-y-3"
        initialValues={{
          team: [
            {
              first_name: user?.first_name,
              last_name: user?.last_name,
              email: user?.email,
              contact: user?.phone,
            },
          ],
        }}
      >
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
                <div className="space-y-2" key={index}>
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
                    className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-3 gap-2 items-center"
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
                        placeholder="Type here..."
                        className="w-full rounded-full"
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
                        placeholder="Type here..."
                        className="w-full rounded-full"
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
                        className="w-full rounded-full"
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
                        placeholder="Type here..."
                        prefix={"USA"}
                        className="w-full rounded-full"
                      />
                    </Form.Item>
                  </div>
                </div>
              ))}
              {fields.length <= 5 && (
                <Form.Item className="mt-5">
                  <Button
                    color="default"
                    variant="solid"
                    className="text-white sm:text-base font-medium px-5 rounded-full"
                    onClick={() => add()}
                  >
                    Add Member
                  </Button>
                </Form.Item>
              )}
            </>
          )}
        </Form.List>
        <div className="text-end">
          <Checkbox onChange={() => setAgree(!agree)}>
            <div className="flex gap-2 flex-wrap">
              <p className="text-sm text-secondary">I agree with</p>
              <TermsCondition>
                <p className="text-primary cursor-pointer">Terms </p>
              </TermsCondition>
              <p>&</p>
              <PrivacyPolicy>
                <p className="text-primary cursor-pointer">policy</p>
              </PrivacyPolicy>
            </div>
          </Checkbox>
          <Button
            type="primary"
            size="large"
            disabled={!agree}
            className="primary-btn"
            htmlType="submit"
          >
            Proceed
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LeagueTeamDetailsForm;
