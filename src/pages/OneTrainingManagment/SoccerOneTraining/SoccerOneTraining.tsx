/* eslint-disable @typescript-eslint/no-explicit-any */
import soccer from "../../../assets/images/training/soccer-training.webp";
import GeneralTrainingBookingSection from "../../../common/GeneralTrainingBookingSection";
import gallery1 from "../../../assets/images/gallery/soccer/soccer-gallery-1.webp";
import gallery2 from "../../../assets/images/gallery/soccer/soccer-gallery-2.webp";
import gallery3 from "../../../assets/images/gallery/soccer/soccer-gallery-3.webp";
import gallery4 from "../../../assets/images/gallery/soccer/soccer-gallery-4.webp";
import gallery5 from "../../../assets/images/gallery/soccer/soccer-gallery-5.webp";
import Container from "../../../components/Container";
import GallerySection from "../../../common/GallerySection";
import { Select } from "antd";
import AppointmentCard from "../../../common/card/AppointmentCard";
import BookingSidebar from "../../../components/BookingSidebar/BookingSidebar";
import { useState } from "react";
import { useTrainersQuery } from "../../../redux/features/tainer/trainerApi";
import { useAppointmentsQuery } from "../../../redux/features/appointment/appointmentApi";

const SoccerOneTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const [trainer, setTrainer] = useState<string | undefined>(undefined);
  const { data: trainerData } = useTrainersQuery(undefined);
  const { data: appointments } = useAppointmentsQuery({
    trainer,
    sport: "baseball",
    appointment_type: "one on one",
  });
  const options = trainerData?.results?.map((trainer: any) => {
    return {
      value: trainer._id,
      label: `${trainer.first_name} ${trainer.last_name}`,
    };
  });
  let trainerOptions;
  if (options) {
    trainerOptions = [
      {
        label: "All Trainer",
        value: "all",
      },
      ...options,
    ];
  }
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const onChange = (value: string) => {
    if (value === "all") {
      setTrainer(undefined);
    } else {
      setTrainer(value);
    }
  };
  return (
    <Container>
      <div className="lg:py-16 py-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection title="Soccer One on One Training" gallery={gallery} />
        <GeneralTrainingBookingSection
          title="Tailored Soccer Training Sessions"
          description="Take your place on the pitch with confidence after our One on One Soccer Training. From dribbling past defenders to striking the ball with precision, our bespoke training is your path to excelling in every position on the field."
        />
        <div className="space-y-5">
          <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
            Tailored Soccer Training Sessions
          </h2>
          <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
            Take your place on the pitch with confidence after our One on One
            Soccer Training. From dribbling past defenders to striking the ball
            with precision, our bespoke training is your path to excelling in
            every position on the field.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-y-5">
          <div className="col-span-2 space-y-3">
            <h3 className="text-xl font-semibold text-[#07133D]">
              Select Trainer
            </h3>
            <Select
              className="w-full h-9"
              showSearch
              optionFilterProp="children"
              placeholder="Select trainer"
              defaultValue={"all"}
              onChange={onChange}
              filterOption={filterOption}
              options={trainerOptions}
            />
            <div className="col-span-2 space-y-5">
              {appointments?.results.length === 0 ? (
                <div className="h-40 flex justify-center items-center">
                  <p className="text-2xl text-secondary">
                    No baseball training found.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-5">
                  {appointments?.results.map((bootcamp, index) => {
                    return (
                      <AppointmentCard
                        data={bootcamp}
                        key={index}
                        image={soccer}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <BookingSidebar />
        </div>
      </div>
    </Container>
  );
};

export default SoccerOneTraining;
