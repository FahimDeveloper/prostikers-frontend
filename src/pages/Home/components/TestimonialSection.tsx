import Container from "../../../components/Container";

const TestimonialSection = () => {
  // const trustedData = [
  //   {
  //     image: "https://avatar.iran.liara.run/public",
  //     title: "Transformative Training!",
  //     review:
  //       "From the moment I stepped onto the courts, I felt welcomed by both the staff and the regular players.",
  //     member: "Jordan M., Soccer Enthusiast",
  //   },
  //   {
  //     image: "https://avatar.iran.liara.run/public",
  //     title: "Top-Notch Facilities",
  //     review:
  //       "Pro Strikers is my go-to spot for futsal! The indoor leagues are competitive, and the facilities are well-maintained. Whether you’re a seasoned player or a beginner, you’ll love the energy here.",
  //     member: "Priya S., Amateur Cricketer",
  //   },
  //   {
  //     image: "https://avatar.iran.liara.run/public",
  //     title: "Unbeatable Atmosphere",
  //     review:
  //       "Finally, a dedicated indoor cricket space in Sacramento! Pro Strikers hosts exciting events, and their coaching sessions have helped me fine-tune my technique. If you’re passionate about cricket, this is the place to be!",
  //     member: "Maria T., Proud Parent",
  //   },
  //   {
  //     image: "https://avatar.iran.liara.run/public",
  //     title: "Expert Coaching",
  //     review:
  //       "ProStrikers has transformed my game! The indoor batting cages are top-notch, and the coaching sessions are personalized and effective. I’ve seen remarkable improvement in my swing and overall performance. Highly recommended!",
  //     member: "Casey D., Baseball Prospect",
  //   },
  //   {
  //     image: "https://avatar.iran.liara.run/public",
  //     title: "Family-Friendly Programs",
  //     review:
  //       "Prostrikers Sacramento completely transformed our weekly soccer games! We were a casual group of friends looking to improve our skills and have some fun. The coaches were fantastic – they kept the sessions engaging, provided clear instructions, and helped us all see improvement in our game. We highly recommend Prostrikers to anyone looking for a fun and effective way to learn or improve their soccer skills.",
  //     member: "Liam G., Field Hockey Player",
  //   },
  //   {
  //     image: "https://avatar.iran.liara.run/public",
  //     title: "Inclusive and Welcoming",
  //     review:
  //       "We recently hosted a corporate team-building event at Prostrikers Sacramento, and it was a huge success! The staff was incredibly professional and organized, handling everything from equipment rental to scheduling. The coaches led fun and inclusive drills that got everyone involved, regardless of skill level. It was a great way to promote teamwork and camaraderie within our company. We'll definitely be back for future events.",
  //     member: "Alex P., Softball Newbie",
  //   },
  // ];
  return (
    <div className="bg-[#F9FBFF]">
      <Container>
        <div className="lg:py-14 md:py-12 py-10 space-y-10">
          <div className="space-y-4 text-center">
            <h4 className="capitalize text-primary lg:text-2xl text-xl font-semibold leading-7">
              Professional Endorsement
            </h4>
            <h2 className="lg:text-[56px] md:text-[45px] text-3xl font-semibold lg:leading-[67px] md:leading-[50px]">
              Trusted by 50K Professionals
            </h2>
            <p className="text-[#929292] md:text-lg lg:leading-7 md:leading-6 leading-5 md:w-[700px] w-full mx-auto">
              Join an esteemed network of over 50,000 professionals who trust
              ProStrikers for their training needs. Our expert-recommended
              programs and facilities are designed to help you achieve peak
              performance.
            </p>
          </div>
          {/* nice job reviews */}
          <div className="nj-stories"></div>
          {/* <div className="space-y-7">
            <Marquee pauseOnHover={true}>
              {trustedData.map((review, index) => {
                return (
                  <div
                    className="shadow-sm w-96 m-3 bg-white rounded-lg"
                    key={index}
                  >
                    <div className="card-body">
                      <div className="avatar">
                        <div className="w-16 rounded-full">
                          <img loading="lazy" src={review.image} />
                        </div>
                      </div>
                      <h4 className="card-title">{review.title}</h4>
                      <p className="text-[#474747] text-sm">{review.review}</p>
                      <p className="font-medium italic mt-3 text-[#151531] leading-5">
                        {review.member}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Marquee>
            <div className="text-center">
              <button className="btn bg-white border border-solid hover:border-gray-300 hover:bg-white border-gray-200 text-base px-10 rounded-full">
                View More Stories
              </button>
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default TestimonialSection;
