import MembershipCardSection from "../../common/MembershipCardSection";
import QuestionSection from "../../common/QuestionSection";
import EventsSection from "./components/EventsSection";
import FacilitiesSection from "./components/FacilitiesSection";
import FeaturedSection from "./components/FeaturedSection";
import JourneySection from "./components/JourneySection";
import TopSliderSection from "./components/TopSliderSection";
import TestimonialSection from "./components/TestimonialSection";

const Home = () => {
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
      <TopSliderSection />
      <FeaturedSection />
      <JourneySection />
      <FacilitiesSection />
      <MembershipCardSection />
      <EventsSection />
      <TestimonialSection />
      <QuestionSection data={questionData} />
    </>
  );
};

export default Home;
