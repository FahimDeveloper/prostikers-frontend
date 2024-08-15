/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "antd/es/form/Form";
import BannerSection from "../../../common/BannerSection";
import Container from "../../../components/Container";
import LeagueTeamSteps from "../../../components/ui/steps/LeagueTeamSteps";
import banner from "../../../assets/images/programsBanner/tten-league-banner.webp";

const JoinAsTeam = () => {
  const [form] = useForm();
  const onSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <BannerSection title="Team - T10 League" image={banner} />
      <Container>
        <div className="lg:py-14 md:py-12 py-10 sm:space-y-8 space-y-5">
          <h2 className="font-semibold lg:text-[56px] sm:text-[45px] text-3xl lg:leading-[67px] sm:leading-[50px]">
            Team Glory in the T10 League
          </h2>
          <p className="text-lg text-[#929292]">
            Gather your squad and enter the arena of ProStrikers’ T10 League as
            a team. Show off your coordinated team play, strategy, and
            sportsmanship. Our T10 League is the perfect platform for teams to
            challenge themselves against the best, refine their game, and vie
            for the championship title.
          </p>
          <LeagueTeamSteps form={form} onSubmit={onSubmit} loading={false} />
        </div>
      </Container>
    </>
  );
};

export default JoinAsTeam;
