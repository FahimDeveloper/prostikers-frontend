/* eslint-disable @typescript-eslint/no-explicit-any */
import soccer from "../../../assets/images/training/soccer-training.webp";
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
import { useOneAppointmentsQuery } from "../../../redux/features/appointment/appointmentApi";
import { ImSpinner } from "react-icons/im";

const SoccerOneTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const [trainer, setTrainer] = useState<string | undefined>(undefined);
  const { data: trainerData } = useTrainersQuery(undefined);
  const { data: appointments, isFetching } = useOneAppointmentsQuery({
    trainer,
    sport: "soccer",
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
      <div className="lg:py-16 py-14 lg:mt-10 mt-9 mx-auto space-y-8">
        <GallerySection title="Soccer One on One Training" gallery={gallery} />
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
              <>
                {isFetching ? (
                  <div className="h-96 flex justify-center items-center">
                    <ImSpinner className="size-9 animate-spin text-primary" />
                  </div>
                ) : (
                  <>
                    {appointments?.results.length === 0 ? (
                      <div className="h-96 flex justify-center items-center">
                        <p className="text-2xl text-secondary">
                          No soccer training found.
                        </p>
                      </div>
                    ) : (
                      <div className="grid sm:grid-cols-2 gap-5">
                        {appointments?.results.map((training, index) => {
                          return (
                            <AppointmentCard
                              data={training}
                              key={index}
                              image={soccer}
                            />
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </>
            </div>
          </div>
          <BookingSidebar />
        </div>
      </div>
    </Container>
  );
};

export default SoccerOneTraining;
