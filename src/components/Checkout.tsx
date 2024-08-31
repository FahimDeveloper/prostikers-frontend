/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Elements } from "@stripe/react-stripe-js";
import Container from "./Container";
import CheckoutForm from "./ui/form/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import logo from "../assets/icons/logo.svg";
import { useEffect, useState } from "react";
import { usePaymentMutation } from "../redux/features/payment/paymentApi";
import Swal from "sweetalert2";
import { FaSpinner } from "react-icons/fa";

const Checkout = ({
  amount,
  isLoading,
  onSubmit,
}: {
  amount: number;
  isLoading: boolean;
  onSubmit: any;
}) => {
  const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
  const [clientSecret, setClientSecret] = useState("");
  const [create, { isLoading: createLoading }] = usePaymentMutation(undefined);
  useEffect(() => {
    create({ amount: amount })
      .unwrap()
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
        });
      });
  }, []);
  return (
    <>
      {createLoading ? (
        <FaSpinner className="size-7 text-primary animate-spin" />
      ) : (
        <div className="flex flex-col gap-5 justify-center items-center">
          <img src={logo} className="w-1/3" alt="logo" />
          <Elements
            options={{
              mode: "payment",
              amount: Math.round(amount * 100),
              currency: "usd",
            }}
            stripe={stripePromise}
          >
            <Container>
              {clientSecret && (
                <CheckoutForm
                  amount={amount}
                  onSubmit={onSubmit}
                  isLoading={isLoading}
                  clientSecret={clientSecret}
                />
              )}
            </Container>
          </Elements>
        </div>
      )}
    </>
  );
};

export default Checkout;
