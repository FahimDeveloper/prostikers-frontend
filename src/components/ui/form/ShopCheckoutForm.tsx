import { Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/useAppHooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import "react-country-state-city/dist/react-country-state-city.css";

import { GetCity, GetState } from "react-country-state-city";

const ShopCheckoutForm = ({ form }: { form: any }) => {
  const user = useAppSelector(selectCurrentUser);
  const [stateId, setStateId] = useState(0);
  const countryId = 233;

  const [stateList, setStateList] = useState<any>([]);
  const [cityList, setCityList] = useState<any>([]);

  useEffect(() => {
    GetState(233).then((result) => {
      setStateList(result);
    });
    GetCity(countryId, stateId).then((result) => {
      setCityList(result);
    });
  }, [stateId]);

  const validateUSPhoneNumber = (_: any, value: string) => {
    const phoneNumberRegex =
      /^(?:\+1\s*?)?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

    if (!phoneNumberRegex.test(value)) {
      return Promise.reject(new Error("Please enter a valid USA phone number"));
    }
    return Promise.resolve();
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <Form
      form={form}
      initialValues={{
        user_name: `${user?.first_name} ${user?.last_name}`,
        email: user?.email,
        phone: user?.phone,
        // state: user?.state,
        country: "United States",
        // city: user?.city,
        street_address: user?.street_address,
        zip_code: user?.zip_code,
      }}
      layout="vertical"
      className="space-y-3"
    >
      <Form.Item
        label="Full Name"
        name="user_name"
        className="m-0"
        rules={[{ required: true }]}
      >
        <Input className="w-full" size="large" placeholder="Type here.." />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        className="m-0"
        rules={[{ required: true }]}
      >
        <Input
          readOnly
          className="w-full"
          size="large"
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
          className="w-full"
          size="large"
          prefix={"USA"}
          placeholder="Type here.."
        />
      </Form.Item>

      <Form.Item
        className="m-0"
        label="Country"
        name="country"
        rules={[{ required: true }]}
      >
        <Input
          className="w-full"
          size="large"
          readOnly
          placeholder="Enter your country"
        />
      </Form.Item>
      <Form.Item
        label="State/Province"
        name="state"
        className="m-0"
        rules={[{ required: true }]}
      >
        <Select
          showSearch
          optionFilterProp="children"
          filterOption={filterOption}
          onSelect={(_, options: any) => setStateId(options.key)}
          className="w-full"
          size="large"
          placeholder="Select your state"
          options={stateList?.map((state: any) => {
            return { label: state.name, value: state.name, key: state.id };
          })}
        />
      </Form.Item>
      <Form.Item
        label="City"
        name="city"
        className="m-0"
        rules={[{ required: true }]}
      >
        <Select
          showSearch
          filterOption={filterOption}
          optionFilterProp="children"
          className="w-full"
          size="large"
          placeholder="Select your city"
          options={cityList?.map((city: any) => {
            return { label: city.name, value: city.name, key: city.id };
          })}
        />
      </Form.Item>
      <Form.Item
        label="Street Address"
        name="street_address"
        className="m-0"
        rules={[{ required: true }]}
      >
        <Input className="w-full" size="large" placeholder="Type here.." />
      </Form.Item>
      <Form.Item
        label="Zip/Postal Code"
        name="zip_code"
        rules={[{ required: true }]}
      >
        <Input className="w-full" size="large" placeholder="Type here.." />
      </Form.Item>
    </Form>
  );
};

export default ShopCheckoutForm;
