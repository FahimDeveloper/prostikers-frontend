import { Link } from "react-router-dom";

type Tprop = {
  image: string;
  title: string;
  link: string;
};

const ProgramsCard = ({ data }: { data: Tprop }) => {
  return (
    <div
      className="rounded-md flex w-auto items-end pb-5 h-72 px-3"
      style={{
        backgroundImage: `url(${data?.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Link to={data?.link} className="inline-block w-full">
        <button className="btn w-full btn-info uppercase">{data?.title}</button>
      </Link>
    </div>
  );
};

export default ProgramsCard;
