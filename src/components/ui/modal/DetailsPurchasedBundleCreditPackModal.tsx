import { useState } from "react";
import { Modal, Button, Descriptions, Table, Divider, Row, Col } from "antd";
import moment from "moment";
import { IBundleCreditPackResponse } from "../../../types/bundle-package.types";
import { ColumnsType } from "antd/es/table";

const DetailsPurchasedBundleCreditPackModal = ({
  record,
}: {
  record: IBundleCreditPackResponse;
}) => {
  const [open, setModalOpen] = useState(false);

  const attendanceColumns: ColumnsType<any> = [
    {
      align: "center",
      title: "S/N",
      dataIndex: "_id",
      key: "_id",
      render: (_: any, _record: any, index: number) => {
        return <>{index + 1}</>;
      },
    },
    {
      align: "center",
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text: string) => moment(text).format("dddd, MMMM Do YYYY"),
    },
    {
      align: "center",
      title: "Cage",
      dataIndex: "times",
      key: "cage",
      render: (times: any[]) =>
        times.map((time, index) => (
          <div key={index}>
            <p>{time.cage}</p>
          </div>
        )),
    },
    {
      align: "center",
      title: "Hours",
      dataIndex: "times",
      key: "hours",
      render: (times: any[]) =>
        times.map((time, index) => (
          <div key={index}>
            <p>{time.hour} Hour(s)</p>
          </div>
        )),
    },
    {
      align: "center",
      title: "Time Slot",
      dataIndex: "times",
      key: "time_slot",
      render: (times: any[]) =>
        times.map((time, index) => (
          <div key={index}>
            <p>
              {moment(time.start_time).format("hh:mm A")} -{" "}
              {moment(time.end_time).format("hh:mm A")}
            </p>
          </div>
        )),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={() => setModalOpen(true)}>
        Details
      </Button>
      <Modal
        width={800}
        footer={null}
        centered
        open={open}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24}>
            <h3 className="text-lg font-bold">Package Info</h3>
          </Col>
          <Col xs={24} sm={12}>
            <Descriptions bordered size="small" column={1}>
              <Descriptions.Item label="Package Name">
                {record.package}
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                {record.email}
              </Descriptions.Item>
              <Descriptions.Item label="Active">
                {record.active ? "Yes" : "No"}
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col xs={24} sm={12}>
            <Descriptions bordered size="small" column={1}>
              <Descriptions.Item label="Validity">
                {moment(record.validity).format("dddd, MMMM Do YYYY")}
              </Descriptions.Item>
              <Descriptions.Item label="Total Hours">
                {record.hours}
              </Descriptions.Item>
              <Descriptions.Item label="Pitching Machine">
                {record.piching_machine ? "Available" : "Not Available"}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Divider />

        <Table
          title={() => (
            <h3 className="text-base font-bold" style={{ margin: 0 }}>
              Attendance
            </h3>
          )}
          columns={attendanceColumns}
          dataSource={record.attendance}
          pagination={false}
          rowKey={(record) => record.date}
          size="small"
          scroll={{ x: 600 }} // Horizontal scroll for small screens
        />
      </Modal>
    </div>
  );
};

export default DetailsPurchasedBundleCreditPackModal;
