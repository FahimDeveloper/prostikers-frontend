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
import { Select } from "antd";
import { useState } from "react";
import { useTrainersQuery } from "../../../redux/features/tainer/trainerApi";
import DateSlider from "../../../components/DateSlider";
import KidsTrainingCard from "../../../common/card/KidsTrainingCard";
import { useGroupAppointmentsQuery } from "../../../redux/features/appointment/appointmentApi";

const SoftballGroupTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const [trainer, setTrainer] = useState<string | undefined>(undefined);
  const [activeDate, setActiveDate] = useState(new Date());
  const { data: trainerData } = useTrainersQuery(undefined);
  const { data: appointments } = useGroupAppointmentsQuery({
    trainer,
    sport: "softball",
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
      <div className="lg:py-16 py-14 lg:mt-10 mt-9 mx-auto space-y-10">
        <GallerySection title="Soccer Group Training" gallery={gallery} />
        <div className="space-y-5">
          <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
            Level Up: Softball Group Training
          </h2>
          <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
            Unlock your potential on the diamond with our personalized Softball
            Training sessions. Work on your pitching, improve your batting
            average, or sharpen your fielding skills with coaches who understand
            the intricacies of the game and how to bring out your best.
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
                {activeDate.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
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
                    No softball training found.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-5">
                  {appointments?.results.map((appointment, index) => {
                    return (
                      <KidsTrainingCard
                        data={appointment}
                        key={index}
                        image={softball}
                        activeDate={activeDate}
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
