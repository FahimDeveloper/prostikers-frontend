/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import { useState } from "react";

const PrivacyPolicy = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setOpen(true)}>{children}</div>
      <Modal
        width={1200}
        footer={[
          <div
            className="text-primary text-base cursor-pointer font-medium"
            onClick={() => setOpen(false)}
          >
            Close
          </div>,
        ]}
        maskClosable={false}
        title="Terms & Conditions"
        centered
        onCancel={() => setOpen(false)}
        open={open}
      >
        <div className="text-[#6B6B6B] leading-6 space-y-6">
          <div className="space-y-2">
            <h4 className="font-bold text-[#6B6B6B] text-lg">Privacy Policy</h4>
            <p className="leading-5 font-medium">
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
            <p className="leading-5 font-medium">
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
            <p className="leading-5 font-medium">
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
            <p className="leading-5 font-medium">
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
              How we use collected information
            </h4>
            <p className="leading-5 font-medium">
              Prostrikers may collect and use your personal information for the
              following purposes:
            </p>
            <ul className="ms-4 space-y-4">
              <li className="space-y-1">
                <h4 className="font-semibold text-[#6B6B6B] text-lg">
                  To run and operate our business
                </h4>
                <p className="leading-5">
                  We may need your information to provide you with the league,
                  booking, event and class services you may have purchased.
                </p>
              </li>
              <li className="space-y-1">
                <h4 className="font-semibold text-[#6B6B6B] text-lg">
                  To improve customer service
                </h4>
                <p className="leading-5">
                  Information you provide helps us respond to your customer
                  service requests and support needs more efficiently.
                </p>
              </li>
              <li className="space-y-1">
                <h4 className="font-semibold text-[#6B6B6B] text-lg">
                  To personalize user experience
                </h4>
                <p className="leading-5">
                  We may use information in the aggregate to understand how our
                  users as a group use the services and resources provided on
                  our Site.
                </p>
              </li>
              <li className="space-y-1">
                <h4 className="font-semibold text-[#6B6B6B] text-lg">
                  To improve our Site
                </h4>
                <p className="leading-5">
                  We may use feedback you provide to improve our products and
                  services.
                </p>
              </li>
              <li className="space-y-1">
                <h4 className="font-semibold text-[#6B6B6B] text-lg">
                  To process payments
                </h4>
                <p className="leading-5">
                  We may use the information you provide about yourself when
                  placing an order only to provide service to that order. We do
                  not share this information with outside parties except to the
                  extent necessary to provide the service.
                </p>
              </li>
              <li className="space-y-1">
                <h4 className="font-semibold text-[#6B6B6B] text-lg">
                  To send periodic emails
                </h4>
                <p className="leading-5">
                  We may use the email address to send you information and
                  updates pertaining to your leagues, fixtures, bookings, events
                  or classes. It may also be used to respond to your inquiries,
                  questions, and/or other requests.
                </p>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-[#6B6B6B] text-lg">
              How we protect your information
            </h4>
            <p className="leading-5 font-medium">
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
            <p className="leading-5 font-medium">
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
            <p className="leading-5 font-medium">
              By using this Site, you signify your acceptance of this policy. If
              you do not agree to this policy, please do not use our Site. Your
              continued use of the Site following the posting of changes to this
              policy will be deemed your acceptance of those changes.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-[#6B6B6B] text-lg">Contacting us</h4>
            <p className="leading-5 font-medium">
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

export default PrivacyPolicy;
