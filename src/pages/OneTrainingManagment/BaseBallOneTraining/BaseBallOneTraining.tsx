/* eslint-disable @typescript-eslint/no-explicit-any */
import baseball from "../../../assets/images/training/baseball-training.webp";
import gallery1 from "../../../assets/images/gallery/baseball/baseball-gallery-1.webp";
import gallery2 from "../../../assets/images/gallery/baseball/baseball-gallery-2.webp";
import gallery3 from "../../../assets/images/gallery/baseball/baseball-gallery-3.webp";
import gallery4 from "../../../assets/images/gallery/baseball/baseball-gallery-4.webp";
import gallery5 from "../../../assets/images/gallery/baseball/baseball-gallery-5.webp";
import Container from "../../../components/Container";
import GallerySection from "../../../common/GallerySection";
import { useState } from "react";
import { useTrainersQuery } from "../../../redux/features/tainer/trainerApi";
import { useOneAppointmentsQuery } from "../../../redux/features/appointment/appointmentApi";
import { Select } from "antd";
import AppointmentCard from "../../../common/card/AppointmentCard";
import BookingSidebar from "../../../components/BookingSidebar/BookingSidebar";
import { ImSpinner } from "react-icons/im";

const BaseBallOneTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const [trainer, setTrainer] = useState<string | undefined>(undefined);
  const { data: trainerData } = useTrainersQuery(undefined);
  const { data: appointments, isFetching } = useOneAppointmentsQuery({
    trainer,
    sport: "baseball",
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
        <GallerySection
          title="Baseball One on One Training"
          gallery={gallery}
        />
        <div className="space-y-5">
          <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
            Customized Baseball Training
          </h2>
          <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
            Unlock your potential on the diamond with our personalized Baseball
            Training sessions. Work on your pitching, improve your batting
            average, or sharpen your fielding skills with coaches who understand
            the intricacies of the game and how to bring out your best.
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
                    <ImSpinner className="size-10 animate-spin text-primary" />
                  </div>
                ) : (
                  <>
                    {appointments?.results.length === 0 ? (
                      <div className="h-96 flex justify-center items-center">
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
                              image={baseball}
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

export default BaseBallOneTraining;
