import { Alert, Checkbox, Collapse, Modal } from "antd";
import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Container from "../components/Container";
import { GiClick } from "react-icons/gi";
import GetInMap from "../pages/Contact/components/GetInMap";
import GetInForm from "../pages/Contact/components/GetInForm";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppHooks";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { useClientQuery } from "../redux/features/client/clientApi";
import MembershipConditions from "../components/MembershipConditions";
import Swal from "sweetalert2";

const MembershipCardSection = () => {
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
  const [openOrganizationModal, setOpenOrganizationModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const panelStyle: React.CSSProperties = {
    backgroundColor: "#EDFFFF",
    borderColor: "#ACDFDF",
  };
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
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {/* <div className="membership-card">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        The Individual pro
                      </h3>
                      <p className="text-mde membershi-list text-primary">
                        <span className="text-2xl leading-6 font-bold me-1">
                          $ 150
                        </span>
                        /month
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg">
                        Benefits of membership
                      </h5>
                      <ul className="text-sm membership-list list-none font-medium space-y-4">
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
                <div className="membership-card">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        Individual pro unlimited
                      </h3>
                      <p className="text-mde membershi-list text-primary">
                        <span className="text-2xl leading-6 font-bold me-1">
                          $ 450
                        </span>
                        /month
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg">
                        Benefits of membership
                      </h5>
                      <ul className="text-sm membership-list font-medium list-none space-y-4">
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
                        During Wednesday - Friday 5-8 pm Maximum booking length
                        1 hour/day Additional player $10/hr
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
                </div> */}
                <div className="membership-card">
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
                <div className="membership-card">
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
                <div className="membership-card">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        Teams & Organizations
                      </h3>
                      <p className="text-primary text-2xl leading-6 font-bold me-1">
                        Custom Pricing
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg">
                        Benefits of membership
                      </h5>
                      <ul className="text-sm membership-list list-none font-medium space-y-4">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Easily book your preferred time slots with
                            adjustable options
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>Enjoy exclusive discounts and perks</p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Get discounted rates on specialized training
                            sessions
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Choose between monthly or annual billing options for
                            maximum flexibility
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Host your next corporate event with us, offering
                            your team a unique and dynamic experience
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpenOrganizationModal(true)}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            ) : plan === "quarterly" ? (
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {/* <div className="membership-card">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        The Individual pro
                      </h3>
                      <p className="text-mde membershi-list text-primary">
                        <span className="text-2xl leading-6 font-bold me-1">
                          $ 450
                        </span>
                        /quarter
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg">
                        Benefits of membership
                      </h5>
                      <ul className="text-sm membership-list list-none font-medium space-y-4">
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
                      onClick={() => handleMembership("individual_pro", 450)}
                      className="membership-btn"
                    >
                      Choose Plan
                    </button>
                  )}
                </div>
                <div className="membership-card">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        Individual pro unlimited
                      </h3>
                      <p className="text-mde membershi-list text-primary">
                        <span className="text-2xl leading-6 font-bold me-1">
                          $ 1350
                        </span>
                        /quarter
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg">
                        Benefits of membership
                      </h5>
                      <ul className="text-sm membership-list font-medium list-none space-y-4">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Get an unlimited quarterly membership for only $1350
                            per quarter
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
                        During Wednesday - Friday 5-8 pm Maximum booking length
                        1 hour/day Additional player $10/hr
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
                        handleMembership("individual_pro_unlimited", 1350)
                      }
                      className="membership-btn"
                    >
                      Choose Plan
                    </button>
                  )}
                </div> */}
                <div className="membership-card">
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
                <div className="membership-card">
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
                <div className="membership-card">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        Teams & Organizations
                      </h3>
                      <p className="text-2xl leading-6 font-bold me-1 text-primary">
                        Custom Pricing
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg">
                        Benefits of membership
                      </h5>
                      <ul className="text-sm membership-list list-none font-medium space-y-4">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Easily book your preferred time slots with
                            adjustable options
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>Enjoy exclusive discounts and perks</p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Get discounted rates on specialized training
                            sessions
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Choose between monthly or annual billing options for
                            maximum flexibility
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Host your next corporate event with us, offering
                            your team a unique and dynamic experience
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Annual memberships require minimum commitment of 03
                            months.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpenOrganizationModal(true)}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                <div className="membership-card">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        The Individual pro
                      </h3>
                      <p className="text-mde membershi-list text-primary">
                        <span className="text-2xl leading-6 font-bold me-1">
                          $ 1500
                        </span>
                        /year
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg">
                        Benefits of membership
                      </h5>
                      <ul className="text-sm membership-list list-none font-medium space-y-4">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Save $300 with our special yearly membership for
                            only $1500!
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
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Annual memberships require minimum commitment of 03
                            months.
                          </p>
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
                      onClick={() => handleMembership("individual_pro", 1500)}
                      className="membership-btn"
                    >
                      Choose Plan
                    </button>
                  )}
                </div>
                <div className="membership-card">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        Individual pro unlimited
                      </h3>
                      <p className="text-mde membershi-list text-primary">
                        <span className="text-2xl leading-6 font-bold me-1">
                          $ 4500
                        </span>
                        /year
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg">
                        Benefits of membership
                      </h5>
                      <ul className="text-sm membership-list font-medium list-none space-y-4">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>Annual membership $4500</p>
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
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Annual memberships require minimum commitment of 03
                            months.
                          </p>
                        </li>
                      </ul>
                      <p className="text-sm membershi-list bg-[#F5FFFF] p-3 text-[#073D3E]">
                        During Wednesday - Friday 5-8 pm Maximum booking length
                        1 hour/day Additional player $10/hr
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
                        handleMembership("individual_pro_unlimited", 4500)
                      }
                      className="membership-btn"
                    >
                      Choose Plan
                    </button>
                  )}
                </div>
                <div className="membership-card">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        Teams & Organizations
                      </h3>
                      <p className="text-2xl leading-6 font-bold me-1 text-primary">
                        Custom Pricing
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg">
                        Benefits of membership
                      </h5>
                      <ul className="text-sm membership-list list-none font-medium space-y-4">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Easily book your preferred time slots with
                            adjustable options
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>Enjoy exclusive discounts and perks</p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Get discounted rates on specialized training
                            sessions
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Choose between monthly or annual billing options for
                            maximum flexibility
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Host your next corporate event with us, offering
                            your team a unique and dynamic experience
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Annual memberships require minimum commitment of 03
                            months.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpenOrganizationModal(true)}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            )}
            <Collapse
              defaultActiveKey={["1"]}
              style={panelStyle}
              items={[
                {
                  key: "1",
                  headerClass: "membership-collapse-header",
                  showArrow: false,
                  label:
                    "Parents, Your Child's Champion Training Awaits Sign up for youth training sessions",
                  extra: (
                    <>
                      <GiClick />
                    </>
                  ),
                  children: (
                    <>
                      <div className="md:block hidden">
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
                            {isCurrentPlan(
                              "youth training membership",
                              plan
                            ) ? (
                              <button
                                className="membership-btn cursor-not-allowed opacity-50"
                                disabled
                              >
                                Current Plan
                              </button>
                            ) : userData?.results?.status &&
                              userData?.results?.status !== true ? (
                              <button
                                onClick={onBlock}
                                className="membership-btn"
                              >
                                Choose Plan
                              </button>
                            ) : (
                              <button
                                onClick={() =>
                                  handleMembership(
                                    "youth_training_membership",
                                    160
                                  )
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
                                  This is a month to month based economic
                                  membership.
                                </p>
                              </li>
                              <li className="flex gap-2">
                                <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                                <p>
                                  Exclusive monthly bundle pack including 04
                                  training session passes.
                                </p>
                              </li>
                              <li className="flex gap-2">
                                <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                                <p>
                                  Easily book your preferred time slots with
                                  adjustable options
                                </p>
                              </li>
                              <li className="flex gap-2">
                                <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                                <p>
                                  Enjoy $40 off from regular training session
                                  rate.
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="membership-card max-w-96 mx-auto md:hidden block">
                        <div className=" space-y-10">
                          <div className="space-y-5 h-24 text-center">
                            <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                              Youth Training Membership
                            </h3>
                            <p className="text-mde membershi-list text-primary">
                              <span className="text-2xl leading-6 font-bold me-1">
                                $ 160
                              </span>
                              /month
                            </p>
                          </div>
                          <div className="space-y-5">
                            <h5 className="font-bold leading-4 text-lg">
                              Benefits of membership
                            </h5>
                            <ul className="text-sm membership-list list-none font-medium space-y-4">
                              <li className="flex gap-2">
                                <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                                <p>
                                  This is a month to month based economic
                                  membership.
                                </p>
                              </li>
                              <li className="flex gap-2">
                                <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                                <p>
                                  Exclusive monthly bundle pack including 04
                                  training session passes.
                                </p>
                              </li>
                              <li className="flex gap-2">
                                <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                                <p>
                                  Easily book your preferred time slots with
                                  adjustable options
                                </p>
                              </li>
                              <li className="flex gap-2">
                                <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                                <p>
                                  Enjoy $40 off from regular training session
                                  rate.
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
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
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </Container>
      <Modal
        width={1500}
        title="Contact Us"
        centered
        maskClosable={false}
        footer={false}
        open={openOrganizationModal}
        onCancel={() => setOpenOrganizationModal(false)}
      >
        <Container>
          <div className="py-10 lg:space-y-10 md:space-y-7 space-y-5">
            <h2 className="font-semibold lg:text-[64px] md:text-5 l text-3xl lg:leading-[74px] md:leading-[50px] leading-9 lg:w-[650px] w-full">
              Get in touch with our lovely team
            </h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
              <GetInMap />
              <GetInForm />
            </div>
          </div>
        </Container>
      </Modal>
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

export default MembershipCardSection;
