import { useEffect, useState } from "react";
import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import soccerBanner from "../../../assets/images/programsBanner/soccer-banner.webp";
import { Button, Checkbox, Descriptions, Form, Input } from "antd";
import moment from "moment";
import Swal from "sweetalert2";
import { useVoucherMutation } from "../../../redux/features/voucher/voucherApi";
import TermsCondition from "../../../components/TermsCondition";
import PrivacyPolicy from "../../../components/PrivacyPolicy";
import { useAppSelector } from "../../../hooks/useAppHooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useClientQuery } from "../../../redux/features/client/clientApi";

const SoccerKidsTrainingReservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useAppSelector(selectCurrentUser);
  const [sessionCredit, setSessionCredit] = useState(0);
  const { data: userData } = useClientQuery(user?._id);
  const [agree, setAgree] = useState(false);
  const { state } = useLocation();
  const location = state?.from?.pathname || "/";
  const [voucherApplied, setVoucherApplied] = useState(false);
  const [use, { data, isLoading, isError, error, isSuccess }] =
    useVoucherMutation();

  useEffect(() => {
    if (!state?.data) {
      navigate("/programs/kids-training/soccer");
    }
  }, [state]);

  const price = state?.data.price || 0;
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

  useEffect(() => {
    const hasMembership = userData?.results?.membership;
    const packageName = userData?.results?.package_name;

    if (hasMembership && packageName === "youth training membership") {
      const sessionCreditValue =
        userData?.results?.credit_balance?.session_credit;
      setSessionCredit(Number(sessionCreditValue));
    }
  }, [userData]);

  const onFinish = () => {
    const payload = {
      user: user?._id,
      email: user?.email,
      trainer: state?.trainer?._id,
      class: id,
      class_date: state?.date,
      voucher_applied: voucherApplied,
      sport: state?.sport,
    };

    navigate("/class-payment", {
      state: {
        data: payload,
        location: location,
        amount: sessionCredit == 0 ? totalPrice : 0,
      },
    });
  };

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
          <div className="space-y-5">
            <div className="space-y-5">
              <h2 className="font-medium sm:text-2xl text-xl">
                Training Information
              </h2>
              <Descriptions
                bordered
                column={{
                  xxl: 2,
                  xl: 2,
                  lg: 2,
                  md: 2,
                  sm: 1,
                  xs: 1,
                }}
                styles={{
                  label: {
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    width: "130px",
                    fontWeight: "bold",
                    textAlign: "center",
                  },
                }}
              >
                <Descriptions.Item
                  label="Appointment"
                  className="!px-3 !py-5 sm:text-start text-center"
                >
                  {state?.data.appointment_name}
                </Descriptions.Item>
                <Descriptions.Item
                  label="Trainer"
                  className="!px-3 !py-5 sm:text-start text-center"
                >
                  {state?.trainer?.first_name} {state?.trainer?.last_name}
                </Descriptions.Item>
                <Descriptions.Item
                  label="Training Date"
                  className="!px-3 !py-5 sm:text-start text-center"
                >
                  {moment(state?.date).format("dddd MMMM Do YYYY")}
                </Descriptions.Item>
                <Descriptions.Item
                  label="Sport"
                  className="!px-3 !py-5 sm:text-start text-center"
                >
                  {state?.data.sport}
                </Descriptions.Item>
                <Descriptions.Item
                  label="Start Time"
                  className="!px-3 !py-5 sm:text-start text-center"
                >
                  {moment(state?.data.schedules.start_time).format("h:mm a")}
                </Descriptions.Item>
                <Descriptions.Item
                  label="End Time"
                  className="!px-3 !py-5 sm:text-start text-center"
                >
                  {moment(state?.data.schedules.end_time).format("h:mm a")}
                </Descriptions.Item>
              </Descriptions>
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
                {sessionCredit == 0 ? (
                  <div className="flex gap-2 items-center">
                    <p className="font-medium">Total Price:</p>
                    <p className="text-lg font-medium">${totalPrice}</p>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <p className="font-medium">Session Credit will charge:</p>
                    <p className="text-lg font-medium">1</p>
                  </div>
                )}
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
                      className="sm:py-[5px] py-1 rounded-full md:w-96 sm:w-72 w-48"
                      placeholder="Enter your voucher code"
                    />
                  </Form.Item>
                  <Form.Item className="m-0">
                    <Button
                      disabled={sessionCredit !== 0 || data}
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
          </div>
        </div>
      </Container>
    </>
  );
};

export default SoccerKidsTrainingReservation;
