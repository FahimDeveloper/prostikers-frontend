import Container from "../../../components/Container";
import cardImgFirst from "../../../assets/images/home/facilities/platform-card-1.webp";
import cardImgSecond from "../../../assets/images/home/facilities/platform-card-2.webp";
import cardImgThird from "../../../assets/images/home/facilities/platform-card-3.webp";
import cardImgFourth from "../../../assets/images/home/facilities/platform-card-4.webp";

const FacilitiesSection = () => {
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
            At ProStrikers, we offer more than just practice grounds. From
            professional coaching and custom training programs to our
            state-of-the-art facilities, we provide everything you need to excel
            in your sport of choice.
          </p>
        </div>
        <div className="space-y-5">
          <div className="bg-[#F9FBFF] sticky top-24 xl:p-14 sm:p-10 p-8 space-y-7 rounded-3xl">
            <span className="bg-[#EDF3FF] font-semibold sm:text-lg text-[#152F3F] sm:leading-7 leading-5 p-4 rounded-full">
              Indoor Cages & Field
            </span>
            <div className="grid lg:grid-cols-2 items-center gap-5">
              <img
                src={cardImgFirst}
                className="w-full lg:h-auto max-h-80 object-fill rounded-2xl lg:order-2 md:order-1"
                alt="facility image"
              />
              <div className="xl:space-y-9 lg:order-1 md:order-2 sm:space-y-6 space-y-4">
                <h3 className="text-bold xl:text-[40px] md:text-4xl text-2xl md:leading-[48px] leading-6 text-[#152F3F]">
                  Unlock Your Game in Our Premier Indoor Arenas
                </h3>
                <article className="sm:text-lg text-base xl:leading-7 sm:leading-6 leading-5 space-y-4 text-[#596B77]">
                  <p>
                    Whether you're perfecting your pitch, mastering your swing,
                    or just playing for the love of the game, our versatile
                    spaces are your playground.
                  </p>
                  <p>
                    Tailored to support{" "}
                    <strong>
                      Baseball, Softball, Cricket, Soccer, and Field Hockey,
                    </strong>
                    our facilities are designed with professional standard turf
                    and equipped with all the amenities you need to bring your
                    best game. Book your space. Own your moment. This is where
                    champions train in the making.
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div className="bg-[#F9F9FF] sticky top-24 xl:p-14 sm:p-10 p-8 space-y-7 rounded-3xl">
            <span className="bg-[#EDEDFF] font-semibold sm:text-lg text-[#1A1A52] sm:leading-7 leading-5 p-4 rounded-full">
              Professional Coaching
            </span>
            <div className="grid lg:grid-cols-2 items-center gap-5">
              <img
                src={cardImgSecond}
                className="w-full lg:h-auto max-h-80 object-fill rounded-2xl lg:order-2 md:order-1"
                alt="facility image"
              />
              <div className="xl:space-y-9 lg:order-1 md:order-2 sm:space-y-6 space-y-4">
                <h3 className="text-bold xl:text-[40px] md:text-4xl text-2xl md:leading-[48px] leading-6 text-[#152F3F]">
                  Elevate Your Skills with Elite Coaching
                </h3>
                <article className="sm:text-lg text-base xl:leading-7 sm:leading-6 leading-5 space-y-4 text-[#596B77]">
                  <p>
                    Whether you're perfecting your pitch, mastering your swing,
                    or just playing for the love of the game, our versatile
                    spaces are your playground.
                  </p>
                  <p>
                    Tailored to support{" "}
                    <strong>
                      Baseball, Softball, Cricket, Soccer, and Field Hockey,
                    </strong>
                    our facilities are designed with professional standard turf
                    and equipped with all the amenities you need to bring your
                    best game. Book your space. Own your moment. This is where
                    champions train in the making.
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div className="bg-[#F9FFFF] sticky top-24 xl:p-14 sm:p-10 p-8 space-y-7 rounded-3xl">
            <span className="bg-[#E5FBFB] font-semibold sm:text-lg text-[#1B5B5B] sm:leading-7 leading-5 p-4 rounded-full">
              Indoor Cricket League
            </span>
            <div className="grid lg:grid-cols-2 items-center gap-5">
              <img
                src={cardImgThird}
                className="w-full lg:h-auto max-h-80 object-fill rounded-2xl lg:order-2 md:order-1"
                alt="facility image"
              />
              <div className="xl:space-y-9 lg:order-1 md:order-2 sm:space-y-6 space-y-4">
                <h3 className="text-bold xl:text-[40px] md:text-4xl text-2xl md:leading-[48px] leading-6 text-[#152F3F]">
                  Experience the Thrill of the T10 Cricket League
                </h3>
                <article className="sm:text-lg text-base xl:leading-7 sm:leading-6 leading-5 space-y-4 text-[#596B77]">
                  <p>
                    A dynamic, explosive format where every ball counts, our T10
                    league brings together cricket enthusiasts to compete,
                    celebrate, and cherish the spirit of the game. Featuring
                    top-tier talent and intense matches, the league is a
                    crucible of competition and camaraderie.
                  </p>
                  <p>
                    Join us under the lights, where every run is a story, and
                    every match is a memory. It's not just cricket; it's a
                    festival of runs and wickets. Be part of the action. Be part
                    of the legacy.
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div className="bg-[#F9FFF9] sticky top-24 xl:p-14 sm:p-10 p-6 space-y-7 rounded-3xl">
            <span className="bg-[#EFFFEF] font-semibold sm:text-lg text-[#144D14] sm:leading-7 leading-5 p-4 rounded-full">
              Indoor Cages & Field
            </span>
            <div className="grid lg:grid-cols-2 items-center gap-5">
              <img
                src={cardImgFourth}
                className="w-full lg:h-auto max-h-80 object-fill rounded-2xl lg:order-2 md:order-1"
                alt="facility image"
              />
              <div className="xl:space-y-9 lg:order-1 md:order-2 sm:space-y-6 space-y-4">
                <h3 className="text-bold xl:text-[40px] md:text-4xl text-2xl md:leading-[48px] leading-6 text-[#152F3F]">
                  Indoor Event Hosting's are Unforgettable
                </h3>
                <article className="sm:text-lg text-base xl:leading-7 sm:leading-6 leading-5 space-y-4 text-[#596B77]">
                  <p>
                    Whether you're perfecting your pitch, mastering your swing,
                    or just playing for the love of the game, our versatile
                    spaces are your playground.
                  </p>
                  <p>
                    Tailored to support{" "}
                    <strong>
                      Baseball, Softball, Cricket, Soccer, and Field Hockey,
                    </strong>
                    our facilities are designed with professional standard turf
                    and equipped with all the amenities you need to bring your
                    best game. Book your space. Own your moment. This is where
                    champions train in the making.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FacilitiesSection;
