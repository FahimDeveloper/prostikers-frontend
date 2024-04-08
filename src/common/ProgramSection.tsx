/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "../components/Container";
import ProgramsCard from "./card/ProgramsCard";

const ProgramSection = ({ data }: any) => {
  return (
    <Container>
      <div className="lg:py-14 md:py-12 py-10 lg:space-y-10 md:space-y-8 space-y-5">
        <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-3xl lg:leading-[67px] md:leadinig-[50px]">
          {data?.title}
        </h2>
        <p className="md:text-lg text-base text-[#929292]">
          {data.description}
        </p>
        <div className="space-y-5">
          <h3 className="text-center font-bold text-4xl leading-[48px]">
            Personal Training
          </h3>
          <div className="grid md:grid-cols-2 gap-7">
            {data?.programs?.slice(0, 2)?.map((training: any, index: any) => {
              return <ProgramsCard data={training} key={index} />;
            })}
          </div>
        </div>
        <div className="space-y-5">
          <h3 className="text-center font-bold text-4xl leading-[48px]">
            Youth Training
          </h3>
          <div className="grid md:grid-cols-2 gap-7">
            {data?.programs?.slice(2, 4).map((training: any, index: any) => {
              return <ProgramsCard data={training} key={index} />;
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
