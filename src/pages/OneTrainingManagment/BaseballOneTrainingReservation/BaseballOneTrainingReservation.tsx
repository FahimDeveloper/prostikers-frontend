/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import baseballBanner from "../../../assets/images/programsBanner/baseball-banner.webp";
import {
  useBlocker,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import Swal from "sweetalert2";
import DateSlider from "../../../components/DateSlider";
import { IoCalendarOutline } from "react-icons/io5";
import moment from "moment";
import { MdDeleteOutline } from "react-icons/md";
import {
  useAddToCartSlotMutation,
  useDeleteBookingSlotMutation,
  useGetBookingSlotsQuery,
  useOneTrainingBookedSlotsQuery,
} from "../../../redux/features/slotBooking/slotBookingApi";
import { useOneAppointmentQuery } from "../../../redux/features/appointment/appointmentApi";
import TrainingGeneralForm from "../../../components/ui/form/TrainingGeneralForm";
import { useVoucherMutation } from "../../../redux/features/voucher/voucherApi";
import { Button, Form, Input, message } from "antd";
import OneTrainingBookingTimeSlots from "../../../components/OneTrainingBookingTimeSlots";
import RouteBlocker from "../../../utils/RouteBlocker";

const BaseballOneTrainingReservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const createCartBooking = useAddToCartSlotMutation();
  const [voucherApplied, setVoucherApplied] = useState(false);
  const [use, { data, isLoading, isError, error, isSuccess }] =
    useVoucherMutation();
  const [deleteSlot] = useDeleteBookingSlotMutation();
  const [activeDate, setActiveDate] = useState(new Date());
  const [selectSlots, setSelectSlots] = useState<any[]>([]);
  const [block, setBlock] = useState(false);
  const [process, setProcess] = useState(false);
  const blocker = useBlocker(block);
  const [formData, setFormData] = useState({});
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = useForm();
  const { state } = useLocation();
  const location = state?.from?.pathname || "/";
  const { data: appointment } = useOneAppointmentQuery(id, {
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

  const price = selectSlots.reduce((total, selectSlots) => {
    return total + selectSlots.slots.length * appointment?.results.price;
  }, 0);

  let totalPrice = 0;

  if (data) {
    const { discount_type, discount_value } = data.results;
    if (discount_type === "amount") {
      totalPrice = price - discount_value;
    } else if (discount_type === "percentage") {
      const decimal = parseFloat(discount_value) / 100;
      totalPrice = price - price * decimal;
    }
  } else {
    totalPrice = price;
  }

  const onFinish = (values: any) => {
    values.trainer = state.trainer?._id;
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
    values.voucher_applied = voucherApplied;
    setFormData(values);
    setProcess(true);
    setBlock(false);
  };

  useEffect(() => {
    if (process) {
      navigate("/one-appointment-payment", {
        state: {
          data: formData,
          amount: totalPrice,
          location: location,
        },
      });
    }
  }, [process]);

  const onVoucherFinish = (values: any) => {
    (values.voucher_type = "appointment"), use(values);
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
            messageApi.open({
              type: "success",
              content: "Success",
            });
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
            if (updatedSlots.length == 0) {
              setBlock(false);
            }
            setSelectSlots(updatedSlots);
          })
          .catch((error) =>
            messageApi.open({
              type: "error",
              content: `${error.data.message}`,
            })
          );
      }
    });
  };

  useEffect(() => {
    form.setFieldsValue({
      sport: state?.sport,
    });
  }, [state]);

  useEffect(() => {
    if (isSuccess) {
      setVoucherApplied(true);
      Swal.fire({
        title: "Success",
        text: `${data?.message}`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (isError) {
      Swal.fire({
        title: "Oops..",
        text: `${(error as any)?.data?.message || "something went wrong"}`,
        icon: "error",
        confirmButtonColor: "#0ABAC3",
      });
    }
  }, [isSuccess, isError]);

  return (
    <>
      {contextHolder}
      <BannerSection
        title="Baseball One on One Training"
        image={baseballBanner}
      />
      <Container>
        <div className="lg:py-16 py-14 space-y-10">
          <div className="space-y-5">
            <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
              Customized Baseball Training
            </h2>
            <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
              Unlock your potential on the diamond with our personalized
              Baseball Training sessions. Work on your pitching, improve your
              batting average, or sharpen your fielding skills with coaches who
              understand the intricacies of the game and how to bring out your
              best.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-lg text-[#07133D] font-medium text-center">
              {activeDate.toLocaleDateString("en-US", { month: "long" })}
            </p>
            <DateSlider activeDate={activeDate} setActiveDate={setActiveDate} />
          </div>
          {appointment?.results && (
            <OneTrainingBookingTimeSlots
              activeDate={activeDate}
              training={appointment?.results}
              slotsCartQuery={slotsCartQuery}
              slotsBookedQuery={slotsBookedQuery}
              addToCart={createCartBooking}
              selectSlots={selectSlots}
              setSelectSlots={setSelectSlots}
              setBlock={setBlock}
            />
          )}
          {selectSlots.length > 0 && (
            <div className="space-y-4">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-secondary">
                  Booking Details
                </h3>
                <div className="flex gap-1">
                  <p>Total Price:</p>
                  <p>${price}</p>
                </div>
              </div>
              <div className="space-y-2">
                {selectSlots.map((dateSlots, index) => (
                  <div className="space-y-2" key={index}>
                    {dateSlots.slots.map((slot: string, index: number) => (
                      <div
                        key={index}
                        className="flex justify-between gap-3 flex-wrap items-center bg-white p-3"
                      >
                        <div className="flex gap-1 items-center">
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
            <div className="space-y-2">
              {data?.results && (
                <div className="flex justify-end gap-5">
                  <p className="text-secondary text-base">Voucher Applied</p>
                  <p className="text-secondary text-base capitalize">
                    {data?.results.discount_type}
                  </p>
                  {data?.results.discount_type === "amount" ? (
                    <p className="text-secondary text-lg">
                      -${data?.results.discount_value}
                    </p>
                  ) : (
                    <p className="text-secondary text-lg">
                      -{data?.results.discount_value}%
                    </p>
                  )}
                </div>
              )}
              <div className="flex justify-end">
                <div className="flex gap-2 items-center">
                  <p className="font-medium">Total Price:</p>
                  <p className="text-lg font-medium">${totalPrice}</p>
                </div>
              </div>
            </div>
          )}
          {selectSlots.length > 0 && (
            <div className="space-y-2">
              <p className="text-base">Apply voucher</p>
              <Form
                onFinish={onVoucherFinish}
                layout="vertical"
                className="flex gap-1"
              >
                <Form.Item
                  name="voucher_code"
                  className="m-0"
                  rules={[{ required: true }]}
                >
                  <Input
                    readOnly={data ? true : false}
                    className="sm:py-[7px] py-1 rounded-full md:w-96 sm:w-72 w-48"
                    placeholder="Enter your voucher code"
                  />
                </Form.Item>
                <Form.Item className="m-0">
                  <Button
                    disabled={data}
                    loading={isLoading}
                    htmlType="submit"
                    className="text-white bg-primary h-full lg:text-lg text-base font-bold px-10 rounded-full"
                  >
                    Apply
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}
          {selectSlots.length > 0 && (
            <TrainingGeneralForm form={form} onFinish={onFinish} />
          )}
        </div>
        <RouteBlocker block={block} blocker={blocker} />
      </Container>
    </>
  );
};

export default BaseballOneTrainingReservation;
