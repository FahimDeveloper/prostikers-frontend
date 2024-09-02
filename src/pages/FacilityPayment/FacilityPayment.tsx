/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate } from "react-router-dom";
import Checkout from "../../components/Checkout";
import { useCreateFacilityReservationMutation } from "../../redux/features/facility/facilityApi";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useUpdateClientMutation } from "../../redux/features/client/clientApi";

const FacilityPayment = () => {
  const { state } = useLocation();
  const { amount, data, membershipData } = state;
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const [create, { isLoading: createLoading }] =
    useCreateFacilityReservationMutation();
  const [update, { isLoading: updateLoading }] = useUpdateClientMutation();
  const onSubmit = () => {
    const membership = { ...membershipData };
    delete membership.price;
    membership.status = true;
    membership.membership = true;
    const issueDate = new Date();
    membership.issue_date = issueDate.toISOString();
    const expiryDate = new Date(issueDate);
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    membership.expiry_date = expiryDate.toISOString();
    create(data)
      .unwrap()
      .then(() => {
        update({ id: user?._id, payload: membership })
          .unwrap()
          .then(() => {
            Swal.fire({
              iconColor: "#0ABAC3",
              title: "Success",
              icon: "success",
              text: `Reservation Success`,
              showConfirmButton: true,
              confirmButtonColor: "#0ABAC3",
            });
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              title: "Oops!..",
              icon: "error",
              text: `Something went wrong`,
              confirmButtonColor: "#0ABAC3",
            });
          });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Oops!..",
          icon: "error",
          text: `Something went wrong`,
          confirmButtonColor: "#0ABAC3",
        });
      });
  };
  return (
    <div className="min-h-svh py-16 flex justify-center items-center">
      {amount && data && (
        <Checkout
          isLoading={createLoading || updateLoading}
          amount={amount}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

export default FacilityPayment;
