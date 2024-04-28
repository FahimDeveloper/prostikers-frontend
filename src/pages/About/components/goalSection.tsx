import founder from "../../../assets/images/about/download.png";
import avater from "../../../assets/images/about/kavindu-avater.png";
import Container from "../../../components/Container";
const GoalSection = () => {
  return (
    <div className="py-10 bg-[#0EBBBC]">
      <Container>
        <div className="grid sm:grid-cols-5 grid-cols-1 lg:h-[670px] md:gap-3 gap-5 items-center">
          <div className="space-y-7 sm:col-span-3">
            <strong className="font-medium xl:text-4xl lg:text-3xl sm:text-2xl text-xl xl:leading-[50px] lg:leading-[44px] sm:leading-9 text-white">
              “Our goal is to create a premier training facility offering
              comprehensive solutions mainly focusing on Baseball, Softball,
              Cricket, Soccer, and Field Hockey within our local community. We
              aim to cultivate a vibrant sporting lifestyle among athletes and
              enthusiasts by providing top-tier training under one roof.”
            </strong>
            <div className="md:flex items-center gap-5 hidden">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img loading="lazy" src={avater} />
                </div>
              </div>
              <div className="text-white space-y-1">
                <p>Kavindu</p>
                <p className="text-sm">Founder & CEO</p>
              </div>
            </div>
          </div>
          <div className="text-center sm:col-span-2 space-y-5 overflow-hidden">
            <img
              loading="lazy"
              src={founder}
              alt="founder image"
              className="rounded-2xl w-full max-h-[600px] object-cover"
            />
            <div className="md:hidden items-center gap-5 flex">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img loading="lazy" src={avater} />
                </div>
              </div>
              <div className="text-white space-y-1">
                <p>Kavindu</p>
                <p className="text-sm">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GoalSection;
