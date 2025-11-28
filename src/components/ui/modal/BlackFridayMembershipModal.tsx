import { Modal } from "antd";
import { useEffect, useState } from "react";
import promotion from "../../../assets/images/promotions/popup-promotion-2.jpg";

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
      width={800}
    >
      <img
        src={promotion}
        alt="Black Friday"
        className="w-full pt-5 rounded-md"
      />
    </Modal>
  );
};

export default BlackFridayMembershipModal;
