import { Select } from "antd";
import DataPagination from "../../../common/DataPagination";
import DataTable from "../../../common/DataTable";
import moment from "moment";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useState } from "react";
import { useGetUserGroupEventReservationQuery } from "../../../redux/features/event/eventApi";
import { ColumnsType } from "antd/es/table";
import { IEventTeamReservation } from "../../../types/event.types";
import { collectDateStatus } from "../../../utils/collectDateStatus";

const MyGroupEvents = () => {
  const user = useSelector(selectCurrentUser);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [sport, setSport] = useState<string | undefined>(undefined);
  const { data, isLoading, isFetching } = useGetUserGroupEventReservationQuery({
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
  const columns: ColumnsType<IEventTeamReservation> = [
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
      title: "Event Name",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => (
        <p className="font-medium text-sm leading-5 text-[#151515] capitalize">
          {record?.event.event_name}
        </p>
      ),
    },
    {
      width: 240,
      align: "center",
      title: "Team Name",
      dataIndex: "team_name",
      key: "team_name",
      render: (_, record) => (
        <p className="font-medium text-sm leading-5 text-[#151515] capitalize">
          {record?.team_name}
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
      width: 120,
      align: "center",
      title: "Status",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => {
        const status = collectDateStatus(
          record?.event.end_date,
          record?.event.start_date
        );
        return (
          <p className="font-medium text-sm leading-5 text-[#151515]">
            {status === "completed" && (
              <div className="px-2 py-1 bg-[#D6FFC8] rounded-md text-[#0D2B03]">
                Completed
              </div>
            )}
            {status === "running" && (
              <div className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-md">
                Running
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
      width: 170,
      align: "center",
      title: "Start Date",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">
          {moment(record?.event.start_date).format("MMMM Do YYYY")}
        </p>
      ),
    },
    {
      width: 170,
      align: "center",
      title: "End Date",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">
          {moment(record?.event.end_date).format("MMMM Do YYYY")}
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
      title: "Event Fee",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">
          ${record?.event.price}
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
      <div className="flex sm:flex-nowrap flex-wrap justify-between items-end">
        <div>
          <h2 className="font-semibold text-[28px] leading-9 text-[#111827]">
            Event Team Reservations
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
    </div>
  );
};

export default MyGroupEvents;
