/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import TrainingGeneralForm from "../../../components/ui/form/TrainingGeneralForm";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import soccerBanner from "../../../assets/images/programsBanner/soccer-banner.webp";
import { Button, Form, Input } from "antd";
import moment from "moment";
import Swal from "sweetalert2";
import { useVoucherMutation } from "../../../redux/features/voucher/voucherApi";

const SoccerKidsTrainingReservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = useForm();
  const { state } = useLocation();
  const location = state?.from?.pathname || "/";
  const [voucherApplied, setVoucherApplied] = useState(false);
  const [use, { data, isLoading, isError, error, isSuccess }] =
    useVoucherMutation();

  const price = state.data.price;
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
    values.trainer = state.trainer._id;
    values.class = id;
    values.class_date = state.date;
    values.voucher_applied = voucherApplied;
    navigate("/class-payment", {
      state: { data: values, location: location, amount: totalPrice },
    });
  };

  useEffect(() => {
    form.setFieldsValue({
      sport: state?.sport,
    });
  }, [state]);

  const onVoucherFinish = (values: any) => {
    (values.voucher_type = "class"), use(values);
  };

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
      <BannerSection title="Soccer Kids Training" image={soccerBanner} />
      <Container>
        <div className="lg:py-16 py-14 space-y-10">
          <div className="space-y-5">
            <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
              Future Goal Scorers: Kids Soccer Training
            </h2>
            <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
              Let your child bend it like the pros with ProStrikers' Kids Soccer
              Training. Our program is crafted to spark a love for soccer while
              teaching the essentials of dribbling, passing, and scoring goals.
              We emphasize fun, fitness, and fair play, ensuring every child
              feels like a part of our soccer family.
            </p>
          </div>
          <div className="flex justify-between">
            <h4 className="text-lg font-medium">
              Training - {state.data.class_name}
            </h4>
            <p>Day - {state.data.schedules.day}</p>
            <p>
              Start Time -{" "}
              {moment(state.data.schedules.start_time).format("h:mm a")}
            </p>
            <p>
              End Time -{" "}
              {moment(state.data.schedules.end_time).format("h:mm a")}
            </p>
            <p className="font-medium">Price - ${state.data.price}</p>
          </div>
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
          {state?.data && (
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
                    className="py-[7px] rounded-full w-96"
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
          <TrainingGeneralForm form={form} onFinish={onFinish} />
        </div>
      </Container>
    </>
  );
};

export default SoccerKidsTrainingReservation;