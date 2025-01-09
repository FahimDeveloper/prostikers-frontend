import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import { Button, message, Rate, Tooltip } from "antd";
import { FaSpinner } from "react-icons/fa6";
import ProductGallery from "./components/ProductGallery";
import { useState } from "react";
import Swal from "sweetalert2";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";
import { useProductQuery } from "../../redux/features/product/productApi";

const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useProductQuery({ id });
  const [messageApi, contextHolder] = message.useMessage();
  const [selectedColor, setSelectedColor] = useState<{
    color_code: string;
    name: string;
  } | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const uniqueVariationColors = Array.from(
    new Map(
      data?.results?.variations?.map((variation) => [
        variation.color.color_code,
        variation.color,
      ])
    ).values()
  );

  const colors = Array.from(
    new Map(
      [data?.results?.color, ...uniqueVariationColors].map((color) => [
        color?.color_code,
        color,
      ])
    ).values()
  );

  const availableSizes = Array.from(
    new Set(
      data?.results?.variations
        ?.filter((variation) =>
          selectedColor
            ? variation.color.color_code === selectedColor.color_code
            : true
        )
        .map((variation) => variation.size)
    )
  );

  if (
    selectedColor &&
    selectedColor.color_code === data?.results?.color?.color_code &&
    !availableSizes.includes(data?.results?.size!)
  ) {
    availableSizes.push(data?.results?.size!);
  }

  const filteredColors = Array.from(
    new Map(
      data?.results?.variations
        ?.filter((variation) =>
          selectedSize ? variation.size === selectedSize : true
        )
        .map((variation) => [variation.color.color_code, variation.color])
    ).values()
  );

  if (
    selectedSize &&
    selectedSize === data?.results?.size &&
    !filteredColors.some(
      (color) => color.color_code === data?.results?.color?.color_code
    )
  ) {
    filteredColors.push(data?.results?.color!);
  }

  const finalColors = selectedSize ? filteredColors : colors;

  const finalSizes = selectedColor
    ? availableSizes
    : Array.from(
        new Set([
          ...(data?.results?.variations?.map((variation) => variation.size) ??
            []),
          ...(data?.results?.size ? [data?.results?.size] : []),
        ])
      );

  const selectedVariation = data?.results?.variations?.find(
    (variation) =>
      variation.color.color_code === selectedColor?.color_code &&
      variation.size === selectedSize
  );

  const price = selectedVariation
    ? selectedVariation.price
    : data?.results?.offer_price ?? data?.results?.regular_price;

  const regularPrice = data?.results?.regular_price;
  const percentageOff = Math.round(
    regularPrice ? ((regularPrice - price!) / regularPrice) * 100 : 0
  );

  const onSelectColor = (color: any) => {
    if (selectedColor === color) {
      setSelectedColor(null);
    } else {
      setSelectedColor(color);
    }
  };

  const onSelectSize = (size: string) => {
    if (selectedSize === size) {
      setSelectedSize(null);
    } else {
      setSelectedSize(size);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (selectedColor !== null && selectedSize !== null) {
      const cartItem = {
        cart_id: crypto.randomUUID(),
        id: data?.results?._id,
        name: `${data?.results?.name} - ${selectedColor?.name} - ${selectedSize}`,
        thumbnail: data?.results?.thumbnail,
        price: price,
        color: selectedColor,
        size: selectedSize,
        quantity,
      };

      const cart = JSON.parse(localStorage.getItem("cart") || "[]");

      const existingIndex = cart.findIndex(
        (item: any) =>
          item.id === cartItem.id &&
          item.color.color_code === cartItem.color.color_code &&
          item.size === cartItem.size
      );

      if (existingIndex > -1) {
        cart[existingIndex].quantity += cartItem.quantity;
        messageApi.open({
          type: "success",
          content: "Update cart item",
        });
      } else {
        messageApi.open({
          type: "success",
          content: "Add new cart item",
        });
        cart.push(cartItem);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("cartUpdated"));
    } else {
      Swal.fire({
        icon: "info",
        title: "Select a color and size",
        text: "Before adding to cart, please select a color and size for this product.",
        confirmButtonColor: "#0ABAC3",
      });
    }
  };

  return (
    <Container>
      {contextHolder}
      {isLoading && (
        <div className="h-screen flex justify-center items-center">
          <FaSpinner className="text-primary size-7 animate-spin" />
        </div>
      )}
      {data?.results?._id ? (
        <div className="lg:py-14 md:py-12 py-10 sm:space-y-8 space-y-5">
          <div className="grid grid-cols-2 gap-10 pt-16">
            <div>
              <ProductGallery gallery={data?.results?.gallery} />
            </div>
            <div className="space-y-4">
              <h2 className="font-bold text-[28px] leading-8 text-secondary">
                {data?.results?.name}
              </h2>
              <div className="flex gap-2">
                <Rate disabled allowHalf defaultValue={data?.results?.rating} />
                <span className="text-base">{data?.results?.rating}/5</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-secondary text-[32px] leading-[38px]">
                  ${price}
                </span>
                <span className="line-through opacity-90 text-gray-400 font-bold text-[32px] leading-[38px]">
                  ${data?.results?.regular_price}
                </span>
                {percentageOff > 0 && (
                  <span className="py-1 px-3 rounded-full text-base bg-[#F2F4F8]">
                    -{percentageOff}%
                  </span>
                )}
              </div>
              <article className="text-base opacity-60">
                {data?.results?.short_description}
              </article>
              <div className="pt-3 border-solid border-0 border-t border-gray-300 space-y-2">
                <span className="text-base opacity-60">Select Color</span>
                <div className="flex gap-2">
                  {finalColors.map((color, index) => (
                    <Tooltip key={index} placement="top" title={color?.name}>
                      <span
                        onClick={() => onSelectColor(color)}
                        style={{ backgroundColor: color?.color_code }}
                        className={`size-7 cursor-pointer rounded-full border border-solid ${
                          selectedColor?.color_code == color?.color_code
                            ? "border-gray-400 border-2"
                            : "border-gray-300"
                        }`}
                      />
                    </Tooltip>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-solid border-0 border-t border-gray-300 space-y-2">
                <span className="text-base opacity-60">Choose Size</span>
                <div className="flex gap-2">
                  {finalSizes.map((size, index) => (
                    <div
                      onClick={() => onSelectSize(size)}
                      key={index}
                      className={`text-base py-2 px-6 cursor-pointer rounded-full ${
                        selectedSize == size
                          ? "bg-secondary text-white"
                          : "bg-[#F2F4F8]"
                      }`}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-solid border-0 border-t border-gray-300 flex gap-2">
                <div className="flex w-48 items-center justify-between rounded-full bg-[#F2F4F8]">
                  <HiMinus
                    className="size-5 opacity-80 cursor-pointer h-full px-4"
                    onClick={handleDecrement}
                  />
                  <span className="text-lg font-normal">{quantity}</span>
                  <GoPlus
                    className="size-5 opacity-80 cursor-pointer h-full px-4"
                    onClick={handleIncrement}
                  />
                </div>
                <Button
                  onClick={handleAddToCart}
                  type="primary"
                  size="large"
                  className="primary-btn w-full"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
          <div
            className="ql-editor"
            dangerouslySetInnerHTML={{ __html: data?.results?.details }}
          />
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <p className="text-3xl font-medium">Product not availabe</p>
        </div>
      )}
    </Container>
  );
};

export default ProductPage;
