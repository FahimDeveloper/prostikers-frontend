import Container from "../../../components/Container";
import cardImgFirst from "../../../assets/images/home/facilities/platform-card-1.webp";
import cardImgSecond from "../../../assets/images/home/facilities/platform-card-2.webp";
import cardImgThird from "../../../assets/images/home/facilities/platform-card-3.webp";
import cardImgFourth from "../../../assets/images/home/facilities/platform-card-4.webp";

const FacilitiesSection = () => {
  const facilityData = [
    {
      tag: "Indoor Cages & Field",
      title: "Unlock Your Game in Our Premier Indoor Arena",
      image: cardImgFirst,
      description:
        "Step inside ProStrikers’ premier indoor arenas where every athlete has the space to shine. Our top-of-the-line facilities are meticulously designed to simulate real-world conditions, providing you with the perfect backdrop to train, play, and unlock your true potential. With cutting-edge technology and surfaces engineered for peak performance, there's no better place to elevate your game.",
    },
    {
      tag: "Professional Coaching",
      title: "Elevate Your Skills with Elite Coaching",
      image: cardImgSecond,
      description:
        "Transform your talent into triumph with guidance from ProStrikers' elite coaches. Our handpicked experts bring a wealth of experience and personalized strategies to every session, helping you refine your techniques and amplify your strengths. Whether you're a beginner or a seasoned pro, our coaches are committed to elevating your skills to the next level.",
    },
    {
      tag: "Indoor Cricket League",
      title: "Experience the Thrill of the T10 Cricket League",
      image: cardImgThird,
      description:
        "Immerse yourself in the electric atmosphere of the T10 Cricket League at ProStrikers, where speed meets strategy, and every ball counts. Join the league that’s taking cricket by storm, offering a fast-paced, adrenaline-fueled experience for players and spectators alike. With high-octane matches and a passionate community, the T10 Cricket League is where you'll forge unforgettable memories and thrilling victories.",
    },
    {
      tag: "Hosting Indoor Events",
      title: "Indoor Event Hosting's are Unforgettable",
      image: cardImgFourth,
      description:
        "Make your next event a grand slam at ProStrikers. From corporate team-building to unforgettable birthday parties, our indoor venues offer a unique setting that combines the thrill of sports with custom catering and state-of-the-art amenities. Let us take the helm to ensure your event is memorable, delivering an experience that scores with all your guests.",
    },
  ];
  return (
    <Container>
      <div className="lg:py-16 md:py-12 py-10 space-y-10">
        <div className="space-y-4 text-center">
          <h4 className="capitalize text-primary lg:text-2xl text-xl font-semibold leading-7">
            Explore Our Services
          </h4>
          <h2 className="lg:text-[56px] md:text-[45px] text-3xl font-semibold lg:leading-[67px] md:leading-[50px]">
            Tailored Training & Top-Tier Facilities
          </h2>
          <p className="text-[#929292] md:text-lg lg:leading-7 md:leading-6 leading-5 md:w-[600px] w-full mx-auto">
            At ProStrikers, we offer more than just practice sessions. From
            professional coaching and custom training programs to our
            state-of-the-art facilities, we provide everything you need to excel
            in your sport of choice.
          </p>
        </div>
        <div className="space-y-5">
          {facilityData.map((facilty, index) => {
            return (
              <div
                key={index}
                className={`${
                  index == 0
                    ? "bg-[#EBFAFE] top-24"
                    : index == 1
                    ? "bg-[#FFF2FC] top-32"
                    : index == 2
                    ? "bg-[#073742] top-40"
                    : "bg-[#FFCFB4] top-48"
                } sticky xl:p-14 sm:p-10 p-6 pt-8 space-y-7 rounded-3xl`}
              >
                <span
                  className={`${
                    index == 0
                      ? "bg-[#D1F5FF] text-[#125566]"
                      : index == 1
                      ? "bg-[#FFEAFA] text-[#3E0B33]"
                      : index == 2
                      ? "bg-[#81AAB3] text-[#FFFFFF]"
                      : "bg-[#FFDFCE] text-[#152F3F]"
                  } font-semibold sm:text-lg sm:leading-7 leading-5 p-4 rounded-full`}
                >
                  {facilty.tag}
                </span>
                <div className="grid lg:grid-cols-2 items-center gap-5">
                  <img
                    loading="lazy"
                    src={facilty.image}
                    className="w-full lg:h-full max-h-[400px] min-h-80 object-fill rounded-2xl lg:order-2 md:order-1"
                    alt="facility image"
                  />
                  <div className="xl:space-y-9 lg:order-1 md:order-2 sm:space-y-6 space-y-4">
                    <h3
                      className={`${
                        index == 0
                          ? "text-[#0E524D]"
                          : index == 1
                          ? "text-[#2D0724]"
                          : index == 2
                          ? "text-[#FFFFFF]"
                          : "text-[#351A0A]"
                      } text-bold xl:text-[40px] md:text-4xl text-2xl md:leading-[48px] leading-6`}
                    >
                      {facilty.title}
                    </h3>
                    <article
                      className={`${
                        index == 0
                          ? "text-[#25635E]"
                          : index == 1
                          ? "text-[#596B77]"
                          : index == 2
                          ? "text-[#DEDEDE]"
                          : "text-[#6C4A37]"
                      } sm:text-lg text-base xl:leading-7 sm:leading-6 leading-5 space-y-4`}
                    >
                      <p>{facilty.description}</p>
                    </article>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default FacilitiesSection;
