/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Checkbox, Steps } from "antd";
import RentalBookingReviewPart from "../../../pages/RentalBookingPage/components/RentalBookingReviewPart";
import GroupTrainingGeneralForm from "../form/GroupTrainingGeneralForm";
import TermsCondition from "../../TermsCondition";
import PrivacyPolicy from "../../PrivacyPolicy";
import { useState } from "react";

const RentalBookingSteps = ({
  form,
  onFinish,
  current,
  rentalInfo,
  setCurrent,
  addons,
  setAddons,
  bookingData,
  setTotalPrice,
  setVoucherApplied,
  totalPrice,
}: {
  form: any;
  onFinish: any;
  current: number;
  setCurrent: any;
  addons: any;
  setAddons: any;
  rentalInfo: any;
  bookingData: any;
  setTotalPrice: any;
  setVoucherApplied: any;
  totalPrice: any;
}) => {
  const [agree, setAgree] = useState(false);
  const steps = [
    {
      title: "Review Booking",
      content: (
        <RentalBookingReviewPart
          addons={addons}
          setAddons={setAddons}
          bookingData={bookingData}
          rentalInfo={rentalInfo}
          // membershipData={membershipData}
          setVoucherApplied={setVoucherApplied}
          setTotalPrice={setTotalPrice}
          totalPrice={totalPrice}
        />
      ),
    },
    {
      title: "Booking Details",
      content: <GroupTrainingGeneralForm form={form} />,
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const onChange = (value: number) => {
    setCurrent(value);
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  return (
    <div className="bg-[#F9FBFF] xl:p-16 md:p-12 sm:p-8 p-4 border border-solid border-[#F9FBFF] rounded-2xl space-y-6">
      <Steps
        current={current}
        items={items}
        onChange={onChange}
        direction="horizontal"
        size="default"
      />
      <div className="sm:px-5">{steps[current].content}</div>
      {current === steps.length - 1 && (
        <div className="ms-5">
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
          <Button className="primary-btn" onClick={() => prev()}>
            Back
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
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

export default RentalBookingSteps;
