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
  const sessionSlotsData = sessionStorage.getItem("rental-facility-slots");
  const sessionMembershipData = sessionStorage.getItem("membership-info");
  const slotsData = JSON.parse(sessionSlotsData as string);
  const membershipData = JSON.parse(sessionMembershipData as string);
  const [addons, setAddons] = useState([]);
  const [form] = useForm();
  const onFinish = () => {
    const bookings: any = [];
    slotsData?.forEach((dateSlots: any) =>
      dateSlots.slots.forEach((slot: string) => {
        const date = new Date(dateSlots.date);
        bookings.push({
          date: date.toISOString().split("T")[0],
          time_slot: slot,
          training: state?.facilityInfo?.training,
        });
      })
    );
    form.validateFields().then((values: any) => {
      values.bookings = bookings;
      values.facility = state?.facilityInfo.training;
      values.addons = addons;
      values.voucher_applied = voucherApplied;
      navigate("/facility-payment", {
        state: {
          data: values,
          amount: totalPrice,
          membershipData: membershipData,
        },
      });
    });
  };

  useEffect(() => {
    form.setFieldsValue({
      sport: state?.facilityInfo.sport,
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
          bookingData={slotsData}
          rentalInfo={state.facilityInfo}
          membershipData={membershipData}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      </div>
    </Container>
  );
};

export default RentalBookingPage;
