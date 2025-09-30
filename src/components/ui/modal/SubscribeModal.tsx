import { useEffect, useState } from "react";
import { Modal, Form, Input, Select, Button } from "antd";
import logo from "../../../assets/images/logo.png";
const SubscribeModal = () => {
  const [showSubscribe, setShowSubscribe] = useState(false);

  useEffect(() => {
    const popupClosed = sessionStorage.getItem("popupClosed");

    if (!popupClosed) {
      const timer = setTimeout(() => {
        setShowSubscribe(true);
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, []);

  const onSubscribeFinish = (values: any) => {
    console.log("Received values of form: ", values);
    setShowSubscribe(false);
    sessionStorage.setItem("popupClosed", "true");
  };

  const onSubscribeCancel = () => {
    setShowSubscribe(false);
    sessionStorage.setItem("popupClosed", "true");
  };

  return (
    <Modal
      width={450}
      centered
      open={showSubscribe}
      maskClosable={false}
      footer={null}
      onCancel={onSubscribeCancel}
    >
      <div className="space-y-5">
        <div className="text-center space-y-2">
          <img loading="lazy" src={logo} className="w-32 mx-auto" alt="logo" />
          <h3 className="sm:text-xl text-lg">
            Didn’t find what you’re looking for?
          </h3>
          <p className="text-gray-600 text-sm">
            Share your details and we’ll help you with the best options!
          </p>
        </div>
        <div>
          <Form layout="vertical" onFinish={onSubscribeFinish}>
            <div className="space-y-4">
              <Form.Item
                name="fullName"
                className="m-0"
                rules={[{ required: true, message: "Full name is required" }]}
              >
                <Input placeholder="Full name" size="large" />
              </Form.Item>

              <Form.Item
                name="phone"
                className="m-0"
                rules={[
                  { required: true, message: "Phone number is required" },
                ]}
              >
                <Input placeholder="Phone number" size="large" />
              </Form.Item>

              <Form.Item
                name="email"
                className="m-0"
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input placeholder="Email" size="large" />
              </Form.Item>

              <Form.Item
                name="areaOfInterest"
                className="m-0"
                rules={[
                  { required: true, message: "Area of interest is required" },
                ]}
              >
                <Select
                  placeholder="Area of interest"
                  options={[
                    { label: "Rental Facility", value: "Rental Facility" },
                    { label: "Membership", value: "Membership" },
                    { label: "Youth Training", value: "Youth Training" },
                    { label: "Event", value: "Event" },
                  ]}
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="preferredSport"
                className="m-0"
                rules={[
                  { required: true, message: "Preferred sport is required" },
                ]}
              >
                <Select
                  placeholder="Preferred sport"
                  options={[
                    { label: "Baseball", value: "Baseball" },
                    { label: "Softball", value: "Softball" },
                    { label: "Cricket", value: "Cricket" },
                    { label: "Soccer", value: "Soccer" },
                    { label: "Field Hockey", value: "Field Hockey" },
                  ]}
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="message"
                className="m-0"
                rules={[{ required: true, message: "Message is required" }]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Write your message here"
                  size="large"
                />
              </Form.Item>
            </div>

            <Form.Item className="mt-3">
              <Button size="large" type="primary" htmlType="submit" block>
                Get Help
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default SubscribeModal;
