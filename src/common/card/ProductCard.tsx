import { Rate } from "antd";
import { TProduct } from "../../types/product.types";
import { Link } from "react-router-dom";

const ProductCard = ({ data }: { data: TProduct }) => {
  return (
    <Link
      to={`/shop/products/${data?._id}`}
      className="no-underline block text-black"
    >
      <div className="space-y-3">
        <img
          loading="lazy"
          src={data?.thumbnail}
          alt={data?.name}
          className="w-full h-60 object-cover rounded-2xl"
        />
        <div className="ms-2 space-y-2">
          <h4 className="text-neutral text-xl font-semibold leading-7 capitalize">
            {data?.name}
          </h4>
          <div className="flex gap-3 items-center">
            <Rate defaultValue={data?.rating} disabled />
            <span className="text-sm">{data?.rating}/5</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-2xl text-neutral font-semibold">
              ${data?.offer_price}
            </span>
            <span className="text-2xl line-through opacity-90 text-gray-400 font-semibold">
              ${data?.regular_price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
