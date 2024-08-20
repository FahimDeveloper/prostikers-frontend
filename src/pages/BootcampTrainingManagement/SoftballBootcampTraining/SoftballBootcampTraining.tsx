/* eslint-disable @typescript-eslint/no-explicit-any */
import GallerySection from "../../../common/GallerySection";
import gallery1 from "../../../assets/images/gallery/softball/softball-gallery-1-min.webp";
import gallery2 from "../../../assets/images/gallery/softball/softball-gallery-2-min.webp";
import gallery3 from "../../../assets/images/gallery/softball/softball-gallery-3-min.webp";
import gallery4 from "../../../assets/images/gallery/softball/softball-gallery-4-min.webp";
import gallery5 from "../../../assets/images/gallery/softball/softball-gallery-5-min.webp";
import Container from "../../../components/Container";
import softball from "../../../assets/images/training/soft-training.webp";
import { useState } from "react";
import { useBootcampsQuery } from "../../../redux/features/bootcamp/bootcampApi";
import { useTrainersQuery } from "../../../redux/features/tainer/trainerApi";
import { Select } from "antd";
import RentalSidebar from "../../../components/Rental/RentalSidebar";
import BootcampCard from "../../../common/card/BootcampCard";

const SoftballBootcampTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const [trainer, setTrainer] = useState<string | undefined>(undefined);
  const { data } = useBootcampsQuery({
    limit: 10,
    trainer,
    sport: "softball",
  });
  const { data: trainerData } = useTrainersQuery(undefined);
  const options = trainerData?.results?.map((trainer: any) => {
    return {
      value: `${trainer.first_name} ${trainer.last_name}`,
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
      <div className="lg:pt-16 pt-14 lg:mt-10 mt-9 mx-auto space-y-10">
        <GallerySection gallery={gallery} />
        <div className="space-y-5">
          <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
            Customized Softball Training
          </h2>
          <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
            Unlock your potential on the diamond with our personalized Softball
            Training sessions. Work on your pitching, improve your batting
            average, or sharpen your fielding skills with coaches who understand
            the intricacies of the game and how to bring out your best.
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
                    No softball bootcamp found.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-5">
                  {data?.results.map((bootcamp, index) => {
                    return (
                      <BootcampCard
                        data={bootcamp}
                        key={index}
                        image={softball}
                      />
                    );
                  })}
                </div>
              )}
            </div>
            <RentalSidebar />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SoftballBootcampTraining;
