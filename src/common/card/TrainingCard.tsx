import { Link } from "react-router-dom";

type Tprop = {
  image: string;
  title: string;
  description: Array<string>;
  link: string;
};

const TrainingCard = ({ data }: { data: Tprop }) => {
  return (
    <div className="card border border-solid border-gray-300 p-2 h-full flex flex-col justify-between hover:shadow-md">
      <div className="space-y-4">
        <img
          loading="lazy"
          src={data?.image}
          className="w-full h-60 object-cover rounded-2xl"
        />
        <div className="px-4 space-y-5">
          <h3 className="text-neutral text-2xl font-bold capitalize">
            {data?.title}
          </h3>
          {/* <ul className="ms-6 text-[#777777] space-y-2">
            {data?.description?.map((des, index) => {
              return (
                <li key={index} className="leading-6">
                  {des}
                </li>
              );
            })}
          </ul> */}
        </div>
      </div>
      <Link to={data?.link} className="block">
        <button className="primary-btn-2 w-full">See more</button>
      </Link>
    </div>
  );
};

export default TrainingCard;
