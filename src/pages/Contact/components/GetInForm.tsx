import { Form, Input } from "antd";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const GetInForm = () => {
  const onFinish = (values: FormValues) => {
    console.log(values);
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input
          placeholder="Your Name"
          className="bg-[#FAFFFF] text-[#215757] h-14 text-lg"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input
          placeholder="Your Email"
          className="bg-[#FAFFFF] text-[#215757] h-14 text-lg"
        />
      </Form.Item>
      <Form.Item
        name="message"
        rules={[{ required: true, message: "Please enter your message" }]}
      >
        <Input.TextArea
          rows={7}
          placeholder="Message"
          className="bg-[#FAFFFF] text-[#215757] text-lg"
        />
      </Form.Item>
      <Form.Item>
        <button
          className="btn btn-primary hover:btn-secondary text-white"
          type="submit"
        >
          Send message
        </button>
      </Form.Item>
    </Form>
  );
};

export default GetInForm;
