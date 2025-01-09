import { FaSpinner } from "react-icons/fa";
import ProductCard from "../../../common/card/ProductCard";
import { TProduct } from "../../../types/product.types";

const ProductsPart = ({
  data,
  loading,
}: {
  data: Array<TProduct>;
  loading: boolean;
}) => {
  return (
    <div>
      {loading ? (
        <div className="h-[calc(100vh-200px)] w-full flex justify-center items-center">
          <FaSpinner className="animate-spin size-8 text-primary" />
        </div>
      ) : data?.length === 0 ? (
        <div className="text-3xl flex justify-center items-center h-[calc(100vh-300px)] text-gray-500">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {data.map((product, index) => (
            <div key={index} className="col-span-1">
              <ProductCard data={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPart;
