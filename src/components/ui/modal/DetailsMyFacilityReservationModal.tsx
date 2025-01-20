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

  const bookingColumns: ColumnsType<any> = [
    {
      align: "center",
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text: string) => moment(text).format("dddd, MMMM Do YYYY"),
    },
    {
      align: "center",
      title: "Lane",
      dataIndex: "lane",
      key: "lane",
    },
    {
      align: "center",
      title: "Time Slot",
      dataIndex: "time_slot",
      key: "time_slot",
    },
    {
      align: "center",
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
      align: "center",
      title: "Addon Name",
      dataIndex: "name",
      key: "name",
    },
    {
      align: "center",
      title: "Hours",
      dataIndex: "hours",
      key: "hours",
      render: (text: number) => (
        <p>{text === 0.5 ? "30 minutes" : `${text} hour(s)`}</p>
      ),
    },
    {
      align: "center",
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
        <Descriptions title="Client Info" bordered column={{ xl: 2, xs: 1 }}>
          <Descriptions.Item label="First Name">
            {record?.user?.first_name}
          </Descriptions.Item>
          <Descriptions.Item label="Last Name">
            {record?.user?.last_name ? record?.user?.last_name : "Not provided"}
          </Descriptions.Item>
          <Descriptions.Item label="Phone">
            {record?.user?.phone ? record?.user?.phone : "Not provided"}
          </Descriptions.Item>
          <Descriptions.Item label="Email">{record?.email}</Descriptions.Item>
        </Descriptions>

        <Divider />

        {record?.facility ? (
          <Descriptions
            title="Facility Info"
            bordered
            column={{ xl: 2, xs: 1 }}
          >
            <Descriptions.Item label="Facility Name" span={1}>
              {record?.facility?.facility_name}
            </Descriptions.Item>
            <Descriptions.Item label="Sport" span={1}>
              {record?.sport}
            </Descriptions.Item>
          </Descriptions>
        ) : (
          <div className="text-base font-medium">Facility info not found</div>
        )}

        <Divider />

        {record?.payment ? (
          <Descriptions title="Payment Info" bordered column={{ xl: 2, xs: 1 }}>
            <Descriptions.Item label="Transaction ID" span={1}>
              {record?.payment?.transaction_id}
            </Descriptions.Item>
            <Descriptions.Item label="Pay" span={1}>
              ${record?.payment?.amount}
            </Descriptions.Item>
          </Descriptions>
        ) : (
          <div className="text-base font-medium">Payment info not found</div>
        )}

        <Divider />

        <Table
          title={() => <h3 className="text-base font-bold">Bookings</h3>}
          columns={bookingColumns}
          dataSource={record?.bookings}
          pagination={false}
          rowKey="date"
          size="small"
          scroll={{ x: 600 }}
        />

        <Divider />

        {record?.addons.length > 0 && (
          <Table
            title={() => <h3 className="text-base font-bold">Addons</h3>}
            columns={addonColumns}
            dataSource={record?.addons}
            pagination={false}
            size="small"
            scroll={{ x: 600 }}
          />
        )}
      </Modal>
    </>
  );
};

export default DetailsMyFacilityReservationModal;
