import { useState } from "react";
import { Modal, Button, Descriptions, Timeline, Divider, Image } from "antd";
import moment from "moment";
import { TOrder } from "../../../types/order.types";

const DetailsOrderModal = ({ record }: { record: TOrder }) => {
  const [open, setModalOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        className="w-full"
        onClick={() => setModalOpen(true)}
      >
        Details
      </Button>
      <Modal
        width={800}
        footer={null}
        centered
        open={open}
        onCancel={() => setModalOpen(false)}
      >
        {/* Order Information */}
        <Descriptions
          title="Order Information"
          bordered
          column={{ xl: 2, xs: 1 }}
          styles={{
            label: {
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "100px",
              paddingLeft: "10px",
              paddingRight: "10px",
            },
          }}
        >
          <Descriptions.Item label="Order ID" span={2}>
            {record.order_id}
          </Descriptions.Item>
          <Descriptions.Item label="Email" span={2}>
            {record.email}
          </Descriptions.Item>
          <Descriptions.Item label="Status">{record.status}</Descriptions.Item>
          <Descriptions.Item label="Total Price">
            ${record.total_price}
          </Descriptions.Item>
          <Descriptions.Item label="Pickup point">
            {record.pickup_point}
          </Descriptions.Item>
          <Descriptions.Item label="Quantity">
            {record.quantity}
          </Descriptions.Item>
          <Descriptions.Item label="Color">{record.color}</Descriptions.Item>
          <Descriptions.Item label="Size">{record.size}</Descriptions.Item>
        </Descriptions>

        <Divider />

        {/* Product Information */}
        <Descriptions
          title="Product Information"
          bordered
          column={{ xl: 2, xs: 1 }}
          styles={{
            label: {
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "90px",
              paddingLeft: "10px",
              paddingRight: "10px",
            },
          }}
        >
          <Descriptions.Item label="Name">
            {record.product.name}
          </Descriptions.Item>
          <Descriptions.Item label="Category">
            {record.product.category}
          </Descriptions.Item>
          <Descriptions.Item label="Brand">
            {record.product.brand}
          </Descriptions.Item>
          <Descriptions.Item label="Thumbnail">
            <Image
              width={100}
              src={record.product.thumbnail}
              alt={record.product.name}
            />
          </Descriptions.Item>
        </Descriptions>

        <Divider />

        {/* Timeline */}
        <div className="space-y-5">
          <h3 className="text-base font-bold">Order Timeline</h3>
          <Timeline>
            {record.timeline.map((event: any, index: number) => (
              <Timeline.Item
                key={index}
                color={event.status === "canceled" ? "red" : "blue"}
              >
                <p>
                  <strong>Status:</strong> {event.status}
                </p>
                <p>
                  <strong>Note:</strong> {event.note}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {moment(event.date).format("dddd, MMMM Do YYYY, hh:mm A")}
                </p>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>

        <Divider />

        {/* Shipping Address */}
        <Descriptions
          title="Billing Address"
          bordered
          column={{ xl: 2, xs: 1 }}
          styles={{
            label: {
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "120px",
              paddingLeft: "10px",
              paddingRight: "10px",
            },
          }}
        >
          <Descriptions.Item label="Street Address" span={2}>
            {record.street_address}
          </Descriptions.Item>
          <Descriptions.Item label="City">{record.city}</Descriptions.Item>
          <Descriptions.Item label="State">{record.state}</Descriptions.Item>
          <Descriptions.Item label="Zip Code">
            {record.zip_code}
          </Descriptions.Item>
          <Descriptions.Item label="Country">
            {record.country}
          </Descriptions.Item>
          <Descriptions.Item label="Phone">{record.phone}</Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  );
};

export default DetailsOrderModal;
