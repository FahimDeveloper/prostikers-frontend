import {
  Checkbox,
  Form,
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
  form: any;
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
  form,
}: TParams) => {
  const handleFormChange = (changedValues: any, allValues: any) => {
    if (changedValues.brands) setBrands(allValues.brands);
    if (changedValues.sizes) setSizes(allValues.sizes);
    if (changedValues.rating !== undefined) setRating(allValues.rating);
    if (changedValues.minPrice !== undefined) {
      setMinPrice(allValues.minPrice);
      form.setFieldsValue({
        priceRange: [allValues.minPrice, allValues.maxPrice],
      });
    }
    if (changedValues.maxPrice !== undefined) {
      setMaxPrice(allValues.maxPrice);
      form.setFieldsValue({
        priceRange: [allValues.minPrice, allValues.maxPrice],
      });
    }
  };

  const handlePriceRangeChange = (value: number[]) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
    form.setFieldsValue({ minPrice: value[0], maxPrice: value[1] });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={handleFormChange}
      initialValues={{
        priceRange: [0, summary?.max_price || 100],
        minPrice: minPrice || 0,
        maxPrice: maxPrice || summary?.max_price || 100,
        brands: [],
        sizes: [],
        rating: null,
      }}
    >
      <div className="space-y-1">
        <div className="space-y-3 border p-4 rounded-md border-solid border-gray-100">
          <h3 className="text-[#161D25] font-medium text-xl tracking-[0.2px]">
            Filter Options
          </h3>
          <Form.Item label="Rating" name="rating">
            <Radio.Group>
              <Space direction="vertical">
                {[4, 3, 2, 1].map((value) => (
                  <Radio key={value} value={value}>
                    <div className="flex items-center gap-2">
                      <IoStar className="text-yellow-400 size-6" />
                      <p className="text-base">{value} star or upper</p>
                    </div>
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </Form.Item>
        </div>

        <div className="space-y-1 border p-4 rounded-md border-solid border-gray-100">
          <Form.Item label="Price Range" name="priceRange" className="m-0">
            <Slider
              onChangeComplete={handlePriceRangeChange}
              range
              min={0}
              max={summary?.max_price}
              defaultValue={[0, summary?.max_price]}
            />
          </Form.Item>
          <div className="flex justify-between">
            <Form.Item name="minPrice" noStyle>
              <InputNumber min={0} placeholder="Min Price" />
            </Form.Item>
            <Form.Item name="maxPrice" noStyle>
              <InputNumber min={0} placeholder="Max Price" />
            </Form.Item>
          </div>
        </div>

        {summary && (
          <>
            <div className="space-y-3 border p-4 rounded-md border-solid border-gray-100">
              <Form.Item label="Brands" name="brands">
                <Checkbox.Group style={{ width: "100%" }}>
                  <Space direction="vertical">
                    {summary?.brands.map((brand: string, index: number) => (
                      <Checkbox
                        key={index}
                        value={brand}
                        className="capitalize"
                      >
                        {brand}
                      </Checkbox>
                    ))}
                  </Space>
                </Checkbox.Group>
              </Form.Item>
            </div>
            <div className="space-y-3 border p-4 rounded-md border-solid border-gray-100">
              <Form.Item label="Sizes" name="sizes">
                <Checkbox.Group style={{ width: "100%" }}>
                  <Space direction="vertical">
                    {summary?.sizes.map((size: string, index: number) => (
                      <Checkbox key={index} value={size} className="capitalize">
                        {size}
                      </Checkbox>
                    ))}
                  </Space>
                </Checkbox.Group>
              </Form.Item>
            </div>
            <div className="space-y-3 border p-4 rounded-md border-solid border-gray-100">
              <Form.Item label="Colors">
                <div className="flex flex-wrap gap-3">
                  {summary?.colors.map((color: any, index: number) => (
                    <Tooltip title={color?.name} key={index}>
                      <div
                        onClick={() =>
                          setColors((prevColors: any) => {
                            if (prevColors?.includes(color?.name)) {
                              return prevColors.filter(
                                (singleColor: string) =>
                                  singleColor !== color?.name
                              );
                            } else {
                              return [...prevColors, color?.name];
                            }
                          })
                        }
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
              </Form.Item>
            </div>
          </>
        )}
      </div>
    </Form>
  );
};

export default ProductsSidebar;
