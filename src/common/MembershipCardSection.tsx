import { Collapse, Modal } from "antd";
import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Container from "../components/Container";
import { GiClick } from "react-icons/gi";
import UpComing from "../components/UpComing";
import GetInMap from "../pages/Contact/components/GetInMap";
import GetInForm from "../pages/Contact/components/GetInForm";

const MembershipCardSection = () => {
  const [open, setOpen] = useState(false);
  const [packageName, setPackageName] = useState("month");
  const [frameLink, setFrameLink] = useState("");
  const handleChangePackage = (value: string) => {
    setPackageName(value);
  };
  const handleMembership = (membership: string) => {
    if (membership === "individual_pro") {
      if (packageName === "month") {
        setFrameLink(
          "https://app.glofox.com/portal/#/branch/6602d2195caae7e89503f729/memberships/6605a35c0e3d5576150df6b2/plan/1711645316638/buy"
        );
      } else if (packageName === "year") {
        setFrameLink(
          "https://app.glofox.com/portal/#/branch/6602d2195caae7e89503f729/memberships/6605a3bd10aa1f924509317f/plan/1711645559487/buy"
        );
      }
    } else if (membership === "individual_pro_unlimited") {
      if (packageName === "month") {
        setFrameLink(
          "https://app.glofox.com/portal/#/branch/6602d2195caae7e89503f729/memberships/6605a3f7202ed8c30e0cf8cf/plan/1711645664474/buy"
        );
      } else if (packageName === "year") {
        setFrameLink(
          "https://app.glofox.com/portal/#/branch/6602d2195caae7e89503f729/memberships/6605a4608b02e889f80917cb/plan/1711645772121/buy"
        );
      }
    } else if (membership === "contact-support") {
      setFrameLink("contact-support");
    } else {
      setFrameLink("up-coming");
    }
    setOpen(true);
  };
  const panelStyle: React.CSSProperties = {
    backgroundColor: "#EDFFFF",
    borderColor: "#ACDFDF",
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
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                <div className="membership-card">
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
                        Benifits of membership
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
                  <button
                    onClick={() => handleMembership("individual_pro")}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
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
                        Benifits of membership
                      </h5>
                      <ul className="text-sm membership-list font-medium list-none space-y-4">
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
                    onClick={() => handleMembership("individual_pro_unlimited")}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
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
                        Benifits of membership
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
                    onClick={() => handleMembership("contact-support")}
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
                        Benifits of membership
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
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() => handleMembership("individual_pro")}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
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
                        Benifits of membership
                      </h5>
                      <ul className="text-sm membership-list font-medium list-none space-y-4">
                        <li className="flex gap-2">
                          <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                          <p>Annual membership $5000</p>
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
                    onClick={() => handleMembership("individual_pro_unlimited")}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
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
                        Benifits of membership
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
                    onClick={() => handleMembership("contact-support")}
                    className="membership-btn"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            )}
            <Collapse
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
                            <button
                              onClick={() => handleMembership("up_coming")}
                              className="membership-btn"
                            >
                              Choose Plan
                            </button>
                          </div>
                          <div className="space-y-5">
                            <h5 className="font-bold leading-4 text-lg">
                              Benifits of membership
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
                                  Choose between monthly or annual billing
                                  options for maximum flexibility
                                </p>
                              </li>
                              <li className="flex gap-2">
                                <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                                <p>
                                  Host your next corporate event with us,
                                  offering your team a unique and dynamic
                                  experience
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
                              Benifits of membership
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
                                  Choose between monthly or annual billing
                                  options for maximum flexibility
                                </p>
                              </li>
                              <li className="flex gap-2">
                                <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                                <p>
                                  Host your next corporate event with us,
                                  offering your team a unique and dynamic
                                  experience
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button
                          onClick={() => handleMembership("up-coming")}
                          className="membership-btn"
                        >
                          Choose Plan
                        </button>
                      </div>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
        <Modal
          width={1500}
          title="Welcome to membership module"
          centered
          maskClosable={false}
          footer={false}
          open={open}
          onCancel={() => {
            setOpen(false), setFrameLink("");
          }}
        >
          {frameLink === "contact-support" ? (
            <Container>
              <div className="lg:py-16 md:py-12 py-10 mt-16 lg:space-y-10 md:space-y-7 space-y-5">
                <h2 className="font-semibold lg:text-[64px] md:text-5xl text-3xl lg:leading-[74px] md:leading-[50px] leading-9 lg:w-[650px] w-full">
                  Get in touch with our lovely team
                </h2>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
                  <GetInMap />
                  <GetInForm />
                </div>
              </div>
            </Container>
          ) : frameLink !== "up-coming" ? (
            <iframe
              src={frameLink}
              width="100%"
              style={{ height: "90vh" }}
            ></iframe>
          ) : (
            <UpComing />
          )}
        </Modal>
      </Container>
    </div>
  );
};

export default MembershipCardSection;
