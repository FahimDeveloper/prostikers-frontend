/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import baseballBanner from "../../../assets/images/programsBanner/baseball-banner.webp";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import Swal from "sweetalert2";
import { useCreateAppointmentGroupReservationMutation } from "../../../redux/features/appointment/appointmentApi";
import TrainingGeneralForm from "../../../components/ui/form/TrainingGeneralForm";

const BaseballGroupTrainingReservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = useForm();
  const { state } = useLocation();
  const lastLocation = state?.from?.pathname || "/";
  const [create, { data, isSuccess, isError, error, isLoading }] =
    useCreateAppointmentGroupReservationMutation();

  const onFinish = (values: any) => {
    values.trainer = state.trainer._id;
    values.appointment = id;
    values.date = state.date;
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
          <TrainingGeneralForm
            form={form}
            loading={isLoading}
            onFinish={onFinish}
          />
        </div>
      </Container>
    </>
  );
};

export default BaseballGroupTrainingReservation;
