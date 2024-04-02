/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "../components/Container";
import ProgramsCard from "./card/ProgramsCard";

const ProgramSection = ({ data }: any) => {
  return (
    <Container>
      <div className="lg:py-14 md:py-12 py-10 space-y-10">
        <h2 className="font-semibold text-[56px] leading-[67px]">
          {data?.title}
        </h2>
        <p className="text-lg text-[#929292]">{data.description}</p>
        <div className="grid grid-cols-6 gap-7">
          {data.programs.map((program: any, index: any) => {
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

export default ProgramSection;
