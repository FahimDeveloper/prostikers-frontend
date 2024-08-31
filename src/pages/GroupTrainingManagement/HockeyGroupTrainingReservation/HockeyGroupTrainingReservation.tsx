/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import hockeyBanner from "../../../assets/images/programsBanner/hocky-banner.webp";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import TrainingGeneralForm from "../../../components/ui/form/TrainingGeneralForm";

const HockeyGroupTrainingReservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = useForm();
  const { state } = useLocation();
  const location = state?.from?.pathname || "/";

  const onFinish = (values: any) => {
    values.trainer = state.trainer._id;
    values.appointment = id;
    values.date = state.date;
    navigate("/group-appointment-payment", {
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
          <TrainingGeneralForm form={form} onFinish={onFinish} />
        </div>
      </Container>
    </>
  );
};

export default HockeyGroupTrainingReservation;
