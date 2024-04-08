/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "../components/Container";
import TrainingCard from "./card/TrainingCard";

const TrainingSection = ({ data }: any) => {
  return (
    <Container>
      <div className="lg:py-14 md:py-12 py-10 sm:space-y-8 space-y-5">
        <h2 className="font-semibold lg:text-[56px] sm:text-[45px] text-3xl lg:leading-[67px] sm:leading-[50px]">
          {data?.title}
        </h2>
        <p className="text-lg text-[#929292]">{data.description}</p>
        <div className="grid grid-cols-6 gap-7">
          {data.programs.map((program: any, index: any) => {
            return (
              <div
                key={index}
                className={`lg:col-span-2 sm:col-span-3 col-span-6`}
              >
                <TrainingCard data={program} />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default TrainingSection;
