/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import TrainingGeneralForm from "../../../components/ui/form/TrainingGeneralForm";
import cricketBanner from "../../../assets/images/programsBanner/cricket-banner.webp";

const CricketKidsTrainingReservation = () => {
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
      <BannerSection title="Cricket Kids Training" image={cricketBanner} />
      <Container>
        <div className="lg:py-16 py-14 space-y-10">
          <div className="space-y-5">
            <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
              Little Wicket Warriors: Kids Cricket Training
            </h2>
            <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
              Jumpstart your child's cricket journey with ProStrikers’ Kids
              Cricket Training. Our junior program introduces the basics of
              batting, bowling, and fielding through enjoyable and interactive
              drills. Watch your child develop hand-eye coordination, team play,
              and a passion for cricket with every session.
            </p>
          </div>
          <TrainingGeneralForm form={form} onFinish={onFinish} />
        </div>
      </Container>
    </>
  );
};

export default CricketKidsTrainingReservation;
