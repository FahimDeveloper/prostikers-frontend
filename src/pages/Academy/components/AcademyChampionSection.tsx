import { IoCheckmark } from "react-icons/io5";
import Container from "../../../components/Container";
import champion from "../../../assets/images/academy/champion.webp";

const AcademyChampionSection = () => {
  return (
    <Container>
      <div className="lg:py-16 md:py-12 py-10 space-y-14">
        <div className="space-y-5">
          <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
            ProStrikers Academy: <br /> Where Champions Train
          </h2>
          <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
            Welcome to ProStrikers Academy, the breeding ground for sporting
            excellence. Our academy nurtures raw talent and turns ambition into
            success through a structured curriculum, professional coaching, and
            a competitive environment. We focus on comprehensive development,
            including technical skills, physical fitness, and mental fortitude.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 items-center">
          <img
            src={champion}
            className="lg:size-96 w-full md:h-96 object-fill rounded-2xl"
            alt="membership family image"
          />
          <div className="space-y-5">
            <h3 className="font-semibold lg:text-[40px] md:text-3xl text-xl md:leading-[48px] leading-9">
              Unlock Your Potential with ProStrikers
            </h3>
            <ul className="list-none become-member-list lg:text-lg text-base text-[#5F5F5F] md:leading-7 leading-6 space-y-4">
              <li className="flex gap-3">
                <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                <p>
                  Progressive learning paths tailored to age and skill level.
                </p>
              </li>
              <li className="flex gap-3">
                <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                <p>Experienced coaches with professional backgrounds.</p>
              </li>
              <li className="flex gap-3">
                <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                <p>Opportunities to compete in local and national leagues.</p>
              </li>
              <li className="flex gap-3">
                <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                <p>Access to premier indoor and outdoor training grounds.</p>
              </li>
              <li className="flex gap-3">
                <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                <p>Custom nutrition plans to optimize performance.</p>
              </li>
              <li className="flex gap-3">
                <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                <p>Workshops on health, wellness, and injury prevention.</p>
              </li>
              <li className="flex gap-3">
                <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                <p>
                  Networking opportunities with scouts and professional teams.
                </p>
              </li>
              <li className="flex gap-3">
                <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                <p>
                  A supportive network of fellow athletes, coaches, and alumni.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AcademyChampionSection;
