import { IoCheckmark } from "react-icons/io5";
import franchise1 from "../../../../assets/images/franchise/franchise-prostrikers.webp";
import franchise2 from "../../../../assets/images/franchise/franchise-benifits.webp";
import Container from "../../../../components/Container";

const FranchiseFamilySection = () => {
  return (
    <Container>
      <div className="py-10 space-y-10">
        <div className="space-y-5">
          <h2 className="text-center lg:text-[64px] md:text-5xl text-3xl font-semibold lg:leading-[74px] md:leading-[50px] leading-9">
            Join the ProStrikers Family:
            <span className="block text-[#787878]">
              Franchise Opportunities
            </span>
          </h2>
          <p className="text-[#07133D] md:text-lg md:leading-7 leading-6 text-center">
            At ProStrikers, we’re not just a sports facility; we're a thriving
            community where champions are born and bred. Located in the heart of
            Sacramento, we’ve created a haven for athletes across various
            disciplines – Baseball, Softball, Cricket, Soccer, and Hockey.
          </p>
        </div>
        <div className="space-y-10">
          <div className="grid sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 items-center">
            <img
              loading="lazy"
              src={franchise1}
              className="lg:size-96 w-full md:h-96 object-fill rounded-2xl"
              alt="membership family image"
            />
            <div className="space-y-5">
              <h3 className="font-semibold lg:text-[40px] md:text-3xl text-xl md:leading-[48px] leading-9">
                Why Choose ProStrikers
              </h3>
              <ul className="list-none become-member-list lg:text-lg text-base text-[#5F5F5F] md:leading-7 leading-6 space-y-4">
                <li className="flex gap-3">
                  <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                  <p>
                    Market Opportunity: Capitalize on the escalating demand for
                    quality sports education in a growing market.
                  </p>
                </li>
                <li className="flex gap-3">
                  <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                  <p>
                    Brand Strength: Benefit from association with a respected
                    and recognized leader in sports training.
                  </p>
                </li>
                <li className="flex gap-3">
                  <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                  <p>
                    Brand Strength: Benefit from association with a respected
                    and recognized leader in sports training.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 items-center">
            <div className="space-y-5 sm:order-1 order-2">
              <h3 className="font-semibold lg:text-[40px] md:text-3xl text-xl md:leading-[48px] leading-9">
                Franchisee Benefits
              </h3>
              <ul className="list-none become-member-list lg:text-lg text-base text-[#5F5F5F] md:leading-7 leading-6 space-y-4">
                <li className="flex gap-3">
                  <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                  <p>Franchisee Benefits</p>
                </li>
                <li className="flex gap-3">
                  <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                  <p>
                    Marketing and Branding: Leverage our powerful marketing
                    strategies and brand identity to attract clientele.
                  </p>
                </li>
                <li className="flex gap-3">
                  <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                  <p>
                    Marketing and Branding: Leverage our powerful marketing
                    strategies and brand identity to attract clientele.
                  </p>
                </li>
              </ul>
            </div>
            <img
              loading="lazy"
              src={franchise2}
              className="lg:size-96 w-full sm:order-2 order-1 md:h-96 ml-auto object-fill rounded-2xl"
              alt="membership family image"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FranchiseFamilySection;
