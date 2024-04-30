import BannerSection from "../../common/BannerSection";
import CoachesSection from "../../common/CoachesSection";
import ProgramSection from "../../common/ProgramSection";
import QuestionSection from "../../common/QuestionSection";
import training1 from "../../assets/images/training/one-training.webp";
import training2 from "../../assets/images/training/group-training.webp";
import training3 from "../../assets/images/training/kids-training.webp";
import training4 from "../../assets/images/training/bootcamp-training.webp";
import coach1 from "../../assets/images/coaches/leon-lee.webp";
import coach2 from "../../assets/images/coaches/mark-fields.webp";
import coach3 from "../../assets/images/coaches/shehan.webp";
import coach4 from "../../assets/images/coaches/eranga.webp";
import coach5 from "../../assets/images/coaches/gayan.webp";
import coach6 from "../../assets/images/coaches/mario.webp";
import coach7 from "../../assets/images/coaches/Kavindu.webp";
import coach8 from "../../assets/images/coaches/pasindu.webp";
import coach9 from "../../assets/images/coaches/zia-shahzad-min.webp";
import softballBanner from "../../assets/images/programsBanner/softball-banner.webp";

const SportSoftball = () => {
  const programData = {
    title: "Softball Programs at ProStrikers",
    description:
      "Hit a home run with our dynamic Softball Programs. Perfect for players of all levels seeking to improve their game, our offerings range from personalized one-on-one coaching to interactive group training sessions. Our kids' softball training nurtures young talent, while our softball bootcamps challenge even the most experienced players. Private training sessions are also available for those seeking an exclusive training environment.",
    programs: [
      {
        title: "One on One Training",
        image: training1,
        link: "/programs/one-training/softball",
      },
      {
        title: "Group Training",
        image: training2,
        link: "/programs/Group-training/softball",
      },
      {
        title: "Kids Training",
        image: training3,
        link: "/programs/kids-training/softball",
      },
      {
        title: "Bootcamps",
        image: training4,
        link: "/programs/bootcamp-training/softball",
      },
    ],
  };
  const coachesData = {
    tag: "Baseball Coaching Panel",
    title: "Coaches to Take You to the Goal",
    description:
      "Our baseball coaches are the strategic masterminds and technical experts dedicated to perfecting your pitch and refining your swing. They bring a wealth of experience from the major leagues down to developmental play.",
    coaches: [
      {
        name: "Leon Lee",
        designation: "Baseball Consultant",
        image: coach1,
      },
      {
        name: "Mark Fields",
        designation: "Softball and baseball coach",
        image: coach2,
      },
      {
        name: "Shehan Jayasooriya",
        designation: "Batting Consultant",
        image: coach3,
      },
      {
        name: "Eranga Mendis",
        designation: "Spin Bowling Consultant",
        image: coach4,
      },
      {
        name: "Gayan Fernando",
        designation: "Fast Bowling Consultant",
        image: coach5,
      },
      {
        name: "Mario Rampersaud",
        designation: "Wicket Keeping Consultant",
        image: coach6,
      },
      {
        name: "Kavindu Dhanapala",
        designation: "Head Coach",
        image: coach7,
      },
      {
        name: "Pasindu Wanigasooriya",
        designation: "Hockey Coach",
        image: coach8,
      },
      {
        name: "Zia Shahzad",
        designation: "Elite Coach / US major league player",
        image: coach9,
      },
    ],
  };
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
      <BannerSection title="Softball Programs" image={softballBanner} />
      <ProgramSection data={programData} />
      <CoachesSection data={coachesData} />
      <QuestionSection data={questionData} />
    </>
  );
};

export default SportSoftball;
