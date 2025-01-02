import { Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/useAppHooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { City, State } from "country-state-city";

const ShopCheckoutForm = ({ form }: { form: any }) => {
  const user = useAppSelector(selectCurrentUser);
  const [states, setStates] = useState<any>([]);
  const [cities, setCities] = useState<any>([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    if (selectedCountry) {
      const stateList = State.getStatesOfCountry(selectedCountry);
      setStates(stateList);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
      const cityList = City.getCitiesOfState(selectedCountry, selectedState);
      setCities(cityList);
    }
  }, [selectedState]);

  const validateUSPhoneNumber = (_: any, value: string) => {
    const phoneNumberRegex =
      /^(?:\+1\s*?)?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

    if (!phoneNumberRegex.test(value)) {
      return Promise.reject(new Error("Please enter a valid USA phone number"));
    }
    return Promise.resolve();
  };
  return (
    <Form
      form={form}
      initialValues={{
        user_name: `${user?.first_name} ${user?.last_name}`,
        email: user?.email,
        phone: user?.phone,
        // state: user?.state,
        // country: user?.country,
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
        <Input className="w-full rounded-full p-2" placeholder="Type here.." />
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
        className="m-0"
        label="Country"
        name="country"
        rules={[{ required: true }]}
      >
        <Select
          onChange={(value) => setSelectedCountry(value)}
          placeholder="Select your country"
          options={[
            {
              label: "United States",
              value: "US",
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        label="State/Province"
        name="state"
        className="m-0"
        rules={[{ required: true }]}
      >
        <Select
          onChange={(value) => setSelectedState(value)}
          placeholder="Select your state"
          options={states.map((state: any) => ({
            label: state.name,
            value: state.isoCode,
          }))}
        />
      </Form.Item>
      <Form.Item
        className="m-0"
        label="City"
        name="city"
        rules={[{ required: true }]}
      >
        <Select
          onChange={(value) => setSelectedCity(value)}
          placeholder="Select your city"
          options={cities.map((country: any) => ({
            label: country.name,
            value: country.name,
          }))}
        />
      </Form.Item>
      <Form.Item
        label="Street Address"
        name="street_address"
        className="m-0"
        rules={[{ required: true }]}
      >
        <Input className="w-full rounded-full p-2" placeholder="Type here.." />
      </Form.Item>
      <Form.Item
        label="Zip/Postal Code"
        name="zip_code"
        rules={[{ required: true }]}
      >
        <Input className="w-full rounded-full p-2" placeholder="Type here.." />
      </Form.Item>
    </Form>
  );
};

export default ShopCheckoutForm;
