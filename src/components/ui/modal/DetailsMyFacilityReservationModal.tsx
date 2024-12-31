import { Button, Modal, Descriptions, Divider, Table, Image } from "antd";
import { IAddon, IFacilityReservation } from "../../../types/facility.types";
import { useState } from "react";
import moment from "moment";
import { collectDateStatus } from "../../../utils/collectDateStatus";
import { ColumnsType } from "antd/es/table";

const DetailsMyFacilityReservationModal = ({
  record,
}: {
  record: IFacilityReservation;
}) => {
  const [open, setModalOpen] = useState(false);

  const bookingColumns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text: string) => moment(text).format("dddd, MMMM Do YYYY"),
    },
    {
      title: "Lane",
      dataIndex: "lane",
      key: "lane",
    },
    {
      title: "Time Slot",
      dataIndex: "time_slot",
      key: "time_slot",
    },
    {
      title: "Status",
      dataIndex: "date",
      key: "date",
      render: (text: string) => {
        const status = collectDateStatus(text);
        return (
          <p className="font-medium text-sm leading-5 text-[#151515]">
            {status === "completed" && (
              <div className="py-1 bg-[#D6FFC8] rounded-md text-center text-[#0D2B03]">
                Completed
              </div>
            )}
            {status === "today" && (
              <div className="py-1 bg-yellow-200 text-yellow-800 rounded-md text-center">
                Today
              </div>
            )}
            {status === "upcoming" && (
              <div className="py-1 bg-[#FFF3C8] rounded-md text-center text-[#6A5300]">
                Upcoming
              </div>
            )}
          </p>
        );
      },
    },
  ];

  const addonColumns: ColumnsType<IAddon> = [
    {
      title: "Addon Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Hours",
      dataIndex: "hours",
      key: "hours",
      render: (text: number) => (
        <p>{text === 0.5 ? "30 minutes" : `${text} hour(s)`}</p>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text: string) => <Image width={60} src={text} />,
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setModalOpen(true)}>
        Details
      </Button>
      <Modal
        width={900}
        footer={null}
        title="Facility Reservation Details"
        centered
        open={open}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
      >
        <Descriptions title="Client Info" bordered column={2}>
          <Descriptions.Item label="First Name">
            {record?.first_name}
          </Descriptions.Item>
          <Descriptions.Item label="Last Name">
            {record?.last_name}
          </Descriptions.Item>
          <Descriptions.Item label="Phone">{record?.phone}</Descriptions.Item>
          <Descriptions.Item label="Age">{record?.age}</Descriptions.Item>
          <Descriptions.Item label="Email">{record?.email}</Descriptions.Item>
        </Descriptions>

        <Divider />

        {record?.facility ? (
          <Descriptions title="Facility Info" bordered column={2}>
            <Descriptions.Item label="Facility Name">
              {record?.facility?.facility_name}
            </Descriptions.Item>
            <Descriptions.Item label="Sport">{record?.sport}</Descriptions.Item>
            <Descriptions.Item label="Duration">
              {record?.facility?.duration} mins
            </Descriptions.Item>
            <Descriptions.Item label="Price">
              ${record?.facility?.price}
            </Descriptions.Item>
            <Descriptions.Item label="Lanes">
              <div className="flex gap-2 flex-wrap">
                {record?.facility?.lanes.map((lane: string) => {
                  return (
                    <span className="bg-gray-100 px-2 py-1 rounded-md capitalize">
                      {lane}
                    </span>
                  );
                })}
              </div>
            </Descriptions.Item>
            <Descriptions.Item label="Description" span={2}>
              {record?.facility?.description}
            </Descriptions.Item>
          </Descriptions>
        ) : (
          <div className="text-base font-medium">Facility info not found</div>
        )}

        <Divider />

        <Descriptions title="Address" bordered column={2}>
          <Descriptions.Item label="Street Address">
            {record?.street_address}
          </Descriptions.Item>
          <Descriptions.Item label="City">{record?.city}</Descriptions.Item>
          <Descriptions.Item label="State">{record?.state}</Descriptions.Item>
          <Descriptions.Item label="Zip Code">
            {record?.zip_code}
          </Descriptions.Item>
        </Descriptions>

        <Divider />

        <Table
          title={() => <h3 className="text-base font-bold">Bookings</h3>}
          columns={bookingColumns}
          dataSource={record?.bookings}
          pagination={false}
          rowKey="date"
        />

        <Divider />

        {record?.addons.length > 0 && (
          <Table
            title={() => <h3 className="text-base font-bold">Addons</h3>}
            columns={addonColumns}
            dataSource={record?.addons}
            pagination={false}
          />
        )}
      </Modal>
    </>
  );
};

export default DetailsMyFacilityReservationModal;
