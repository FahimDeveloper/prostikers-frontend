import EventCard from "../../../common/card/EventCard";
import Container from "../../../components/Container";
import { useGetEventsQuery } from "../../../redux/features/event/eventApi";

const EventsSection = () => {
  const { data } = useGetEventsQuery({
    limit: 2,
  });
  return (
    <>
      {data?.results?.length != undefined && data?.results?.length > 0 && (
        <Container>
          <div className="lg:py-14 md:py-12 py-10 space-y-10">
            <div className="space-y-4 text-center">
              <h4 className="capitalize text-primary lg:text-2xl text-xl font-semibold leading-7">
                Mark Your Calendar
              </h4>
              <h2 className="lg:text-[56px] md:text-[45px] text-3xl font-semibold lg:leading-[67px] md:leading-[50px]">
                Upcoming Tournaments to Ignite Your Spirit
              </h2>
              <p className="text-[#929292] md:text-lg lg:leading-7 md:leading-6 leading-5 md:w-[700px] w-full mx-auto">
                Boost your routine with our events! Join training camps and
                tournaments. There's always a new challenge. Sign up & show your
                skills.
              </p>
            </div>
            <div className="space-y-8">
              {data?.results?.map((event, index) => {
                return <EventCard key={index} event={event} index={index} />;
              })}
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default EventsSection;
