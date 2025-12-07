import { Modal } from "antd";
import { useEffect, useState } from "react";
import promotion from "../../../assets/images/promotions/popup-promotion-3.jpg";
import { Link } from "react-router-dom";

const BlackFridayMembershipModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isClosed = sessionStorage.getItem(
      "membership_black_friday_modal_closed"
    );

    if (!isClosed) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("membership_black_friday_modal_closed", "true");
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
        to="/black-friday/membership"
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

export default BlackFridayMembershipModal;
