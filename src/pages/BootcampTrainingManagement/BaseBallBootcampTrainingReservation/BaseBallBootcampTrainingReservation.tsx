/* eslint-disable @typescript-eslint/no-explicit-any */
import BannerSection from "../../../common/BannerSection";
import baseballBanner from "../../../assets/images/programsBanner/baseball-banner.webp";
import Container from "../../../components/Container";
import { useForm } from "antd/es/form/Form";
import BootcampReservationForm from "../../../components/ui/form/BootcampReservationForm";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useCreateBootcampReservationMutation } from "../../../redux/features/bootcamp/bootcampApi";

const BaseBallBootcampTrainingReservation = () => {
  const [create, { data, isError, isSuccess, error }] =
    useCreateBootcampReservationMutation();
  const { state } = useLocation();
  const navigate = useNavigate();
  const location = state?.from.pathname || "/";
  const { id } = useParams();
  const [form] = useForm();
  const onFinish = (values: any) => {
    values.course = id;
    values.sport = state.sport;
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
      navigate(location);
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
      <BannerSection title="Baseball Bootcamp" image={baseballBanner} />
      <Container>
        <div className="lg:py-16 py-14 space-y-10">
          <div className="space-y-5">
            <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
              Baseball Training Bootcamps: Perfect Your Play
            </h2>
            <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
              Step into the batter's box with confidence after attending
              ProStrikers' Baseball Training Bootcamps. Our comprehensive
              program includes high-velocity pitching clinics, strategic hitting
              workshops, and defensive play simulations designed to refine your
              instincts and elevate your game.
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

export default BaseBallBootcampTrainingReservation;
