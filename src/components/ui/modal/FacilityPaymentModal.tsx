import { Button, Checkbox, Modal } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useCreateFacilityReservationMutation } from "../../../redux/features/facility/facilityApi";
import Swal from "sweetalert2";
import Checkout from "../../Checkout";
import TermsCondition from "../../TermsCondition";
import PrivacyPolicy from "../../PrivacyPolicy";

const FacilityPaymentModal = ({
  bookings,
  amount,
  onFinish,
  setBlock,
  onProceed,
}: {
  bookings: any;
  amount: number;
  onFinish: any;
  setBlock: any;
  onProceed: any;
}) => {
  const [open, setOpen] = useState(false);
  const [agree, setAgree] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const user = useSelector(selectCurrentUser);
  const [
    create,
    { data: createData, isLoading, isSuccess, isError, error, reset },
  ] = useCreateFacilityReservationMutation();
  const onClick = () => {
    onFinish();
    setOpen(true);
  };
  const handleCloseModal = () => {
    reset();
    setOpen(false);
  };
  const onSubmit = () => {
    const payload = {
      facility_data: { ...bookings },
      payment_info: {
        transaction_id: transactionId,
        email: user?.email,
        amount: amount,
      },
    };
    create({ id: user?._id, payload: payload });
  };
  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        icon: "success",
        text: `${createData?.message}`,
        confirmButtonColor: "#0ABAC3",
        iconColor: "#0ABAC3",
      });
      setBlock(false);
      onProceed();
    }
    if (isError) {
      Swal.fire({
        title: "Oops!..",
        icon: "error",
        text: `${(error as any)?.data?.message || "something went wrong"}`,
        confirmButtonColor: "#0ABAC3",
      });
    }
  }, [isSuccess, isError, error]);
  return (
    <>
      <div className="flex sm:flex-row flex-col sm:items-center items-start justify-end gap-2">
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
          className="primary-btn sm:w-auto w-full"
          onClick={onClick}
        >
          Proceed
        </Button>
      </div>
      <Modal
        open={open}
        footer={null}
        width={600}
        className="facility-payment"
        onCancel={handleCloseModal}
        centered
        maskClosable={false}
      >
        <Checkout
          setTransactionId={setTransactionId}
          isLoading={isLoading}
          amount={amount}
          onSubmit={onSubmit}
        />
      </Modal>
    </>
  );
};

export default FacilityPaymentModal;
