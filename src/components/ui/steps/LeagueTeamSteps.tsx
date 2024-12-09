/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Checkbox, Steps } from "antd";
import { useState } from "react";
import LeagueTeamGeneralForm from "../form/LeagueTeamGeneralForm";
import LeagueTeamDetailsForm from "../form/LeagueTeamDetailsForm";
import TermsCondition from "../../TermsCondition";
import PrivacyPolicy from "../../PrivacyPolicy";

const LeagueTeamSteps = ({
  form,
  onSubmit,
  current,
  setCurrent,
}: {
  form: any;
  onSubmit: any;
  current: number;
  setCurrent: any;
}) => {
  const [formData, setFormData] = useState<any>({});
  const [agree, setAgree] = useState(false);
  const steps = [
    {
      title: "General Details",
      content: <LeagueTeamGeneralForm form={form} />,
    },
    {
      title: "Team Details",
      content: <LeagueTeamDetailsForm formData={formData} form={form} />,
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
    <div className="bg-[#F9FBFF] md:p-16 sm:p-8 p-4 border border-solid border-[#F9FBFF] rounded-2xl space-y-6">
      <Steps
        current={current}
        items={items}
        onChange={onChange}
        direction="horizontal"
      />
      <div className="sm:px-5">{steps[current].content}</div>
      {current === steps.length - 1 && (
        <div className="sm:ms-5">
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
        </div>
      )}
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
            disabled={!agree}
            className="primary-btn"
            onClick={() => onFinish()}
          >
            Proceed
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button className="primary-btn" onClick={() => next()}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default LeagueTeamSteps;
