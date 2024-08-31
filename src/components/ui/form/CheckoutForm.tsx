/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button } from "antd";
import { useState } from "react";

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

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      {clientSecret && (
        <PaymentElement
          id="payment-element"
          options={{
            layout: "tabs",
          }}
        />
      )}
      <Button
        className="primary-btn-2 w-full"
        htmlType="submit"
        loading={isLoading || paymentLoading}
        disabled={paymentLoading || isLoading || !stripe || !elements}
      >
        Pay $ {amount}
      </Button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
