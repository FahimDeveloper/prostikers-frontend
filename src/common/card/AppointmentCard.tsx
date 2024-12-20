/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../../redux/features/auth/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { IAppointment } from "../../types/appointment.types";
import { Button } from "antd";
import { CiBadgeDollar } from "react-icons/ci";
import { FaUserGraduate } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

const AppointmentCard = ({
  image,
  data,
}: {
  image: any;
  data: IAppointment;
}) => {
  const user = useSelector(selectCurrentUser);
  const location = useLocation();
  const token = useSelector(selectCurrentToken);
  const navigate = useNavigate();
  const onClick = () => {
    if (!user && !token) {
      Swal.fire({
        title: "Welcome Back!",
        text: "To proceed, Please log in to your account.",
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
          sport: data.sport,
          trainer: data.trainer,
          data: data,
          from: location,
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
          <div className="flex items-center gap-2 sm:min-w-28 min-w-24">
            <IoTimeOutline className="size-5" />
            <p className="text-base">Duration :</p>
          </div>
          <p className="text-base font-medium">{data?.duration} minutes</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 sm:min-w-28 min-w-24">
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
          <div className="flex items-center gap-2 sm:min-w-28 min-w-24">
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

export default AppointmentCard;
