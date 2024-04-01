/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import { useState } from "react";

const PrivacyPolicy = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setOpen(true)}>{children}</div>
      <Modal
        width={1200}
        maskClosable={false}
        title="Terms & Conditions"
        centered
        open={open}
        onCancel={() => setOpen(false)}
      >
        <div className="text-[#6B6B6B] font-medium leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          consectetur hic veritatis dicta at porro autem mollitia. Dolores sequi
          facere, quaerat eveniet fuga nisi nam. Ducimus aperiam error at nisi
          id quo est necessitatibus iste odio dolores, veritatis ullam inventore
          debitis, minima neque. Optio quidem dolorem, sed fuga placeat rem
          laborum totam inventore saepe molestias neque in, tenetur ipsa! Unde
          tempora maiores, cumque earum expedita dolores ut explicabo neque
          tenetur facilis animi ea libero provident labore repellendus officia
          fugit hic voluptate eligendi illo consectetur? Eum asperiores
          perspiciatis molestiae dolores distinctio repellat aperiam animi
          libero. Voluptates error corporis adipisci tenetur sed?
        </div>
      </Modal>
    </div>
  );
};

export default PrivacyPolicy;
