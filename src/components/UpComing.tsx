import Lottie from "lottie-react";
import animation from "../assets/animation/coming-soon.json";

const UpComing = () => {
  return (
    <div className="max-h-[500px] flex items-center justify-center">
      <Lottie animationData={animation} loop={true} />
    </div>
  );
};

export default UpComing;
