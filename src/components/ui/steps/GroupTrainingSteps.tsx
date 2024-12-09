/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Steps } from "antd";
import { useState } from "react";
import GroupTrainingGeneralForm from "../form/GroupTrainingGeneralForm";
import GroupTrainingTeamDetailsForm from "../form/GroupTrainingTeamDetailsForm";

const GroupTrainingSteps = ({
  form,
  onSubmit,
  loading,
  current,
  setCurrent,
}: {
  form: any;
  onSubmit: any;
  loading: boolean;
  current: number;
  setCurrent: any;
}) => {
  const [formData, setFormData] = useState<any>({});
  const steps = [
    {
      title: "General Details",
      content: <GroupTrainingGeneralForm form={form} />,
    },
    {
      title: "Group Details",
      content: <GroupTrainingTeamDetailsForm formData={formData} form={form} />,
    },
  ];
  const next = () => {
    form.validateFields().then((values: any) => {
      setFormData({ ...formData, ...values });
      setCurrent(current + 1);
    });
  };

  const onFinish = () => {
    form.validateFields().then((values: any) => {
      onSubmit({ ...formData, ...values });
    });
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const onChange = (value: number) => {
    if (value < current) {
      setCurrent(value);
    } else {
      form.validateFields().then((values: any) => {
        setFormData({ ...formData, ...values });
        setCurrent(value);
      });
    }
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  return (
    <div className="bg-[#F9FBFF] p-16 border border-solid border-[#F9FBFF] rounded-2xl space-y-6">
      <Steps
        current={current}
        items={items}
        onChange={onChange}
        direction="horizontal"
      />
      <div className="px-5">{steps[current].content}</div>
      <div className="flex justify-end gap-2">
        {current > 0 && (
          <Button
            type="primary"
            size="large"
            className="primary-btn"
            onClick={() => prev()}
          >
            Back
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            size="large"
            className="primary-btn"
            loading={loading}
            onClick={() => onFinish()}
          >
            Proceed
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button
            type="primary"
            size="large"
            className="primary-btn"
            onClick={() => next()}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default GroupTrainingSteps;
