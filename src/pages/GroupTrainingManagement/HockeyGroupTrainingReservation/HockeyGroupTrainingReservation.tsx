/* eslint-disable @typescript-eslint/no-explicit-any */
import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import hockeyBanner from "../../../assets/images/programsBanner/hocky-banner.webp";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { useCreateGroupEventReservationMutation } from "../../../redux/features/event/eventApi";
import Swal from "sweetalert2";
import GroupTrainingSteps from "../../../components/ui/steps/GroupTrainingSteps";

const HockeyGroupTrainingReservation = () => {
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
      <BannerSection title="Feild Hockey Group Traiing" image={hockeyBanner} />
      <Container>
        <div className="lg:py-16 py-14 space-y-10">
          <div className="space-y-5">
            <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
              Engaging Group Hockey Training
            </h2>
            <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
              Get ready for competitive play with our Group Hockey Training.
              Focused on strategic team plays and skill enhancement, our
              sessions help players make swift decisions and coordinate
              effectively on the field.
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

export default HockeyGroupTrainingReservation;
