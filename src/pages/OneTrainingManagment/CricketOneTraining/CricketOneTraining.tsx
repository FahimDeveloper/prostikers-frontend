/* eslint-disable @typescript-eslint/no-explicit-any */
import cricket from "../../../assets/images/training/cricket-training.webp";
import gallery1 from "../../../assets/images/gallery/cricket/cricket-gallery-1-min.webp";
import gallery2 from "../../../assets/images/gallery/cricket/cricket-gallery-2-min.webp";
import gallery3 from "../../../assets/images/gallery/cricket/cricket-gallery-3-min.webp";
import gallery4 from "../../../assets/images/gallery/cricket/cricket-gallery-4-min.webp";
import gallery5 from "../../../assets/images/gallery/cricket/cricket-gallery-5-min.webp";
import Container from "../../../components/Container";
import GallerySection from "../../../common/GallerySection";
import { useState } from "react";
import { useTrainersQuery } from "../../../redux/features/tainer/trainerApi";
import { useOneAppointmentsQuery } from "../../../redux/features/appointment/appointmentApi";
import { Select } from "antd";
import BookingSidebar from "../../../components/BookingSidebar/BookingSidebar";
import AppointmentCard from "../../../common/card/AppointmentCard";
import { ImSpinner } from "react-icons/im";

const CricketOneTraining = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const [trainer, setTrainer] = useState<string | undefined>(undefined);
  const { data: trainerData } = useTrainersQuery(undefined);
  const { data: appointments, isFetching } = useOneAppointmentsQuery({
    trainer,
    sport: "cricket",
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
        <GallerySection title="Cricket One on One Training" gallery={gallery} />
        <div className="space-y-5">
          <h2 className="font-semibold lg:text-[56px] md:text-[45px] text-[26px] lg:leading-[68px] md:leading-[50px] leading-9">
            Personalized Cricket Coaching
          </h2>
          <p className="md:text-lg text-base md:leading-7 sm:leading-6 leading-5 text-[#929292] text-justify">
            Elevate your cricket game with individualized attention from
            seasoned professionals. Our One on One Cricket Training targets your
            specific needs - whether it's mastering the sweep shot or perfecting
            your seam bowling. Each session is a step towards becoming the
            cricketer you aspire to be.
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
                          No cricket training found.
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-5">
                        {appointments?.results.map((bootcamp, index) => {
                          return (
                            <AppointmentCard
                              data={bootcamp}
                              key={index}
                              image={cricket}
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

export default CricketOneTraining;
