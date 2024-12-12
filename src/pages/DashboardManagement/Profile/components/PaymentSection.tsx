import { ColumnsType } from "antd/es/table";
import Paragraph from "antd/es/typography/Paragraph";
import moment from "moment";
import { useState } from "react";
import { usePaymentListQuery } from "../../../../redux/features/payment/paymentApi";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../redux/features/auth/authSlice";
import DataTable from "../../../../common/DataTable";
import DataPagination from "../../../../common/DataPagination";
import { Select } from "antd";

const PaymentSection = () => {
  const [service, setService] = useState<string | undefined>(undefined);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(30);
  const user = useSelector(selectCurrentUser);
  const { data, isLoading, isFetching } = usePaymentListQuery({
    id: user?._id,
    params: { service, page, limit },
  });

  const columns: ColumnsType = [
    {
      width: 70,
      align: "center",
      title: "S/N",
      dataIndex: "_id",
      key: "_id",
      render: (_, _record, index) => {
        return <>{page * limit + index + 1 - limit}</>;
      },
    },
    {
      width: 300,
      align: "center",
      title: "Transection ID",
      dataIndex: "transaction_id",
      key: "transaction_id",
      render: (text) => (
        <Paragraph
          copyable={{
            text: async () =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve(text);
                }, 500);
              }),
          }}
        >
          {text}
        </Paragraph>
      ),
    },
    {
      width: 120,
      align: "center",
      title: "Pay",
      dataIndex: "amount",
      key: "amount",
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">${text}</p>
      ),
    },
    {
      width: 140,
      align: "center",
      title: "Payment Service",
      dataIndex: "service",
      key: "service",
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515] capitalize">
          {text}
        </p>
      ),
    },
    {
      width: 160,
      align: "center",
      title: "Payment Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">
          {moment(text).format("MMMM Do YYYY")}
        </p>
      ),
    },
    // {
    //   width: 80,
    //   align: "center",
    //   fixed: "right",
    //   title: "Action",
    //   dataIndex: "action",
    //   key: "action",
    //   render: (_, record) => {
    //     const items = [
    //       {
    //         key: "1",
    //         label: <UpdatePaymentModal record={record} />,
    //       },
    //       {
    //         key: "2",
    //         label: <DeletePaymentPopup id={record?._id} />,
    //       },
    //     ];
    //     return (
    //       <Dropdown menu={{ items }}>
    //         <BsThreeDots className="size-5 cursor-pointer" />
    //       </Dropdown>
    //     );
    //   },
    // },
  ];

  const handlePageChange = (page: number, size: number) => {
    setPage(page);
    setLimit(size);
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const onChange = (value: string) => {
    if (value == "all") {
      setService(undefined);
    } else {
      setService(value);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <h2 className="font-semibold text-xl text-[#006166]">Payment List</h2>
          <p className="text-[#838383] font-medium text-base">
            Total {data?.count || 0} payment
          </p>
        </div>
        <Select
          className="w-48"
          showSearch
          defaultValue={"all"}
          optionFilterProp="children"
          onChange={(value) => onChange(value)}
          filterOption={filterOption}
          options={[
            {
              label: "All Service",
              value: "all",
            },
            {
              label: "Membership",
              value: "membership",
            },
            {
              label: "Appointment",
              value: "appointment",
            },
            {
              label: "Facility",
              value: "facility",
            },
            {
              label: "Class",
              value: "class",
            },
            {
              label: "Bootcamp",
              value: "course",
            },
            {
              label: "Event",
              value: "event",
            },
          ]}
        />
      </div>
      <DataTable
        columns={columns}
        data={data?.results || []}
        loading={isLoading || isFetching}
      />
      <DataPagination
        onChange={handlePageChange}
        page={page}
        limit={limit}
        total={data?.count || 0}
      />
    </div>
  );
};

export default PaymentSection;
