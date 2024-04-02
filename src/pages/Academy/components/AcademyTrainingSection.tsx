/* eslint-disable @typescript-eslint/no-explicit-any */
import ProgramsCard from "../../../common/card/ProgramsCard";
import Container from "../../../components/Container";
import training1 from "../../../assets/images/training/one-training.jpg";
import training2 from "../../../assets/images/training/group-training.jpg";
import training3 from "../../../assets/images/training/kids-training.jpg";
import training4 from "../../../assets/images/training/bootcamp-training.jpg";
import training5 from "../../../assets/images/training/private-training.jpg";
import training6 from "../../../assets/images/training/private-training.jpg";

const AcademyTrainingSection = () => {
  const trainingData = [
    {
      title: "One on One Training",
      image: training1,
      link: "/program/one-training",
    },
    {
      title: "Group Training",
      image: training2,
      link: "/program/group-training",
    },
    {
      title: "Kids Training",
      image: training3,
      link: "/program/kids-training",
    },
    {
      title: "Bootcamps",
      image: training4,
      link: "/program/bootcamp-training",
    },
    {
      title: "t10 league",
      image: training5,
      link: "/program/tten-league",
    },
    {
      title: "Private Training",
      image: training6,
      link: "/program/privet-training",
    },
  ];
  return (
    <Container>
      <div className="lg:py-14 md:py-12 py-10 space-y-10">
        <div className="space-y-4 text-center">
          <h4 className="capitalize text-primary lg:text-2xl text-xl font-semibold leading-7">
            Our Programs
          </h4>
          <h2 className="lg:text-[56px] md:text-[45px] text-3xl font-semibold lg:leading-[67px] md:leading-[50px]">
            Diverse Training Programs for Peak Performance
          </h2>
          <p className="text-[/program/one-training929292] md:text-lg lg:leading-7 md:leading-6 leading-5 md:w-[700px] w-full mx-auto">
            Dive into ProStrikers’ diverse range of training programs, designed
            to cater to athletes at every level of their journey. From
            developmental leagues for novices to specialized clinics for
            advanced athletes, our programs are meticulously crafted to
            challenge, inspire, and elevate your sporting prowess.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-7">
          {trainingData.map((training: any) => {
            return <ProgramsCard data={training} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default AcademyTrainingSection;
