/* eslint-disable @typescript-eslint/no-explicit-any */
import GallerySection from "../../../common/GallerySection";
import gallery1 from "../../../assets/images/gallery/soccer/soccer-gallery-1.webp";
import gallery2 from "../../../assets/images/gallery/soccer/soccer-gallery-2.webp";
import gallery3 from "../../../assets/images/gallery/soccer/soccer-gallery-3.webp";
import gallery4 from "../../../assets/images/gallery/soccer/soccer-gallery-4.webp";
import gallery5 from "../../../assets/images/gallery/soccer/soccer-gallery-5.webp";
import Container from "../../../components/Container";
import soccer from "../../../assets/images/training/soccer-training.webp";
import { useState } from "react";
import { useBootcampsQuery } from "../../../redux/features/bootcamp/bootcampApi";
import { useTrainersQuery } from "../../../redux/features/tainer/trainerApi";
import { Select } from "antd";
import BookingSidebar from "../../../components/BookingSidebar/BookingSidebar";
import BootcampCard from "../../../common/card/BootcampCard";

const SoccerBootcampTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const [trainer, setTrainer] = useState<string | undefined>(undefined);
  const { data } = useBootcampsQuery({
    limit: 10,
    trainer,
    sport: "soccer",
  });
  const { data: trainerData } = useTrainersQuery(undefined);
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
        <GallerySection title="Soccer Training Bootcamps" gallery={gallery} />
        <div className="space-y-5">
          <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
            Soccer Training Bootcamps: Elevate Your Game
          </h2>
          <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
            Transform your soccer skills at ProStrikers’ Soccer Training
            Bootcamps. Concentrated sessions will enhance your footwork,
            control, and strategy, all while fostering the physical and mental
            toughness needed to succeed on the pitch. Join and become a part of
            soccer excellence.
          </p>
        </div>
        <div className="space-y-5">
          <Select
            className="w-40"
            showSearch
            defaultValue={"all"}
            optionFilterProp="children"
            onChange={onChange}
            filterOption={filterOption}
            options={trainerOptions}
          />
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-y-5">
            <div className="col-span-2 space-y-5">
              {data?.results.length === 0 ? (
                <div className="h-40 flex justify-center items-center">
                  <p className="text-2xl text-secondary">
                    No soccer bootcamp found.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-5">
                  {data?.results.map((bootcamp, index) => {
                    return (
                      <BootcampCard
                        data={bootcamp}
                        key={index}
                        image={soccer}
                      />
                    );
                  })}
                </div>
              )}
            </div>
            <BookingSidebar />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SoccerBootcampTraining;
