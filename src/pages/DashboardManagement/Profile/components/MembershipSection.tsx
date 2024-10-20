import moment from "moment";
import { IUser } from "../../../../types/user.types";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CancellationPolicy from "../../../../components/CancellationPolicy";
import { MdOutlineInfo } from "react-icons/md";
import MembershipCancellationModal from "../../../../components/ui/modal/MembershipCancellationModal";

const MembershipSection = ({ data }: { data: IUser }) => {
  const [renew, setRenew] = useState(false);
  useEffect(() => {
    const expiry = new Date(data?.expiry_date as Date);
    const currentDate = new Date();
    if (currentDate.getDate() > expiry.getDate()) {
      setRenew(true);
    } else {
      setRenew(false);
    }
  }, [data]);
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <h3 className="text-xl text-[#006166] font-medium">
          Membership Details
        </h3>
        <CancellationPolicy>
          <MdOutlineInfo className="size-5 text-sky-400 cursor-pointer" />
        </CancellationPolicy>
      </div>
      {data?.membership ? (
        <div className="px-8 py-10 flex justify-between items-center bg-[#F5FFFF] border border-solid rounded-2xl border-[#BDFCFF]">
          <div className="space-y-2">
            <p className="text-2xl text-[#06494D] font-extrabold capitalize">
              {data?.package_name}
            </p>
            <div className="flex items-center gap-2">
              <p className="capitalize text-sm font-medium text-[#456D6D] tracking-widest">
                {data?.plan}
              </p>
              <div className="border-r border-gray-400 border-solid border-l-0 border-t-0 border-b-0 h-4" />
              <p className=" text-sm font-medium text-[#456D6D] tracking-widest">
                Expire: {moment(data?.expiry_date).format("MMMM Do YYYY")}
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            {renew ? (
              <Link to="/membership">
                <Button type="primary">Renew Now</Button>
              </Link>
            ) : (
              <div className="flex flex-col gap-3 items-center">
                <Link to="/membership">
                  <Button type="default">Upgrade Now</Button>
                </Link>
                <MembershipCancellationModal />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          <p>You don't have any membership</p>
          <Link to="/membership">
            <Button type="primary">Buy membership</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MembershipSection;
