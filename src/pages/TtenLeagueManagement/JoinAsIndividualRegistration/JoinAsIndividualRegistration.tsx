/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "antd/es/form/Form";
import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import banner from "../../../assets/images/programsBanner/tten-league-banner.webp";
import LeagueIndividualForm from "../../../components/ui/form/LeagueIndividualForm";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useCreateIndividualEventReservationMutation } from "../../../redux/features/event/eventReservationApi";

const JoinAsIndividualRegistration = () => {
  const { id } = useParams();
  const [form] = useForm();
  const { state } = useLocation();
  const [create, { data, isLoading, isSuccess, isError, error }] =
    useCreateIndividualEventReservationMutation();
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
  const onFinish = (values: any) => {
    values.event = id;
    values.sport = state.sport;
    create(values);
  };
  return (
    <>
      <BannerSection title="Team - T10 League" image={banner} />
      <Container>
        <div className="lg:py-14 md:py-12 py-10 sm:space-y-8 space-y-5">
          <h2 className="font-semibold lg:text-[56px] sm:text-[45px] text-3xl lg:leading-[67px] sm:leading-[50px]">
            Step Up to the Crease: Individual T10 League Play
          </h2>
          <p className="text-lg text-[#929292]">
            Embark on your solo cricket journey in ProStrikers’ exhilarating T10
            League. Ideal for individual players looking to dive into
            competitive play, hone their skills, and get spotted by teams
            seeking talent. Register as an individual and we’ll place you in a
            team that matches your skill level and competitive spirit.
          </p>
          <LeagueIndividualForm
            form={form}
            onFinish={onFinish}
            loading={isLoading}
          />
        </div>
      </Container>
    </>
  );
};

export default JoinAsIndividualRegistration;
