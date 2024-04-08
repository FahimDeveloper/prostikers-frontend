import { IoCheckmark } from "react-icons/io5";
import Container from "../../../../components/Container";
import affiliate1 from "../../../../assets/images/affiliate/affiliate-benifit.webp";
import affiliate2 from "../../../../assets/images/affiliate/affiliate-programs.webp";
import affiliate3 from "../../../../assets/images/affiliate/become-affiliate.webp";

const AffiliateProgramSection = () => {
  return (
    <Container>
      <div className="py-10 space-y-10">
        <div className="space-y-5">
          <h2 className="text-center lg:text-[64px] md:text-5xl text-3xl font-semibold lg:leading-[74px] md:leading-[50px] leading-9">
            <span className="block text-[#787878]">
              Empower Your Institution:
            </span>
            Become a ProStrikers Affiliate
          </h2>
          <p className="text-[#07133D] md:text-lg md:leading-7 leading-6 text-center">
            At ProStrikers, we’re not just a sports facility; we're a thriving
            community where champions are born and bred. Located in the heart of
            Sacramento, we’ve created a haven for athletes across various
            disciplines – Baseball, Softball, Cricket, Soccer, and Hockey.
          </p>
        </div>
        <div className="space-y-5">
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 items-center">
            <img
              src={affiliate1}
              className="lg:size-96 w-full md:h-96 object-fill rounded-2xl"
              alt="membership family image"
            />
            <div className="space-y-5">
              <h3 className="font-semibold lg:text-[40px] md:text-3xl text-xl md:leading-[48px] leading-9">
                Benefits of Affiliation
              </h3>
              <ul className="list-none become-member-list lg:text-lg text-base text-[#5F5F5F] md:leading-7 leading-6 space-y-4">
                <li className="flex gap-3">
                  <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                  <p>
                    Access to Elite Training Programs: Incorporate ProStrikers’
                    cutting-edge training programs, tailored to enhance your
                    athletes' performance.
                  </p>
                </li>
                <li className="flex gap-3">
                  <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                  <p>
                    Equipment and Facilities Support: Upgrade your training
                    environment with our support in equipment and facility
                    enhancement.
                  </p>
                </li>
                <li className="flex gap-3">
                  <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                  <p>
                    Brand Association: Enjoy the prestige and recognition that
                    comes with being part of the ProStrikers network.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 items-center">
            <div className="space-y-5">
              <h3 className="font-semibold lg:text-[40px] md:text-3xl text-xl md:leading-[48px] leading-9">
                Affiliation Programs
              </h3>
              <p className="lg:text-lg text-base text-[#5F5F5F] md:leading-7 leading-6">
                Our tailored affiliation options are designed to meet the unique
                needs of your institution, offering various levels of
                engagement, from program access to full partnership.
              </p>
            </div>
            <img
              src={affiliate2}
              className="lg:size-96 w-full md:h-96 ml-auto object-fill rounded-2xl"
              alt="membership family image"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 items-center">
            <img
              src={affiliate3}
              className="lg:size-96 w-full md:h-96 object-fill rounded-2xl"
              alt="membership family image"
            />
            <div className="space-y-5">
              <h3 className="font-semibold lg:text-[40px] md:text-3xl text-xl md:leading-[48px] leading-9">
                How to Become an Affiliate
              </h3>
              <p className="lg:text-lg text-base text-[#5F5F5F] md:leading-7 leading-6">
                Joining the ProStrikers network is straightforward. Submit your
                interest through our contact form, and our team will guide you
                through the evaluation process, ensuring a mutual fit and
                successful partnership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AffiliateProgramSection;
