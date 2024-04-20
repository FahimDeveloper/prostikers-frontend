/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import emailjs from "@emailjs/browser";
import { notification } from "antd";
import { useRef } from "react";

const GetInForm = () => {
  const form = useRef(null);
  const [api, contextHolder] = notification.useNotification();
  const onFinish = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    emailjs
      .sendForm("service_dd58m4n", "template_kpa2o79", form.current!, {
        publicKey: "28PV-Qqkr8-hRQrtG",
      })
      .then(
        () => {
          api["success"]({
            message: "Success",
            description: "Successfully submitted your information",
          });
        },
        (err: any) => {
          console.log(err);
          api["error"]({
            message: "Failed",
            description: "Failed to submitted your information",
          });
        }
      );
  };
  return (
    <>
      {contextHolder}
      <form ref={form} onSubmit={onFinish} className="space-y-5">
        <input
          placeholder="Your name"
          className="bg-[#FAFFFF] placeholder-[#215757] text-base w-full border-[1px] border-[#D4D4D4] p-4 rounded-md"
          type="text"
          name="user_name"
          required
        />
        <input
          placeholder="Your email"
          className="bg-[#FAFFFF] placeholder-[#215757] text-base w-full border-[1px] border-[#D4D4D4] p-4 rounded-md"
          type="email"
          name="user_email"
          required
        />
        <textarea
          placeholder="Message"
          rows={7}
          className="bg-[#FAFFFF] placeholder-[#215757] text-lg w-full border-[1px] border-[#D4D4D4] p-4 rounded-md"
          name="message"
          required
        />
        <input
          type="submit"
          value="Send message"
          className="btn btn-primary hover:btn-secondary text-white"
        />
      </form>
    </>
  );
};

export default GetInForm;
