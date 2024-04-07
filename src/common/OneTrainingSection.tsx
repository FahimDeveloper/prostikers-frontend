/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "../components/Container";
import RentalSidebar from "../components/Rental/RentalSidebar";

const OneTrainingSection = ({ title, description }: any) => {
  return (
    <Container>
      <div className="lg:py-14 md:py-12 py-10 space-y-10">
        <div className="space-y-5">
          <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
            {title}
          </h2>
          <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
            {description}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-y-5">
          <div className="col-span-2 space-y-5">
            <iframe
              src="https://app.glofox.com/portal/#/branch/6602d2195caae7e89503f729/classes-day-view?filters_classes=661273e8607e43d14f0af304&filters_facilities=66126e84d0d70839d7097d03&header=classes"
              width="100%"
              height="1780"
            ></iframe>
          </div>
          <RentalSidebar />
        </div>
      </div>
    </Container>
  );
};

export default OneTrainingSection;
