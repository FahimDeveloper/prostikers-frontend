import Lottie from "lottie-react";
import animation from "../../assets/animation/404.json";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Error = () => {
  return (
    <div className="h-svh flex flex-col items-center justify-center">
      <Lottie
        animationData={animation}
        loop={true}
        className="h-[calc(100vh-80px)]"
      />
      <Link to="/">
        <Button type="primary" size="large" className="btn-primary">
          Go Back
        </Button>
      </Link>
    </div>
  );
};

export default Error;
