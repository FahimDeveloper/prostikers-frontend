/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import { useState } from "react";

const TermsCondition = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setOpen(true)}>{children}</div>
      <Modal
        width={1200}
        maskClosable={false}
        title="Terms & Conditions"
        centered
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
        <div className="text-[#6B6B6B] font-medium leading-6 space-y-6">
          <div className="space-y-2">
            <h4 className="font-bold text-[#6B6B6B] text-lg">Privacy Policy</h4>
            <p className="leading-5">
              This Privacy Policy governs the manner in which Prostrikers
              collects, uses, maintains and discloses information collected from
              you when you use the Prostrikers website and/or
              http://prostrikers.com ("Site"). This privacy policy applies to
              the Site and all products and services offered by Prostrikers.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-[#6B6B6B] text-lg">
              Personal identification information
            </h4>
            <p className="leading-5">
              We may collect personal identification information from you in a
              variety of ways, including, but not limited to, when you visit our
              site, register on the site, place an order, fill out a form, and
              in connection with other activities, services, features or
              resources we make available on our Site. You may be asked for, as
              appropriate, name, email address, mailing address, phone number.
              You may, however, visit our Site anonymously. We will collect
              personal identification information from you only if you
              voluntarily submit such information to us. You can always refuse
              to supply personally identification information, except that it
              may prevent them from engaging in certain Site related activities.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-[#6B6B6B] text-lg">
              Non-personal identification information
            </h4>
            <p className="leading-5">
              We may collect non-personal identification information about you
              whenever you interact with our Site. Non-personal identification
              information may include the browser name, the type of computer and
              technical information about your means of connection to our Site,
              such as the operating system and the Internet service providers
              utilized and other similar information.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-[#6B6B6B] text-lg">
              Web browser cookies
            </h4>
            <p className="leading-5">
              Our Site may use "cookies" to enhance your experience. Your web
              browser places cookies on your hard drive for record-keeping
              purposes and to keep you signed in to the Site. You may choose to
              set your web browser to refuse cookies, or to alert you when
              cookies are being sent. If you do so, note that some parts of the
              Site may not function properly.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-[#6B6B6B] text-lg">
              How we protect your information
            </h4>
            <p className="leading-5">
              We adopt appropriate data collection, storage and processing
              practices and security measures to protect against unauthorized
              access, alteration, disclosure or destruction of your personal
              information, username, password, transaction information and data
              stored on our Site.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-[#6B6B6B] text-lg">
              Changes to this privacy policy
            </h4>
            <p className="leading-5">
              Prostrikers has the discretion to update this privacy policy at
              any time. When we do, we will update the timestamp on this page.
              In the event of major modifications to the privacy policy, we will
              inform you via email.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-[#6B6B6B] text-lg">
              Your acceptance of these terms
            </h4>
            <p className="leading-5">
              By using this Site, you signify your acceptance of this policy. If
              you do not agree to this policy, please do not use our Site. Your
              continued use of the Site following the posting of changes to this
              policy will be deemed your acceptance of those changes.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-[#6B6B6B] text-lg">Contacting us</h4>
            <p className="leading-5">
              If you have any questions about this Privacy Policy, the practices
              of this site, or your dealings with this site, please contact us
              at Info@prostrikers.com.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TermsCondition;
