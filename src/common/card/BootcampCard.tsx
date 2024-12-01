/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import moment from "moment-timezone";
import { CiBadgeDollar, CiCalendar } from "react-icons/ci";
import { FaUserGraduate } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../../redux/features/auth/authSlice";
import Swal from "sweetalert2";
import { IBootcamp } from "../../types/bootcamp.types";

const californiaTimeZone = "America/Los_Angeles";
const BootcampCard = ({ image, data }: { image: any; data: IBootcamp }) => {
  const user = useSelector(selectCurrentUser);
  const location = useLocation();
  const token = useSelector(selectCurrentToken);
  const navigate = useNavigate();
  const onClick = () => {
    if (!user && !token) {
      Swal.fire({
        title: "Login First",
        text: "You need to login for bootcamp registration",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#0ABAC3",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go for login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    } else {
      navigate(`${data._id}`, {
        state: {
          data: data,
          sport: data?.sport,
          from: location,
          trainer: data?.trainer,
        },
      });
    }
  };
  return (
    <div className="p-2 border border-solid border-[#F8F8F8] rounded-md shadow-md flex flex-col justify-between gap-3">
      <div className="space-y-3">
        <div className="relative">
          <img src={image} className="w-full rounded-md" alt="card image" />
          <span className="bg-white px-3 capitalize rounded-full text-base font-medium text-[#333] absolute top-2 left-1">
            {data?.sport}
          </span>
        </div>
        <h3 className="font-semibold text-xl text-[#07133D]">
          {data?.course_name}
        </h3>
        <div className="space-y-4 px-2">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 min-w-28">
                <CiCalendar className="size-5" />
                <p className="text-base">Start Date :</p>
              </div>
              <p className="text-base font-medium">
                {moment(data?.start_date).format("ddd, MMM Do YYYY")}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 min-w-28">
                <CiCalendar className="size-5" />
                <p className="text-base">End Date :</p>
              </div>
              <p className="text-base font-medium">
                {moment(data?.end_date).format("ddd, MMM Do YYYY")}
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
                {moment(data?.start_time)
                  .tz(californiaTimeZone)
                  .format("h:mm a")}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 min-w-28">
                <IoTimeOutline className="size-5" />
                <p className="text-base">End Time :</p>
              </div>
              <p className="text-base font-medium">
                {moment(data?.end_time).tz(californiaTimeZone).format("h:mm a")}
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
              {data?.trainer ? (
                <p className="text-base font-medium">
                  {data?.trainer.first_name} {data?.trainer.last_name}
                </p>
              ) : (
                <p className="text-base font-medium">Trainer Missing</p>
              )}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 min-w-28">
                <CiBadgeDollar className="size-5" />
                <p className="text-base">Fee :</p>
              </div>
              <p className="text-base font-medium">$ {data?.price}</p>
            </div>
          </div>
        </div>
      </div>
      {data?.capacity > data?.enrolled ? (
        <Button onClick={onClick} className="primary-btn-2 w-full">
          Enroll now
        </Button>
      ) : (
        <Button disabled className="primary-btn-2 w-full">
          Fully Booked
        </Button>
      )}
    </div>
  );
};

export default BootcampCard;
