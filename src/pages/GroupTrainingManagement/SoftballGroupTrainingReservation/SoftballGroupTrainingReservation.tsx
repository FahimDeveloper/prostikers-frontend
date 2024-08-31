/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import softballBanner from "../../../assets/images/programsBanner/softball-banner.webp";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import TrainingGeneralForm from "../../../components/ui/form/TrainingGeneralForm";

const SoftballGroupTrainingReservation = () => {
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
      <BannerSection title="Soccer Group Traiing" image={softballBanner} />
      <Container>
        <div className="lg:py-16 py-14 space-y-10">
          <div className="space-y-5">
            <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
              Level Up: Softball Group Training
            </h2>
            <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
              Unlock your potential on the diamond with our personalized
              Softball Training sessions. Work on your pitching, improve your
              batting average, or sharpen your fielding skills with coaches who
              understand the intricacies of the game and how to bring out your
              best.
            </p>
          </div>
          <TrainingGeneralForm form={form} onFinish={onFinish} />
        </div>
      </Container>
    </>
  );
};

export default SoftballGroupTrainingReservation;
