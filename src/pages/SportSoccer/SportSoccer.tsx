import training1 from "../../assets/images/training/one-training.webp";
import training2 from "../../assets/images/training/group-training.webp";
import training3 from "../../assets/images/training/kids-training.webp";
import training4 from "../../assets/images/training/bootcamp-training.webp";
// import coach7 from "../../assets/images/coaches/Kavindu.webp";
// import coach9 from "../../assets/images/coaches/zia-shahzad-min.webp";
import soccerBanner from "../../assets/images/programsBanner/soccer-banner.webp";
import BannerSection from "../../common/BannerSection";
import ProgramSection from "../../common/ProgramSection";
import QuestionSection from "../../common/QuestionSection";
const SportSoccer = () => {
  const programData = {
    title: "Soccer Programs at ProStrikers",
    description:
      "Score the winning goal with ProStrikers' Soccer Programs. Our training caters to all enthusiasts with one-on-one coaching for targeted skill improvement, group training for match-like scenarios, and specialized kids programs to kickstart a lifelong love for soccer. Elevate your game with our soccer bootcamps, or choose private soccer training for a custom approach to your development on the field.",
    programs: [
      {
        title: "One on One Training",
        image: training1,
        link: "/programs/one-training/soccer",
      },
      {
        title: "Group Training",
        image: training2,
        link: "/programs/Group-training/soccer",
      },
      {
        title: "Kids Training",
        image: training3,
        link: "/programs/kids-training/soccer",
      },
      {
        title: "Bootcamps",
        image: training4,
        link: "/programs/bootcamp-training/soccer",
      },
    ],
  };
  // const coachesData = {
  //   tag: "Soccer Coaching Panel",
  //   title: "Coaches to Take You to the Goal",
  //   description:
  //     "Our soccer coaches are the strategic masterminds and technical experts dedicated to perfecting your pitch and refining your swing. They bring a wealth of experience from the major leagues down to developmental play.",
  //   coaches: [
  //     {
  //       name: "Kavindu Dhanapala",
  //       designation: "Head Coach",
  //       image: coach7,
  //     },
  //     {
  //       name: "Zia Shahzad",
  //       designation: "Elite Coach / US major league player",
  //       image: coach9,
  //     },
  //   ],
  // };
  const questionData = [
    {
      title: "What are the hours of operation for ProStrikers?",
      description:
        "ProStrikers is open for your sporting needs seven days a week. Monday to Friday from 11 AM to 9 PM, Saturdays from 9 AM to 9 PM and Sundays 9 AM to 7 PM. Please note that holiday hours may vary and will be posted on our website and social media channels.",
    },
    {
      title: "Do I need to be a member to book a training session or facility?",
      description:
        "No, you don’t need to be a member to book a session with us. Our facilities and training sessions are open to everyone. However, members do receive priority booking, discounted rates, and other exclusive benefits. Check out our membership plans to find one that's right for you.",
    },
    {
      title: "How can I book a facility or training session?",
      description:
        "Booking is easy with our online reservation system. Simply choose your sport, select the facility, pick a time, and add a coaching session if desired. To secure your spot, please contact our front desk at least one hour in advance of your booking time for confirmation. For one-on-one coaching sessions, we recommend booking in advance to ensure coach availability.",
    },
    {
      title: "Can I book a training with my personal coach?",
      description:
        "Absolutely, you can book a training session with your personal coach.",
    },
    {
      title:
        "Can I reserve one on one or group training with Prostrikers coaches?",
      description:
        "Absolutely! You don’t necessarily need a personal coach. Based on availability, we can set up one-on-one or group training sessions with our Prostrikers coaches. We’re here to provide the support you need for your training.",
    },
    {
      title: "What should I bring to my first training session?",
      description:
        "Sure! Remember to wear the right sportswear and shoes for your activity. If you’re unsure or need gear, contact us, or visit our Pro Shop. You can also rent gear from us, but please check availability first. We’re here to help you have a great session!",
    },
    {
      title: "Do you allow corporate events or parties at your location?",
      description:
        "Absolutely! We’re excited to help you. For a more personalized experience, please feel free to connect with us directly. To ensure a seamless process, we kindly request a notice of at least 24 hours before events or parties. Reach out to our dedicated staff at your earliest convenience to confirm availability and finalize your reservation. We’re eager to make your experience memorable! Contact us - +19168905834",
    },
    {
      title: "What is your cancellation policy for bookings?",
      description: `We understand that plans can change. You can cancel or reschedule your booking up to 24 hours in advance without a fee. Cancellations made within 24 hours of the booking time may incur a charge. **Click here**`,
    },
    {
      title: "Do you offer programs for children and young athletes?",
      description:
        "Absolutely! At ProStrikers, we’re passionate about nurturing young talent. We offer sports programs for ages two and up, in Cricket, Baseball, Softball, Soccer, and Hockey. You can choose one sport or multiple at a discount. Join us and let’s foster a love for the game together.",
    },
    {
      title: "Can I purchase sporting gear at ProStrikers?",
      description:
        "Yes, our Pro Shop stocks a wide selection of gear for all the sports we support. From beginner equipment to professional-grade gear, we have what you need to play and train at your best.",
    },
  ];
  return (
    <>
      <BannerSection title="Soccer Programs" image={soccerBanner} />
      <ProgramSection data={programData} />
      {/* <CoachesSection data={coachesData} /> */}
      <QuestionSection data={questionData} />
    </>
  );
};

export default SportSoccer;
