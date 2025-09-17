import { Elements } from "@stripe/react-stripe-js";
import Container from "./Container";
import MembershipCheckoutForm from "./ui/form/MembershipCheckoutForm";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import logo from "../assets/icons/login-logo.svg";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaSpinner } from "react-icons/fa";
import { configKey } from "../config";
import { useCreateSubscriptionMutation } from "../redux/features/payment/paymentApi";
import { useNavigate } from "react-router-dom";

const stripePromise: Promise<Stripe | null> = loadStripe(configKey.STRIPE_KEY);

const MembershipCheckout = ({
  amount,
  email,
  plan,
  membership,
}: {
  amount: number;
  email: any;
  plan: string;
  membership: any;
}) => {
  const [clientSecret, setClientSecret] = useState<string>("");
  const [createSetupIntent, { isLoading: intentLoading }] =
    useCreateSubscriptionMutation();
  const navigate = useNavigate();
  useEffect(() => {
    createSetupIntent({
      email: email,
      membership: membership.split(" ").join("_"),
      plan: plan,
    })
      .unwrap()
      .then((data: any) => {
        if (data?.results?.requiresPayment) {
          setClientSecret(data?.results.clientSecret);
        } else {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Your membership has been activated. The payment will be processed automatically from your billing account.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/membership/thank-you");
        }
      })
      .catch((err: any) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message || "Something went wrong"}`,
          confirmButtonColor: "#0ABAC3",
        });
      });
  }, [email]);

  return (
    <>
      {intentLoading ? (
        <div className="h-96 flex justify-center items-center">
          <FaSpinner className="size-7 text-primary animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col gap-5 justify-center items-center">
          <img src={logo} className="w-1/3" alt="logo" />
          {clientSecret && (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
              }}
            >
              <Container>
                <MembershipCheckoutForm
                  amount={amount}
                  clientSecret={clientSecret}
                />
              </Container>
            </Elements>
          )}
        </div>
      )}
    </>
  );
};

export default MembershipCheckout;
