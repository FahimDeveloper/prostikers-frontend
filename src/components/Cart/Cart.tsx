import { Drawer } from "antd";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        onClick={showDrawer}
        className="flex items-center gap-2 text-md cursor-pointer"
      >
        <IoCartOutline className="size-6" /> Cart
      </div>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default Cart;
