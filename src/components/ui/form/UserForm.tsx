/* eslint-disable @typescript-eslint/no-explicit-any */
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import {
  Button,
  DatePicker,
  Form,
  GetProp,
  Image,
  Input,
  Select,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { GetCity, GetState } from "react-country-state-city";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

type TProp = {
  record?: any;
  onFinish: any;
  form: any;
  loading: boolean;
};

const UserForm = ({ form, record, onFinish, loading }: TProp) => {
  const [previewImage, setPreviewImage] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [stateId, setStateId] = useState(0);
  const countryId = 233;

  const [stateList, setStateList] = useState<any>([]);
  const [cityList, setCityList] = useState<any>([]);

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  useEffect(() => {
    GetState(countryId).then((result) => {
      setStateList(result);
    });
    GetCity(countryId, stateId).then((result) => {
      setCityList(result);
    });
  }, [stateId]);

  const beforeUpload = (file: FileType) => {
    if (file.size > 5242880) {
      Swal.fire({
        title: "Oops!..",
        icon: "error",
        text: `Image size too large, please use less than 5MB`,
        confirmButtonColor: "#0ABAC3",
      });
      return Upload.LIST_IGNORE;
    }
    return false;
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const normFile = (e: { fileList: any }) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  dayjs.extend(weekday);
  dayjs.extend(localeData);
  useEffect(() => {
    form.setFieldsValue({
      first_name: record?.first_name,
      last_name: record?.last_name,
      email: record?.email,
      gender: record?.gender,
      phone: record?.phone,
      country: "United States",
      state: record?.state,
      city: record?.city,
      street_address: record?.street_address,
      zip_code: record?.zip_code,
      image: record?.image && [
        {
          uid: "-1",
          name: record?.image,
          status: "done",
          url: record?.image,
        },
      ],
      date_of_birth: record?.date_of_birth ? dayjs(record?.date_of_birth) : "",
    });
  }, [record, form]);

  const validateUSPhoneNumber = (_: any, value: string) => {
    const phoneNumberRegex = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/;

    if (!phoneNumberRegex.test(value.trim())) {
      return Promise.reject(new Error("Please enter a valid USA phone number"));
    }
    return Promise.resolve();
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="space-y-5"
      >
        <div className="flex flex-col items-center justify-center">
          <Form.Item
            name="image"
            className="m-0 mb-2"
            rules={[{ required: false, message: "Please select image" }]}
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              listType="picture-card"
              className="justify-center"
              onPreview={handlePreview}
              beforeUpload={beforeUpload}
              maxCount={1}
            >
              {"+ Upload"}
            </Upload>
          </Form.Item>
          <p className="text-[#3A394B] text-sm">Upload Image</p>
        </div>
        <div className="space-y-4">
          <p className="font-medium text-base">Personal Details</p>
          <div className="grid grid-cols-2 sm:gap-x-5 gap-x-2 gap-y-3">
            <Form.Item
              name="first_name"
              label="First Name"
              className="w-full m-0"
              rules={[{ required: true, message: "Please enter First Name" }]}
            >
              <Input placeholder="Enter first name" />
            </Form.Item>
            <Form.Item
              name="last_name"
              label="Last Name"
              className="w-full m-0"
              rules={[{ required: true, message: "Please enter Last Name" }]}
            >
              <Input placeholder="Enter last name" />
            </Form.Item>

            <Form.Item
              className="w-full m-0"
              name="email"
              label="Email"
              rules={[{ required: true }]}
            >
              <Input
                readOnly={record?.email ? true : false}
                placeholder="Enter your email"
              />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              className="w-full m-0"
              rules={[{ required: true, message: "Please select Gender" }]}
            >
              <Select
                placeholder="Select gender"
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
              />
            </Form.Item>
            <Form.Item
              className="w-full m-0"
              name="phone"
              label="Phone"
              rules={[
                { required: true, message: "" },
                { validator: validateUSPhoneNumber },
              ]}
            >
              <Input prefix={"USA"} placeholder="Enter your phone number" />
            </Form.Item>
            <Form.Item
              className="w-full m-0"
              name="date_of_birth"
              label="Date of Birth"
              rules={[{ required: true }]}
            >
              <DatePicker className="w-full" format={"DD/MM/YYYY"} />
            </Form.Item>
            <Form.Item
              className="w-full m-0"
              name="country"
              label="Country"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter your country" />
            </Form.Item>
            <Form.Item
              className="w-full m-0"
              name="state"
              label="State"
              rules={[{ required: true }]}
            >
              <Select
                showSearch
                optionFilterProp="children"
                filterOption={filterOption}
                onSelect={(_, options: any) => setStateId(options.key)}
                className="w-full"
                placeholder="Select your state"
                options={stateList?.map((state: any) => {
                  return {
                    label: state.name,
                    value: state.name,
                    key: state.id,
                  };
                })}
              />
            </Form.Item>
            <Form.Item
              className="w-full m-0"
              name="city"
              label="City"
              rules={[{ required: true }]}
            >
              <Select
                showSearch
                filterOption={filterOption}
                optionFilterProp="children"
                className="w-full"
                placeholder="Select your city"
                options={cityList?.map((city: any) => {
                  return { label: city.name, value: city.name, key: city.id };
                })}
              />
            </Form.Item>
            <Form.Item
              className="w-full m-0"
              name="zip_code"
              label="Zip/Postal Code"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter your postal code" />
            </Form.Item>
            <Form.Item
              className="w-full m-0 col-span-2"
              name="street_address"
              label="Street Address"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter your street address" />
            </Form.Item>
          </div>
        </div>
        <div className="flex justify-end">
          <Form.Item className="m-0">
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              loading={loading}
              className="primary-btn"
            >
              Update
            </Button>
          </Form.Item>
        </div>
      </Form>
      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

export default UserForm;
