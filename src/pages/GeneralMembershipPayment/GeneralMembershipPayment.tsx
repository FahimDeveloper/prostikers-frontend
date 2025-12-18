import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import { useCreateGeneralSubscriptionMutation } from "../../redux/features/payment/paymentApi";
import Swal from "sweetalert2";
import { FaSpinner } from "react-icons/fa";
import { Elements } from "@stripe/react-stripe-js";
import Container from "../../components/Container";
import MembershipCheckoutForm from "../../components/ui/form/MembershipCheckoutForm";
import logo from "../../assets/icons/logo.png";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { configKey } from "../../config";
const stripePromise: Promise<Stripe | null> = loadStripe(configKey.STRIPE_KEY);

const GeneralMembershipPayment = () => {
  const { state } = useLocation();
  const user = useSelector(selectCurrentUser);
  const [clientSecret, setClientSecret] = useState<string>("");
  const navigate = useNavigate();
  const [createSetupIntent, { isLoading: intentLoading }] =
    useCreateGeneralSubscriptionMutation();
  useEffect(() => {
    if (!state?.amount || !state?.data) {
      navigate("/membership");
    }
    const { package_name, plan } = state?.data;
    createSetupIntent({
      email: user?.email,
      membership: package_name.split(" ").join("_"),
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
          navigate("/membership/thank-you", {
            state: { membershipType: "general" },
          });
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
  }, [state]);
  return (
    <div>
      {intentLoading ? (
        <div className="h-96 flex justify-center items-center">
          <FaSpinner className="size-7 text-primary animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center pt-24">
          <img src={logo} className="h-12" alt="logo" />
          {clientSecret && (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
              }}
            >
              <Container>
                <MembershipCheckoutForm
                  amount={state?.amount}
                  clientSecret={clientSecret}
                />
              </Container>
            </Elements>
          )}
        </div>
      )}
    </div>
  );
};

export default GeneralMembershipPayment;
