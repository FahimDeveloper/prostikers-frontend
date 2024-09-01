/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import TrainingGeneralForm from "../../../components/ui/form/TrainingGeneralForm";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import soccerBanner from "../../../assets/images/programsBanner/soccer-banner.webp";

const SoccerKidsTrainingReservation = () => {
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
      <BannerSection title="Soccer Kids Training" image={soccerBanner} />
      <Container>
        <div className="lg:py-16 py-14 space-y-10">
          <div className="space-y-5">
            <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
              Future Goal Scorers: Kids Soccer Training
            </h2>
            <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
              Let your child bend it like the pros with ProStrikers' Kids Soccer
              Training. Our program is crafted to spark a love for soccer while
              teaching the essentials of dribbling, passing, and scoring goals.
              We emphasize fun, fitness, and fair play, ensuring every child
              feels like a part of our soccer family.
            </p>
          </div>
          <TrainingGeneralForm form={form} onFinish={onFinish} />
        </div>
      </Container>
    </>
  );
};

export default SoccerKidsTrainingReservation;
