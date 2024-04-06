import Container from "../../../../components/Container";

const FranchiseContactSection = () => {
  return (
    <div className="bg-[#0EBBBC] overflow-hidden">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:h-[500px] md:gap-3 gap-5 items-center">
          <div className="space-y-4">
            <h2 className="font-bold text-[56px] text-white leading-[64px]">
              Ready to score big in the world of sports training?
            </h2>
            <p className="text-lg leading-7 text-white font-semibold">
              Contact us today to learn more about the ProStrikers franchise
              opportunity. Let’s create a legacy of sports excellence together.
            </p>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default FranchiseContactSection;
