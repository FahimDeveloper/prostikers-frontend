import event1 from "../../../assets/images/home/events/events1.webp";
import event2 from "../../../assets/images/home/events/events2.webp";
import Container from "../../../components/Container";

const EventsSection = () => {
  const eventsData = [
    {
      title: "Summer Elite Training Camp",
      description:
        "Featuring professional coaches across Baseball, Softball, Cricket, and Soccer, this intensive program is designed to sharpen your skills, improve your tactics, and elevate your game to the next level.",
      image: event1,
      date: "July 15th - July 29th, 2024",
      link: "#",
    },
    {
      title: "Youth Indoor Sports Festival",
      description:
        "A day of fun, learning, and competition! Our Youth Indoor Sports Festival is perfect for kids aged 6-12 looking to explore various sports, including Futsal, Field Hockey, and Cricket.",
      image: event2,
      date: "July 15th - July 29th, 2024",
      link: "#",
    },
  ];
  return (
    <Container>
      <div className="lg:py-14 md:py-12 py-10 space-y-10">
        <div className="space-y-4 text-center">
          <h4 className="capitalize text-primary lg:text-2xl text-xl font-semibold leading-7">
            Mark Your Calendar
          </h4>
          <h2 className="lg:text-[56px] md:text-[45px] text-3xl font-semibold lg:leading-[67px] md:leading-[50px]">
            Upcoming Events to Ignite Your Spirit
          </h2>
          <p className="text-[#929292] md:text-lg lg:leading-7 md:leading-6 leading-5 md:w-[700px] w-full mx-auto">
            Energize your routine with our lineup of events! From elite training
            camps to our vibrant sports festival, there’s always a new challenge
            on the horizon. Sign up and showcase your skills, or cheer on fellow
            athletes.
          </p>
        </div>
        <div>
          <div className="space-y-8">
            {eventsData.map((event, index) => {
              return (
                <div className="grid md:grid-cols-2 xl:gap-20 lg:gap-10 gap-6 md:max-h-[420px] xl:p-8 p-7 items-center justify-between bg-[#F9FBFF] rounded-2xl">
                  <img
                    src={event.image}
                    alt="event image"
                    className="rounded-2xl w-full"
                  />
                  <div
                    className={`${
                      index % 2 == 0 ? "md:order-first" : "md:order-last"
                    } space-y-4`}
                  >
                    <p className="text-[#595E69] text-base">{event.date}</p>
                    <div className="lg:space-y-6 space-y-4">
                      <h3 className="lg:text-[34px] sm:text-[26px] leading-8 text-2xl font-bold lg:leading-10">
                        {event.title}
                      </h3>
                      <p className="text-[#787878] lg:text-lg leading-6">
                        {event.description}
                      </p>
                      <button className="primary-btn md:w-auto w-full">
                        Register now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EventsSection;
