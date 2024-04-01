import familyImage from "../../../assets/images/membership/membeshi-family.webp";
import Container from "../../../components/Container";
import { IoCheckmark } from "react-icons/io5";
const MembershipFamilySection = () => {
  return (
    <Container>
      <div className="lg:py-16 md:py-12 py-10 space-y-14">
        <div className="space-y-5">
          <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
            Join the Pro Strikers Family
          </h2>
          <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
            At Pro Strikers, we’re more than just an indoor sports facility;
            we're a community of athletes, coaches, and sports enthusiasts
            dedicated to elevating your game. Our memberships are designed to
            provide unparalleled access to our state-of-the-art facilities and
            exclusive training programs. Whether you’re looking to master
            cricket, baseball, softball, soccer, or field hockey, we have a
            membership tailored just for you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 items-center">
          <img
            src={familyImage}
            className="lg:size-96 w-full md:h-96 object-fill rounded-2xl"
            alt="membership family image"
          />
          <div className="space-y-5">
            <h3 className="font-semibold lg:text-[40px] md:text-3xl text-xl md:leading-[48px] leading-9">
              Why Become a Member?
            </h3>
            <ul className="list-none become-member-list lg:text-lg text-base text-[#5F5F5F] md:leading-7 leading-6 space-y-4">
              <li className="flex gap-3">
                <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                <p>
                  Exclusive Access: Priority booking for our batting cages, open
                  fields, and training sessions.
                </p>
              </li>
              <li className="flex gap-3">
                <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                <p>
                  Unbeatable Value: Enjoy significant savings on sessions,
                  rentals, and purchases from our Pro Shop.
                </p>
              </li>
              <li className="flex gap-3">
                <IoCheckmark className="lg:size-6 size-5 text-[#00CC61]" />
                <p>
                  Unbeatable Value: Enjoy significant savings on sessions,
                  rentals, and purchases from our Pro Shop.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MembershipFamilySection;
