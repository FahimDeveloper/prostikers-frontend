import {
  Checkbox,
  GetProp,
  InputNumber,
  Radio,
  Slider,
  Space,
  Tooltip,
} from "antd";
import { IoStar } from "react-icons/io5";

type TParams = {
  setBrands: any;
  setColors: any;
  setSizes: any;
  setMinPrice: any;
  setMaxPrice: any;
  setRating: any;
  summary: any;
  maxPrice: number | undefined;
  minPrice: number | undefined;
  colors: string[] | undefined;
};

const ProductsSidebar = ({
  setBrands,
  setColors,
  setSizes,
  setMinPrice,
  setMaxPrice,
  setRating,
  summary,
  maxPrice,
  minPrice,
  colors,
}: TParams) => {
  const handleBrandChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedBrands
  ) => {
    setBrands(checkedBrands);
  };

  const handleSizeChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedSizes
  ) => {
    setSizes(checkedSizes);
  };
  const handlePriceRangeChange = (value: number[]) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };
  const handleRatingChange = (e: any) => {
    setRating(e.target.value);
  };
  return (
    <div className="space-y-1">
      <div className="space-y-3 border p-4 rounded-md border-solid border-gray-100">
        <h3 className="text-[#161D25] font-medium text-xl tracking-[0.2px]">
          Filter Options
        </h3>
        <h4 className="font-semibold text-base text-neutral">Rating</h4>
        <Radio.Group onChange={handleRatingChange}>
          <Space direction="vertical">
            <Radio value={4}>
              <div className="flex items-center gap-2">
                <IoStar className="text-yellow-400 size-6" />
                <p className="text-base">4 start or upper</p>
              </div>
            </Radio>
            <Radio value={3}>
              <div className="flex items-center gap-2">
                <IoStar className="text-yellow-400 size-6" />
                <p className="text-base">3 start or upper</p>
              </div>
            </Radio>
            <Radio value={2}>
              <div className="flex items-center gap-2">
                <IoStar className="text-yellow-400 size-6" />
                <p className="text-base">2 start or upper</p>
              </div>
            </Radio>
            <Radio value={1}>
              <div className="flex items-center gap-2">
                <IoStar className="text-yellow-400 size-6" />
                <p className="text-base">1 start or upper</p>
              </div>
            </Radio>
          </Space>
        </Radio.Group>
      </div>
      {summary && (
        <>
          <div className="space-y-3 border p-4 rounded-md border-solid border-gray-100">
            <h4 className="font-semibold text-base text-neutral">
              Price Range
            </h4>
            <Slider
              range
              min={0}
              max={summary?.max_price}
              defaultValue={[0, summary?.max_price]}
              onChangeComplete={handlePriceRangeChange}
            />
            <div className="flex justify-between">
              <InputNumber
                value={minPrice ? minPrice : 0}
                min={0}
                onChange={(value) => setMinPrice(value)}
              />
              <InputNumber
                value={maxPrice ? maxPrice : summary?.max_price}
                max={summary?.max_price}
                onChange={(value) => setMaxPrice(value)}
              />
            </div>
          </div>
          <div className="space-y-3 border p-4 rounded-md border-solid border-gray-100">
            <h4 className="font-semibold text-base text-neutral">Brands</h4>
            <Checkbox.Group
              style={{ width: "100%" }}
              onChange={handleBrandChange}
            >
              <Space direction="vertical">
                {summary?.brands.map((brand: string, index: number) => (
                  <Checkbox key={index} value={brand} className="capitalize">
                    {brand}
                  </Checkbox>
                ))}
              </Space>
            </Checkbox.Group>
          </div>
          <div className="space-y-3 border p-4 rounded-md border-solid border-gray-100">
            <h4 className="font-semibold text-base text-neutral">Sizes</h4>
            <Checkbox.Group
              style={{ width: "100%" }}
              onChange={handleSizeChange}
            >
              <Space direction="vertical">
                {summary?.sizes.map((size: string, index: number) => (
                  <Checkbox key={index} value={size} className="capitalize">
                    {size}
                  </Checkbox>
                ))}
              </Space>
            </Checkbox.Group>
          </div>
          <div className="space-y-3 border p-4 rounded-md border-solid border-gray-100">
            <h4 className="font-semibold text-base text-neutral">Colors</h4>
            <div className="flex flex-wrap gap-3">
              {summary?.colors.map((color: any, index: number) => (
                <Tooltip title={color?.name}>
                  <div
                    onClick={() =>
                      setColors((prevColors: any) => {
                        if (prevColors?.includes(color?.name)) {
                          return prevColors.filter(
                            (singleColor: string) => singleColor !== color?.name
                          );
                        } else {
                          return [...prevColors, color?.name];
                        }
                      })
                    }
                    key={index}
                    style={{ background: color?.color_code }}
                    className={`p-1 rounded-full cursor-pointer border-solid border-gray-400 ${
                      colors?.includes(color?.name)
                        ? "border-2 size-4"
                        : "border size-5"
                    }`}
                  />
                </Tooltip>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsSidebar;
