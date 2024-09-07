/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import Container from "../../components/Container";
import RentalBookingSteps from "../../components/ui/steps/RentalBookingSteps";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateFacilityReservationMutation } from "../../redux/features/facility/facilityApi";

const RentalBookingPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [voucherApplied, setVoucherApplied] = useState(false);
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
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
      values.addons = addons;
      values.voucher_applied = voucherApplied;
      navigate("/facility-payment", {
        state: {
          data: values,
          amount: totalPrice,
          membershipData: state?.membershipData,
        },
      });
    });
  };

  useEffect(() => {
    form.setFieldsValue({
      sport: state?.slotsData.sport,
    });
  }, [form, state]);
  return (
    <Container>
      <div className="py-16 mt-16 space-y-7">
        <RentalBookingSteps
          onFinish={onFinish}
          form={form}
          setVoucherApplied={setVoucherApplied}
          addons={addons}
          setAddons={setAddons}
          current={current}
          setCurrent={setCurrent}
          bookingData={state?.slotsData}
          membershipData={state?.membershipData}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      </div>
    </Container>
  );
};

export default RentalBookingPage;
