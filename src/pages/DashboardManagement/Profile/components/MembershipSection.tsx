import moment from "moment";
import { IUser } from "../../../../types/user.types";
import { Alert, Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CancellationPolicy from "../../../../components/CancellationPolicy";
import { MdOutlineInfo } from "react-icons/md";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

const MembershipSection = ({ data }: { data: IUser }) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const [renew, setRenew] = useState(false);
  const [membership, setMembership] = useState<{
    package_name: string;
    plan: string;
  } | null>(null);
  const [membershipPrice, setMembershipPrice] = useState<number | null>(null);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!data) return;
    const expiry = dayjs(data.expiry_date).tz("America/Los_Angeles");
    const currentDate = dayjs().tz("America/Los_Angeles");

    if (data.plan === "quarterly" || data.plan === "monthly") {
      setRenew(currentDate.isAfter(expiry, "day"));
      // if (data.plan === "yearly") {
      //   const cancelThreshold = issue.add(3, "months");
      //   setOpenCancel(currentDate.isAfter(cancelThreshold, "day"));
      // }
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

  const memberhipRenew = () => {
    const memberships = [
      {
        name: "individual pro",
        plan: "monthly",
        price: 150,
      },
      {
        name: "individual pro unlimited",
        plan: "monthly",
        price: 450,
      },
      {
        name: "individual pro",
        plan: "quarterly",
        price: 450,
      },
      {
        name: "individual pro unlimited",
        plan: "quarterly",
        price: 1350,
      },
    ];
    const expiry = dayjs(data.expiry_date).tz("America/Los_Angeles");
    const currentDate = dayjs().tz("America/Los_Angeles");

    if (data?.plan === "monthly") {
      const monthsPending = currentDate.diff(expiry, "month") + 1;
      const renewalMembershipPrice =
        memberships.find(
          (m) => m.name === data?.package_name && m.plan === data?.plan
        )?.price! * monthsPending;
      setMembershipPrice(renewalMembershipPrice);
    }

    if (data?.plan === "quarterly") {
      const quartersPending =
        Math.ceil(currentDate.diff(expiry, "month") / 3) + 1;
      const renewalMembershipPrice =
        memberships.find(
          (m) => m.name === data?.package_name && m.plan === data?.plan
        )?.price! * quartersPending;
      setMembershipPrice(renewalMembershipPrice);
    }
    const membershipData = {
      package_name: data?.package_name!,
      plan: data?.plan!,
    };
    setMembership(membershipData);
    setOpenInfoModal(true);
  };
  console.log(membership, membershipPrice);
  return (
    <>
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
          <div
            className={`px-8 py-10 flex justify-between flex-wrap gap-5 items-center ${
              renew ? "bg-red-50" : "bg-[#F5FFFF]"
            } border border-solid rounded-2xl ${
              renew ? "border-red-200" : "border-[#BDFCFF]"
            }`}
          >
            <div className="space-y-2">
              <p className="text-2xl text-[#06494D] font-extrabold capitalize">
                {data?.package_name} {renew && " - (Expired)"}
              </p>
              <div className="flex items-center gap-2">
                <p className="capitalize text-sm font-medium text-[#456D6D] tracking-widest">
                  {data?.plan}
                </p>
                <div className="border-r border-gray-400 border-solid border-l-0 border-t-0 border-b-0 h-4" />
                <p className=" text-sm font-medium text-[#456D6D] tracking-widest">
                  {renew ? "Expired" : "Expire"}:{" "}
                  {moment(data?.expiry_date).format("MMMM Do YYYY")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="capitalize text-sm font-medium text-[#456D6D] tracking-widest">
                  Machine Credit : {data?.credit_balance?.machine_credit || 0}
                </p>
                <div className="border-r border-gray-400 border-solid border-l-0 border-t-0 border-b-0 h-4" />
                <p className="capitalize text-sm font-medium text-[#456D6D] tracking-widest">
                  Session Credit : {data?.credit_balance?.session_credit || 0}
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              {renew ? (
                <Button onClick={memberhipRenew} type="default">
                  Renew membership
                </Button>
              ) : (
                <Link to="/membership">
                  <Button type="default">Upgrade Now</Button>
                </Link>
              )}
              {/* {opneCancel && <MembershipCancellationModal />} */}
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
      <Modal
        okText="Proceed"
        centered
        title="Membership Information"
        open={openInfoModal}
        onOk={() => {
          navigate("/membership-payment", {
            state: { data: membership, amount: membershipPrice },
          });
        }}
        onCancel={() => {
          setOpenInfoModal(false);
          setMembershipPrice(null);
        }}
      >
        <div className="space-y-2">
          <Alert
            message="Membership Renewal Info"
            description="You Will be charged for the pending period of your membership along with the current period."
            type="info"
            showIcon
          />
        </div>
      </Modal>
    </>
  );
};

export default MembershipSection;
