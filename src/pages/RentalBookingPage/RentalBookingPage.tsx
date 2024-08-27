/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import Container from "../../components/Container";
import RentalBookingSteps from "../../components/ui/steps/RentalBookingSteps";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useCreateFacilityReservationMutation } from "../../redux/features/facility/facilityApi";
import Swal from "sweetalert2";

const RentalBookingPage = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const user = useSelector(selectCurrentUser);
  const [create, { data, isLoading, isSuccess, isError, error }] =
    useCreateFacilityReservationMutation();
  const { state } = useLocation();
  const [addons, setAddons] = useState([]);
  const [form] = useForm();
  const onFinish = () => {
    const bookings: any = [];
    state?.slotsData?.slots.forEach((dateSlots: any) =>
      dateSlots.slots.forEach((slot: string) =>
        bookings.push({
          date: dateSlots.date.toISOString().split("T")[0],
          time_slot: slot,
          training: state?.slotsData.training,
        })
      )
    );
    form.validateFields().then((values: any) => {
      values.bookings = bookings;
      values.facility = state?.slotsData.training;
      create({ id: user?._id, payload: values });
    });
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        icon: "success",
        text: `${data?.message}`,
        showConfirmButton: false,
        timer: 1500,
        iconColor: "#0ABAC3",
      });
      form.resetFields();
      setCurrent(0);
      navigate("/");
    }
    if (isError) {
      Swal.fire({
        title: "Oops!..",
        icon: "error",
        text: `${(error as any)?.data?.message}`,
        confirmButtonColor: "#0ABAC3",
      });
    }
    form.setFieldsValue({
      sport: state?.slotsData.sport,
    });
  }, [isSuccess, isError, error, state]);
  return (
    <Container>
      <div className="py-16 mt-16 space-y-7">
        <RentalBookingSteps
          onFinish={onFinish}
          form={form}
          addons={addons}
          setAddons={setAddons}
          current={current}
          setCurrent={setCurrent}
          loading={isLoading}
          bookingData={state?.slotsData}
          membershipData={state?.membershipData}
        />
      </div>
    </Container>
  );
};

export default RentalBookingPage;
