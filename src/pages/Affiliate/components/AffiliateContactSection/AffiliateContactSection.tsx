import Container from "../../../../components/Container";

const AffiliateContactSection = () => {
  return (
    <div className="bg-[#0EBBBC] overflow-hidden">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:h-[500px] md:gap-3 gap-5 items-center">
          <div className="space-y-4">
            <h2 className="font-bold text-[56px] text-white leading-[64px]">
              Elevate Your Institution with ProStrikers
            </h2>
            <p className="text-lg leading-7 text-white font-semibold">
              The ProStrikers Affiliate Program offers your institution the
              unparalleled opportunity to collaborate with industry leaders,
              enhancing your training capabilities and elevating your athletes'
              performance.
            </p>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default AffiliateContactSection;
