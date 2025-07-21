import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button, Checkbox } from "antd";
import { useState, FormEvent } from "react";
import Swal from "sweetalert2";
import stripe_logo from "../../../assets/icons/stripe.png";
import MembershipConditions from "../../MembershipConditions";

const MembershipCheckoutForm = ({
  amount,
  clientSecret,
}: {
  amount: number;
  clientSecret: any;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [agree, setAgree] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setPaymentLoading(true);

    if (!stripe || !elements) {
      Swal.fire("Error", "Stripe has not loaded yet.", "error");
      setPaymentLoading(false);
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      Swal.fire("Error", submitError.message ?? "Unknown error", "error");
      setPaymentLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "https://dev.prostrikers.com/dashboard",
      },
    });

    if (error) {
      Swal.fire("Payment Error", error.message ?? "Unknown error", "error");
      setPaymentLoading(false);
      return;
    }
    setPaymentLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-[500] sm:w-96 w-[275px] sm:px-14 sm:py-8 p-5"
    >
      <div className="text-center">
        <img src={stripe_logo} className="h-12" alt="stripe logo" />
        <p className="text-base">Secured by Stripe</p>
      </div>
      <PaymentElement options={{ layout: "tabs" }} />
      <div className="space-y-3 mt-4">
        <Checkbox checked={agree} onChange={() => setAgree(!agree)}>
          <div className="flex gap-2 flex-wrap">
            <p className="text-sm text-secondary">I agree with</p>
            <MembershipConditions>
              <p className="text-primary cursor-pointer">
                Membership Conditions
              </p>
            </MembershipConditions>
          </div>
        </Checkbox>
        <Button
          className="primary-btn-2 w-full"
          htmlType="submit"
          loading={paymentLoading}
          disabled={!agree || !stripe || !elements}
        >
          Subscribe with $ {amount}
        </Button>
      </div>
    </form>
  );
};

export default MembershipCheckoutForm;
