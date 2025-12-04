import { useEffect, useState } from "react";
import { Modal } from "antd";
import promotion from "../../../assets/images/promotions/popup-promotion-1.jpg";
import { Link } from "react-router-dom";

const BlackFridayGiftModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isClosed = sessionStorage.getItem("gift_black_friday_modal_closed");

    if (!isClosed) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("gift_black_friday_modal_closed", "true");
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onCancel={handleClose}
      footer={null}
      closable={true}
      centered
      width={500}
    >
      <Link
        to="/black-friday/gift-cards"
        onClick={handleClose}
        className="block"
      >
        <img
          src={promotion}
          alt="Black Friday"
          className="w-full h-full pt-5 rounded-md"
        />
      </Link>
    </Modal>
  );
};

export default BlackFridayGiftModal;
