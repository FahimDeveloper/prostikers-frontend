/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "../components/Container";
import TrainingCard from "./card/TrainingCard";

const TrainingSection = ({ data }: any) => {
  return (
    <Container>
      <div className="lg:py-14 md:py-12 py-10 space-y-8">
        <h2 className="font-semibold text-[56px] leading-[67px]">
          {data?.title}
        </h2>
        <p className="text-lg text-[#929292]">{data.description}</p>
        <div className="grid grid-cols-6 gap-7">
          {data.programs.map((program: any) => {
            return (
              <div
                className={`${
                  data?.programs?.length > 2 ? "col-span-2" : "col-span-3"
                }`}
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
