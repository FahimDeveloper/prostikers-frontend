import { Alert, Checkbox, Modal } from "antd";
import MembershipConditions from "../../../components/MembershipConditions";
import { useState } from "react";
import { useAppSelector } from "../../../hooks/useAppHooks";
import { useClientQuery } from "../../../redux/features/client/clientApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Container from "../../../components/Container";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";

const YouthMembershipCardSection = () => {
  const [plan, setPlan] = useState("monthly");
  const user = useAppSelector(selectCurrentUser);
  const { data: userData } = useClientQuery(user?._id);
  const [membership, setMembership] = useState<{
    membership: boolean;
    package_name: string;
    plan: string;
  } | null>(null);
  const [membershipPrice, setMembershipPrice] = useState<number | null>(null);
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const isCurrentPlan = (membershipName: string, planType: string) => {
    return (
      userData?.results?.membership &&
      userData?.results?.package_name?.toLowerCase() ===
        membershipName.toLowerCase() &&
      userData?.results?.plan?.toLowerCase() === planType.toLowerCase()
    );
  };
  const handleChangePackage = (value: string) => {
    setPlan(value);
  };
  const handleMembership = (membership: string, price: number) => {
    if (membership === "youth_training_membership") {
      const membershipData = {
        membership: true,
        package_name: "youth training membership",
        plan: plan,
      };
      setMembershipPrice(price);
      setMembership(membershipData);
      setOpenInfoModal(true);
    }
  };

  const onBlock = () => {
    Swal.fire({
      title: "Membership Renewal Info",
      icon: "info",
      showCloseButton: true,
      showConfirmButton: false,
      text: "You cannot upgrade your membership, current one is inactive for due payment, please renew to continue enjoying benefits or upgrade membership.",
    });
  };

  return (
    <div className="bg-[#F9FBFF]">
      <Container>
        <div className="lg:py-14 md:py-12 py-10 space-y-10">
          <div className="space-y-4 mx-auto text-center">
            <h4 className="capitalize text-primary lg:text-2xl text-xl font-semibold leading-7">
              Join the Elite
            </h4>
            <h2 className="lg:text-[56px] md:text-[45px] font-semibold lg:leading-[67px] md:leading-[50px]">
              Memberships That Match Your Ambition
            </h2>
            <p className="text-[#929292] text-lg lg:leading-7 leading-6 md:w-[700px] w-full mx-auto">
              Become a member of the ProStrikers community and enjoy exclusive
              access to our facilities, personalized training plans, and
              member-only events. Choose the plan that suits your goals and
              start your journey to the top.
            </p>
          </div>
          <div className="space-y-8">
            <div className="w-60 mx-auto text-lg bg-[#07133D] p-2 rounded-full flex items-center justify-between">
              <div
                onClick={() => handleChangePackage("monthly")}
                className={`${
                  plan === "monthly"
                    ? "bg-[#F6FFFF]"
                    : "text-white hover:text-black"
                } px-8 btn rounded-full hover:bg-[#F6FFFF]`}
              >
                Monthly
              </div>
              <div
                onClick={() => handleChangePackage("quarterly")}
                className={`${
                  plan === "quarterly"
                    ? "bg-[#F6FFFF]"
                    : "text-white hover:text-black"
                } btn rounded-full px-8 hover:bg-[#F6FFFF]`}
              >
                Quarterly
              </div>
              {/* <div
                onClick={() => handleChangePackage("yearly")}
                className={`${
                  plan === "yearly"
                    ? "bg-[#F6FFFF]"
                    : "text-white hover:text-black"
                } btn rounded-full px-5 hover:bg-[#F6FFFF]`}
              >
                Yearly
                <div className="bg-[#D9FFFF] text-black text-xs px-3 py-1 rounded-2xl">
                  30% Off
                </div>
              </div> */}
            </div>
            {plan === "monthly" ? (
              <div className="grid grid-cols-2 gap-10 items-center py-5">
                <div className="space-y-5 text-center">
                  <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                    Youth Training Membership
                  </h3>
                  <p className="text-mde membershi-list text-primary">
                    <span className="text-2xl leading-6 font-bold me-1">
                      $ 160
                    </span>
                    /month
                  </p>
                  {isCurrentPlan("youth training membership", plan) ? (
                    <button
                      className="membership-btn cursor-not-allowed opacity-50"
                      disabled
                    >
                      Current Plan
                    </button>
                  ) : userData?.results?.status &&
                    userData?.results?.status !== true ? (
                    <button onClick={onBlock} className="membership-btn">
                      Choose Plan
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        handleMembership("youth_training_membership", 160)
                      }
                      className="membership-btn"
                    >
                      Choose Plan
                    </button>
                  )}
                </div>
                <div className="space-y-5">
                  <h5 className="font-bold leading-4 text-lg">
                    Benefits of membership
                  </h5>
                  <ul className="text-sm membership-list list-none font-medium space-y-4">
                    <li className="flex gap-2">
                      <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                      <p>This is a month to month based economic membership.</p>
                    </li>
                    <li className="flex gap-2">
                      <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                      <p>
                        Exclusive monthly bundle pack including 04 training
                        session passes.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                      <p>
                        Easily book your preferred time slots with adjustable
                        options
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                      <p>Enjoy $40 off from regular training session rate.</p>
                    </li>
                  </ul>
                </div>
              </div>
            ) : plan === "quarterly" ? (
              <div className="grid grid-cols-2 gap-10 items-center py-5">
                <div className="space-y-5 text-center">
                  <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                    Youth Training Membership
                  </h3>
                  <p className="text-mde membershi-list text-primary">
                    <span className="text-2xl leading-6 font-bold me-1">
                      $ 480
                    </span>
                    /month
                  </p>
                  {isCurrentPlan("youth training membership", plan) ? (
                    <button
                      className="membership-btn cursor-not-allowed opacity-50"
                      disabled
                    >
                      Current Plan
                    </button>
                  ) : userData?.results?.status &&
                    userData?.results?.status !== true ? (
                    <button onClick={onBlock} className="membership-btn">
                      Choose Plan
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        handleMembership("youth_training_membership", 480)
                      }
                      className="membership-btn"
                    >
                      Choose Plan
                    </button>
                  )}
                </div>
                <div className="space-y-5">
                  <h5 className="font-bold leading-4 text-lg">
                    Benefits of membership
                  </h5>
                  <ul className="text-sm membership-list list-none font-medium space-y-4">
                    <li className="flex gap-2">
                      <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                      <p>
                        This is a Quarterly to Quarterly based economic
                        membership.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                      <p>
                        Exclusive monthly bundle pack including 04 training
                        session passes.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                      <p>
                        Easily book your preferred time slots with adjustable
                        options
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                      <p>Enjoy $40 off from regular training session rate.</p>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-10 items-center py-5">
                <div className="space-y-5 text-center">
                  <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                    Youth Training Membership
                  </h3>
                  <p className="text-mde membershi-list text-primary">
                    <span className="text-2xl leading-6 font-bold me-1">
                      $ 160
                    </span>
                    /month
                  </p>
                  {isCurrentPlan("youth training membership", plan) ? (
                    <button
                      className="membership-btn cursor-not-allowed opacity-50"
                      disabled
                    >
                      Current Plan
                    </button>
                  ) : userData?.results?.status &&
                    userData?.results?.status !== true ? (
                    <button onClick={onBlock} className="membership-btn">
                      Choose Plan
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        handleMembership("youth_training_membership", 160)
                      }
                      className="membership-btn"
                    >
                      Choose Plan
                    </button>
                  )}
                </div>
                <div className="space-y-5">
                  <h5 className="font-bold leading-4 text-lg">
                    Benefits of membership
                  </h5>
                  <ul className="text-sm membership-list list-none font-medium space-y-4">
                    <li className="flex gap-2">
                      <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                      <p>This is a month to month based economic membership.</p>
                    </li>
                    <li className="flex gap-2">
                      <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                      <p>
                        Exclusive monthly bundle pack including 04 training
                        session passes.
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                      <p>
                        Easily book your preferred time slots with adjustable
                        options
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                      <p>Enjoy $40 off from regular training session rate.</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
      <Modal
        okButtonProps={{ disabled: !agree }}
        okText="Proceed"
        centered
        title="Membership Information"
        open={openInfoModal}
        onOk={() => {
          navigate("/membership-payment", {
            state: { data: membership, amount: membershipPrice },
          });
        }}
        onCancel={() => {
          setOpenInfoModal(false);
          setAgree(false);
          setMembership(null);
          setMembershipPrice(null);
        }}
      >
        <div className="space-y-2">
          {membership?.plan === "monthly" ? (
            <Alert
              message="Informational Notes"
              description="Your membership requires a minimum commitment of 3 months. Don’t worry — you’ll only be charged month by month, but the membership cannot be canceled before this commitment period is completed."
              type="info"
              showIcon
            />
          ) : (
            <Alert
              message="Informational Notes"
              description="Your membership requires a minimum commitment of 3 months. Membership cannot be canceled before this commitment period is completed."
              type="info"
              showIcon
            />
          )}
          <Checkbox checked={agree} onChange={() => setAgree(!agree)}>
            <div className="flex gap-2 flex-wrap">
              <p className="text-sm text-secondary">I agree with</p>
              <MembershipConditions>
                <p className="text-primary cursor-pointer underline">
                  Membership Conditions
                </p>
              </MembershipConditions>
            </div>
          </Checkbox>
        </div>
      </Modal>
    </div>
  );
};

export default YouthMembershipCardSection;
