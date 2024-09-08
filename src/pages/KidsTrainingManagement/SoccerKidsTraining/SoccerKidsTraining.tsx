/* eslint-disable @typescript-eslint/no-explicit-any */
import gallery1 from "../../../assets/images/gallery/soccer/soccer-gallery-1.webp";
import gallery2 from "../../../assets/images/gallery/soccer/soccer-gallery-2.webp";
import gallery3 from "../../../assets/images/gallery/soccer/soccer-gallery-3.webp";
import gallery4 from "../../../assets/images/gallery/soccer/soccer-gallery-4.webp";
import gallery5 from "../../../assets/images/gallery/soccer/soccer-gallery-5.webp";
import GallerySection from "../../../common/GallerySection";
import Container from "../../../components/Container";
import DateSlider from "../../../components/DateSlider";
import BookingSidebar from "../../../components/BookingSidebar/BookingSidebar";
import { useState } from "react";
import { useTrainersQuery } from "../../../redux/features/tainer/trainerApi";
import { Select } from "antd";
import soccer from "../../../assets/images/training/soccer-training.webp";
import { useClassesQuery } from "../../../redux/features/class/classApi";
import KidsTrainingCard from "../../../common/card/KidsTrainingCard";
import { ImSpinner } from "react-icons/im";

const SoccerKidsTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const [trainer, setTrainer] = useState<string | undefined>(undefined);
  const [activeDate, setActiveDate] = useState(new Date());
  const { data: trainerData } = useTrainersQuery(undefined);
  const { data: classes, isFetching } = useClassesQuery({
    trainer,
    sport: "cricket",
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
      <div className="lg:py-16 py-14 lg:mt-10 mt-9 mx-auto">
        <GallerySection title="Kids Soccer Training" gallery={gallery} />
        <div className="space-y-5">
          <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
            Future Goal Scorers: Kids Soccer Training
          </h2>
          <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
            Let your child bend it like the pros with ProStrikers' Kids Soccer
            Training. Our program is crafted to spark a love for soccer while
            teaching the essentials of dribbling, passing, and scoring goals. We
            emphasize fun, fitness, and fair play, ensuring every child feels
            like a part of our soccer family.
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
              <>
                {isFetching ? (
                  <div className="h-96 flex justify-center items-center">
                    <ImSpinner className="size-9 animate-spin text-primary" />
                  </div>
                ) : (
                  <>
                    {classes?.results.length === 0 ? (
                      <div className="h-96 flex justify-center items-center">
                        <p className="text-2xl text-secondary">
                          No baseball training found.
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-5">
                        {classes?.results.map((training, index) => {
                          return (
                            <KidsTrainingCard
                              activeDate={activeDate}
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

export default SoccerKidsTraining;
