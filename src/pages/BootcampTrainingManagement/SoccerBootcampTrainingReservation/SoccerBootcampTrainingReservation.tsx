/* eslint-disable @typescript-eslint/no-explicit-any */
import BannerSection from "../../../common/BannerSection";
import soccerBanner from "../../../assets/images/programsBanner/soccer-banner.webp";
import Container from "../../../components/Container";
import BootcampReservationForm from "../../../components/ui/form/BootcampReservationForm";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";

const SoccerBootcampTrainingReservation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const location = state?.from.pathname || "/";
  const { id } = useParams();
  const [form] = useForm();
  const onFinish = (values: any) => {
    values.course = id;
    values.sport = state.sport;
    values.trainer = state.trainer;
    navigate("/bootcamp-payment", {
      state: { amount: state?.amount, data: values, location: location },
    });
  };
  useEffect(() => {
    form.setFieldsValue({
      sport: state?.sport,
    });
  }, [form, state]);
  return (
    <>
      <BannerSection title="Soccer Bootcamp" image={soccerBanner} />
      <Container>
        <div className="lg:py-16 py-14 space-y-10">
          <div className="space-y-5">
            <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
              Soccer Training Bootcamps: Elevate Your Game
            </h2>
            <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
              Transform your soccer skills at ProStrikers’ Soccer Training
              Bootcamps. Concentrated sessions will enhance your footwork,
              control, and strategy, all while fostering the physical and mental
              toughness needed to succeed on the pitch. Join and become a part
              of soccer excellence.
            </p>
          </div>
          <BootcampReservationForm form={form} onFinish={onFinish} />
        </div>
      </Container>
    </>
  );
};

export default SoccerBootcampTrainingReservation;
