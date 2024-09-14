/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal, UploadFile } from "antd";
import UserForm from "../form/UserForm";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { IUser } from "../../../types/user.types";
import { useUpdateClientMutation } from "../../../redux/features/client/clientApi";

const UpdateUserInfoModal = ({ record }: { record: IUser }) => {
  const [open, setModalOpen] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [form] = useForm();
  const [update, { data, isLoading, isSuccess, isError, error }] =
    useUpdateClientMutation();
  const onFinish = (values: any) => {
    const formData = new FormData();
    if (values.image[0].originFileObj) {
      formData.append("image", values.image[0].originFileObj);
      delete values.image;
      formData.append("data", JSON.stringify(values));
      update({ id: record?._id, payload: formData });
    } else {
      delete values.image;
      update({ id: record?._id, payload: values });
    }
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
      setFileList([]);
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
  const onCancle = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Button type="default" onClick={() => setModalOpen(true)}>
        Edit <CiEdit />
      </Button>
      <Modal
        width={800}
        footer={null}
        title="Update Info"
        centered
        open={open}
        onCancel={onCancle}
        maskClosable={false}
      >
        <div className="my-5">
          <UserForm
            record={record}
            fileList={fileList}
            setFileList={setFileList}
            form={form}
            onFinish={onFinish}
            loading={isLoading}
          />
        </div>
      </Modal>
    </>
  );
};

export default UpdateUserInfoModal;
