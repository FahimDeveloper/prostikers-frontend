import founder from "../../../assets/images/about/founder.webp";
import Container from "../../../components/Container";
const GoalSection = () => {
  return (
    <div className="py-10 bg-[#0EBBBC]">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:h-[670px] md:gap-3 gap-5 items-center">
          <div className="space-y-7">
            <strong className="font-medium xl:text-5xl lg:text-[40px] text-3xl xl:leading-[58px] lg:leading-[50px] md:leading-9 text-white">
              “Our goal is to build software that gives customer-facing teams at
              SMBs the ability to create fruitful and enduring relationships
              with customers.”
            </strong>
            <div className="md:flex items-center gap-5 hidden">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="text-white space-y-1">
                <p>Kavindu</p>
                <p className="text-sm">Founder & CEO</p>
              </div>
            </div>
          </div>
          <div className="text-center space-y-5">
            <img
              src={founder}
              alt="founder image"
              className="rounded-2xl lg:w-auto md:w-full sm:w-auto w-full md:ms-auto mx-auto"
            />
            <div className="md:hidden items-center gap-5 flex">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
