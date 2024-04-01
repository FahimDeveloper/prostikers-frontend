import { Link } from "react-router-dom";

type Tprop = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const TrainingCard = ({ data }: { data: Tprop }) => {
  return (
    <div className="w-96 card border border-solid border-gray-300 p-2 hover:shadow-md">
      <img src={data?.image} className="w-full rounded-2xl" />
      <div className="p-5 space-y-5">
        <h3 className="text-neutral text-2xl font-bold leading-7 capitalize">
          {data?.title}
        </h3>
        <ul className="ms-6 text-[#777777] space-y-2">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <Link to={data?.link} className="inline-block">
          <button className="btn btn-primary text-white text-base w-full">
            See more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrainingCard;
