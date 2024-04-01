import { Image } from "antd";
import gallery1 from "../../../assets/images/booking/facility-gallery-1.webp";
import gallery2 from "../../../assets/images/booking/facility-gallery-2.webp";
import gallery3 from "../../../assets/images/booking/facility-gallery-3.webp";
import gallery4 from "../../../assets/images/booking/facility-gallery-4.webp";
import gallery5 from "../../../assets/images/booking/facility-gallery-5.webp";
import gallery6 from "../../../assets/images/booking/facility-gallery-6.webp";

const RentalFacilitySection = () => {
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
  return (
    <div className="space-y-5">
      <div className="md:flex justify-between space-y-2 items-end">
        <div>
          <h2 className="font-bold lg:text-[32px] text-2xl lg:leading-[38px] leading-7">
            Rental Facility
          </h2>
        </div>
        <p className="text-[#2D2D2D] md:text-base text-sm leading-5">
          2230 16th St, Sacramento, CA 95818, United States
        </p>
      </div>
      <Image.PreviewGroup>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-3">
          {gallery.slice(0, 1).map((item) => {
            return (
              <Image
                src={item}
                className="w-full rounded-2xl"
                alt="galler image"
              />
            );
          })}
          <div className="grid grid-cols-2 lg:gap-5 gap-3">
            {gallery.slice(1, gallery.length).map((item, index) => {
              return (
                <Image
                  src={item}
                  className={`w-full rounded-2xl ${
                    index > 3 ? "hidden" : "visible"
                  }`}
                  alt="galler image"
                />
              );
            })}
          </div>
        </div>
      </Image.PreviewGroup>
    </div>
  );
};

export default RentalFacilitySection;
