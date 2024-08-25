/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import baseballBanner from "../../../assets/images/programsBanner/baseball-banner.webp";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { useCreateGroupEventReservationMutation } from "../../../redux/features/event/eventApi";
import Swal from "sweetalert2";
import GroupTrainingSteps from "../../../components/ui/steps/GroupTrainingSteps";
import toast from "react-hot-toast";
import DateSlider from "../../../components/DateSlider";
import BookingTimeSlots from "../../../components/BookingTimeSlots";
import { IoCalendarOutline } from "react-icons/io5";
import moment from "moment";
import { MdDeleteOutline } from "react-icons/md";
import {
  useAddToCartSlotMutation,
  useDeleteBookingSlotMutation,
  useDeleteBookingSlotsMutation,
  useGetBookingSlotsQuery,
} from "../../../redux/features/slotBooking/slotBookingApi";
import { useAppointmentQuery } from "../../../redux/features/appointment/appointmentApi";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";

const BaseballGroupTrainingReservation = () => {
  const { id } = useParams();
  const user = useSelector(selectCurrentUser);
  const createCartBooking = useAddToCartSlotMutation();
  const [deleteSlot] = useDeleteBookingSlotMutation();
  const [deleteSlots, { isLoading: deleteLoading }] =
    useDeleteBookingSlotsMutation();
  const { data: appointment } = useAppointmentQuery(id, {
    skip: id ? false : true,
  });

  const [activeDate, setActiveDate] = useState(new Date());
  const reservationCartsQuery = useGetBookingSlotsQuery(
    {
      training: appointment?.results._id,
      date: activeDate.toISOString().split("T")[0],
    },
    { skip: appointment ? false : true }
  );
  const [selectSlots, setSelectSlots] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [form] = useForm();
  const { state } = useLocation();
  const [create, { isLoading: createLoading }] =
    useCreateGroupEventReservationMutation();
  const onSubmit = (values: any) => {
    values.appointment = id;
    const bookings: any = [];
    selectSlots.forEach((dateSlots) =>
      dateSlots.slots.forEach((slot: string) =>
        bookings.push({
          date: dateSlots.date.toISOString().split("T")[0],
          time_slot: slot,
          training: appointment?.results._id,
        })
      )
    );
    values.bookings = bookings;
    console.log(values);
    create(values)
      .unwrap()
      .then(() => {
        deleteSlots({ id: user?._id })
          .unwrap()
          .then(() => {
            Swal.fire({
              title: "Success",
              icon: "success",
              text: `Booking Successfully`,
              showConfirmButton: false,
              timer: 1500,
              iconColor: "#0ABAC3",
            });
            form.resetFields();
            setCurrent(0);
          })
          .catch((error) => {
            Swal.fire({
              title: "Oops!..",
              icon: "error",
              text: `${(error as any)?.data?.message}`,
              confirmButtonColor: "#0ABAC3",
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          title: "Oops!..",
          icon: "error",
          text: `${(error as any)?.data?.message}`,
          confirmButtonColor: "#0ABAC3",
        });
      });
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
        const timeSlot = reservationCartsQuery.data?.results?.find(
          (carts: any) => carts.time_slot === slot
        );
        if (timeSlot) {
          deleteSlot(timeSlot._id)
            .unwrap()
            .then(() => {
              toast.success("Deleted successfully");
              const updatedSlots = selectSlots
                .map((slots: any) => {
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
            .catch((error) => toast.success(`${error.data.message}`));
        }
      }
    });
  };
  useEffect(() => {
    form.setFieldsValue({
      sport: state?.sport,
    });
  }, [state]);
  return (
    <>
      <BannerSection title="Baseball Group Traiing" image={baseballBanner} />
      <Container>
        <div className="lg:py-16 py-14 space-y-10">
          <div className="space-y-5">
            <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
              Team-Oriented Baseball Training
            </h2>
            <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
              Experience the camaraderie of our Group Baseball Training. Perfect
              your pitches, swings, and slides with collective exercises and
              team-building challenges. Our training encourages mutual growth
              and shared passion for every inning.
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
              cartsQuery={reservationCartsQuery}
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
            <GroupTrainingSteps
              current={current}
              setCurrent={setCurrent}
              onSubmit={onSubmit}
              form={form}
              loading={createLoading || deleteLoading}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default BaseballGroupTrainingReservation;
