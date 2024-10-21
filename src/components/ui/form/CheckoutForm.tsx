/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button, Checkbox } from "antd";
import { useState } from "react";
import TermsCondition from "../../TermsCondition";
import PrivacyPolicy from "../../PrivacyPolicy";

export default function CheckoutForm({
  amount,
  clientSecret,
  onSubmit,
  isLoading,
}: {
  amount: number;
  clientSecret: any;
  onSubmit: any;
  isLoading: boolean;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [agree, setAgree] = useState(false);

  const [message, setMessage] = useState("");
  const [paymentLoading, setPaymentLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setPaymentLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setMessage(submitError.message as string);
      setPaymentLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "https://www.youtube.com/",
      },
      redirect: "if_required",
    });

    const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
    if (paymentIntent?.status === "succeeded") {
      setMessage("Payment already succeeded.");
      onSubmit();
      setPaymentLoading(false);
      return;
    }

    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message as string);
    }

    setPaymentLoading(false);
  };

  console.log(message);

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="md:w-[500] sm:w-96 w-[305px] sm:p-14 p-5"
    >
      {clientSecret && (
        <PaymentElement
          id="payment-element"
          options={{
            layout: "tabs",
          }}
        />
      )}
      <div className="space-y-3">
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
        <Button
          className="primary-btn-2 w-full"
          htmlType="submit"
          loading={isLoading || paymentLoading}
          disabled={
            !agree || paymentLoading || isLoading || !stripe || !elements
          }
        >
          Pay $ {amount}
        </Button>
      </div>
    </form>
  );
}
