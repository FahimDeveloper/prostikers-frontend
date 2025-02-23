/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import { useState } from "react";

const CancellationPolicy = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setOpen(true)}
        className="flex justify-center items-center"
      >
        {children}
      </div>
      <Modal
        width={1200}
        footer={[
          <div
            className="text-primary text-base cursor-pointer font-medium"
            onClick={() => setOpen(false)}
          >
            Close
          </div>,
        ]}
        maskClosable={false}
        title="Cancellation Policy"
        centered
        onCancel={() => setOpen(false)}
        open={open}
      >
        <div className="text-[#6B6B6B] leading-6 space-y-6">
          <div className="space-y-2">
            <h4 className="font-bold text-[#6B6B6B] text-lg">
              Our cancellation policy is as follows
            </h4>
            <p className="leading-5 font-medium">
              Cancellation within 2 hours will be charged the full amount of the
              reservation
            </p>
            <p className="leading-5 font-medium">
              Cancellation on the same day prior to 2 hours will be charged half
              of the reservation fee
            </p>
            <p className="leading-5 font-medium">
              Cancellation prior to the day of the reservation will have no
              cancellation fee
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-[#6B6B6B] text-lg">
              Same-Day Booking Cancellation Policy
            </h4>
            <p className="leading-5 font-medium">
              <span className="font-bold">Unlimited Membership Fine: </span>
              Members with Unlimited Membership will incur a fine on their card
              if a booking is canceled.
            </p>
            <p className="leading-5 font-medium">
              <span className="font-bold">Full Refund: </span>Cancellations made
              at least 4 hours before the booking time will result in a full
              credit refund for both members and non-members.
            </p>
            <ul className="ms-4 space-y-2">
              <li className="space-y-1">
                <p className="leading-5 font-medium">
                  Cancellation within 2 hours will be charged the full amount of
                  the reservation.
                </p>
              </li>
              <li className="space-y-1">
                <p className="leading-5 font-medium">
                  Between 2 to 4 hours members and non members will receive a
                  refund 50% of the booking payment or membership credit.
                </p>
              </li>
              <li className="space-y-1">
                <p className="leading-5 font-medium">
                  Cancellations made at least 4 hours before the booking time
                  will result in a full credit refund for both members and
                  non-members.
                </p>
              </li>
              <li className="space-y-1">
                <p className="leading-5 font-medium">
                  This applies to all memberships excluding unlimited
                  membership.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CancellationPolicy;
