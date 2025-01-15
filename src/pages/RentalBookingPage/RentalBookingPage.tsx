import { useEffect, useState } from "react";
import Container from "../../components/Container";
import { useBlocker, useLocation, useNavigate } from "react-router-dom";
import { useCreateFacilityReservationMutation } from "../../redux/features/facility/facilityApi";
import RouteBlocker from "../../utils/RouteBlocker";
import RentalBookingReviewPart from "./components/RentalBookingReviewPart";
import { Button, Checkbox } from "antd";
import TermsCondition from "../../components/TermsCondition";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import { useAppSelector } from "../../hooks/useAppHooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const RentalBookingPage = () => {
  const [agree, setAgree] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [voucherApplied, setVoucherApplied] = useState(false);
  const navigate = useNavigate();
  const user = useAppSelector(selectCurrentUser);
  const [payload, setPayload] = useState({});
  useCreateFacilityReservationMutation();
  const { state } = useLocation();
  const [block, setBlock] = useState(true);
  const blocker = useBlocker(block);
  const sessionSlotsData = sessionStorage.getItem("rental-facility-slots");
  const slotsData = JSON.parse(sessionSlotsData as string);
  const [addons, setAddons] = useState([]);

  // const onFinish = () => {
  //   const bookings: any = [];
  //   slotsData?.forEach((dateSlots: any) =>
  //     dateSlots.slots.forEach((slot: string) => {
  //       const date = new Date(dateSlots.date);
  //       bookings.push({
  //         date: date.toISOString().split("T")[0],
  //         time_slot: slot,
  //         lane: dateSlots.lane,
  //         training: state?.facilityInfo?.training,
  //       });
  //     })
  //   );
  //   form.validateFields().then((values: any) => {
  //     values.bookings = bookings;
  //     values.facility = state?.facilityInfo.training;
  //     values.addons = addons;
  //     values.voucher_applied = voucherApplied;
  //     setFormData(values);
  //     setBlock(false);
  //     setProcess(true);
  //   });
  // };
  // useEffect(() => {
  //   form.setFieldsValue({
  //     sport: state?.facilityInfo.sport,
  //   });
  // }, [state]);
  const onFinish = () => {
    const bookings: any = [];
    slotsData?.forEach((dateSlots: any) =>
      dateSlots.slots.forEach((slot: string) => {
        const date = new Date(dateSlots.date);
        bookings.push({
          date: date.toISOString().split("T")[0],
          time_slot: slot,
          lane: dateSlots.lane,
          training: state?.facilityInfo?.training,
        });
      })
    );
    const data = {
      user: user?._id,
      email: user?.email,
      bookings,
      facility: state?.facilityInfo.training,
      addons,
      voucher_applied: voucherApplied,
      sport: state?.facilityInfo.sport,
    };
    setPayload(data);
    setBlock(false);
  };
  useEffect(() => {
    if (!block) {
      navigate("/facility-payment", {
        state: {
          data: payload,
          amount: totalPrice,
        },
      });
    }
  }, [block]);
  useEffect(() => {
    if (!slotsData) {
      navigate("/");
    }
  }, [slotsData]);
  return (
    <Container>
      <div className="py-16 mt-16 space-y-7">
        {/* <RentalBookingSteps
          onFinish={onFinish}
          form={form}
          setVoucherApplied={setVoucherApplied}
          addons={addons}
          setAddons={setAddons}
          current={current}
          setCurrent={setCurrent}
          bookingData={slotsData}
          rentalInfo={state.facilityInfo}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        /> */}
        <RentalBookingReviewPart
          addons={addons}
          setAddons={setAddons}
          bookingData={slotsData}
          rentalInfo={state?.facilityInfo}
          setVoucherApplied={setVoucherApplied}
          setTotalPrice={setTotalPrice}
          totalPrice={totalPrice}
        />
        <div className="text-end">
          <Checkbox onChange={() => setAgree(!agree)}>
            <div className="flex gap-2 flex-wrap">
              <p className="text-sm text-secondary">I agree with</p>
              <TermsCondition>
                <p className="text-primary cursor-pointer">Terms </p>
              </TermsCondition>
              <p>&</p>
              <PrivacyPolicy>
                <p className="text-primary cursor-pointer">policy</p>
              </PrivacyPolicy>
            </div>
          </Checkbox>
          <Button
            type="primary"
            size="large"
            disabled={!agree}
            className="primary-btn"
            onClick={() => onFinish()}
          >
            Proceed
          </Button>
        </div>
      </div>
      <RouteBlocker blocker={blocker} block={block} />
    </Container>
  );
};

export default RentalBookingPage;
