import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import cricketBanner from "../../../assets/images/programsBanner/cricket-banner.webp";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import Swal from "sweetalert2";
import {
  useBlocker,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  useAddToCartSlotMutation,
  useDeleteBookingSlotMutation,
  useGetBookingSlotsQuery,
  useOneTrainingBookedSlotsQuery,
} from "../../../redux/features/slotBooking/slotBookingApi";
import { useOneAppointmentQuery } from "../../../redux/features/appointment/appointmentApi";
import { IoCalendarOutline } from "react-icons/io5";
import moment from "moment";
import { MdDeleteOutline } from "react-icons/md";
import DateSlider from "../../../components/DateSlider";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useVoucherMutation } from "../../../redux/features/voucher/voucherApi";
import OneTrainingBookingTimeSlots from "../../../components/OneTrainingBookingTimeSlots";
import RouteBlocker from "../../../utils/RouteBlocker";
import TermsCondition from "../../../components/TermsCondition";
import PrivacyPolicy from "../../../components/PrivacyPolicy";
import { useAppSelector } from "../../../hooks/useAppHooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";

const CricketOneTrainingReservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const user = useAppSelector(selectCurrentUser);
  const [voucherApplied, setVoucherApplied] = useState(false);
  const createCartBooking = useAddToCartSlotMutation();
  const [deleteSlot] = useDeleteBookingSlotMutation();
  const [use, { data, isLoading, isError, error, isSuccess }] =
    useVoucherMutation();
  const [activeDate, setActiveDate] = useState(new Date());
  const [selectSlots, setSelectSlots] = useState<any[]>([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = useForm();
  const { state } = useLocation();
  const location = state?.from?.pathname || "/";
  const [block, setBlock] = useState(false);
  const [process, setProcess] = useState(false);
  const blocker = useBlocker(block);
  const [payload, setPayload] = useState({});
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

  const onFinish = () => {
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
    const data = {
      trainer: state.trainer?._id,
      sport: state?.sport,
      user: user?._id,
      email: user?.email,
      appointment: id,
      voucher_applied: voucherApplied,
      bookings: bookings,
    };
    setPayload(data);
    setBlock(false);
    setProcess(true);
  };

  useEffect(() => {
    if (process) {
      navigate("/one-appointment-payment", {
        state: {
          data: payload,
          amount: totalPrice,
          location: location,
        },
      });
    }
  }, [process]);

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

  const onVoucherFinish = (values: any) => {
    (values.voucher_type = "appointment"), use(values);
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
        title="Cricket One on One Training"
        image={cricketBanner}
      />
      <Container>
        <div className="lg:py-16 py-14 space-y-10">
          <div className="space-y-5">
            <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
              Personalized Cricket Coaching
            </h2>
            <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
              Elevate your cricket game with individualized attention from
              seasoned professionals. Our One on One Cricket Training targets
              your specific needs - whether it's mastering the sweep shot or
              perfecting your seam bowling. Each session is a step towards
              becoming the cricketer you aspire to be.
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
                  <p>Slots Price:</p>
                  <p>${price}</p>
                </div>
              </div>
              <div className="space-y-2">
                {selectSlots.map((dateSlots, index) => (
                  <div className="space-y-3" key={index}>
                    {dateSlots.slots.map((slot: string, index: number) => (
                      <div
                        key={index}
                        className="flex justify-between gap-3 flex-wrap items-center bg-white sm:p-3"
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
                  rules={[{ required: true, message: "Enter the vouche code" }]}
                >
                  <Input
                    readOnly={data ? true : false}
                    className="sm:py-[5px] py-1 rounded-full md:w-96 sm:w-72 w-48"
                    placeholder="Enter your voucher code"
                  />
                </Form.Item>
                <Form.Item className="m-0">
                  <Button
                    disabled={data}
                    loading={isLoading}
                    htmlType="submit"
                    type="primary"
                    className="text-white bg-primary lg:text-base text-sm font-bold px-7 rounded-full"
                  >
                    Apply
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}
          {selectSlots.length > 0 && (
            <div className="text-end">
              <Checkbox onChange={() => setAgree(!agree)}>
                <div className="flex gap-2 flex-wrap">
                  <p className="text-sm text-secondary">I agree with</p>
                  <TermsCondition>
                    <p className="text-primary cursor-pointer">Terms </p>
                  </TermsCondition>
                  <p>&</p>
                  <PrivacyPolicy>
                    <p className="text-primary cursor-pointer">policy</p>
                  </PrivacyPolicy>
                </div>
              </Checkbox>
              <Button
                type="primary"
                size="large"
                disabled={!agree}
                className="primary-btn"
                onClick={() => onFinish()}
              >
                Proceed
              </Button>
            </div>
          )}
        </div>
        <RouteBlocker block={block} blocker={blocker} />
      </Container>
    </>
  );
};

export default CricketOneTrainingReservation;
