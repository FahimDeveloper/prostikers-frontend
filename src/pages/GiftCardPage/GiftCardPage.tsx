import { useEffect, useState } from "react";
import { Radio, Input, Button, Form } from "antd";
import facility50 from "../../assets/images/giftCard/50-facility.jpg";
import facility100 from "../../assets/images/giftCard/100-facility.jpg";
import facility200 from "../../assets/images/giftCard/200-facility.jpg";
import facility500 from "../../assets/images/giftCard/500-facility.jpg";
import facilityback from "../../assets/images/giftCard/facility-back.jpg";
import shop50 from "../../assets/images/giftCard/50-shop.jpg";
import shop100 from "../../assets/images/giftCard/100-shop.jpg";
import shop200 from "../../assets/images/giftCard/200-shop.jpg";
import shop500 from "../../assets/images/giftCard/500-shop.jpg";
import shopback from "../../assets/images/giftCard/shop-back.jpg";
import Container from "../../components/Container";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  GiftOutlined,
  TagOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { useAppSelector } from "../../hooks/useAppHooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";

const GiftCard = () => {
  const [category, setCategory] = useState<"shop" | "facility">("shop");
  const [selectedPrice, setSelectedPrice] = useState(50);
  const [form] = useForm();
  const [giftOption, setGiftOption] = useState<"me" | "other" | null>(null);
  const prices = [50, 100, 200, 500];
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.email) {
      form.setFieldsValue({
        owner_email: user.email,
        sender_name: `${user.first_name} ${user.last_name}`,
      });
    }
  });

  const images: any = {
    shop: {
      50: shop50,
      100: shop100,
      200: shop200,
      500: shop500,
      back: shopback,
    },
    facility: {
      50: facility50,
      100: facility100,
      200: facility200,
      500: facility500,
      back: facilityback,
    },
  };

  const generateShortUniqueCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const timestampPart = Date.now().toString().slice(-5);
    let randomPart = "";
    for (let i = 0; i < 5; i++) {
      randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${randomPart}${timestampPart}`;
  };

  const onSubmit = (values: any) => {
    values.use_for = category;
    values.amount = selectedPrice * 0.8;
    values.code = `PS25-${generateShortUniqueCode()}`;
    values.gift_for =
      giftOption == "me" ? values.owner_email : values.recipient_email;
    values.gift_by = values.owner_email;
    delete values.recipient_email;
    delete values.owner_email;
    navigate("/black-friday/gift-cards/payment", {
      state: { data: values, amount: selectedPrice * 0.8 },
    });
  };

  return (
    <Container>
      <div className="gift-card lg:py-16 md:py-12 py-10 mt-16 lg:space-y-10 md:space-y-7 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5">
          <div>
            <img
              src={images[category][selectedPrice]}
              alt="Gift card"
              className="w-full rounded-xl shadow-md"
            />
            <img
              src={images[category]["back"]}
              alt="Gift card"
              className="w-full rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="md:text-3xl text-2xl font-bold">
              ProStrikers Gift Cards <br /> The Perfect Gift for Every Player
            </h1>
            <p className="text-base">
              Give the gift of skills, training, and pro-level gear! Our gift
              cards work across the entire ProStrikers experience — from rentals
              to training to pro shop gear.
            </p>

            <div>
              <p className="font-semibold mb-1 text-base">Gift For</p>

              <Radio.Group
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <div className="flex gap-4">
                  <Radio.Button
                    value="shop"
                    className="!px-5 !rounded-lg border-l shadow-sm"
                  >
                    Pro Shop
                  </Radio.Button>

                  <Radio.Button
                    value="facility"
                    className="!px-5 !rounded-lg border-l shadow-sm"
                  >
                    Facility
                  </Radio.Button>
                </div>
              </Radio.Group>
            </div>

            <div>
              <p className="font-semibold mb-2">
                Choose Denomination and get 20% OFF
              </p>

              <Radio.Group
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
              >
                <div className="flex flex-wrap gap-3">
                  {prices.map((p) => (
                    <Radio.Button
                      key={p}
                      value={p}
                      className="!px-5 !rounded-lg border-l shadow-sm"
                    >
                      ${p}
                    </Radio.Button>
                  ))}
                </div>
              </Radio.Group>
            </div>

            <div className="text-lg">
              Price:{" "}
              <span className="text-primary font-bold">
                ${selectedPrice * 0.8}
              </span>
            </div>

            <Radio.Group
              value={giftOption}
              onChange={(e) => setGiftOption(e.target.value)}
            >
              <div className="flex md:flex-nowrap flex-wrap gap-4">
                <Radio value="me">I want to buy it for me</Radio>
                <Radio value="other">I want to send this as a gift</Radio>
              </div>
            </Radio.Group>

            <Form form={form} onFinish={onSubmit} className="space-y-3">
              {giftOption === "other" && (
                <>
                  <Form.Item
                    name="sender_name"
                    rules={[{ required: true, message: "Enter the name" }]}
                    className="m-0 w-full"
                  >
                    <Input
                      placeholder="Your name as a sender"
                      className="w-full mt-2"
                    />
                  </Form.Item>
                  <div className="flex gap-2 md:flex-nowrap flex-wrap">
                    <Form.Item
                      name="owner_email"
                      rules={[{ required: true, message: "Enter the name" }]}
                      className="m-0 w-full"
                    >
                      <Input
                        placeholder="Your email address"
                        className="w-full mt-2"
                      />
                    </Form.Item>
                    <Form.Item
                      name="recipient_email"
                      rules={[{ required: true, message: "Enter the email" }]}
                      className="m-0 w-full"
                    >
                      <Input
                        placeholder="Recipient's Email"
                        className="w-full mt-2"
                      />
                    </Form.Item>
                  </div>
                </>
              )}
              {giftOption === "me" && (
                <Form.Item
                  rules={[{ required: true, message: "Enter the email" }]}
                  className="m-0 w-full"
                  name="owner_email"
                >
                  <Input
                    placeholder="Your Email Address"
                    className="w-full mt-2"
                  />
                </Form.Item>
              )}

              <Form.Item className="m-0 w-full">
                <Button
                  htmlType="submit"
                  disabled={giftOption == null}
                  className="w-full"
                  type="primary"
                  size="large"
                >
                  Buy Now
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold mb-3">Details</h2>
          <div className="flex items-center gap-2 mb-3">
            <TagOutlined className="text-blue-600 text-xl" />
            <h2 className="text-lg font-semibold">
              Limited-Time Offers (Nov 29 — Dec 7 Only)
            </h2>
          </div>

          <ul className="ml-7 list-disc text-gray-700 leading-7">
            <li>20% OFF ProStrikers Gift Cards</li>
            <li>Buy $50 → Pay Only $40</li>
            <li>Buy $100 → Pay Only $80</li>
            <li>Buy $200 → Pay Only $160</li>
            <li>Buy $500 → Pay Only $400</li>
            <li>Valid for 6 months</li>
          </ul>

          <div className="flex items-center gap-2 mt-6 mb-3">
            <ShopOutlined className="text-green-600 text-xl" />
            <h2 className="text-lg font-semibold">
              Where Can ProStrikers Gift Cards Be Used?
            </h2>
          </div>

          <ul className="ml-7 text-gray-700 leading-7">
            <li className="flex items-start gap-2">
              <CheckCircleOutlined className="text-green-500 mt-1" /> Cage
              Rentals
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleOutlined className="text-green-500 mt-1" /> Pass Packs
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleOutlined className="text-green-500 mt-1" /> Youth
              Training Sessions
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleOutlined className="text-green-500 mt-1" /> 1-on-1
              Coaching
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleOutlined className="text-green-500 mt-1" /> In-Store
              Purchases
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleOutlined className="text-green-500 mt-1" /> Online Pro
              Shop Purchases
            </li>
          </ul>

          <div className="flex items-center gap-2 mt-6 mb-1 text-red-600">
            <ExclamationCircleOutlined />
            <p className="font-medium">
              Gift Cards cannot be used for Membership purchases.
            </p>
          </div>

          <p className="text-gray-700 mt-4 leading-7">
            <ExclamationCircleOutlined className="text-yellow-500 mr-2" />
            Gift Cards purchased during Black Friday Week will only activate on{" "}
            <b>December 8, 2025</b>
          </p>

          <div className="flex items-center gap-2 mt-6 mb-3">
            <GiftOutlined className="text-purple-600 text-xl" />
            <h2 className="text-lg font-semibold">
              Choose Between 2 Gift Card Types
            </h2>
          </div>

          <ul className="ml-7 text-gray-700 leading-7">
            <li className="flex items-start gap-2">
              <CheckCircleOutlined className="text-purple-500 mt-1" />
              Facility Gift Card – use for rentals, pass packs, training,
              coaching & in-store purchases
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleOutlined className="text-purple-500 mt-1" />
              Online Pro Shop Gift Card – use for online gear purchases only
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default GiftCard;
