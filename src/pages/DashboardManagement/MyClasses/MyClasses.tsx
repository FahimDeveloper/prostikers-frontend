import { useSelector } from "react-redux";
import { useClassReservationListQuery } from "../../../redux/features/class/classApi";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import moment from "moment";
import { Select } from "antd";
import DataPagination from "../../../common/DataPagination";
import DataTable from "../../../common/DataTable";
import { IClassReservation } from "../../../types/class.types";
import { collectTimeFromSchedule } from "../../../utils/collectTimeFromSchedule";
import { collectDateStatus } from "../../../utils/collectDateStatus";
import { collectTimeDuration } from "../../../utils/collectTimeDuration";
import PaymentSection from "../../../common/PaymentSection";
import { useClassPaymentsQuery } from "../../../redux/features/payment/paymentApi";

const MyClasses = () => {
  const user = useSelector(selectCurrentUser);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [sport, setSport] = useState<string | undefined>(undefined);
  const { data, isLoading, isFetching } = useClassReservationListQuery({
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

  const columns: ColumnsType<IClassReservation> = [
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
      title: "Class Name",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => (
        <p className="font-medium text-sm leading-5 text-[#151515] capitalize">
          {record?.class.class_name}
        </p>
      ),
    },
    {
      width: 120,
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
      width: 180,
      title: "Trainer",
      align: "center",
      dataIndex: "trainer",
      key: "trainer",
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515] capitalize">
          {text !== null ? `${text.first_name} ${text.last_name}` : "Not Found"}
        </p>
      ),
    },
    {
      width: 120,
      align: "center",
      title: "Status",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => {
        const status = collectDateStatus(record?.class_date);
        return (
          <p className="font-medium text-sm leading-5 text-[#151515]">
            {status === "completed" && (
              <div className="px-2 py-1 bg-[#D6FFC8] rounded-md text-[#0D2B03]">
                Completed
              </div>
            )}
            {status === "today" && (
              <div className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-md">
                Today
              </div>
            )}
            {status === "upcoming" && (
              <div className="px-2 py-1 bg-[#FFF3C8] rounded-md text-[#6A5300]">
                Upcoming
              </div>
            )}
          </p>
        );
      },
    },
    {
      width: 110,
      align: "center",
      title: "Start Time",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">
          {moment(
            record?.class.schedules.find(
              (s) => s.day === collectTimeFromSchedule(record?.class_date)
            )?.start_time
          ).format("h:mm a")}
        </p>
      ),
    },
    {
      width: 120,
      align: "center",
      title: "Duration",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => {
        const duration = record?.class.schedules.find(
          (s) => s.day === collectTimeFromSchedule(record?.class_date)
        );
        return (
          <p className="font-medium text-sm leading-5 text-[#151515]">
            {collectTimeDuration(duration?.start_time, duration?.end_time)}
          </p>
        );
      },
    },
    {
      width: 170,
      align: "center",
      title: "Class Date",
      dataIndex: "class_date",
      key: "class_date",
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">
          {moment(text).format("MMMM Do YYYY")}
        </p>
      ),
    },
    {
      width: 170,
      align: "center",
      title: "Issue Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">
          {moment(text).format("MMMM Do YYYY")}
        </p>
      ),
    },
    {
      width: 100,
      align: "center",
      title: "Class Fee",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">
          ${record?.class.price}
        </p>
      ),
    },
  ];
  return (
    <div className="lg:pb-14 md:pb-12 pb-10 space-y-5">
      <div className="flex sm:flex-nowrap flex-wrap justify-between items-end">
        <div>
          <h2 className="font-semibold text-nowrap text-[28px] leading-9 text-[#111827]">
            Class Reservations
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
        paymentsHook={useClassPaymentsQuery}
        title="Class Payments"
      />
    </div>
  );
};

export default MyClasses;
