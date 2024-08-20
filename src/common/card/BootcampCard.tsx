import { Button } from "antd";
import moment from "moment";
import { CiBadgeDollar, CiCalendar } from "react-icons/ci";
import { FaUserGraduate } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
const BootcampCard = ({ image, data }: { image: any; data: any }) => {
  return (
    <div className="space-y-3 p-2 border border-solid border-[#F8F8F8] rounded-md shadow-md">
      <div className="relative">
        <img src={image} className="w-full rounded-md" alt="card image" />
        <span className="bg-white px-3 capitalize rounded-full text-base font-medium text-[#333] absolute top-2 left-1">
          {data?.sport}
        </span>
      </div>
      <h3 className="font-semibold text-xl text-[#07133D]">{data?.title}</h3>
      <div className="space-y-4 px-2">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 min-w-28">
              <CiCalendar className="size-5" />
              <p className="text-base">Start Date :</p>
            </div>
            <p className="text-base font-medium">
              {moment(data?.start_date).format("dddd, MMMM Do YYYY")}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 min-w-28">
              <CiCalendar className="size-5" />
              <p className="text-base">End Date :</p>
            </div>
            <p className="text-base font-medium">
              {moment(data?.end_date).format("dddd, MMMM Do YYYY")}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 min-w-28">
              <IoTimeOutline className="size-5" />
              <p className="text-base">Start Time :</p>
            </div>
            <p className="text-base font-medium">
              {moment(data?.start_time).format("h:mm a")}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 min-w-28">
              <IoTimeOutline className="size-5" />
              <p className="text-base">End Time :</p>
            </div>
            <p className="text-base font-medium">
              {moment(data?.end_time).format("h:mm a")}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 min-w-28">
              <TbUsers className="size-5" />
              <p className="text-base">Capacity :</p>
            </div>
            <p className="text-base font-medium">{data?.capacity}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 min-w-28">
              <TbUsers className="size-5" />
              <p className="text-base">Enrolled :</p>
            </div>
            <p className="text-base font-medium">{data?.enrolled}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 min-w-28">
              <FaUserGraduate className="size-5" />
              <p className="text-base">Trainer :</p>
            </div>
            <p className="text-base font-medium">{data?.trainer}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 min-w-28">
              <CiBadgeDollar className="size-5" />
              <p className="text-base">Fee :</p>
            </div>
            <p className="text-base font-medium">{data?.price}</p>
          </div>
        </div>
      </div>
      <Link to={data?._id} state={{ sport: data?.sport }} className="block">
        <Button className="primary-btn-2 w-full">Enroll now</Button>
      </Link>
    </div>
  );
};

export default BootcampCard;
