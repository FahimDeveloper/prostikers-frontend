/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import Swal from "sweetalert2";
import { Button, Modal } from "antd";
import MembershipCancellationForm from "../form/MembershipCancellationForm";
import { useCreateMembershipCancellationMutation } from "../../../redux/features/cancellation/cancellationApi";

const MembershipCancellationModal = () => {
  const [open, setModalOpen] = useState(false);
  const [form] = useForm();
  const user = useSelector(selectCurrentUser);
  const [request, { data, isLoading, isError, isSuccess, error }] =
    useCreateMembershipCancellationMutation();
  const onFinish = (values: any) => {
    values.email = user?.email;
    request(values);
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
      setModalOpen(false);
    }
    if (isError) {
      Swal.fire({
        title: "Oops!..",
        icon: "error",
        text: `${(error as any)?.data?.message || "something went wrong"}`,
        confirmButtonColor: "#0ABAC3",
      });
    }
  }, [data, isSuccess, form, isError, error]);
  return (
    <>
      <Button type="primary" danger onClick={() => setModalOpen(true)}>
        Cancellation
      </Button>
      <Modal
        width={600}
        footer={null}
        title="Requesting for membership cancellation"
        centered
        open={open}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
      >
        <div className="my-5">
          <MembershipCancellationForm
            form={form}
            onFinish={onFinish}
            loading={isLoading}
          />
        </div>
      </Modal>
    </>
  );
};

export default MembershipCancellationModal;
