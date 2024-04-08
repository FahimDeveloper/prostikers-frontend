import Lottie from "lottie-react";
import animation from "../../assets/animation/coming-soon.json";

const ComingSoon = () => {
  return (
    <div className="h-svh flex items-center justify-center">
      <Lottie animationData={animation} loop={true} />
    </div>
  );
};

export default ComingSoon;
