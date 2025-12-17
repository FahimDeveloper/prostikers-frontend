import { useState } from "react";
import { Modal, Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const NORMAL_CREDIT_PRICE = 37.5;
const ACADEMY_CREDIT_PRICE = 40;

export default function AddMoreCreditModal({
  credits,
  package_name,
}: {
  credits: { session_credit: string; machine_credit?: string };
  package_name: string;
}) {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  let totalPrice;
  if (package_name === "youth training membership") {
    totalPrice = (quantity * ACADEMY_CREDIT_PRICE).toFixed(2);
  } else {
    totalPrice = (quantity * NORMAL_CREDIT_PRICE).toFixed(2);
  }

  const increase = () => setQuantity((prev) => (prev < 4 ? prev + 1 : 4));
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleOk = () => {
    const currentMachine = Number(credits.machine_credit) || 0;
    let newMachine = currentMachine;
    let finalMachine;
    if (package_name === "youth training membership") {
      newMachine = currentMachine;
    } else {
      finalMachine = newMachine > 4 ? 4 : newMachine;
    }

    navigate("/credit-payment", {
      state: {
        data: {
          session_credit: quantity,
          machine_credit: finalMachine,
        },
        amount: totalPrice,
      },
    });

    setOpen(false);
    setQuantity(1);
  };

  const onCancel = () => {
    setOpen(false);
    setQuantity(1);
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add Credit
      </Button>

      <Modal
        title="Add More Credit"
        open={open}
        onOk={handleOk}
        onCancel={onCancel}
        okText="Confirm"
      >
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="flex items-center gap-4 text-xl font-semibold">
            <Button
              shape="circle"
              icon={<MinusOutlined />}
              onClick={decrease}
            />
            <span className="min-w-[40px] text-center">{quantity}</span>
            <Button shape="circle" icon={<PlusOutlined />} onClick={increase} />
          </div>

          <div className="text-lg mt-4">
            Total Price: <strong>${totalPrice}</strong>
          </div>
        </div>
      </Modal>
    </>
  );
}
