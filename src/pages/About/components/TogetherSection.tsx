import Container from "../../../components/Container";
import proStrikers from "../../../assets/images/about/pro-strikers.webp";

const TogetherSection = () => {
  return (
    <Container>
      <div className="space-y-14 lg:py-16 md:py-12 py-10">
        <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-10 sm:gap-5 gap-y-4">
          <div className="xl:col-span-8 lg:col-span-7 lg:space-y-8 space-y-5">
            <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-3xl lg:leading-[67px] md:leading-[50px] leading-9">
              United in Passion, Unrivaled in Performance
            </h2>
            <div className="text-[#929292] md:text-lg leading-6 lg:space-y-7 space-y-5">
              <p className="lg:leading-7 md:leading-6">
                Our mission is to craft an ecosystem that not only hones
                athletic prowess but also instills the values of sportsmanship,
                teamwork, and relentless pursuit of excellence. With
                state-of-the-art facilities, expert coaches, and a supportive
                environment, we enable athletes at every level to unlock their
                full potential.
              </p>
              <p className="lg:leading-7 md:leading-6">
                Whether you're taking your first steps onto the pitch or you’re
                a seasoned player aiming for the pros, ProStrikers provides the
                tools, knowledge, and community to elevate your game. Join us
                and be part of a legacy of sporting excellence."
              </p>
              <p className="lg:leading-7 md:leading-6">
                Our strength lies in our unity. At ProStrikers, every athlete,
                coach, and staff member contributes to a robust ecosystem geared
                towards sporting excellence. We celebrate diversity, encourage
                collaboration, and believe that together, we can achieve
                extraordinary feats both on and off the field.
              </p>
              <p className="lg:leading-7 md:leading-6">
                At ProStrikers, we believe in the power of sports to bridge gaps
                and bring people together. Our dedication goes beyond the field,
                as we strive to build lasting relationships between our members
                and the larger community. By fostering a culture of support and
                engagement, we turn companies into teams, and individuals into
                fans.
              </p>
            </div>
          </div>
          <img
            src={proStrikers}
            className="w-full h-full xl:col-span-4 lg:col-span-5"
            alt="proStrikers"
          />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 xl:gap-16 lg:gap-10 md:gap-8 gap-5">
          <div className="space-y-4">
            <p className="lg:md:text-lg leading-6 text-base lg:leading-7 md:leading-6 text-[#1B2730] md:min-h-20">
              Helped athletes to sharpen their skills, build resilience, and
              chase their sporting dreams.
            </p>
            <strong className="inline-block font-semibold xl:text-8xl lg:text-7xl text-6xl xl:leading-[110px] lg:leading-[85px] md:leading-[67px] leading-10">
              10k+
            </strong>
          </div>
          <div className="space-y-4">
            <p className="lg:md:text-lg leading-6 md:text-[17px] text-base lg:leading-7 md:leading-6 text-[#1B2730] md:min-h-20">
              ProStrikers stands as a beacon of triumph and the relentless
              pursuit of victory.
            </p>
            <strong className="inline-block font-semibold xl:text-8xl lg:text-7xl text-6xl xl:leading-[110px] lg:leading-[85px] md:leading-[67px] leading-10">
              50+
            </strong>
          </div>
          <div className="space-y-4">
            <p className="lg:md:text-lg leading-6 md:text-[17px] text-base lg:leading-7 md:leading-6 text-[#1B2730] md:min-h-20">
              ProStrikers has partnered with local schools and organizations to
              promote physical education among youth.
            </p>
            <strong className="inline-block font-semibold xl:text-8xl lg:text-7xl text-6xl xl:leading-[110px] lg:leading-[85px] md:leading-[67px] leading-10">
              300+
            </strong>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TogetherSection;
