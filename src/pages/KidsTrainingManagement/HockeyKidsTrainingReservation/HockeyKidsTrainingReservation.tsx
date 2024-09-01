/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BannerSection from "../../../common/BannerSection";
import TrainingGeneralForm from "../../../components/ui/form/TrainingGeneralForm";
import hockeyBanner from "../../../assets/images/programsBanner/hocky-banner.webp";
import Container from "../../../components/Container";

const HockeyKidsTrainingReservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = useForm();
  const { state } = useLocation();
  const location = state?.from?.pathname || "/";

  const onFinish = (values: any) => {
    values.trainer = state.trainer._id;
    values.class = id;
    values.class_date = state.date;
    navigate("/class-payment", {
      state: { data: values, location: location, amount: state?.data?.price },
    });
  };

  useEffect(() => {
    form.setFieldsValue({
      sport: state?.sport,
    });
  }, [state]);
  return (
    <>
      <BannerSection title="Field Hockey Kids Training" image={hockeyBanner} />
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
          <TrainingGeneralForm form={form} onFinish={onFinish} />
        </div>
      </Container>
    </>
  );
};

export default HockeyKidsTrainingReservation;
