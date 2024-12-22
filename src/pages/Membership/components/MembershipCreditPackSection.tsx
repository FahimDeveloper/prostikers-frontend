import { IoIosCheckmarkCircle } from "react-icons/io";
import Container from "../../../components/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/useAppHooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";

const MembershipCreditPackSection = () => {
  const [pack, setPack] = useState("with_machine");
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();
  const handleChangePackage = (value: string) => {
    setPack(value);
  };
  const handleMembership = (cage: string, price?: number) => {
    if (cage === "five_cage") {
      const bundleCredit = {
        package: "5 (1-Hour) Cage Pass Pack",
        email: user?.email,
        hours: 5,
        piching_machine: pack === "with_machine" ? true : false,
        active: true,
      };
      navigate("/bundle-cage-payment", {
        state: { data: bundleCredit, amount: price },
      });
    } else if (cage === "ten_cage") {
      const bundleCredit = {
        package: "10 (1-Hour) Cage Pass Pack",
        email: user?.email,
        hours: 10,
        piching_machine: pack === "with_machine" ? true : false,
        active: true,
      };
      navigate("/bundle-cage-payment", {
        state: { data: bundleCredit, amount: price },
      });
    }
  };
  return (
    <Container>
      <div className="lg:py-14 md:py-12 py-10 mt-10 space-y-10">
        <div className="space-y-4 mx-auto text-center">
          <h4 className="capitalize text-primary lg:text-2xl text-xl font-semibold leading-7">
            Join the Elite
          </h4>
          <h2 className="lg:text-[56px] md:text-[45px] font-semibold lg:leading-[67px] md:leading-[50px]">
            One-Time Pass Pack
          </h2>
          <p className="text-[#929292] text-lg lg:leading-7 leading-6 md:w-[700px] w-full mx-auto">
            Not Ready for a Membership? Explore Our Discounted One-Time Pass
            Packs!
          </p>
        </div>
        <div className="space-y-8">
          <div className="w-[285px] mx-auto bg-[#07133D] p-3 rounded-full flex items-center justify-between">
            <div
              onClick={() => handleChangePackage("without_machine")}
              className={`${
                pack === "without_machine"
                  ? "bg-[#F6FFFF]"
                  : "text-white hover:text-black"
              } px-5 btn rounded-full hover:bg-[#F6FFFF]`}
            >
              With out machine
            </div>
            <div
              onClick={() => handleChangePackage("with_machine")}
              className={`${
                pack === "with_machine"
                  ? "bg-[#F6FFFF]"
                  : "text-white hover:text-black"
              } btn rounded-full px-5 hover:bg-[#F6FFFF]`}
            >
              With machine
            </div>
          </div>
          {pack === "without_machine" ? (
            <div className="flex md:flex-nowrap flex-wrap justify-center gap-5">
              <div className="membership-card w-96">
                <div className=" space-y-10">
                  <div className="space-y-5 h-24 text-center">
                    <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                      5 (1-Hour) Cage Pass Pack
                    </h3>
                    <p className="text-mde membershi-list text-primary">
                      <span className="text-2xl leading-6 font-bold me-1">
                        $ 270
                      </span>
                    </p>
                  </div>
                  <div className="space-y-5">
                    <h5 className="font-bold leading-4 text-lg">
                      Benifits of cage pack
                    </h5>
                    <ul className="text-sm membership-list list-none font-medium space-y-4">
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>Without Pitching Machine: $270</p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>
                          Pack of 5 Cage passes - each pass worth for 1 hour
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>
                          Enjoy five 1-hour batting sessions without a pitching
                          machine.
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>
                          These sessions are valid for 6 months and designed for
                          individual use.
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>Perfect for casual practice sessions!</p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>Purchased/ registered owner only</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => handleMembership("five_cage", 270)}
                  className="membership-btn"
                >
                  Choose Cage Pack
                </button>
              </div>
              <div className="membership-card w-96">
                <div className=" space-y-10">
                  <div className="space-y-5 h-24 text-center">
                    <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                      10 (1-Hour) Cage Pass Pack
                    </h3>
                    <p className="text-mde membershi-list text-primary">
                      <span className="text-2xl leading-6 font-bold me-1">
                        $ 480
                      </span>
                    </p>
                  </div>
                  <div className="space-y-5">
                    <h5 className="font-bold leading-4 text-lg">
                      Benifits of cage pack
                    </h5>
                    <ul className="text-sm membership-list font-medium list-none space-y-4">
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>Without Pitching Machine: $480</p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>
                          Pack of 10 Cage passes - each pass worth for 1 hour
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>
                          Take advantage of ten 1-hour batting sessions without
                          a pitching machine.
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>
                          Perfect for regular practice and valid for 6 months.
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>Exclusive for one person!</p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>Purchased/ registered owner only</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => handleMembership("ten_cage", 480)}
                  className="membership-btn"
                >
                  Choose Cage Pack
                </button>
              </div>
            </div>
          ) : (
            <div className="flex md:flex-nowrap flex-wrap justify-center gap-5">
              <div className="membership-card w-96">
                <div className=" space-y-10">
                  <div className="space-y-5 h-24 text-center">
                    <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                      5 (1-Hour) Cage Pass Pack
                    </h3>
                    <p className="text-mde membershi-list text-primary">
                      <span className="text-2xl leading-6 font-bold me-1">
                        $ 337.50
                      </span>
                    </p>
                  </div>
                  <div className="space-y-5">
                    <h5 className="font-bold leading-4 text-lg">
                      Benifits of cage pack
                    </h5>
                    <ul className="text-sm membership-list list-none font-medium space-y-4">
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>With Pitching Machine: $337.50</p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>
                          Pack of 5 Cage passes - each pass worth for 1 hour
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>
                          Experience five 1-hour batting sessions with our
                          state-of-the-art pitching machines.
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>
                          Ideal for sharpening your batting skills over time.
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>Sessions valid for 6 months.</p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>Purchased/ registered owner only</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => handleMembership("five_cage", 337)}
                  className="membership-btn"
                >
                  Choose Cage Pack
                </button>
              </div>
              <div className="membership-card w-96">
                <div className="space-y-10">
                  <div className="space-y-5 h-24 text-center">
                    <h3 className="2xl:text-3xl sm:text-[26px] text-2xl leading-9">
                      10 (1-Hour) Cage Pass Pack
                    </h3>
                    <p className="text-mde membershi-list text-primary">
                      <span className="text-2xl leading-6 font-bold me-1">
                        $ 600
                      </span>
                    </p>
                  </div>
                  <div className="space-y-5">
                    <h5 className="font-bold leading-4 text-lg">
                      Benifits of cage pack
                    </h5>
                    <ul className="text-sm membership-list font-medium list-none space-y-4">
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>With Pitching Machine: $600</p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>
                          Pack of 10 Cage passes - each pass worth for 1 hour
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>
                          Get ten 1-hour sessions with a pitching machine at an
                          amazing value.
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>
                          Enjoy consistent training sessions to improve your
                          batting.
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>
                          Sessions valid for 6 months and for individual use.
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <IoIosCheckmarkCircle className="size-5 text-[#0EBBBC]" />
                        <p>Purchased/ registered owner only</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => handleMembership("ten_cage", 600)}
                  className="membership-btn"
                >
                  Choose Cage Pack
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default MembershipCreditPackSection;
