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
      width: 240,
      align: "center",
      title: "Facility Name",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => (
        <p className="font-medium text-sm leading-5 text-[#151515] capitalize">
          {record?.facility.facility_name}
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
      title: "Facility First Slot Fee",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">
          ${record.facility.ini_price}
        </p>
      ),
    },
    {
      width: 140,
      align: "center",
      title: "Facility Base Slot Fee",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => (
        <p className="font-medium text-sm leading-5 text-[#151515]">
          ${record.facility.price}
        </p>
      ),
    },
    {
      width: 90,
      align: "center",
      title: "Details",
      dataIndex: "_id",
      key: "_id",
      render: (_, record) => (
        <DetailsMyFacilityReservationModal record={record} />
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
            Rental Facility Reservations
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

export default MyRentalFacilities;
