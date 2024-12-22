import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useState } from "react";
import { useGetPurchasedBundlePackagesQuery } from "../../../redux/features/purchasedBundlePackage/purchasedBundlePackageApi";
import DataTable from "../../../common/DataTable";
import DataPagination from "../../../common/DataPagination";
import { ColumnsType } from "antd/es/table";
import { IBundleCreditPackResponse } from "../../../types/bundle-package.types";
import moment from "moment";

const MyBundleCreditPacks = () => {
  const user = useSelector(selectCurrentUser);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [active, setActive] = useState<boolean | undefined>(undefined);
  const [pichingMachine, setPichingMachine] = useState<boolean | undefined>(
    undefined
  );
  const { data, isLoading, isFetching } = useGetPurchasedBundlePackagesQuery({
    email: user?.email!,
    params: { active, piching_machine: pichingMachine, page, limit },
  });

  const handlePageChange = (page: number, size: number) => {
    setPage(page);
    setLimit(size);
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const columns: ColumnsType<IBundleCreditPackResponse> = [
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
      width: 240,
      align: "center",
      title: "Package Name",
      dataIndex: "package",
      key: "package",
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515] capitalize">
          {text}
        </p>
      ),
    },
    {
      width: 180,
      align: "center",
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515] capitalize">
          {text}
        </p>
      ),
    },
    {
      width: 120,
      align: "center",
      title: "Package Hours",
      dataIndex: "hours",
      key: "hours",
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515] capitalize">
          {text}
        </p>
      ),
    },
    {
      width: 120,
      title: "Package Validity",
      align: "center",
      dataIndex: "validity",
      key: "validity",
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515] capitalize">
          {moment(text).format("ddd, MMM Do YYYY")}
        </p>
      ),
    },
    {
      width: 120,
      fixed: "right",
      title: "Piching Machine",
      align: "center",
      dataIndex: "pichine_machine",
      key: "pichine_machine",
      render: (text) => (text ? "Yes" : "NO"),
    },
    {
      width: 120,
      fixed: "right",
      title: "Activity",
      align: "center",
      dataIndex: "active",
      key: "active",
      render: (text) =>
        text ? (
          <div className="w-full rounded-sm text-[#0F3808] bg-[#CFFFC8] py-1">
            Active
          </div>
        ) : (
          <div className="w-full rounded-sm text-[#A71616] bg-[#FFC8C8] py-1">
            In Active
          </div>
        ),
      sorter: (a: { active: boolean }, b: { active: boolean }) =>
        Number(a.active) - Number(b.active),
    },
  ];
  return (
    <div className="lg:pb-14 md:pb-12 pb-10 space-y-5">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-semibold text-[28px] leading-9 text-[#111827]">
            Bundle Pack
          </h2>
          <p className="text-[#838383] font-medium text-lg">
            Total {data?.count || 0} bundle pack
          </p>
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

export default MyBundleCreditPacks;
