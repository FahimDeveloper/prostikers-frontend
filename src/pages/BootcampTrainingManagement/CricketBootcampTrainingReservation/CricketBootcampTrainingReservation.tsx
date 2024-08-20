/* eslint-disable @typescript-eslint/no-explicit-any */
import BannerSection from "../../../common/BannerSection";
import cricketBanner from "../../../assets/images/programsBanner/cricket-banner.webp";
import Container from "../../../components/Container";
import { useLocation, useParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import BootcampReservationForm from "../../../components/ui/form/BootcampReservationForm";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useCreateBootcampReservationMutation } from "../../../redux/features/bootcamp/bootcampReservationApi";

const CricketBootcampTrainingReservation = () => {
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
      <BannerSection title="Cricket Bootcamp" image={cricketBanner} />
      <Container>
        <div className="lg:py-16 py-14 space-y-10">
          <div className="space-y-5">
            <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
              Cricket Training Bootcamps: Fast-Track Your Mastery
            </h2>
            <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
              Experience cricket like never before in our immersive Cricket
              Training Bootcamps. Engage in intense sessions focusing on all
              facets of the game, from technical batting drills to advanced
              bowling techniques, and fielding strategies that create agile,
              tactically aware players ready for any challenge.
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

export default CricketBootcampTrainingReservation;
