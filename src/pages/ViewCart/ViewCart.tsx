import { useEffect, useRef, useState } from "react";
import Container from "../../components/Container";
import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button, message } from "antd";
import { TCart } from "../../types/product.types";
import Table, { ColumnsType } from "antd/es/table";
import { IoCloseOutline } from "react-icons/io5";
import { FaMinus, FaPlus, FaSpinner } from "react-icons/fa";

const ViewCart = () => {
  const tableRef = useRef<any>(null);
  const [cart, setCart] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const getCart = () => JSON.parse(localStorage.getItem("cart") || "[]");
  const [loading, setLoading] = useState(true);

  const updateCartquantity = () => {
    const cart = getCart();
    setCart(cart);
    setLoading(false);
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

  const columns: ColumnsType<TCart> = [
    {
      width: 200,
      title: "PRODUCT",
      align: "center",
      key: "cart_id",
      dataIndex: "cart_id",
      render: (_, record) => {
        return (
          <div className="flex items-center gap-5 justify-center">
            <IoCloseOutline
              className="size-5 cursor-pointer"
              onClick={() => handleDelete(record?.cart_id)}
            />
            <Link to={`/shop/products/${record?.id}`} className="block">
              <img
                src={record.thumbnail}
                className="size-20 rounded-md object-cover"
                alt="product image"
              />
            </Link>
            <Link to={`/shop/products/${record?.id}`} className="block">
              <h3 className="w-60 text-base font-medium text-start">
                {record?.name}
              </h3>
            </Link>
          </div>
        );
      },
    },
    {
      width: 100,
      title: "PRICE",
      align: "center",
      key: "price",
      dataIndex: "price",
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">${text}</p>
      ),
    },
    {
      width: 130,
      title: "QUANTITY",
      align: "center",
      key: "quantity",
      dataIndex: "quantity",
      render: (text, record) => (
        <>
          <div className="flex w-24 mx-auto items-center justify-between rounded-full box-content h-6 border border-solid border-gray-300">
            <FaMinus
              className="size-2 opacity-80 cursor-pointer h-full border-solid border-0 border-e px-2 border-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                handleDecrement(record);
              }}
            />
            <span className="text-base font-medium">{text}</span>
            <FaPlus
              className="size-2 opacity-80 cursor-pointer h-full border-solid border-gray-300 border-0 border-l px-2"
              onClick={(e) => {
                e.stopPropagation();
                handleIncrement(record);
              }}
            />
          </div>
        </>
      ),
    },
    {
      width: 100,
      title: "SUBTOTAL",
      align: "center",
      key: "subtotal",
      dataIndex: "subtotal",
      render: (_, record) => (
        <p className="font-medium text-lg leading-5 text-primary">
          ${record?.price * record?.quantity}
        </p>
      ),
    },
  ];

  const props: any = {
    bordered: true,
    loading: false,
    pagination: false,
    showHeader: true,
    size: "middle",
  };

  return (
    <Container>
      {contextHolder}
      {loading ? (
        <div className="h-svh w-full flex justify-center items-center">
          <FaSpinner className="animate-spin size-8 text-primary" />
        </div>
      ) : (
        <div className="lg:py-14 md:py-12 py-10 sm:space-y-8 space-y-5">
          {cart.length < 1 ? (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] space-y-3">
              <BsCartX className="size-36 opacity-15" />
              <h2 className="text-3xl text-secondary font-semibold">
                Your cart is currently empty.
              </h2>
              <p className="text-base text-secondary w-2/3 text-center">
                Before proceed to checkout you must add some products to your
                shopping cart. You will find a lot of interesting products on
                our "Shop" page.
              </p>
              <Link to="/shop">
                <Button>Return shop</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-5 mt-16 min-h-[calc(100vh-120px)] relative">
              <div className="col-span-2">
                <Table
                  {...props}
                  ref={tableRef}
                  columns={columns}
                  rowKey={(record) => record?.id}
                  dataSource={cart || []}
                />
              </div>
              {/* <div className="col-span-2">
              <div className="flex items-center">
                {cart?.map((cartItem) => {
                  return <div></div>;
                })}
              </div>
            </div> */}
              <div className="col-span-1 w-full">
                <div className="p-6 border-2 border-solid top-24 sticky border-gray-200 rounded-md space-y-5">
                  <h3 className="text-2xl text-secondary uppercase font-semibold">
                    Cart Totals
                  </h3>
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
                  <Link to="/checkout" className="block">
                    <Button
                      type="primary"
                      size="large"
                      className="w-full primary-btn-2"
                    >
                      Procced to checkout
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Container>
  );
};

export default ViewCart;
