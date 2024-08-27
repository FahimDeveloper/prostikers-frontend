/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import hockeyBanner from "../../../assets/images/programsBanner/hocky-banner.webp";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import Swal from "sweetalert2";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import {
  useAddToCartSlotMutation,
  useDeleteBookingSlotMutation,
  useGetBookingSlotsQuery,
  useOneTrainingBookedSlotsQuery,
} from "../../../redux/features/slotBooking/slotBookingApi";
import {
  useAppointmentQuery,
  useCreateAppointmentOneOnOneReservationMutation,
} from "../../../redux/features/appointment/appointmentApi";
import toast from "react-hot-toast";
import DateSlider from "../../../components/DateSlider";
import BookingTimeSlots from "../../../components/BookingTimeSlots";
import { IoCalendarOutline } from "react-icons/io5";
import moment from "moment";
import { MdDeleteOutline } from "react-icons/md";
import TrainingGeneralForm from "../../../components/ui/form/TrainingGeneralForm";

const HockeyOneTrainingReservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const createCartBooking = useAddToCartSlotMutation();
  const [deleteSlot] = useDeleteBookingSlotMutation();
  const [activeDate, setActiveDate] = useState(new Date());
  const [selectSlots, setSelectSlots] = useState<any[]>([]);
  const [form] = useForm();
  const { state } = useLocation();
  const lastLocation = state?.from?.pathname || "/";
  const [
    create,
    { data, isSuccess, isError, error, isLoading: createLoading },
  ] = useCreateAppointmentOneOnOneReservationMutation();
  const { data: appointment } = useAppointmentQuery(id, {
    skip: id ? false : true,
  });
  const slotsCartQuery = useGetBookingSlotsQuery(
    {
      training: id,
      date: activeDate.toISOString().split("T")[0],
    },
    { skip: appointment ? false : true }
  );
  const slotsBookedQuery = useOneTrainingBookedSlotsQuery(
    {
      training: id!,
      date: activeDate.toISOString().split("T")[0],
    },
    { skip: appointment ? false : true }
  );

  const onFinish = (values: any) => {
    values.trainer = state.trainer._id;
    values.appointment = id;
    const bookings: any = [];
    selectSlots?.forEach((dateSlots) =>
      dateSlots.slots.forEach((slot: string) =>
        bookings.push({
          date: dateSlots.date.toISOString().split("T")[0],
          time_slot: slot,
          training: appointment?.results._id,
        })
      )
    );
    values.bookings = bookings;
    create({ id: user?._id, payload: values });
  };

  const onDelete = (date: any, slot: any) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#0ABAC3",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        const slotId = `${id}${date.toISOString().split("T")[0]}${slot
          .split(" ")
          .join("")}`;
        deleteSlot(slotId)
          .unwrap()
          .then(() => {
            toast.success("Deleted successfully");
            const updatedSlots = selectSlots
              ?.map((slots: any) => {
                if (slots.date === date && slots.slots.length > 1) {
                  return {
                    ...slots,
                    slots: slots.slots.filter(
                      (oldSlot: string) => oldSlot !== slot
                    ),
                  };
                } else if (slots.date === date && slots.slots.length == 1) {
                  return null;
                }
                return slots;
              })
              .filter(Boolean);
            setSelectSlots(updatedSlots);
          })
          .catch((error) => toast.error(`${error.data.message}`));
      }
    });
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        icon: "success",
        text: `${data?.message}`,
        showConfirmButton: false,
        timer: 1500,
        iconColor: "#0ABAC3",
      });
      form.resetFields();
      setSelectSlots([]);
      navigate(lastLocation);
    }
    if (isError) {
      Swal.fire({
        title: "Oops!..",
        icon: "error",
        text: `${(error as any)?.data?.message}`,
        confirmButtonColor: "#0ABAC3",
      });
    }
    form.setFieldsValue({
      sport: state?.sport,
    });
  }, [state, isSuccess, isError, error]);
  return (
    <>
      <BannerSection
        title="Field Hockey One on One Training"
        image={hockeyBanner}
      />
      <Container>
        <div className="lg:py-16 py-14 space-y-10">
          <div className="space-y-5">
            <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
              Specialized Hockey Skill Development
            </h2>
            <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
              Master the art of field hockey with our specialized one-on-one
              coaching. ProStrikers offers personalized guidance to refine your
              stick work, tactical play, and game sense, ensuring you dominate
              the field with skill and strategy.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-lg text-[#07133D] font-medium text-center">
              {activeDate.toLocaleDateString("en-US", { month: "long" })}
            </p>
            <DateSlider activeDate={activeDate} setActiveDate={setActiveDate} />
          </div>
          {appointment?.results && (
            <BookingTimeSlots
              activeDate={activeDate}
              training={appointment?.results}
              slotsCartQuery={slotsCartQuery}
              slotsBookedQuery={slotsBookedQuery}
              addToCart={createCartBooking}
              selectSlots={selectSlots}
              setSelectSlots={setSelectSlots}
            />
          )}
          {selectSlots.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary">
                Booking Details
              </h3>
              <div className="space-y-2">
                {selectSlots.map((dateSlots, index) => (
                  <div className="space-y-2" key={index}>
                    {dateSlots.slots.map((slot: string, index: number) => (
                      <div
                        key={index}
                        className="flex justify-between items-center bg-white p-3"
                      >
                        <div className="flex gap-5 items-center">
                          <IoCalendarOutline className="size-4" />
                          <span className="text-sm font-medium text-secondary">
                            {moment(dateSlots.date).format("D-MMM-YYYY")}
                          </span>
                        </div>
                        <div className="text-sm font-medium text-secondary">
                          {slot}
                        </div>
                        <div className="text-sm font-medium text-secondary">
                          ${appointment?.results?.price}
                        </div>
                        <MdDeleteOutline
                          className="size-5 cursor-pointer"
                          onClick={() => onDelete(dateSlots.date, slot)}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectSlots.length > 0 && (
            <TrainingGeneralForm
              form={form}
              onFinish={onFinish}
              loading={createLoading}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default HockeyOneTrainingReservation;
