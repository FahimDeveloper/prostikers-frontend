import Lottie from "lottie-react";
import animation from "../../assets/animation/404.json";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-svh flex flex-col items-center justify-center">
      <Lottie animationData={animation} loop={true} />
      <Link to="/" className="btn primary-btn">
        Go Back
      </Link>
    </div>
  );
};

export default Error;
