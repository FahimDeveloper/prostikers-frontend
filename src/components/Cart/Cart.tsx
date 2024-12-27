import { Badge, Button, Drawer, message } from "antd";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { TCart } from "../../types/store.types";
import { Link, useNavigate } from "react-router-dom";
import { BsCartX } from "react-icons/bs";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const getCart = () => JSON.parse(localStorage.getItem("cart") || "[]");

  const updateCartCount = () => {
    const cart = getCart();
    setCartCount(cart.length);
    setCart(cart);
  };

  useEffect(() => {
    updateCartCount();

    const handleCartUpdate = () => {
      updateCartCount();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  const handleDecrement = (cartItem: TCart) => {
    if (cartItem.count > 1) {
      cartItem.count--;
      setCart([...cart]);
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new CustomEvent("cartUpdated"));
    }
  };

  const handleIncrement = (cartItem: TCart) => {
    cartItem.count++;
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

  const onNavigate = (id: string) => {
    navigate(`/shop/products/${id}`);
    setOpen(false);
  };

  return (
    <>
      {contextHolder}
      <div
        onClick={showDrawer}
        className="flex items-center gap-2 text-md cursor-pointer"
      >
        <Badge count={cartCount}>
          <IoCartOutline className="size-6" />
        </Badge>
        Cart
      </div>
      <Drawer
        className="cart-drawer"
        title="Shopping Cart"
        onClose={onClose}
        open={open}
      >
        {cart.length < 1 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] space-y-2">
            <BsCartX className="size-24 opacity-15" />
            <p className="text-xl text-secondary font-semibold">
              No products in the cart.
            </p>
            <Link to="/shop" onClick={() => setOpen(false)}>
              <Button>Return shop</Button>
            </Link>
          </div>
        ) : (
          <div className="relative h-full">
            {cart?.map((item: TCart, index) => {
              return (
                <div
                  key={index}
                  className={`flex gap-5 justify-between flex-nowrap cursor-pointer hover:bg-gray-100 p-2 rounded-md ${
                    index > 0 &&
                    "border-t border-0 pt-2 border-solid border-gray-300"
                  }`}
                  onClick={() => onNavigate(item.id)}
                >
                  <div className="flex gap-2">
                    <img
                      src={item.thumbnail}
                      className="size-20 object-cover rounded-md"
                      alt="product image"
                    />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">
                        {item.name} - {item.color?.color_name} - {item.size}
                      </p>
                      <div className="flex w-20 items-center justify-between rounded-full box-content h-6 border border-solid border-gray-300">
                        <FaMinus
                          className="size-2 opacity-80 cursor-pointer h-full border-solid border-0 border-e px-2 border-gray-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDecrement(item);
                          }}
                        />
                        <span className="text-sm font-medium">
                          {item.count}
                        </span>
                        <FaPlus
                          className="size-2 opacity-80 cursor-pointer h-full border-solid border-gray-300 border-0 border-l px-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleIncrement(item);
                          }}
                        />
                      </div>
                      <div className="text-sm font-medium text-primary tracking-widest">
                        <span>
                          {item.count} <IoIosClose className="size-3" />
                        </span>
                        ${item.price}
                      </div>
                    </div>
                  </div>
                  <IoIosClose
                    className="size-6 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(item.cart_id);
                    }}
                  />
                </div>
              );
            })}
            <div className="border-0 border-t border-solid absolute bottom-0 pt-2 space-y-2 border-gray-300 bg-white w-full">
              <div className="text-right">
                <span className="text-lg font-medium text-primary">Total:</span>
                <span className="text-lg font-medium text-primary tracking-widest">
                  $
                  {cart.reduce(
                    (acc, item: TCart) => acc + item.price * item.count,
                    0
                  )}
                </span>
              </div>

              <div className="space-y-1">
                <Link
                  to="/cart"
                  className="block"
                  onClick={() => setOpen(false)}
                >
                  <Button
                    type="default"
                    size="large"
                    className="w-full font-medium tracking-widest"
                  >
                    View Cart
                  </Button>
                </Link>
                <Link
                  to="/checkout"
                  className="block"
                  onClick={() => setOpen(false)}
                >
                  <Button
                    type="primary"
                    size="large"
                    className="w-full bg-primary text-white font-medium tracking-widest"
                  >
                    Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Drawer>
    </>
  );
};

export default Cart;
