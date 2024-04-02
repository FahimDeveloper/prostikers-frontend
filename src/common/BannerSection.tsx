/* eslint-disable @typescript-eslint/no-explicit-any */

import Container from "../components/Container";

const BannerSection = ({ image, title }: any) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <div className="flex flex-col justify-center lg:h-96 md:h-72 sm:h-64 h-56">
          <h3 className="font-semibold capitalize lg:text-5xl sm:text-4xl text-3xl lg:leading-[58px] sm:leading-10 leading-7 text-white">
            {title}
          </h3>
        </div>
      </Container>
    </div>
  );
};

export default BannerSection;
