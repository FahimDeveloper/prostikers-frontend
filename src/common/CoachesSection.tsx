/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "../components/Container";

const CoachesSection = ({ data }: any) => {
  return (
    <Container>
      <div className="lg:py-14 md:py-12 py-10 space-y-10">
        <div className="space-y-4 text-center">
          <h4 className="capitalize text-primary lg:text-2xl text-xl font-semibold leading-7">
            {data?.tag}
          </h4>
          <h2 className="lg:text-[56px] md:text-[45px] text-3xl font-semibold lg:leading-[67px] md:leading-[50px]">
            {data?.title}
          </h2>
          <p className="text-[#929292] md:text-lg lg:leading-7 md:leading-6 leading-5 md:w-[700px] w-full mx-auto">
            {data?.description}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {data?.coaches?.map((coach: any, index: any) => {
            return (
              <div key={index} className="space-y-1">
                <img
                  src={coach?.image}
                  loading="lazy"
                  className="w-full h-96 rounded-lg object-cover"
                  alt="coach image"
                />
                <h4 className="font-bold text-2xl leading-7">{coach?.name}</h4>
                <p>{coach?.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default CoachesSection;
