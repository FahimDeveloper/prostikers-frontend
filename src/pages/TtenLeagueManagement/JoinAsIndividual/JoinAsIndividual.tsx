/* eslint-disable @typescript-eslint/no-explicit-any */
import BannerSection from "../../../common/BannerSection";
import banner from "../../../assets/images/programsBanner/tten-league-banner.webp";
import Container from "../../../components/Container";
import { useForm } from "antd/es/form/Form";
import LeagueIndividualForm from "../../../components/ui/form/LeagueIndividualForm";

const JoinAsIndividual = () => {
  const [form] = useForm();
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <BannerSection title="Individual - T10 League" image={banner} />
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
        </div>
        <LeagueIndividualForm form={form} onFinish={onFinish} />
      </Container>
    </>
  );
};

export default JoinAsIndividual;
