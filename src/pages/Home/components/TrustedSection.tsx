import Marquee from "react-fast-marquee";
import Container from "../../../components/Container";

const TrustedSection = () => {
  const trustedData = [
    {
      image:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Samantha K.",
      review:
        "From the moment I stepped onto the courts, I felt welcomed by both the staff and the regular players.",
      member: "Casey D., Baseball Prospect",
    },
    {
      image:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Samantha K.",
      review:
        "From the moment I stepped onto the courts, I felt welcomed by both the staff and the regular players.",
      member: "Casey D., Baseball Prospect",
    },
    {
      image:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Samantha K.",
      review:
        "From the moment I stepped onto the courts, I felt welcomed by both the staff and the regular players.",
      member: "Casey D., Baseball Prospect",
    },
    {
      image:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Samantha K.",
      review:
        "From the moment I stepped onto the courts, I felt welcomed by both the staff and the regular players.",
      member: "Casey D., Baseball Prospect",
    },
    {
      image:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      name: "Samantha K.",
      review:
        "From the moment I stepped onto the courts, I felt welcomed by both the staff and the regular players.",
      member: "Casey D., Baseball Prospect",
    },
  ];
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
          <div className="space-y-7">
            <Marquee>
              {trustedData.map((review, index) => {
                return (
                  <div
                    className="shadow-sm w-96 m-3 bg-white rounded-lg"
                    key={index}
                  >
                    <div className="card-body">
                      <div className="avatar">
                        <div className="w-16 rounded-full">
                          <img src={review.image} />
                        </div>
                      </div>
                      <h4 className="card-title">{review.name}</h4>
                      <p className="card-text text-[#474747]">
                        {review.review}
                      </p>
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrustedSection;
