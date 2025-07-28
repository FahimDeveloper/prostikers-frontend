/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image } from "antd";

const GallerySection = ({ title, gallery }: any) => {
  return (
    <div className="space-y-5">
      <div className="md:flex justify-between space-y-2 items-end">
        <div>
          <h2 className="font-bold lg:text-[32px] text-2xl lg:leading-[38px] leading-7">
            {title}
          </h2>
        </div>
        <p className="text-[#2D2D2D] md:text-base text-sm leading-5">
          2230 16th St, Sacramento, CA 95818, United States
        </p>
      </div>
      <Image.PreviewGroup>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-3">
          {gallery.slice(0, 1).map((item: any, index: number) => {
            return (
              <Image
                key={index}
                src={item}
                className="w-full sm:!h-[430px] !h-80 object-cover rounded-2xl"
                alt="galler image"
              />
            );
          })}
          <div className="grid grid-cols-2 h-full lg:gap-5 gap-3">
            {gallery
              .slice(1, gallery.length)
              .map((item: any, index: number) => {
                return (
                  <Image
                    key={index}
                    src={item}
                    className={`w-full sm:!h-52 !h-40 object-cover object-center rounded-2xl ${
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

export default GallerySection;
