/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../../redux/features/auth/authSlice";
import Swal from "sweetalert2";

const EventCard = ({ event, index }: { event: any; index: number }) => {
  const user = useSelector(selectCurrentUser);
  const location = useLocation();
  const token = useSelector(selectCurrentToken);
  const navigate = useNavigate();
  const onClick = () => {
    if (!user && !token) {
      Swal.fire({
        title: "Login First",
        text: "You need to login for event registration",
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
      navigate(`/program/events/${event.event_type}/${event._id}`, {
        state: { sport: event.sport, from: location, amount: event.price },
      });
    }
  };
  return (
    <div className="grid md:grid-cols-2 xl:gap-20 lg:gap-10 overflow-hidden gap-6 md:max-h-96 xl:p-8 lg:p-7 sm:p-4 p-2 items-center justify-between bg-[#F9FBFF] rounded-2xl">
      <img
        loading="lazy"
        src={event.image}
        alt="event image"
        className="rounded-2xl h-96 w-full object-cover"
      />
      <div
        className={`${
          index % 2 == 0 ? "md:order-first" : "md:order-last"
        } space-y-4`}
      >
        <p className="text-[#595E69] text-base">
          {moment(event.start_date).format("MMMM Do")} -{" "}
          {moment(event.end_date).format("MMMM Do YYYY")}
        </p>
        <div className="lg:space-y-6 space-y-4">
          <h3 className="lg:text-[34px] sm:text-[26px] leading-8 text-2xl font-bold lg:leading-10">
            {event.event_name}
          </h3>
          <p className="text-[#787878] lg:text-lg leading-6">
            {event.description}
          </p>
          {moment(event.registration_end).isBefore(moment().startOf("day")) ||
          event.registration >= event.allowed_registrations ? (
            <Button disabled={true} className="primary-btn md:w-auto w-full">
              Registration closed
            </Button>
          ) : moment(event.registration_start).isAfter(
              moment().startOf("day")
            ) ? (
            <Button disabled={true} className="primary-btn md:w-auto w-full">
              Open {moment(event.registration_start).format("MMMM Do YYYY")}
            </Button>
          ) : (
            <button onClick={onClick} className="primary-btn md:w-auto w-full">
              Register now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
