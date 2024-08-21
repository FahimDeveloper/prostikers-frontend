/* eslint-disable @typescript-eslint/no-explicit-any */
import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import banner from "../../../assets/images/programsBanner/tten-league-banner.webp";
import { useGetEventsQuery } from "../../../redux/features/event/eventApi";
import { Select } from "antd";
import { useState } from "react";
import EventCard from "../../../common/card/EventCard";

const JoinAsTeam = () => {
  const [sport, setSport] = useState<string | undefined>(undefined);
  const { data } = useGetEventsQuery({
    limit: 10,
    event_type: "group",
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
      <BannerSection title="Team - Events" image={banner} />
      <Container>
        <div className="lg:py-14 md:py-12 py-10 sm:space-y-8 space-y-5">
          <h2 className="font-semibold lg:text-[56px] sm:text-[45px] text-3xl lg:leading-[67px] sm:leading-[50px]">
            Team Glory in the T10 League
          </h2>
          <p className="text-lg text-[#929292]">
            Gather your squad and enter the arena of ProStrikers’ T10 League as
            a team. Show off your coordinated team play, strategy, and
            sportsmanship. Our T10 League is the perfect platform for teams to
            challenge themselves against the best, refine their game, and vie
            for the championship title.
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
                  return <EventCard key={index} event={event} index={index} />;
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default JoinAsTeam;
