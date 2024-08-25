/* eslint-disable @typescript-eslint/no-explicit-any */
import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import cricketBanner from "../../../assets/images/programsBanner/cricket-banner.webp";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { useCreateGroupEventReservationMutation } from "../../../redux/features/event/eventApi";
import Swal from "sweetalert2";
import { useLocation, useParams } from "react-router-dom";
import GroupTrainingSteps from "../../../components/ui/steps/GroupTrainingSteps";

const CricketGroupTrainingReservation = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState(0);
  const [form] = useForm();
  const { state } = useLocation();
  const [create, { data, isLoading, isSuccess, isError, error }] =
    useCreateGroupEventReservationMutation();
  const onSubmit = (values: any) => {
    values.event = id;
    create(values);
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
      setCurrent(0);
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
  }, [data, isSuccess, isError, error, state]);
  return (
    <>
      <BannerSection title="Cricket Group Traiing" image={cricketBanner} />
      <Container>
        <div className="lg:py-16 py-14 space-y-10">
          <div className="space-y-5">
            <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
              Dynamic Group Cricket Training Sessions
            </h2>
            <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
              Experience the camaraderie and competition with ProStrikers' Group
              Cricket Training. Designed to mimic real-match scenarios, our
              group sessions enhance team dynamics, communication, and strategic
              play. Perfect for players looking to excel in collaborative
              environments while pushing each other towards collective
              excellence.
            </p>
          </div>
          <GroupTrainingSteps
            current={current}
            setCurrent={setCurrent}
            onSubmit={onSubmit}
            form={form}
            loading={isLoading}
          />
        </div>
      </Container>
    </>
  );
};

export default CricketGroupTrainingReservation;
