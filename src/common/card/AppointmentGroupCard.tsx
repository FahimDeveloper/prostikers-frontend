/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../../redux/features/auth/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "antd";
import { CiBadgeDollar } from "react-icons/ci";
import { FaUserGraduate } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { collectTimeDuration } from "../../utils/collectTimeDuration";
import moment from "moment";
import { IAppointmentDetail } from "../../types/appointment.types";

const AppointmentGroupCard = ({
  image,
  data,
  activeDate,
}: {
  image: any;
  data: IAppointmentDetail;
  activeDate: Date;
}) => {
  const user = useSelector(selectCurrentUser);
  const location = useLocation();
  const token = useSelector(selectCurrentToken);
  const navigate = useNavigate();
  const onClick = () => {
    if (!user && !token) {
      Swal.fire({
        title: "Login First",
        text: "You need to login",
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
    } else if (!user?.verified) {
      Swal.fire({
        title: "Email Verification",
        text: "Please verify your email address before any processing. We already send you a verification email when you sign up, check your email",
        icon: "info",
        confirmButtonColor: "#0ABAC3",
      });
    } else {
      navigate(`${data._id}`, {
        state: {
          sport: data.sport,
          trainer: data.trainer,
          data: data,
          from: location,
          date: activeDate?.toISOString(),
        },
      });
    }
  };
  return (
    <div className="space-y-3 p-2 border border-solid border-[#F8F8F8] rounded-md shadow-md">
      <div className="relative">
        <img src={image} className="w-full rounded-md" alt="card image" />
        <span className="bg-white px-3 capitalize rounded-full text-base font-medium text-[#333] absolute top-2 left-1">
          {data?.sport}
        </span>
      </div>
      <h3 className="font-semibold text-xl capitalize text-[#07133D]">
        {data?.appointment_name}
      </h3>
      <div className="space-y-3 px-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 min-w-28">
            <FaPeopleGroup className="size-5" />
            <p className="text-base">Capacity :</p>
          </div>
          <p className="text-base font-medium capitalize">{data?.capacity}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 min-w-28">
            <FaPeopleGroup className="size-5" />
            <p className="text-base">Enrolled :</p>
          </div>
          <p className="text-base font-medium capitalize">{data?.enrolled}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 min-w-28">
            <IoTimeOutline className="size-5" />
            <p className="text-base">Time :</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-base font-medium flex gap-2">
              {moment(data.schedules.start_time).format("h:mm a")}
            </p>
            -
            <p className="text-base font-medium flex gap-2">
              {moment(data.schedules.end_time).format("h:mm a")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 min-w-28">
            <IoTimeOutline className="size-5" />
            <p className="text-base">Duration :</p>
          </div>
          <p className="text-base font-medium">
            {collectTimeDuration(
              data.schedules.start_time,
              data.schedules.end_time
            )}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 min-w-28">
            <FaUserGraduate className="size-5" />
            <p className="text-base">Trainer :</p>
          </div>
          <p className="text-base font-medium">
            {data?.trainer.first_name} {data?.trainer.last_name}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 min-w-28">
            <CiBadgeDollar className="size-5" />
            <p className="text-base">Fee :</p>
          </div>
          <p className="text-base font-medium">${data?.price}</p>
        </div>
      </div>
      <Button onClick={onClick} className="primary-btn-2 w-full">
        Book now
      </Button>
    </div>
  );
};

export default AppointmentGroupCard;
