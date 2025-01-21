import { ColumnsType } from "antd/es/table";
import Paragraph from "antd/es/typography/Paragraph";
import moment from "moment";
import { useState } from "react";
import DataTable from "./DataTable";
import DataPagination from "./DataPagination";
import { useAppSelector } from "../hooks/useAppHooks";
import { selectCurrentUser } from "../redux/features/auth/authSlice";

const PaymentSection = ({
  paymentsHook,
  title,
}: {
  paymentsHook: any;
  title: string;
}) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(30);
  const user = useAppSelector(selectCurrentUser);

  const { data, isLoading } = paymentsHook({
    email: user?.email,
    params: {
      page,
      limit,
    },
  });

  const columns: ColumnsType<any> = [
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
      width: 160,
      align: "center",
      title: "Payment Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">
          {moment(text).format("MMMM ddd Do YYYY")}
        </p>
      ),
    },
  ];

  const handlePageChange = (page: number, size: number) => {
    setPage(page);
    setLimit(size);
  };

  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <h2 className="font-semibold text-2xl text-[#006166]">{title}</h2>
        <p className="text-[#838383] font-medium text-base">
          Total {data?.count || 0} payment
        </p>
      </div>
      <DataTable
        columns={columns}
        data={data?.results || []}
        loading={isLoading}
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
