import { IoIosCheckmarkCircle } from "react-icons/io";
import Container from "../../../components/Container";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ChristmasMembershipSection = () => {
  const [plan, setPlan] = useState("yearly");
  const navigate = useNavigate();
  const handleChangePackage = (value: string) => {
    setPlan(value);
  };
  const handleMembership = (membership: string, price: number | string) => {
    if (membership === "individual_pro") {
      if (plan === "monthly") {
        const membershipData = {
          membership: true,
          package_name: "individual pro",
          plan: plan,
        };
        navigate("/membership-payment", {
          state: { data: membershipData, amount: Number(price), month: 4 },
        });
      } else if (plan === "yearly") {
        const membershipData = {
          membership: true,
          package_name: "individual pro",
          plan: plan,
        };
        navigate("/membership-payment", {
          state: { data: membershipData, amount: Number(price) },
        });
      }
    } else if (membership === "individual_pro_unlimited") {
      if (plan === "monthly") {
        const membershipData = {
          membership: true,
          package_name: "individual pro unlimited",
          plan: plan,
        };
        navigate("/membership-payment", {
          state: { data: membershipData, amount: Number(price), month: 4 },
        });
      } else if (plan === "yearly") {
        const membershipData = {
          membership: true,
          package_name: "individual pro unlimited",
          plan: plan,
        };
        navigate("/membership-payment", {
          state: { data: membershipData, amount: Number(price) },
        });
      }
    }
  };
  return (
    <div className="bg-[#F9FBFF]">
      <Container>
        <div className="lg:py-14 md:py-12 py-10 mt-10 space-y-10">
          <div className="space-y-4 mx-auto text-center">
            <h4 className="capitalize text-primary lg:text-2xl text-xl font-semibold leading-7">
              Christmas Holiday Special Membership Deals
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
          <div className="space-y-2">
            <h3 className="sm:text-xl text-lg">
              01.Pro Individual Membership - Monthly Membership for batting
              cages
            </h3>
            <ul className="list-none membership-list">
              <li className="flex gap-2 sm:justify-center sm:items-center">
                <IoIosCheckmarkCircle className="text-primary size-5" />
                <p className="sm:text-lg text-base text-gray-500">
                  Buy a monthly membership and save to 25% on your first month
                  as a Special Christmas Holiday Deal.
                </p>
              </li>
              <li className="flex gap-2 sm:justify-center sm:items-center">
                <IoIosCheckmarkCircle className="text-primary size-5" />
                <p className="sm:text-lg text-base text-gray-500">
                  Normal Membership Price -{" "}
                  <span className="text-red-500">$150</span> After Discount
                  Price - <span className="text-red-500">$112</span>
                </p>
              </li>
              <li className="flex gap-2 sm:justify-center sm:items-center">
                <IoIosCheckmarkCircle className="text-primary size-5" />
                <p className="sm:text-lg text-base text-gray-500">
                  A minimum membership commitment of 4 months is required
                  purchase this offer
                </p>
              </li>
              <li className="flex gap-2 sm:justify-center sm:items-center">
                <IoIosCheckmarkCircle className="text-primary size-5" />
                <p className="sm:text-lg text-base text-gray-500">
                  Offer valid till 31th of December 2024.
                </p>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="sm:text-xl text-lg">
              02. Pro Unlimited Individual Membership - Monthly Membership for
              batting cages
            </h3>
            <ul className="list-none membership-list">
              <li className="flex gap-2 sm:justify-center sm:items-center">
                <IoIosCheckmarkCircle className="text-primary size-5" />
                <p className="sm:text-lg text-base text-gray-500">
                  Buy a monthly membership and save 25% on your first month as a
                  Special Christmas Holiday Deal.
                </p>
              </li>
              <li className="flex gap-2 sm:justify-center sm:items-center">
                <IoIosCheckmarkCircle className="text-primary size-5" />
                <p className="sm:text-lg text-base text-gray-500">
                  Normal Membership Price -
                  <span className="text-red-500">$450</span> After Discount
                  Price - <span className="text-red-500">$337.50</span>
                </p>
              </li>
              <li className="flex gap-2 sm:justify-center sm:items-center">
                <IoIosCheckmarkCircle className="text-primary size-5" />
                <p className="sm:text-lg text-base text-gray-500">
                  A minimum membership commitment of 4 months is required
                  purchase this offer.
                </p>
              </li>
              <li className="flex gap-2 sm:justify-center sm:items-center">
                <IoIosCheckmarkCircle className="text-primary size-5" />
                <p className="sm:text-lg text-base text-gray-500">
                  Offer valid till 31th of December 2024.
                </p>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="sm:text-xl text-lg">
              03. Pro Individual Membership - Yearly Membership for batting
              cages
            </h3>
            <ul className="list-none membership-list">
              <li className="flex gap-2 sm:justify-center sm:items-center">
                <IoIosCheckmarkCircle className="text-primary size-5" />
                <p className="sm:text-lg text-base text-gray-500">
                  Buy yearly membership and save 15% Special Christmas Holiday
                  Deal.
                </p>
              </li>
              <li className="flex gap-2 sm:justify-center sm:items-center">
                <IoIosCheckmarkCircle className="text-primary size-5" />
                <p className="sm:text-lg text-base text-gray-500">
                  Normal Membership Price -
                  <span className="text-red-500">$1800</span> After Discount
                  Price - <span className="text-red-500">$1530</span>
                </p>
              </li>
              <li className="flex gap-2 sm:justify-center sm:items-center">
                <IoIosCheckmarkCircle className="text-primary size-5" />
                <p className="sm:text-lg text-base text-gray-500">
                  Offer valid till 31th of December 2024.
                </p>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="sm:text-xl text-lg">
              04. Pro Unlimited Individual Membership - Yearly Membership for
              batting cages
            </h3>
            <ul className="list-none membership-list">
              <li className="flex gap-2 sm:justify-center sm:items-center">
                <IoIosCheckmarkCircle className="text-primary size-5" />
                <p className="sm:text-lg text-base text-gray-500">
                  Buy yearly membership and save 15% Special Christmas Holiday
                  Deal.
                </p>
              </li>
              <li className="flex gap-2 sm:justify-center sm:items-center">
                <IoIosCheckmarkCircle className="text-primary size-5" />
                <p className="sm:text-lg text-base text-gray-500">
                  Normal Membership Price -
                  <span className="text-red-500">$5400</span> After Discount
                  Price - <span className="text-red-500">$4590</span>
                </p>
              </li>
              <li className="flex gap-2 sm:justify-center sm:items-center">
                <IoIosCheckmarkCircle className="text-primary size-5" />
                <p className="sm:text-lg text-base text-gray-500">
                  Offer valid till 31th of December 2024.
                </p>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <div className="sm:w-[325px] w-[275px] mx-auto bg-[#07133D] sm:p-3 p-2 rounded-full flex items-center justify-between">
              <div
                onClick={() => handleChangePackage("monthly")}
                className={`${
                  plan === "monthly"
                    ? "bg-[#F6FFFF]"
                    : "text-white hover:text-black"
                } sm:px-5 px-3 btn w-auto rounded-full hover:bg-[#F6FFFF]`}
              >
                Monthly
                <div className="bg-[#D9FFFF] text-black text-xs sm:px-3 px-2 py-1 rounded-2xl">
                  25% Off
                </div>
              </div>
              <div
                onClick={() => handleChangePackage("yearly")}
                className={`${
                  plan === "yearly"
                    ? "bg-[#F6FFFF]"
                    : "text-white hover:text-black"
                } btn rounded-full sm:px-5 px-3 hover:bg-[#F6FFFF]`}
              >
                Yearly
                <div className="bg-[#D9FFFF] text-black text-xs sm:px-3 px-2 py-1 rounded-2xl">
                  15% Off
                </div>
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
                      <p className="text-mde membershi-list text-primary">
                        <span className="text-2xl line-through leading-6 font-bold me-1">
                          $ 150
                        </span>
                        <span className="text-2xl leading-6 font-bold me-1">
                          $ 112
                        </span>
                        /month
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
                            Buy a monthly membership and save 25% on your first
                            month as a Special Christmas Holiday Deal.
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
                  <button
                    onClick={() => handleMembership("individual_pro", 562)}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
                </div>
                <div className="membership-card w-96">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        Individual pro unlimited
                      </h3>
                      <p className="text-mde membershi-list text-primary">
                        <span className="text-2xl line-through leading-6 font-bold me-1">
                          $ 450
                        </span>
                        <span className="text-2xl leading-6 font-bold me-1">
                          $ 337.50
                        </span>
                        /month
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
                            Buy a monthly membership and save 25% on your first
                            month as a Special Christmas Holiday Deal.
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
                  <button
                    onClick={() =>
                      handleMembership("individual_pro_unlimited", "1687.50")
                    }
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
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
                        <span className="text-2xl line-through leading-6 font-bold me-1">
                          $ 1800
                        </span>
                        <span className="text-2xl leading-6 font-bold me-1">
                          $ 1530
                        </span>
                        /year
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
                            Buy yearly membership and save 15% Special Christmas
                            Holiday Deal.
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Save $270 with our special Christmas Holiday yearly
                            membership for only $1530!
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
                  <button
                    onClick={() => handleMembership("individual_pro", 1530)}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
                </div>
                <div className="membership-card w-96">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        Individual pro unlimited
                      </h3>
                      <p className="text-mde membershi-list text-primary">
                        <span className="text-2xl line-through leading-6 font-bold me-1">
                          $ 5400
                        </span>
                        <span className="text-2xl leading-6 font-bold me-1">
                          $ 4590
                        </span>
                        /year
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
                            Buy yearly membership and save 15% Special Christmas
                            Holiday Deal.
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Save $810 with our special Christmas Holiday yearly
                            membership for only $4590!
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
                  <button
                    onClick={() =>
                      handleMembership("individual_pro_unlimited", 4590)
                    }
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChristmasMembershipSection;
