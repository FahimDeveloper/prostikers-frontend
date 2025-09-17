import { Button } from "antd";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animation from "../../assets/animation/confetti.json";

const RentalFacilityThanks = () => {
  return (
    <div className="relative min-h-svh flex justify-center items-center overflow-hidden">
      <Lottie
        animationData={animation}
        loop={true}
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10 text-center space-y-3 px-5">
        <h2 className="sm:text-4xl text-3xl font-semibold">
          Thanks for booking
        </h2>
        <p className="text-lg">
          You can now enjoy your facility at the booking time in our prostrikers
          zone.
        </p>
        <Link to="/dashboard/my-rental-facilities" className="block">
          <Button type="primary" className="primary-btn-2">
            Go To Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RentalFacilityThanks;
