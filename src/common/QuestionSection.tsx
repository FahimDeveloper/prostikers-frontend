import Container from "../components/Container";
import QuestionAccordion from "./accordion/QuestionAccordion";

type TProp = {
  title: string;
  description: string;
};

const QuestionSection = ({ data }: { data: TProp[] }) => {
  return (
    <Container>
      <div className="lg:py-14 md:py-12 py-10 space-y-10">
        <div className="space-y-4 text-center">
          <h4 className="capitalize text-primary lg:text-2xl text-xl font-semibold leading-7">
            Inquiries Welcome
          </h4>
          <h2 className="lg:text-[56px] md:text-[45px] text-3xl font-semibold lg:leading-[67px] md:leading-[50px]">
            Your Questions Answered
          </h2>
          <p className="text-[#929292] md:text-lg lg:leading-7 md:leading-6 leading-5 md:w-[700px] w-full mx-auto">
            Have questions? We've got answers. Browse through our frequently
            asked questions to learn more about our services, memberships, and
            more. Can't find what you're looking for? Reach out directly for
            personalized support.
          </p>
        </div>
        <div>
          <QuestionAccordion data={data} />
        </div>
      </div>
    </Container>
  );
};

export default QuestionSection;
