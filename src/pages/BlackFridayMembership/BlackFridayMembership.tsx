import { useState } from "react";
import Container from "../../components/Container";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppHooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useClientQuery } from "../../redux/features/client/clientApi";
import Swal from "sweetalert2";
import { Alert, Modal } from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import MembershipConditions from "../../components/MembershipConditions";

const BlackFridayMembership = () => {
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
    if (membership === "individual_pro") {
      const membershipData = {
        membership: true,
        package_name: "individual pro",
        plan: plan,
      };
      setMembershipPrice(price);
      setMembership(membershipData);
      setOpenInfoModal(true);
    } else if (membership === "individual_pro_unlimited") {
      const membershipData = {
        membership: true,
        package_name: "individual pro unlimited",
        plan: plan,
      };
      setMembershipPrice(price);
      setMembership(membershipData);
      setOpenInfoModal(true);
    } else if (membership === "youth_training_membership") {
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
        <div className="lg:py-14 md:py-12 py-10 mt-10 space-y-10">
          <div className="space-y-4 mx-auto text-center">
            <h4 className="capitalize text-primary lg:text-2xl text-xl font-semibold leading-7">
              Black Friday Membership Deals
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
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="space-y-2 border border-solid border-gray-300 p-5 rounded-lg bg-white">
              <h3 className="sm:text-lg text-base font-medium">
                1. Pro Individual Membership - Monthly Membership for batting
                cages
              </h3>
              <ul className="list-none membership-list space-y-1">
                <li className="flex gap-2 sm:justify-center sm:items-center">
                  <IoIosCheckmarkCircle className="text-primary size-5" />
                  <p className="sm:text-base text-sm text-gray-500 tracking-wide">
                    Buy a monthly membership and save 50% on your second month
                    as a Special Black Friday Deal.
                  </p>
                </li>
                <li className="flex gap-2 sm:justify-center sm:items-center">
                  <IoIosCheckmarkCircle className="text-primary size-5" />
                  <p className="sm:text-base text-sm text-gray-500 tracking-wide">
                    Normal Membership Price -
                    <span className="text-red-500">$150</span> After Discount
                    Price - <span className="text-red-500">$75</span>
                  </p>
                </li>
                <li className="flex gap-2 sm:justify-center sm:items-center">
                  <IoIosCheckmarkCircle className="text-primary size-5" />
                  <p className="sm:text-base text-sm text-gray-500 tracking-wide">
                    A minimum membership commitment of 3 months is required
                    purchase this offer
                  </p>
                </li>
                <li className="flex gap-2 sm:justify-center sm:items-center">
                  <IoIosCheckmarkCircle className="text-primary size-5" />
                  <p className="sm:text-base text-sm text-gray-500 tracking-wide">
                    Offer valid till 7th of December 2025.
                  </p>
                </li>
              </ul>
            </div>
            <div className="space-y-2 border border-solid border-gray-300 p-5 rounded-lg bg-white">
              <h3 className="sm:text-lg text-base font-medium">
                2. Pro Unlimited Individual Membership - Monthly Membership for
                batting cages
              </h3>
              <ul className="list-none membership-list space-y-1">
                <li className="flex gap-2 sm:justify-center sm:items-center">
                  <IoIosCheckmarkCircle className="text-primary size-5" />
                  <p className="sm:text-base text-sm text-gray-500 tracking-wide">
                    Buy a monthly membership and save 50% on your second month
                    as a Special Black Friday Deal.
                  </p>
                </li>
                <li className="flex gap-2 sm:justify-center sm:items-center">
                  <IoIosCheckmarkCircle className="text-primary size-5" />
                  <p className="sm:text-base text-sm text-gray-500 tracking-wide">
                    Normal Membership Price -
                    <span className="text-red-500">$450</span> After Discount
                    Price - <span className="text-red-500">$225</span>
                  </p>
                </li>
                <li className="flex gap-2 sm:justify-center sm:items-center">
                  <IoIosCheckmarkCircle className="text-primary size-5" />
                  <p className="sm:text-base text-sm text-gray-500 tracking-wide">
                    A minimum membership commitment of 3 months is required
                    purchase this offer.
                  </p>
                </li>
                <li className="flex gap-2 sm:justify-center sm:items-center">
                  <IoIosCheckmarkCircle className="text-primary size-5" />
                  <p className="sm:text-base text-sm text-gray-500 tracking-wide">
                    Offer valid till 7th of December 2025.
                  </p>
                </li>
              </ul>
            </div>
            <div className="space-y-2 border border-solid border-gray-300 p-5 rounded-lg bg-white">
              <h3 className="sm:text-lg text-base font-medium">
                3. Pro Individual Membership - Quarterly Membership for batting
                cages
              </h3>
              <ul className="list-none membership-list space-y-1">
                <li className="flex gap-2 sm:justify-center sm:items-center">
                  <IoIosCheckmarkCircle className="text-primary size-5" />
                  <p className="sm:text-base text-sm text-gray-500 tracking-wide">
                    Buy Quarterly membership and get 1 and half months free as a
                    Special Black Friday Deal.
                  </p>
                </li>
                <li className="flex gap-2 sm:justify-center sm:items-center">
                  <IoIosCheckmarkCircle className="text-primary size-5" />
                  <p className="sm:text-base text-sm text-gray-500 tracking-wide">
                    Normal Membership Price -
                    <span className="text-red-500">$450</span> After Discount
                    Price - <span className="text-red-500">$375</span>
                  </p>
                </li>
                <li className="flex gap-2 sm:justify-center sm:items-center">
                  <IoIosCheckmarkCircle className="text-primary size-5" />
                  <p className="sm:text-base text-sm text-gray-500 tracking-wide">
                    Offer valid till 7th of December 2025.
                  </p>
                </li>
              </ul>
            </div>
            <div className="space-y-2 border border-solid border-gray-300 p-5 rounded-lg bg-white">
              <h3 className="sm:text-lg text-base font-medium">
                4. Pro Unlimited Individual Membership - Quarterly Membership
                for batting cages
              </h3>
              <ul className="list-none membership-list space-y-1">
                <li className="flex gap-2 sm:justify-center sm:items-center">
                  <IoIosCheckmarkCircle className="text-primary size-5" />
                  <p className="sm:text-base text-sm text-gray-500 tracking-wide">
                    Buy Quarterly membership and get 1 and half months free as a
                    Special Black Friday Deal.
                  </p>
                </li>
                <li className="flex gap-2 sm:justify-center sm:items-center">
                  <IoIosCheckmarkCircle className="text-primary size-5" />
                  <p className="sm:text-base text-sm text-gray-500 tracking-wide">
                    Normal Membership Price -
                    <span className="text-red-500">$1350</span> After Discount
                    Price - <span className="text-red-500">$1125</span>
                  </p>
                </li>
                <li className="flex gap-2 sm:justify-center sm:items-center">
                  <IoIosCheckmarkCircle className="text-primary size-5" />
                  <p className="sm:text-base text-sm text-gray-500 tracking-wide">
                    Offer valid till 7th of December 2025.
                  </p>
                </li>
              </ul>
            </div>
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
            </div>
            {plan === "monthly" ? (
              <div className="flex md:flex-nowrap flex-wrap justify-center gap-5">
                <div className="membership-card w-96">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        The Individual pro
                      </h3>
                      <div className="space-y-2">
                        <p className="text-mde membershi-list text-primary">
                          <span className="text-2xl leading-6 font-bold me-1">
                            $ 150
                          </span>
                          / first month
                        </p>
                        <p className="text-mde membershi-list text-primary">
                          <span className="text-xl text-gray-400 line-through leading-6 font-medium me-1">
                            $ 150
                          </span>
                          <span className="text-2xl leading-6 font-bold me-1">
                            $ 75
                          </span>
                          / second month
                        </p>
                      </div>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg">
                        Benifits of membership
                      </h5>
                      <ul className="text-sm membership-list list-none font-medium space-y-4">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Buy a monthly membership and save 50% on your second
                            month as a Special Black Friday Deal.
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Enjoy 4 hours of net sessions for just $150 per
                            month.
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>Bring one additional player for free!</p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            For each additional player, there is a small $10 fee
                            per hour
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>Inclusive of a complimentary pitching machine</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {isCurrentPlan("individual pro", plan) ? (
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
                      onClick={() => handleMembership("individual_pro", 150)}
                      className="membership-btn"
                    >
                      Choose Plan
                    </button>
                  )}
                </div>
                <div className="membership-card w-96">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        Individual pro unlimited
                      </h3>
                      <div className="space-y-2">
                        <p className="text-mde membershi-list text-primary">
                          <span className="text-2xl leading-6 font-bold me-1">
                            $ 450
                          </span>
                          / first month
                        </p>
                        <p className="text-mde membershi-list text-primary">
                          <span className="text-xl text-gray-400 line-through leading-6 font-medium me-1">
                            $ 450
                          </span>
                          <span className="text-2xl leading-6 font-bold me-1">
                            $ 225
                          </span>
                          / second month
                        </p>
                      </div>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg">
                        Benifits of membership
                      </h5>
                      <ul className="text-sm membership-list font-medium list-none space-y-4">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Buy a monthly membership and save 50% on your second
                            month as a Special Black Friday Deal.
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Get an unlimited monthly membership for only $450
                            per month
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Bring a friend to your practice sessions at no extra
                            cost.
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            The membership holder must be present when bringing
                            guests to play.
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>Inclusive of a complimentary pitching machine.</p>
                        </li>
                      </ul>
                      <p className="text-sm membershi-list bg-[#F5FFFF] p-3 text-[#073D3E]">
                        During thursday- Friday 5-8pm limited booking length one
                        hour/day Additional player $10/hr
                      </p>
                    </div>
                  </div>
                  {isCurrentPlan("individual pro unlimited", plan) ? (
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
                        handleMembership("individual_pro_unlimited", 450)
                      }
                      className="membership-btn"
                    >
                      Choose Plan
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex md:flex-nowrap flex-wrap justify-center gap-5">
                <div className="membership-card w-96">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        The Individual pro
                      </h3>
                      <p className="text-mde membershi-list text-primary">
                        <span className="text-xl text-gray-400 line-through leading-6 font-medium me-1">
                          $ 450
                        </span>
                        <span className="text-2xl leading-6 font-bold me-1">
                          $ 375
                        </span>
                        / quaterly
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg">
                        Benifits of membership
                      </h5>
                      <ul className="text-sm membership-list list-none font-medium space-y-4">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Buy Quarterly membership and get 1 and half months
                            free as a Special Black Friday Deal.
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Enjoy 4 hours of net sessions for just $150 per
                            month.
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>Bring one additional player for free!</p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            For each additional player, there is a small $10 fee
                            per hour
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>Inclusive of a complimentary pitching machine</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {isCurrentPlan("individual pro", plan) ? (
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
                      onClick={() => handleMembership("individual_pro", 375)}
                      className="membership-btn"
                    >
                      Choose Plan
                    </button>
                  )}
                </div>
                <div className="membership-card w-96">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        Individual pro unlimited
                      </h3>
                      <p className="text-mde membershi-list text-primary">
                        <span className="text-xl text-gray-400 line-through leading-6 font-medium me-1">
                          $ 1350
                        </span>
                        <span className="text-2xl leading-6 font-bold me-1">
                          $ 1125
                        </span>
                        / quarterly
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg">
                        Benifits of membership
                      </h5>
                      <ul className="text-sm membership-list font-medium list-none space-y-4">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Buy unlimited Quarterly membership and get 1 and
                            half months free as a Special Black Friday Deal.
                          </p>
                        </li>

                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Bring a friend to your practice sessions at no extra
                            cost.
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            The membership holder must be present when bringing
                            guests to play.
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>Inclusive of a complimentary pitching machine.</p>
                        </li>
                      </ul>
                      <p className="text-sm membershi-list bg-[#F5FFFF] p-3 text-[#073D3E]">
                        During wednesday- Friday 5-8pm limited booking length
                        one hour/day Additional player $10/hr
                      </p>
                    </div>
                  </div>
                  {isCurrentPlan("individual pro unlimited", plan) ? (
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
                        handleMembership("individual_pro_unlimited", 1125)
                      }
                      className="membership-btn"
                    >
                      Choose Plan
                    </button>
                  )}
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

export default BlackFridayMembership;
