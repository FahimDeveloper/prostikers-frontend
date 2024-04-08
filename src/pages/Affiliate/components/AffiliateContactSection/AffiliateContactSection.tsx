import { Link } from "react-router-dom";
import Container from "../../../../components/Container";

const AffiliateContactSection = () => {
  return (
    <div className="bg-[#0EBBBC] relative overflow-hidden lg:pt-0 pt-10">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-[500px] md:gap-3 gap-5 items-center">
          <div className="space-y-4">
            <h2 className="font-bold md:text-[56px] text-4xl leading-10 text-white md:leading-[64px]">
              Elevate Your Institution with ProStrikers
            </h2>
            <p className="md:text-lg text-md leading-7 text-white font-semibold">
              The ProStrikers Affiliate Program offers your institution the
              unparalleled opportunity to collaborate with industry leaders,
              enhancing your training capabilities and elevating your athletes'
              performance.
            </p>
          </div>
          <div className="lg:block hidden">
            <div className="bg-[#FFE377] h-[500px] xl:w-5/12 lg:w-1/3 absolute bottom-0 right-0"></div>
            <div className="bg-[#061239] 2xl:size-[1000px] flex justify-center xl:size-[800px] lg:size-[600px] absolute rounded-full top-28 -right-28">
              <Link to="/contact">
                <button className="btn btn-info capitalize rounded-full px-10 text-lg mt-48">
                  contact us
                </button>
              </Link>
            </div>
          </div>
          <div className="h-[300px] lg:hidden block">
            <div className="bg-[#FFE377] h-[300px] w-full absolute -bottom-5 left-0"></div>
            <div className="bg-[#061239] w-full sm:h-full h-[300px] flex flex-col items-center absolute rounded-full left-0 sm:top-80 -bottom-14">
              <Link to="/contact">
                <button className="btn btn-info capitalize rounded-full px-10 text-lg mt-28">
                  contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AffiliateContactSection;
