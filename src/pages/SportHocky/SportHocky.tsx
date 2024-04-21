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
import hockyBanner from "../../assets/images/programsBanner/hocky-banner.webp";

const SportHocky = () => {
  const programData = {
    title: "Field Hockey Programs at ProStrikers",
    description:
      "Master the field with ProStrikers' comprehensive Hockey Programs. From personalized one-on-one training sessions that fine-tune your skills, to engaging group training that promotes teamwork and strategy, our hockey offerings are unparalleled. Introduce your child to the sport with our kids hockey training, attend our intensive hockey bootcamps for advanced techniques, or take advantage of private hockey training for dedicated attention from our expert coaches.",
    programs: [
      {
        title: "One on One Training",
        image: training1,
        link: "/programs/one-training/hockey",
      },
      {
        title: "Group Training",
        image: training2,
        link: "/programs/Group-training/hockey",
      },
      {
        title: "Kids Training",
        image: training3,
        link: "/programs/kids-training/hockey",
      },
      {
        title: "Bootcamps",
        image: training4,
        link: "/programs/bootcamp-training/hockey",
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
        "ProStrikers is open for your sporting needs seven days a week. Monday to Friday from 6 AM to 11 PM, and weekends from 8 AM to 10 PM. Please note that holiday hours may vary and will be posted on our website and social media channels.",
    },
    {
      title: "Do I need to be a member to book a training session or facility?",
      description:
        "No, you don’t need to be a member to book a session with us. Our facilities and training sessions are open to everyone. However, members do receive priority booking, discounted rates, and other exclusive benefits. Check out our membership plans to find one that's right for you.",
    },
    {
      title: "How can I book a facility or training session?",
      description:
        "Booking is easy with our online reservation system. Simply choose your sport, select the facility, pick a time, and add a coaching session if desired. You can also call our front desk or book in person. For one-on-one coaching sessions, we recommend booking in advance to ensure coach availability.",
    },
    {
      title: "What should I bring to my first training session?",
      description:
        "Come prepared with the appropriate sportswear for your activity, including proper shoes and any protective gear you might need. If you're unsure, contact us ahead of your session. Remember, our Pro Shop has all the essentials you may need.",
    },
    {
      title: "Are group bookings available for corporate events or parties?",
      description:
        "Yes, ProStrikers is the perfect venue for your next event. We offer group bookings for corporate teams, birthday parties, or any group looking for an active outing. Contact our events coordinator for more information and to tailor the experience to your group's needs.",
    },
    {
      title: "Do you offer programs for children and young athletes?",
      description:
        "Absolutely! ProStrikers prides itself on fostering young talent with programs for children as young as three years old, all the way up to young adults. Our youth programs are designed to build foundational skills and love for the game in a fun, supportive environment.",
    },
    {
      title: "Can I purchase sporting gear at ProStrikers?",
      description:
        "Yes, our Pro Shop stocks a wide selection of gear for all the sports we support. From beginner equipment to professional-grade gear, we have what you need to play and train at your best.",
    },
    {
      title: "What is your cancellation policy for bookings?",
      description:
        "We understand that plans can change. You can cancel or reschedule your booking up to 24 hours in advance without a fee. Cancellations made within 24 hours of the booking time may incur a charge. Members may have different cancellation privileges, detailed in their membership agreement.",
    },
  ];
  return (
    <>
      <BannerSection title="Field Hokey Programs" image={hockyBanner} />
      <ProgramSection data={programData} />
      <CoachesSection data={coachesData} />
      <QuestionSection data={questionData} />
    </>
  );
};

export default SportHocky;
