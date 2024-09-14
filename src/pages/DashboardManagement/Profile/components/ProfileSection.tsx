import { Button } from "antd";
import { IUser } from "../../../../types/user.types";
import { IoIosLogOut } from "react-icons/io";
import { useAppDispatch } from "../../../../hooks/useAppHooks";
import { loggedOutUser } from "../../../../redux/features/auth/authSlice";
import Swal from "sweetalert2";
import UpdateUserInfoModal from "../../../../components/ui/modal/UpdateUserInfoModal";
import moment from "moment";
import ChangePasswordModal from "../../../../components/ui/modal/ChangePasswordModal";

const ProfileSection = ({ data }: { data: IUser }) => {
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(loggedOutUser());
  };
  const showConfirm = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout now?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0ABAC3",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
      }
    });
  };
  return (
    <div className="space-y-7">
      <div className="flex justify-between">
        <img className="size-40 rounded-full object-cover" src={data?.image} />
        <div className="flex gap-2">
          <UpdateUserInfoModal record={data} />
          <ChangePasswordModal />
          <Button onClick={showConfirm} className="flex gap-2 items-center">
            Logout
            <IoIosLogOut />
          </Button>
        </div>
      </div>
      <div className="space-y-7">
        <div className="space-y-3">
          <h3 className="text-xl text-[#006166] font-medium">
            Personal Details
          </h3>
          <div className="flex gap-10 flex-wrap">
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">First Name</p>
              <p className="text-lg text-black">
                {data?.first_name || "Not Provided"}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Last Name</p>
              <p className="text-lg text-black">
                {data?.last_name || "Not Provided"}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Gender</p>
              <p className="text-lg text-black">
                {data?.gender || "Not Provided"}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Date of Birth</p>
              <p className="text-lg text-black">
                {data?.date_of_birth
                  ? moment(data?.date_of_birth).format("MMMM Do YYYY")
                  : "Not Provided"}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Nationality</p>
              <p className="text-lg text-black">
                {data?.nationality || "Not Provided"}
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl text-[#006166] font-medium">Address</h3>
          <div className="flex gap-10 flex-wrap">
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">
                Street Address
              </p>
              <p className="text-lg text-black">
                {data?.street_address || "Not Provided"}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">City</p>
              <p className="text-lg text-black">
                {data?.city || "Not Provided"}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">State</p>
              <p className="text-lg text-black">
                {data?.state || "Not Provided"}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Country</p>
              <p className="text-lg text-black">
                {data?.country || "Not Provided"}
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl text-[#006166] font-medium">
            Contact Details
          </h3>
          <div className="flex gap-10 flex-wrap">
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Phone Number</p>
              <p className="text-lg text-black">
                {data?.phone || "Not Provided"}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="text-lg text-black">
                {data?.email || "Not Provided"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
