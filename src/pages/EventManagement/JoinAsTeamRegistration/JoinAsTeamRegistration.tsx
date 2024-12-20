/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "antd/es/form/Form";
import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import LeagueTeamSteps from "../../../components/ui/steps/LeagueTeamSteps";
import banner from "../../../assets/images/programsBanner/tten-league-banner.webp";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import moment from "moment";
import Swal from "sweetalert2";
import { useVoucherMutation } from "../../../redux/features/voucher/voucherApi";

const JoinAsTeamRegistration = () => {
  const [current, setCurrent] = useState(0);
  const { id } = useParams();
  const [form] = useForm();
  const { state } = useLocation();
  const location = state.from.pathname || "/";
  const navigate = useNavigate();
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

  useEffect(() => {
    form.setFieldsValue({
      sport: state?.sport,
    });
  }, [form, state]);

  const onSubmit = (values: any) => {
    values.event = id;
    values.voucher_applied = voucherApplied;
    navigate("/event-group-payment", {
      state: { data: values, location: location, amount: totalPrice },
    });
  };

  const onVoucherFinish = (values: any) => {
    (values.voucher_type = "event"), use(values);
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
      <BannerSection title="Team - Event" image={banner} />
      <Container>
        <div className="lg:py-16 py-14 space-y-10">
          <div className="space-y-5">
            <h2 className="font-semibold lg:text-[56px] sm:text-[45px] text-3xl lg:leading-[67px] sm:leading-[50px]">
              Team Glory in the T10 League
            </h2>
            <p className="text-lg text-[#929292]">
              Gather your squad and enter the arena of ProStrikers’ T10 League
              as a team. Show off your coordinated team play, strategy, and
              sportsmanship. Our T10 League is the perfect platform for teams to
              challenge themselves against the best, refine their game, and vie
              for the championship title.
            </p>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-3">
            <h4 className="text-lg font-medium">
              Event - {state.data.event_name}
            </h4>
            <p>Sport - {state.data.sport}</p>
            <p>
              Start Date - {moment(state.data.start_date).format("MMMM Do")}
            </p>
            <p>End Date - {moment(state.data.end_date).format("MMMM Do")}</p>
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
          <LeagueTeamSteps
            form={form}
            onSubmit={onSubmit}
            current={current}
            setCurrent={setCurrent}
          />
        </div>
      </Container>
    </>
  );
};

export default JoinAsTeamRegistration;
