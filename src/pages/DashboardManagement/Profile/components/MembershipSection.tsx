import moment from "moment";
import { IUser } from "../../../../types/user.types";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CancellationPolicy from "../../../../components/CancellationPolicy";
import { MdOutlineInfo } from "react-icons/md";
import MembershipCancellationModal from "../../../../components/ui/modal/MembershipCancellationModal";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

const MembershipSection = ({ data }: { data: IUser }) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const [renew, setRenew] = useState(false);
  const [opneCancel, setOpenCancel] = useState(false);
  useEffect(() => {
    if (!data) return;

    const issue = dayjs(data.issue_date).tz("America/Los_Angeles");
    const expiry = dayjs(data.expiry_date).tz("America/Los_Angeles");
    const currentDate = dayjs().tz("America/Los_Angeles");

    if (data.plan === "yearly" || data.plan === "monthly") {
      setRenew(currentDate.isAfter(expiry, "day"));
      if (data.plan === "yearly") {
        const cancelThreshold = issue.add(3, "months");
        setOpenCancel(currentDate.isAfter(cancelThreshold, "day"));
      }
    }
  }, [data]);

  const scrollToMembership = () => {
    if (window.location.hash === "#membership") {
      const membershipSection = document.getElementById("membership");
      if (membershipSection) {
        membershipSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  useEffect(() => {
    scrollToMembership();
    window.addEventListener("hashchange", scrollToMembership);
    return () => {
      window.removeEventListener("hashchange", scrollToMembership);
    };
  }, []);
  return (
    <div id="membership" className="space-y-5">
      <div className="flex items-center gap-3">
        <h3 className="text-xl text-[#006166] font-medium">
          Membership Details
        </h3>
        <CancellationPolicy>
          <MdOutlineInfo className="size-5 text-sky-400 cursor-pointer" />
        </CancellationPolicy>
      </div>
      {data?.membership ? (
        <div className="px-8 py-10 flex justify-between flex-wrap gap-5 items-center bg-[#F5FFFF] border border-solid rounded-2xl border-[#BDFCFF]">
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
            {renew && (
              <Link to="/membership">
                <Button type="default">Upgrade Now</Button>
              </Link>
            )}
            {opneCancel && <MembershipCancellationModal />}
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
