import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import { BsCartX } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Button, message } from "antd";
import { TCart } from "../../types/product.types";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useForm } from "antd/es/form/Form";
import ShopCheckoutForm from "../../components/ui/form/ShopCheckoutForm";

const ShopCheckOut = () => {
  const [cart, setCart] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const getCart = () => JSON.parse(localStorage.getItem("cart") || "[]");
  const [form] = useForm();
  const navigate = useNavigate();

  const updateCartquantity = () => {
    const cart = getCart();
    setCart(cart);
  };

  useEffect(() => {
    updateCartquantity();

    const handleCartUpdate = () => {
      updateCartquantity();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  const handleDecrement = (cartItem: TCart) => {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      setCart([...cart]);
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new CustomEvent("cartUpdated"));
    }
  };

  const handleIncrement = (cartItem: TCart) => {
    cartItem.quantity++;
    setCart([...cart]);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent("cartUpdated"));
  };

  const handleDelete = (cartId: any) => {
    const updatedCart = cart.filter((item: TCart) => item.cart_id !== cartId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new CustomEvent("cartUpdated"));
    messageApi.open({
      type: "success",
      content: "Delete cart item",
    });
  };

  const total = cart.reduce(
    (acc, curr: TCart) => acc + curr.price * curr.quantity,
    0
  );

  const onFinish = () => {
    form.validateFields().then((values: any) => {
      const orders = cart?.map((order: TCart) => {
        return {
          product: order?.id,
          quantity: order?.quantity,
          total_price: order?.price * order?.quantity,
          color: order?.color?.name,
          size: order?.size,
          timeline: [
            {
              status: "pending",
              date: new Date().toISOString(),
              note: "Order Created",
            },
          ],
          ...values,
        };
      });
      navigate("/shop-payment", { state: { amount: total, data: orders } });
    });
  };

  return (
    <Container>
      {contextHolder}
      <div className="lg:py-14 md:py-12 py-10 sm:space-y-8 space-y-5">
        {cart.length < 1 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] space-y-3">
            <BsCartX className="size-36 opacity-15" />
            <h2 className="text-3xl text-secondary font-semibold">
              Your cart is currently empty.
            </h2>
            <p className="text-base text-secondary w-2/3 text-center">
              Before proceed to checkout you must add some products to your
              shopping cart. You will find a lot of interesting products on our
              "Shop" page.
            </p>
            <Link to="/shop">
              <Button>Return shop</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-7 mt-16 relative">
            <div className="bg-gray-50 px-6 py-7 rounded-md">
              <ShopCheckoutForm form={form} />
            </div>
            <div>
              <div className="bg-gray-50 p-7 space-y-5 rounded-md">
                <h2 className="uppercase text-center">Your Order</h2>
                <div className="p-3 bg-white rounded-md space-y-2">
                  <div className="flex justify-between">
                    <h5 className="text-lg font-semibold text-secondary">
                      PRODUCT
                    </h5>
                    <h5 className="text-lg font-semibold text-secondary">
                      SUBTOTAL
                    </h5>
                  </div>
                  <hr className="opacity-15 border-solid" />
                  {cart.map((item: TCart, index) => {
                    return (
                      <div key={index} className={`p-2 rounded-md`}>
                        <div className="flex gap-2 items-center justify-between">
                          <div className="flex gap-3 items-center">
                            <IoIosClose
                              className="size-6 cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(item.cart_id);
                              }}
                            />
                            <img
                              src={item.thumbnail}
                              className="size-16 object-cover rounded-md"
                              alt="product image"
                            />
                            <div className="space-y-1">
                              <p className="text-sm font-medium">{item.name}</p>
                              <div className="flex w-20 items-center justify-between rounded-full box-content h-6 border border-solid border-gray-300">
                                <FaMinus
                                  className="size-2 opacity-80 cursor-pointer h-full border-solid border-0 border-e px-2 border-gray-300"
                                  onClick={() => {
                                    handleDecrement(item);
                                  }}
                                />
                                <span className="text-sm font-medium">
                                  {item.quantity}
                                </span>
                                <FaPlus
                                  className="size-2 opacity-80 cursor-pointer h-full border-solid border-gray-300 border-0 border-l px-2"
                                  onClick={() => {
                                    handleIncrement(item);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="text-xl font-medium text-primary tracking-widest">
                            ${item.price * item.quantity}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <hr className="opacity-40" />
                  <div className="flex justify-between">
                    <h5 className="text-lg font-medium">Subtotal</h5>
                    <span className="text-lg text-secondary tracking-widest">
                      ${total}
                    </span>
                  </div>
                  <hr className="opacity-40" />
                  <div className="flex justify-between">
                    <h4 className="text-2xl font-semibold text-secondary">
                      Total
                    </h4>
                    <span className="text-2xl text-primary font-bold tracking-widest">
                      ${total}
                    </span>
                  </div>
                </div>
                <Button
                  onClick={onFinish}
                  type="primary"
                  className="primary-btn w-full"
                >
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ShopCheckOut;
