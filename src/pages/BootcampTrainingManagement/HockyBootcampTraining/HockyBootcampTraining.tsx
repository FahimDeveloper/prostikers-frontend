/* eslint-disable @typescript-eslint/no-explicit-any */
import GallerySection from "../../../common/GallerySection";
import gallery1 from "../../../assets/images/gallery/hockey/hockey-gallery-1-min.webp";
import gallery2 from "../../../assets/images/gallery/hockey/hockey-gallery-2-min.webp";
import gallery3 from "../../../assets/images/gallery/hockey/hockey-gallery-3-min.webp";
import gallery4 from "../../../assets/images/gallery/hockey/hockey-gallery-4-min.webp";
import gallery5 from "../../../assets/images/gallery/hockey/hockey-gallery-5-min.webp";
import hockey from "../../../assets/images/training/hocky-training.webp";
import Container from "../../../components/Container";
import { useState } from "react";
import { useBootcampsQuery } from "../../../redux/features/bootcamp/bootcampApi";
import { useTrainersQuery } from "../../../redux/features/tainer/trainerApi";
import { Select } from "antd";
import BookingSidebar from "../../../components/BookingSidebar/BookingSidebar";
import BootcampCard from "../../../common/card/BootcampCard";
import { ImSpinner } from "react-icons/im";

const HockyBootcampTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const [trainer, setTrainer] = useState<string | undefined>(undefined);
  const { data, isFetching } = useBootcampsQuery({
    limit: 10,
    trainer,
    sport: "field hockey",
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
      <div className="lg:py-16 py-14 lg:mt-10 mt-9 mx-auto space-y-8">
        <GallerySection title="Hockey Training Bootcamps" gallery={gallery} />
        <div className="space-y-5">
          <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
            Unleash Your Potential: Join the Elite Field Hockey Bootcamp
          </h2>
          <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
            Transform your field hockey skills in our dynamic Field Hockey
            Bootcamps. Dive into intense training sessions that cover every
            aspect of the game, from refining stick skills and enhancing passing
            accuracy to mastering shooting techniques and defensive tactics.
            Develop into an agile, strategically sharp player, ready to take on
            any challenge.
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
              <>
                {isFetching ? (
                  <div className="h-96 flex justify-center items-center">
                    <ImSpinner className="size-9 animate-spin text-primary" />
                  </div>
                ) : (
                  <>
                    {data?.results.length === 0 ? (
                      <div className="h-96 flex justify-center items-center">
                        <p className="text-2xl text-secondary">
                          No field hockey bootcamp found.
                        </p>
                      </div>
                    ) : (
                      <div className="grid sm:grid-cols-2 gap-5">
                        {data?.results.map((bootcamp, index) => {
                          return (
                            <BootcampCard
                              data={bootcamp}
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
            <BookingSidebar />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HockyBootcampTraining;
