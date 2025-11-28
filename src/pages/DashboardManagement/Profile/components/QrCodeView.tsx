import { useState } from "react";
import { Modal, QRCode } from "antd";

const QrCodeView = ({ email }: { email: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-3">
      <h3 className="text-xl text-[#006166] font-medium">Your QR Code</h3>
      <div
        className="inline-block p-2 bg-white rounded-xl shadow cursor-pointer hover:scale-105 transition-transform"
        onClick={() => setOpen(true)}
      >
        <QRCode errorLevel="H" value={email} />
      </div>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        centered
        className="text-center"
      >
        <div className="flex flex-col items-center gap-4 py-6">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <QRCode errorLevel="H" value={email} size={360} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default QrCodeView;
