/* eslint-disable @typescript-eslint/no-explicit-any */
import hockey from "../../../assets/images/training/hocky-training.webp";
import gallery1 from "../../../assets/images/gallery/hockey/hockey-gallery-1-min.webp";
import gallery2 from "../../../assets/images/gallery/hockey/hockey-gallery-2-min.webp";
import gallery3 from "../../../assets/images/gallery/hockey/hockey-gallery-3-min.webp";
import gallery4 from "../../../assets/images/gallery/hockey/hockey-gallery-4-min.webp";
import gallery5 from "../../../assets/images/gallery/hockey/hockey-gallery-5-min.webp";
import Container from "../../../components/Container";
import GallerySection from "../../../common/GallerySection";
import BookingSidebar from "../../../components/BookingSidebar/BookingSidebar";
import { Select } from "antd";
import { useState } from "react";
import { useTrainersQuery } from "../../../redux/features/tainer/trainerApi";
import { useGroupAppointmentsQuery } from "../../../redux/features/appointment/appointmentApi";
import DateSlider from "../../../components/DateSlider";
import AppointmentGroupCard from "../../../common/card/AppointmentGroupCard";
import { ImSpinner } from "react-icons/im";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
const HockyGroupTraining = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const [activeDate, setActiveDate] = useState(
    dayjs().tz("America/Los_Angeles")
  );
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const [trainer, setTrainer] = useState<string | undefined>(undefined);
  const { data: trainerData } = useTrainersQuery(undefined);
  const { data: appointments, isFetching } = useGroupAppointmentsQuery({
    trainer,
    sport: "field hockey",
    date: activeDate.toISOString(),
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
        <GallerySection title="Feild Hockey Group Training" gallery={gallery} />
        <div className="space-y-5">
          <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
            Engaging Group Hockey Training
          </h2>
          <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
            Get ready for competitive play with our Group Hockey Training.
            Focused on strategic team plays and skill enhancement, our sessions
            help players make swift decisions and coordinate effectively on the
            field.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-y-5">
          <div className="col-span-2 space-y-3">
            <div className="space-y-2">
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
            </div>
            <div className="space-y-2">
              <p className="text-lg text-[#07133D] font-medium text-center">
                {activeDate.format("MMMM")}
              </p>
              <DateSlider
                activeDate={activeDate}
                setActiveDate={setActiveDate}
              />
            </div>
            <div className="col-span-2 space-y-5">
              {appointments?.results.length === 0 ? (
                <div className="h-40 flex justify-center items-center">
                  <p className="text-2xl text-secondary">
                    No feild hockey training found.
                  </p>
                </div>
              ) : (
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
                              No field hockey training found.
                            </p>
                          </div>
                        ) : (
                          <div className="grid sm:grid-cols-2 gap-5">
                            {appointments?.results.map((training, index) => {
                              return (
                                <AppointmentGroupCard
                                  activeDate={activeDate}
                                  data={training}
                                  key={index}
                                  image={hockey}
                                />
                              );
                            })}
                          </div>
                        )}
                      </>
                    )}
                  </>
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

export default HockyGroupTraining;
