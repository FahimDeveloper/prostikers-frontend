/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { useDeleteBookingSlotsMutation } from "../redux/features/slotBooking/slotBookingApi";

const RouteBlocker = ({ block, blocker }: { block: boolean; blocker: any }) => {
  const user = useSelector(selectCurrentUser);
  const [deleteIt] = useDeleteBookingSlotsMutation();
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (block) {
        event.preventDefault();
      } else {
        sessionStorage.removeItem("rental-facility-slots");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [block]);

  useEffect(() => {
    if (block && blocker.state === "blocked") {
      Swal.fire({
        title: "Are you sure?",
        text: "Your processing will be lost if you leave this page. Are you sure you want to leave?",
        icon: "warning",
        confirmButtonText: "Leave",
        showCancelButton: true,
        confirmButtonColor: "#0ABAC3",
        cancelButtonColor: "#d33",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteIt(user?._id);
          blocker.proceed();
          sessionStorage.removeItem("rental-facility-slots");
        }
      });
    }
  }, [blocker, block]);

  return null;
};

export default RouteBlocker;
