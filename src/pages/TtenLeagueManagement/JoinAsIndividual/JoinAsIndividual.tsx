/* eslint-disable @typescript-eslint/no-explicit-any */
import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/tten-league-banner.webp";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";
import moment from "moment";
import { useGetEventsQuery } from "../../../redux/features/event/eventApi";
import { Button, Select } from "antd";
import { useState } from "react";

const JoinAsIndividual = () => {
  const [sport, setSport] = useState<string | undefined>(undefined);
  const { data } = useGetEventsQuery({
    limit: 10,
    event_type: "individual",
    sport,
  });
  const onChange = (value: string) => {
    if (value === "all") {
      setSport(undefined);
    } else {
      setSport(value);
    }
  };
  return (
    <>
      <BannerSection title="Individual - T10 League" image={banner} />
      <Container>
        <div className="lg:py-14 md:py-12 py-10 sm:space-y-8 space-y-5">
          <h2 className="font-semibold lg:text-[56px] sm:text-[45px] text-3xl lg:leading-[67px] sm:leading-[50px]">
            Step Up to the Crease: Individual T10 League Play
          </h2>
          <p className="text-lg text-[#929292]">
            Embark on your solo cricket journey in ProStrikers’ exhilarating T10
            League. Ideal for individual players looking to dive into
            competitive play, hone their skills, and get spotted by teams
            seeking talent. Register as an individual and we’ll place you in a
            team that matches your skill level and competitive spirit.
          </p>
          <div className="space-y-3">
            <div className="flex justify-end">
              <Select
                className="w-40"
                defaultValue={"all"}
                optionFilterProp="children"
                onChange={onChange}
                options={[
                  {
                    label: "All Sport",
                    value: "all",
                  },
                  {
                    label: "Cricket",
                    value: "cricket",
                  },
                  {
                    label: "Soccer",
                    value: "soccer",
                  },
                  {
                    label: "Baseball",
                    value: "baseball",
                  },
                  {
                    label: "Softball",
                    value: "softball",
                  },
                  {
                    label: "Field Hockey",
                    value: "field hockey",
                  },
                ]}
              />
            </div>
            {data?.results.length === 0 ? (
              <div className="h-40 flex justify-center items-center">
                <p className="text-2xl text-secondary">No events found.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {data?.results.map((event, index) => {
                  return (
                    <div
                      key={index}
                      className="grid md:grid-cols-2 xl:gap-20 lg:gap-10 gap-6 md:max-h-[420px] xl:p-8 lg:p-7 sm:p-4 p-2 items-center justify-between bg-[#F9FBFF] rounded-2xl"
                    >
                      <img
                        loading="lazy"
                        src={event.image}
                        alt="event image"
                        className="rounded-2xl w-full"
                      />
                      <div
                        className={`${
                          index % 2 == 0 ? "md:order-first" : "md:order-last"
                        } space-y-4`}
                      >
                        <p className="text-[#595E69] text-base">
                          {moment(event.start_date).format("MMMM Do")} -{" "}
                          {moment(event.end_date).format("MMMM Do YYYY")}
                        </p>
                        <div className="lg:space-y-6 space-y-4">
                          <h3 className="lg:text-[34px] sm:text-[26px] leading-8 text-2xl font-bold lg:leading-10">
                            {event.event_name}
                          </h3>
                          <p className="text-[#787878] lg:text-lg leading-6">
                            {event.description}
                          </p>
                          {moment(event.registration_end).isBefore(
                            moment().startOf("day")
                          ) ||
                          event.registration >= event.allowed_registrations ? (
                            <Button
                              disabled={true}
                              className="primary-btn md:w-auto w-full"
                            >
                              Registration closed
                            </Button>
                          ) : moment(event.registration_start).isAfter(
                              moment().startOf("day")
                            ) ? (
                            <Button
                              disabled={true}
                              className="primary-btn md:w-auto w-full"
                            >
                              Open{" "}
                              {moment(event.registration_start).format(
                                "MMMM Do YYYY"
                              )}
                            </Button>
                          ) : (
                            <Link
                              to={event._id}
                              className="block"
                              state={{ sport: event.sport }}
                            >
                              <button className="primary-btn md:w-auto w-full">
                                Register now
                              </button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default JoinAsIndividual;
