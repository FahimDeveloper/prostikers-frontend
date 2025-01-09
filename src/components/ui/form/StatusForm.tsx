import { Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";

const StatusForm = ({
  onFinish,
  form,
  loading,
}: {
  onFinish: any;
  form: any;
  loading: boolean;
}) => {
  return (
    <Form
      onFinish={onFinish}
      form={form}
      layout="vertical"
      className="space-y-3"
    >
      <Form.Item
        name="note"
        rules={[{ required: true }]}
        label="Status Note"
        className="m-0"
      >
        <TextArea rows={5} placeholder="Enter status update note" />
      </Form.Item>
      <Form.Item className="flex justify-end m-0">
        <Button
          type="primary"
          danger
          className="capitalize"
          htmlType="submit"
          loading={loading}
        >
          make order canceled
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StatusForm;
