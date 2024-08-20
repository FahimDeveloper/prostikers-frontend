/* eslint-disable @typescript-eslint/no-explicit-any */
import BannerSection from "../../../common/BannerSection";
import hockeyBanner from "../../../assets/images/programsBanner/hocky-banner.webp";
import Container from "../../../components/Container";
import BootcampReservationForm from "../../../components/ui/form/BootcampReservationForm";
import { useLocation, useParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useCreateBootcampReservationMutation } from "../../../redux/features/bootcamp/bootcampReservationApi";

const HockeyBootcampTrainingReservation = () => {
  const [create, { data, isError, isSuccess, error }] =
    useCreateBootcampReservationMutation();
  const { state } = useLocation();
  const { id } = useParams();
  const [form] = useForm();
  const onFinish = (values: any) => {
    values.course = id;
    values.sport = state.sport;
    values.trainer = state.trainer;
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
  }, [data, isSuccess, isError, form, error, state]);
  return (
    <>
      <BannerSection title="Hokey Bootcamp" image={hockeyBanner} />
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
          <BootcampReservationForm
            form={form}
            onFinish={onFinish}
            loading={false}
          />
        </div>
      </Container>
    </>
  );
};

export default HockeyBootcampTrainingReservation;
