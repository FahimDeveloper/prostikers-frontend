import { useSelector } from "react-redux";
import DataPagination from "../../../common/DataPagination";
import DataTable from "../../../common/DataTable";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useState } from "react";
import { useGetUserAppointmentGroupReservationListQuery } from "../../../redux/features/appointment/appointmentApi";
import { ColumnsType } from "antd/es/table";
import { IAppointmentGroupReservation } from "../../../types/appointment.types";
import { collectDateStatus } from "../../../utils/collectDateStatus";
import moment from "moment";
import { collectTimeFromSchedule } from "../../../utils/collectTimeFromSchedule";
import { collectTimeDuration } from "../../../utils/collectTimeDuration";
import { Select } from "antd";

const MyGroupAppointments = () => {
  const user = useSelector(selectCurrentUser);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [sport, setSport] = useState<string | undefined>(undefined);
  const { data, isLoading, isFetching } =
    useGetUserAppointmentGroupReservationListQuery({
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

  const columns: ColumnsType<IAppointmentGroupReservation> = [
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
      title: "Appointment Name",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => (
        <p className="font-medium text-sm leading-5 text-[#151515] capitalize">
          {record?.appointment.appointment_name}
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
        const status = collectDateStatus(record.appointment_date);
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
            record.appointment.schedules.find(
              (s) => s.day === collectTimeFromSchedule(record.appointment_date)
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
        const duration = record.appointment.schedules.find(
          (s) => s.day === collectTimeFromSchedule(record.appointment_date)
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
      title: "Appointment Date",
      dataIndex: "appointment_date",
      key: "appointment_date",
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
      width: 140,
      align: "center",
      title: "Appointment Fee",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">
          ${record.appointment.price}
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
    //         label: <UpdateClassReservationModal record={record} />,
    //       },
    //       {
    //         key: "2",
    //         label: <DeleteClassReservationPopup id={record?._id} />,
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
  return (
    <div className="lg:pb-14 md:pb-12 pb-10 space-y-5">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-semibold text-[28px] leading-9 text-[#111827]">
            Appointment Group Reservations
          </h2>
          <p className="text-[#838383] font-medium text-lg">
            Total {data?.count || 0} reservations
          </p>
        </div>
        <Select
          className="w-36"
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

export default MyGroupAppointments;
