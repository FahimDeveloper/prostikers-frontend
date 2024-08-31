/* eslint-disable @typescript-eslint/no-explicit-any */
import BannerSection from "../../../common/BannerSection";
import softballBanner from "../../../assets/images/programsBanner/softball-banner.webp";
import Container from "../../../components/Container";
import BootcampReservationForm from "../../../components/ui/form/BootcampReservationForm";
import { useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const SoftballBootcampTrainingReservation = () => {
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
    <div>
      <BannerSection title="Cricket Programs" image={softballBanner} />
      <Container>
        <div className="lg:py-16 py-14 space-y-10">
          <div className="space-y-5">
            <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
              Customized Softball Training
            </h2>
            <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
              Unlock your potential on the diamond with our personalized
              Softball Training sessions. Work on your pitching, improve your
              batting average, or sharpen your fielding skills with coaches who
              understand the intricacies of the game and how to bring out your
              best.
            </p>
          </div>
          <BootcampReservationForm form={form} onFinish={onFinish} />
        </div>
      </Container>
    </div>
  );
};

export default SoftballBootcampTrainingReservation;
