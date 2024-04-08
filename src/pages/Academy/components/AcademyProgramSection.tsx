/* eslint-disable @typescript-eslint/no-explicit-any */
import ProgramsCard from "../../../common/card/ProgramsCard";
import Container from "../../../components/Container";
import program1 from "../../../assets/images/programs/base-ball.webp";
import program2 from "../../../assets/images/programs/soft-ball.webp";
import program3 from "../../../assets/images/programs/cricket.webp";
import program4 from "../../../assets/images/programs/soccer.webp";
import program5 from "../../../assets/images/programs/hockey.webp";

const AcademyProgramSection = () => {
  const programsData = [
    {
      title: "baseball",
      image: program1,
      link: "/sport/baseball",
    },
    {
      title: "softball",
      image: program2,
      link: "/sport/softball",
    },
    {
      title: "cricket",
      image: program3,
      link: "/sport/cricket",
    },
    {
      title: "soccer",
      image: program4,
      link: "/sport/soccer",
    },
    {
      title: "hocky",
      image: program5,
      link: "/sport/hockey",
    },
  ];
  return (
    <Container>
      <div className="lg:py-14 md:py-12 py-10 space-y-10">
        <div className="space-y-4 text-center">
          <h4 className="capitalize text-primary lg:text-2xl text-xl font-semibold leading-7">
            Sports We’ve got Covered
          </h4>
          <h2 className="lg:text-[56px] md:text-[45px] text-3xl font-semibold lg:leading-[67px] md:leading-[50px]">
            Explore Our Wide Range of Sports Offerings
          </h2>
          <p className="text-[/sport/baseball929292] md:text-lg lg:leading-7 md:leading-6 leading-5 md:w-[1000px] w-full mx-auto">
            At ProStrikers, passion for sports knows no bounds. Explore our wide
            array of sports offerings, each with dedicated programs tailored to
            meet your goals. Whether it’s the precision of baseball, the
            strategy of cricket, the dynamism of soccer, or the agility of
            hockey, our academy is your gateway to becoming the best in the
            field.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-7">
          {programsData.map((program: any, index: any) => {
            return (
              <div className={`${index < 3 ? "col-span-2" : "col-span-3"}`}>
                <ProgramsCard data={program} />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default AcademyProgramSection;
