import Container from "../../../components/Container";

const TestimonialSection = () => {
  return (
    <div className="bg-[#F9FBFF]">
      <Container>
        <div className="lg:py-14 md:py-12 py-10 space-y-10">
          <div className="space-y-4 text-center">
            <h4 className="capitalize text-primary lg:text-2xl text-xl font-semibold leading-7">
              Professional Endorsement
            </h4>
            <h2 className="lg:text-[56px] md:text-[45px] text-3xl font-semibold lg:leading-[67px] md:leading-[50px]">
              Trusted by 50K Professionals
            </h2>
            <p className="text-[#929292] md:text-lg lg:leading-7 md:leading-6 leading-5 md:w-[700px] w-full mx-auto">
              Join an esteemed network of over 50,000 professionals who trust
              ProStrikers for their training needs. Our expert-recommended
              programs and facilities are designed to help you achieve peak
              performance.
            </p>
          </div>
          {/* nice job reviews */}
          <div className="nj-stories"></div>
        </div>
      </Container>
    </div>
  );
};

export default TestimonialSection;
