import { useState } from "react";
import { useOrdersQuery } from "../../../redux/features/order/orderApi";
import { ColumnsType } from "antd/es/table";
import { TOrder } from "../../../types/order.types";
import { Button, Dropdown, Image, Select } from "antd";
import OrderTImelineModal from "../../../components/ui/modal/OrderTImelineModal";
import DetailsOrderModal from "../../../components/ui/modal/DetailsOrderModal";
import CancelOrderModal from "../../../components/ui/modal/CancelOrderModal";
import { BsThreeDots } from "react-icons/bs";
import DataTable from "../../../common/DataTable";
import DataPagination from "../../../common/DataPagination";
import { useAppSelector } from "../../../hooks/useAppHooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";

const MyShopPurchase = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(30);
  const user = useAppSelector(selectCurrentUser);
  const [status, setStatus] = useState<string | undefined>(undefined);
  const handlePageChange = (page: number, size: number) => {
    setPage(page);
    setLimit(size);
  };
  const { data, isLoading, isFetching } = useOrdersQuery({
    email: user?.email,
    params: {
      page,
      limit,
      status,
    },
  });

  const columns: ColumnsType<TOrder> = [
    {
      align: "center",
      width: 60,
      title: "SN",
      dataIndex: "_id",
      key: "_id",
      render: (_, __, index) => index + 1 + (page - 1) * limit,
    },

    {
      align: "center",
      title: "Product",
      dataIndex: "product",
      key: "product",
      width: 260,
      render: (text) => (
        <div className="flex gap-2 items-center justify-center">
          <Image
            src={text?.thumbnail}
            style={{ width: 60, height: 60, objectFit: "cover" }}
          />
          <p className="font-medium max-w-60 truncate text-sm leading-5 text-[#151515]">
            {text?.name}
          </p>
        </div>
      ),
    },
    {
      align: "center",
      title: "Color",
      dataIndex: "color",
      key: "color",
      width: 100,
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">{text}</p>
      ),
    },
    {
      align: "center",
      title: "Size",
      dataIndex: "size",
      key: "size",
      width: 100,
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">{text}</p>
      ),
    },
    {
      align: "center",
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: 100,
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">{text}</p>
      ),
    },
    {
      align: "center",
      title: "Total Price",
      dataIndex: "total_price",
      key: "total_price",
      width: 100,
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">{text}</p>
      ),
    },
    {
      align: "center",
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
      render: (text) => (
        <Button
          className="capitalize"
          type={text !== "canceled" ? "primary" : "default"}
          danger={text === "canceled" ? true : false}
          ghost={text !== "canceled" ? true : false}
        >
          {text}
        </Button>
      ),
    },
    {
      fixed: "right",
      align: "center",
      title: "Timeline",
      dataIndex: "timeline",
      key: "timeline",
      width: 100,
      render: (_, record) => <OrderTImelineModal record={record} />,
    },
    {
      width: 80,
      align: "center",
      fixed: "right",
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        const firstItems = [
          {
            key: "1",
            label: <DetailsOrderModal record={record} />,
          },
          {
            key: "2",
            label: <CancelOrderModal id={record?._id} />,
          },
        ];
        const secondItems = [
          {
            key: "1",
            label: <DetailsOrderModal record={record} />,
          },
        ];
        return (
          <Dropdown
            placement="bottomCenter"
            menu={
              record?.status === "pending"
                ? { items: firstItems }
                : { items: secondItems }
            }
          >
            <BsThreeDots className="size-5 cursor-pointer" />
          </Dropdown>
        );
      },
    },
  ];

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const onFilterChange = (value: string) => {
    if (value == "all") {
      setStatus(undefined);
    } else {
      setStatus(value);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex sm:flex-nowrap flex-wrap justify-between items-end">
        <div className="space-y-1">
          <h2 className="font-semibold text-nowrap text-[28px] leading-9 text-[#111827]">
            My Shop Purchase
          </h2>
          <p className="text-[#838383] font-medium text-lg">
            Total {data?.count || 0} reservations
          </p>
        </div>
        <div className="w-full flex justify-end">
          <Select
            className="sm:w-36 w-44"
            showSearch
            defaultValue={"all"}
            optionFilterProp="children"
            onChange={onFilterChange}
            filterOption={filterOption}
            options={[
              {
                label: "All Orders",
                value: "all",
              },
              {
                label: "Pending",
                value: "pending",
              },
              {
                label: "Processing",
                value: "processing",
              },
              {
                label: "Shipped",
                value: "shipped",
              },
              {
                label: "Delivered",
                value: "delivered",
              },
              {
                label: "Canceled",
                value: "canceled",
              },
            ]}
          />
        </div>
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

export default MyShopPurchase;
