import { Button, Modal, Timeline } from "antd";
import { useState } from "react";
import { TOrder } from "../../../types/order.types";
import moment from "moment";

const OrderTImelineModal = ({ record }: { record: TOrder }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} color="primary" variant="outlined">
        Timeline
      </Button>
      <Modal
        width={400}
        open={open}
        title="Order Timeline"
        centered
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <div className="text-center space-y-7 mt-7">
          {/* <h3 className="text-lg font-semibold">Order Timeline</h3> */}
          <Timeline
            mode="right"
            items={record?.timeline?.map((timeline) => {
              return {
                label: (
                  <h4 className="capitalize font-semibold text-sm">
                    {timeline.status}
                  </h4>
                ),
                color: timeline?.status !== "canceled" ? "green" : "red",
                children: (
                  <div className="space-y-1">
                    <span className="font-medium text-sm">
                      {moment(timeline.date).format("ddd MMM Do YYYY")}
                    </span>
                    <p>{timeline.note}</p>
                  </div>
                ),
              };
            })}
          />
        </div>
      </Modal>
    </>
  );
};

export default OrderTImelineModal;
