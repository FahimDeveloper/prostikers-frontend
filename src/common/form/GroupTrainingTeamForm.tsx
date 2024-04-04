import { Button, DatePicker, Form } from "antd";
import Input from "antd/es/input/Input";
import Container from "../../components/Container";
import { AiOutlineMinusCircle } from "react-icons/ai";

/* eslint-disable @typescript-eslint/no-explicit-any */
const GroupTrainingTeamForm = ({ form, onFinish }: any) => {
  return (
    <Container>
      <div className="bg-[#F9FBFF] p-5">
        <h3 className="text-3xl font-bold">Team Details</h3>
        <p className="text-[#929292] text-base">
          Fill out this form to regester for upcoming trainings
        </p>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item label="Team Name">
            <Input placeholder="Enter your team name" className="w-1/2" />
          </Form.Item>
          <Form.List name="users">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }, index) => (
                  <div className="space-y-2">
                    <h4 className="font-medium text-lg text-[#7B7B7B]">
                      Player
                      {index == 0
                        ? ` ${index + 1} (Team Lead)`
                        : ` ${index + 1}`}
                    </h4>
                    <div
                      key={key}
                      className="grid grid-cols-5 gap-5 items-center"
                    >
                      <Form.Item
                        label="First Name"
                        {...restField}
                        name={[name, "firstName"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <Input placeholder="Member first name" />
                      </Form.Item>
                      <Form.Item
                        label="Last Name"
                        {...restField}
                        name={[name, "lastName"]}
                        rules={[
                          { required: true, message: "Missing last name" },
                        ]}
                      >
                        <Input placeholder="Member last name" />
                      </Form.Item>
                      <Form.Item
                        label="Date of Birth"
                        {...restField}
                        name={[name, "date_of_birth"]}
                        rules={[
                          { required: true, message: "Missing date of birth" },
                        ]}
                      >
                        <DatePicker
                          placeholder="Date of Birth"
                          className="w-full"
                        />
                      </Form.Item>
                      <Form.Item
                        label="Email"
                        {...restField}
                        name={[name, "email"]}
                        rules={[{ required: true, message: "Missing email" }]}
                      >
                        <Input placeholder="Member email" />
                      </Form.Item>
                      <div className="flex items-center gap-2">
                        <Form.Item
                          label="Contact"
                          {...restField}
                          name={[name, "contact"]}
                          rules={[
                            { required: true, message: "Missing contact" },
                          ]}
                        >
                          <Input placeholder="Contact number" />
                        </Form.Item>
                        <AiOutlineMinusCircle
                          className="size-4"
                          onClick={() => remove(name)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Form.Item>
                  <Button className="btn btn-secondary" onClick={() => add()}>
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </div>
    </Container>
  );
};

export default GroupTrainingTeamForm;
