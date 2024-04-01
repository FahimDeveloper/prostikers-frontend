import { Modal } from "antd";
import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Container from "../components/Container";

const MembershipCardSection = () => {
  const [open, setOpen] = useState(false);
  const [packageName, setPackageName] = useState("month");
  const handleChangePackage = (value: string) => {
    setPackageName(value);
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
            <div className="w-[295px] mx-auto bg-[#07133D] p-3 rounded-full flex items-center justify-between">
              <div
                onClick={() => handleChangePackage("month")}
                className={`${
                  packageName === "month"
                    ? "bg-[#F6FFFF]"
                    : "text-white hover:text-black"
                } px-10 btn rounded-full hover:bg-[#F6FFFF]`}
              >
                Monthly
              </div>
              <div
                onClick={() => handleChangePackage("year")}
                className={`${
                  packageName === "year"
                    ? "bg-[#F6FFFF]"
                    : "text-white hover:text-black"
                } btn rounded-full px-5 hover:bg-[#F6FFFF]`}
              >
                Yearly
                <div className="bg-[#D9FFFF] text-black text-xs px-3 py-1 rounded-2xl">
                  30% Off
                </div>
              </div>
            </div>
            {packageName === "month" ? (
              <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                <div className="membership-card ml-auto">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        Cricket Youth Membership
                      </h3>
                      <p className="text-sm text-primary">
                        <span className="text-xl leading-6 font-bold me-1">
                          $ 125
                        </span>
                        /month
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg text-center">
                        Benifits of membership
                      </h5>
                      <ul className="text-sm membership-list font-medium list-none space-y-3">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Includes 4 group training sessions (set weekly
                            training dates)
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Basic membership for coaching sessions and 1
                            off-peak training session only
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Can upgrade to "Youth Plus" membership for
                            discounted net booking membership at $100 (50% off
                            student discount) for additional net sessions
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Age limit of 19 years for any additional player or
                            member
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Guardian counts as the free additional player,
                            additional players pay $5 fee per player
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(true)}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
                </div>
                <div className="membership-card mr-auto">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        Field Hokey Youth Membership
                      </h3>
                      <p className="text-sm text-primary">
                        <span className="text-xl leading-6 font-bold me-1">
                          $ 200
                        </span>
                        /month
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg text-center">
                        Benifits of membership
                      </h5>
                      <ul className="text-sm membership-list font-medium list-none space-y-3">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Includes 4 group training sessions (set weekly
                            training dates)
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Basic membership for coaching sessions and 1
                            off-peak training session only
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Can upgrade to "Youth Plus" membership for
                            discounted net booking membership at $100 (50% off
                            student discount) for additional net sessions
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Age limit of 19 years for any additional player or
                            member
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Guardian counts as the free additional player,
                            additional players pay $5 fee per player
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(true)}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
                </div>
                <div className="membership-card ml-auto">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        The Individual pro
                      </h3>
                      <p className="text-sm membershi-list text-primary">
                        <span className="text-xl leading-6 font-bold me-1">
                          $ 150
                        </span>
                        /month
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg text-center">
                        Benifits of membership
                      </h5>
                      <ul className="text-sm membership-list list-none font-medium space-y-3">
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
                            per hour Inclusive of a complimentary pitching
                            machine
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(true)}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
                </div>
                <div className="membership-card mr-auto">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        Individual pro unlimited
                      </h3>
                      <p className="text-sm membershi-list text-primary">
                        <span className="text-xl leading-6 font-bold me-1">
                          $ 450
                        </span>
                        /month
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg text-center">
                        Benifits of membership
                      </h5>
                      <ul className="text-sm membership-list font-medium list-none space-y-3">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>Get a monthly membership for only $450</p>
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
                    onClick={() => setOpen(true)}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                <div className="membership-card ml-auto">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        Cricket Youth Membership
                      </h3>
                      <p className="text-sm text-primary">
                        <span className="text-xl leading-6 font-bold me-1">
                          $ 125
                        </span>
                        /month
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg text-center">
                        Benifits of membership
                      </h5>
                      <ul className="text-sm membership-list font-medium list-none space-y-3">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Includes 4 group training sessions (set weekly
                            training dates)
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Basic membership for coaching sessions and 1
                            off-peak training session only
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Can upgrade to "Youth Plus" membership for
                            discounted net booking membership at $100 (50% off
                            student discount) for additional net sessions
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Age limit of 19 years for any additional player or
                            member
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Guardian counts as the free additional player,
                            additional players pay $5 fee per player
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(true)}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
                </div>
                <div className="membership-card mr-auto">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        Field Hokey Youth Membership
                      </h3>
                      <p className="text-sm text-primary">
                        <span className="text-xl leading-6 font-bold me-1">
                          $ 200
                        </span>
                        /month
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg text-center">
                        Benifits of membership
                      </h5>
                      <ul className="text-sm membership-list font-medium list-none space-y-3">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Includes 4 group training sessions (set weekly
                            training dates)
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Basic membership for coaching sessions and 1
                            off-peak training session only
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Can upgrade to "Youth Plus" membership for
                            discounted net booking membership at $100 (50% off
                            student discount) for additional net sessions
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Age limit of 19 years for any additional player or
                            member
                          </p>
                        </li>
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>
                            Guardian counts as the free additional player,
                            additional players pay $5 fee per player
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(true)}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
                </div>
                <div className="membership-card ml-auto">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        The Individual pro
                      </h3>
                      <p className="text-sm membershi-list text-primary">
                        <span className="text-xl leading-6 font-bold me-1">
                          $ 150
                        </span>
                        /month
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg text-center">
                        Benifits of membership
                      </h5>
                      <ul className="text-sm membership-list list-none font-medium space-y-3">
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
                            per hour Inclusive of a complimentary pitching
                            machine
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(true)}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
                </div>
                <div className="membership-card mr-auto">
                  <div className=" space-y-10">
                    <div className="space-y-5 h-24 text-center">
                      <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                        Individual pro unlimited
                      </h3>
                      <p className="text-sm membershi-list text-primary">
                        <span className="text-xl leading-6 font-bold me-1">
                          $ 450
                        </span>
                        /month
                      </p>
                    </div>
                    <div className="space-y-5">
                      <h5 className="font-bold leading-4 text-lg text-center">
                        Benifits of membership
                      </h5>
                      <ul className="text-sm membership-list font-medium list-none space-y-3">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>Get a monthly membership for only $450</p>
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
                    onClick={() => setOpen(true)}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <Modal
          width={1500}
          title="Welcome to membership module"
          centered
          maskClosable={false}
          footer={false}
          open={open}
          onCancel={() => setOpen(false)}
        >
          <iframe
            src="https://app.glofox.com/portal/#/branch/6602d2195caae7e89503f729/memberships?header=memberships"
            width="100%"
            style={{ height: "90vh" }}
          ></iframe>
        </Modal>
      </Container>
    </div>
  );
};

export default MembershipCardSection;
