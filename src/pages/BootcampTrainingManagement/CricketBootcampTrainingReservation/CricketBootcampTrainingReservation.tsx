/* eslint-disable @typescript-eslint/no-explicit-any */
import BannerSection from "../../../common/BannerSection";
import cricketBanner from "../../../assets/images/programsBanner/cricket-banner.webp";
import Container from "../../../components/Container";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import BootcampReservationForm from "../../../components/ui/form/BootcampReservationForm";
import { useEffect } from "react";

const CricketBootcampTrainingReservation = () => {
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
          <BootcampReservationForm form={form} onFinish={onFinish} />
        </div>
      </Container>
    </>
  );
};

export default CricketBootcampTrainingReservation;
