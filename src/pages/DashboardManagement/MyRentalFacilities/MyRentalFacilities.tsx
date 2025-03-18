import { Select } from "antd";
import DataPagination from "../../../common/DataPagination";
import DataTable from "../../../common/DataTable";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useState } from "react";
import { ColumnsType } from "antd/es/table";
import { useGetUserFacilityReservationsQuery } from "../../../redux/features/facility/facilityApi";
import { IFacilityReservation } from "../../../types/facility.types";
import moment from "moment";
import DetailsMyFacilityReservationModal from "../../../components/ui/modal/DetailsMyFacilityReservationModal";
import PaymentSection from "../../../common/PaymentSection";
import { useFacilityPaymentsQuery } from "../../../redux/features/payment/paymentApi";

const MyRentalFacilities = () => {
  const user = useSelector(selectCurrentUser);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [sport, setSport] = useState<string | undefined>(undefined);
  const { data, isLoading, isFetching } = useGetUserFacilityReservationsQuery({
    email: user?.email,
    sport,
    page,
    limit,
  });

  const handlePageChange = (page: number, size: number) => {
    setPage(page);
    setLimit(size);
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const onFilterChange = (value: string) => {
    if (value == "all") {
      setSport(undefined);
    } else {
      setSport(value);
    }
  };

  const columns: ColumnsType<IFacilityReservation> = [
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
      width: 100,
      align: "center",
      title: "Facility Name",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => (
        <p className="font-medium text-sm leading-5 text-[#151515] capitalize">
          {record?.facility ? record?.facility?.facility_name : "Not Found"}
        </p>
      ),
    },
    {
      width: 80,
      align: "center",
      title: "Sport",
      dataIndex: "sport",
      key: "sport",
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515] capitalize">
          {text}
        </p>
      ),
      sorter: (a, b) => a.sport.localeCompare(b.sport),
    },
    {
      width: 80,
      align: "center",
      title: "Pay",
      dataIndex: "payment",
      key: "payment",
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515] capitalize">
          ${text.amount}
        </p>
      ),
    },
    {
      width: 120,
      align: "center",
      title: "Purchase Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">
          {moment(text).format("ddd MMM Do YYYY")}
        </p>
      ),
    },
    {
      fixed: "right",
      width: 60,
      align: "center",
      title: "Details",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => (
        <DetailsMyFacilityReservationModal record={record} />
      ),
    },
  ];
  return (
    <div className="lg:pb-14 md:pb-12 pb-10 space-y-5">
      <div className="flex sm:flex-nowrap flex-wrap justify-between items-end">
        <div className="space-y-1">
          <h2 className="font-semibold text-nowrap text-[28px] leading-9 text-[#111827]">
            Rental Facility Reservations
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
                label: "All Sport",
                value: "all",
              },
              {
                label: "Cricket",
                value: "cricket",
              },
              {
                label: "Soccer",
                value: "soccer",
              },
              {
                label: "Baseball",
                value: "baseball",
              },
              {
                label: "Softball",
                value: "softball",
              },
              {
                label: "Field Hockey",
                value: "field hockey",
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
      <PaymentSection
        paymentsHook={useFacilityPaymentsQuery}
        title="Facility Resevation/Bundle Credit Payments"
      />
    </div>
  );
};

export default MyRentalFacilities;
