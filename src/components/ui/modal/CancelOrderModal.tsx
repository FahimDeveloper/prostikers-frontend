import { Button, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { useCancelOrderMutation } from "../../../redux/features/order/orderApi";
import Swal from "sweetalert2";
import { useAppDispatch } from "../../../hooks/useAppHooks";
import { productApiSlice } from "../../../redux/api/httpsSlice";
import StatusForm from "../form/StatusForm";

const CancelOrderModal = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);
  const [cancel, { data, isLoading, isSuccess, error, isError }] =
    useCancelOrderMutation();
  const [form] = useForm();
  const onCancel = () => {
    setOpen(false);
    form.resetFields();
  };
  const onFinish = (values: any) => {
    values.status = "canceled";
    values.date = new Date().toISOString();
    cancel({ id: id, body: values });
  };

  const dispatch = useAppDispatch();

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
      dispatch(productApiSlice.util.resetApiState());
      setOpen(false);
      form.resetFields();
    }
    if (isError) {
      Swal.fire({
        title: "Oops!..",
        icon: "error",
        text: `${(error as any)?.data?.message || "something went wrong"}`,
        confirmButtonColor: "#0ABAC3",
      });
    }
  }, [data, isSuccess, isError, form, error]);

  return (
    <>
      <Button
        type="primary"
        danger
        className="capitalize w-full"
        onClick={() => setOpen(true)}
      >
        canceled
      </Button>
      <Modal
        open={open}
        onCancel={onCancel}
        footer={null}
        centered
        title="Cancellation note"
      >
        <StatusForm form={form} onFinish={onFinish} loading={isLoading} />
      </Modal>
    </>
  );
};

export default CancelOrderModal;
