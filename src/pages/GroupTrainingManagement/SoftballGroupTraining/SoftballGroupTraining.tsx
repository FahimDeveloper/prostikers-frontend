/* eslint-disable @typescript-eslint/no-explicit-any */
import softball from "../../../assets/images/training/soft-training.webp";
import gallery1 from "../../../assets/images/gallery/softball/softball-gallery-1-min.webp";
import gallery2 from "../../../assets/images/gallery/softball/softball-gallery-2-min.webp";
import gallery3 from "../../../assets/images/gallery/softball/softball-gallery-3-min.webp";
import gallery4 from "../../../assets/images/gallery/softball/softball-gallery-4-min.webp";
import gallery5 from "../../../assets/images/gallery/softball/softball-gallery-5-min.webp";
import Container from "../../../components/Container";
import GallerySection from "../../../common/GallerySection";
import BookingSidebar from "../../../components/BookingSidebar/BookingSidebar";
import AppointmentCard from "../../../common/card/AppointmentCard";
import { Select } from "antd";
import { useState } from "react";
import { useTrainersQuery } from "../../../redux/features/tainer/trainerApi";
import { useAppointmentsQuery } from "../../../redux/features/appointment/appointmentApi";

const SoftballGroupTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const [trainer, setTrainer] = useState<string | undefined>(undefined);
  const { data: trainerData } = useTrainersQuery(undefined);
  const { data: appointments } = useAppointmentsQuery({
    trainer,
    sport: "softball",
    appointment_type: "group training",
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
      <div className="lg:py-16 py-14 lg:mt-10 mt-9 mx-auto space-y-10">
        <GallerySection title="Baseball Group Training" gallery={gallery} />
        <div className="space-y-5">
          <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
            Team-Oriented Baseball Training
          </h2>
          <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
            Experience the camaraderie of our Group Baseball Training. Perfect
            your pitches, swings, and slides with collective exercises and
            team-building challenges. Our training encourages mutual growth and
            shared passion for every inning.
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
                    No baseball bootcamp found.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-5">
                  {appointments?.results.map((bootcamp, index) => {
                    return (
                      <AppointmentCard
                        data={bootcamp}
                        key={index}
                        image={softball}
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

export default SoftballGroupTraining;
