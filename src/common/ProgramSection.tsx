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
        <div className="space-y-5">
          <h3 className="text-center font-bold text-4xl leading-[48px]">
            Personal Training
          </h3>
          <div className="grid grid-cols-2 gap-7">
            {data?.programs?.slice(0, 2)?.map((training: any) => {
              return <ProgramsCard data={training} />;
            })}
          </div>
        </div>
        <div className="space-y-5">
          <h3 className="text-center font-bold text-4xl leading-[48px]">
            Youth Training
          </h3>
          <div className="grid grid-cols-2 gap-7">
            {data?.programs?.slice(2, 4).map((training: any) => {
              return <ProgramsCard data={training} />;
            })}
          </div>
        </div>
        {data?.programs?.length > 4 && (
          <div className="space-y-5">
            <h3 className="text-center font-bold text-4xl leading-[48px]">
              Tournament
            </h3>
            <div>
              {data?.programs?.slice(4, 5)?.map((training: any) => {
                return <ProgramsCard data={training} />;
              })}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProgramSection;
