/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button, Checkbox } from "antd";
import { useEffect, useState } from "react";
import TermsCondition from "../../TermsCondition";
import PrivacyPolicy from "../../PrivacyPolicy";
import Swal from "sweetalert2";
import stripe_logo from "../../../assets/icons/stripe.png";

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

  const [message, setMessage] = useState<string | undefined>(undefined);
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
        return_url: "https://prostrikers.com",
      },
      redirect: "if_required",
    });

    const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
    if (paymentIntent?.status === "succeeded") {
      onSubmit();
      setPaymentLoading(false);
      return;
    }

    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message as string);
    }

    setPaymentLoading(false);
  };

  useEffect(() => {
    if (message) {
      Swal.fire({
        title: "Payment Error",
        text: message,
        icon: "error",
        confirmButtonColor: "#0ABAC3",
      });
      setMessage(undefined);
    }
  }, [message]);

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="md:w-[500] sm:w-96 w-[275px] sm:px-14 sm:py-8 p-5"
    >
      <div className="text-center">
        <img src={stripe_logo} className="h-12" alt="stripe logo" />
        <p className="text-base">Secured from stripe</p>
      </div>
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
