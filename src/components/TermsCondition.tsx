/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";

const TermsCondition = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setOpen(true)}>{children}</div>
      <Modal
        width={1100}
        footer={[
          <div
            className="text-primary text-base cursor-pointer font-medium"
            onClick={() => setOpen(false)}
          >
            Close
          </div>,
        ]}
        onCancel={() => setOpen(false)}
        title="Terms & Conditions"
        centered
        open={open}
      >
        <div>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Prostrikers Terms and Conditions
          </h1>
          <p className="mb-4 text-center">
            Welcome to Prostrikers Indoor Sports Facility! These terms and
            conditions govern your use of our facility, website, and related
            services. By accessing or using our services, you agree to comply
            with these terms. Please read them carefully.
          </p>
          <div className="space-y-6 text-gray-700">
            <ol className="space-y-6 list-decimal pl-6">
              <li>
                <h2 className="text-lg font-semibold text-gray-800">
                  General Rules
                </h2>
                <ul className="list-outside pl-5">
                  <li>
                    <strong>Facility Use:</strong> Use of the facility is
                    strictly for All Users (registered users, members,
                    individuals) with valid bookings. All users must sign the
                    Liability waiver before using the facility.
                  </li>
                  <li>
                    <strong>Code of Conduct:</strong> All patrons must respect
                    the rules of the facility, staff instructions,and other
                    users. Disorderly, unsafe, or disruptive behavior may result
                    in removal or suspension.
                  </li>
                  <li>
                    <strong>Age Restrictions:</strong> Minors under 18 years
                    must be supervised by an adult or have prior written consent
                    and acknowledge/sign the liability waiver by a
                    parent/guardian to use the facility.
                  </li>
                </ul>
              </li>

              <li>
                <h2 className="text-lg font-semibold text-gray-800">
                  Bookings and Cancellations
                </h2>
                <ul className="list-outside pl-5">
                  <li>
                    <strong>Bookings:</strong> All reservations must be made
                    through our website, app, or in person at the facility.
                    Bookings are subject to availability.
                  </li>
                  <li>
                    <strong>Payments:</strong> Payment must be made in full at
                    the time of booking unless otherwise specified.
                  </li>
                  <li>
                    <strong>Cancellation Policy:</strong>
                    <h3 className="font-semibold text-gray-700 mt-2">
                      Non-member:
                    </h3>
                    <ul className="list-disc pl-5">
                      <li>
                        Cancellation within 2 hours of the reservation time will
                        be charged the full amount of the reservation fee.
                      </li>
                      <li>
                        Cancellation on the same day, within 2-4 hours before
                        the reservation, will be charged 50% of the reservation
                        fee.
                      </li>
                      <li>
                        Cancellation Before 4 hours will not be charged a
                        cancellation fee and the full amount will be refunded.
                      </li>
                    </ul>
                    <h3 className="font-semibold text-gray-700 mt-3">
                      Limited Memberships: (All the memberships except
                      individual unlimited membership)
                    </h3>
                    <ul className="list-disc pl-5">
                      <li>
                        Cancellation within 2 hours of the reservation time will
                        be charged the full amount of the reservation credits.
                      </li>
                      <li>
                        Cancellation on the same day, within 2-4 hours before
                        the reservation, will be charged 50% of the reservation
                        credit.
                      </li>
                      <li>
                        Cancellation Before 4 hours will not be charged a
                        cancellation fee and the full credit amount will be
                        refunded.
                      </li>
                    </ul>
                    <h3 className="font-semibold text-gray-700 mt-3">
                      Individual Pro Unlimited Membership:
                    </h3>
                    <ul className="list-disc pl-5">
                      <li>
                        Cancellation within 2 hours of the reservation time will
                        be charged the $40 cancellation Fee.
                      </li>
                      <li>
                        Cancellation Before 2 hours will not be charged a
                        cancellation fee and the full credit amount will be
                        refunded. **Special perk of Unlimited membership only.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <h2 className="text-lg font-semibold text-gray-800">
                  Health and Safety
                </h2>
                <ul className="list-outside pl-5">
                  <li>
                    <strong>Assumption of Risk:</strong> All users participate
                    in activities at their own risk. Prostrikers is not liable
                    for injuries resulting from misuse of equipment, failure to
                    follow instructions, or inherent risks of sports activities.
                  </li>
                  <li>
                    <strong>Medical Conditions:</strong> Patrons with medical
                    conditions or injuries should consult their doctor before
                    participating. Inform staff of any health concerns prior to
                    activity.
                  </li>
                  <li>
                    <strong>Safety Gear:</strong> Appropriate attire and safety
                    equipment must be used for all activities.
                  </li>
                </ul>
              </li>

              <li>
                <h2 className="text-lg font-semibold text-gray-800">
                  Facility Rules
                </h2>
                <ul className="list-outside pl-5">
                  <li>
                    <strong>Damage:</strong> Users are responsible for any
                    damage caused to equipment or the facility due to negligence
                    or misuse.
                  </li>
                  <li>
                    <strong>Cleanliness:</strong> Help maintain cleanliness by
                    disposing of trash and avoiding damage to property.
                  </li>
                  <li>
                    <strong>Restricted Items:</strong> Smoking, alcohol, illegal
                    substances, and hazardous materials are strictly prohibited
                    on the premises.
                  </li>
                </ul>
              </li>

              <li>
                <h2 className="text-lg font-semibold text-gray-800">
                  Liability and Indemnity
                </h2>
                <ul className="list-outside pl-5">
                  <li>
                    <strong>Release of Liability:</strong> Prostrikers is not
                    liable for lost, stolen, or damaged personal property.
                  </li>
                  <li>
                    <strong>Insurance:</strong> It is the responsibility of the
                    patron to have appropriate insurance coverage for injuries
                    or damages.
                  </li>
                  <li>
                    <strong>Indemnification:</strong> You agree to indemnify and
                    hold Prostrikers harmless from claims or liabilities arising
                    from your use of the facility or breach of these terms.
                  </li>
                </ul>
              </li>

              <li>
                <h2 className="text-lg font-semibold text-gray-800">
                  Prohibited Activities
                </h2>
                <ul className="list-outside pl-5">
                  <li>
                    <strong>Unauthorized Commercial Use:</strong> Solicitation,
                    advertising, or unauthorized photography/videography for
                    commercial purposes is prohibited.
                  </li>
                  <li>
                    <strong>Illegal Behavior:</strong> Illegal activities,
                    including harassment or violence, will result in immediate
                    removal and possible legal action.
                  </li>
                </ul>
              </li>

              <li>
                <h2 className="text-lg font-semibold text-gray-800">
                  Amendments to Terms
                </h2>
                <p>
                  Prostrikers reserves the right to modify these terms at any
                  time. Changes will be posted on our website and continued use
                  of our services constitutes acceptance of the updated terms.
                </p>
              </li>

              <li>
                <h2 className="text-lg font-semibold text-gray-800">
                  Governing Law
                </h2>
                <p>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of the State of California. Any
                  disputes arising under or related to these terms will be
                  resolved exclusively in the courts located in California.
                </p>
              </li>

              <li className="space-y-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  Terms and Conditions for SMS/Text Messaging Services
                </h2>
                <p>
                  These Terms and Conditions (the "Agreement") govern the use of
                  SMS or text messaging services (the "Service") provided by{" "}
                  <a
                    href="https://prostrikers.com"
                    className="text-blue-600 cursor-pointer"
                  >
                    Pro Strikers
                  </a>{" "}
                  ("we," "our," or "us"). By subscribing to, or using our SMS
                  Services, you agree to be bound by the following terms. If you
                  do not agree with these Terms and Conditions, please do not
                  sign up for or use our Service.
                </p>
                <ul className="list-outside pl-5 space-y-1">
                  <li>
                    <strong>Types of Messages You Can Expect to Receive</strong>
                    By providing your phone number to us, you consent to receive
                    SMS communications from{" "}
                    <a
                      href="https://prostrikers.com"
                      className="text-blue-600 cursor-pointer"
                    >
                      Pro Strikers
                    </a>{" "}
                    . You may receive the following types of messages, depending
                    on your interaction with our services:
                  </li>
                  <li>
                    <strong>Transactional Messages:</strong> Appointment
                    confirmations, reminders, order updates, or customer service
                    communications.
                  </li>
                  <li>
                    <strong>Account-Related Messages:</strong> Notifications
                    related to your account, such as billing or subscription
                    updates.
                  </li>
                  <li>
                    <strong>Public Service Announcements (PSAs):</strong>{" "}
                    Important notices or updates that are relevant to your
                    interaction with our services, as specified in the campaign.
                  </li>
                  <li>
                    <strong>Promotional Messages:</strong> Updates, special
                    offers, or discounts related to our products or services and
                    review requests.
                  </li>
                  <li>
                    <strong>Texting Cadence:</strong> The frequency of messages
                    will vary based on your engagement with our services. You
                    may receive messages on a regular or occasional basis,
                    depending on the nature of the service or promotion you are
                    subscribed to. Messages Frequency may vary.
                  </li>
                  <li>
                    <strong>Message and Data Rates:</strong> Message and data
                    rates may apply from your mobile carrier for receiving text
                    messages. These rates are determined by your mobile carrier,
                    and we are not responsible for any charges or fees that may
                    be incurred by receiving messages from us. Please contact
                    your mobile carrier for information about your messaging
                    plan
                  </li>
                  <li>
                    <strong>Opting In:</strong> By subscribing to our SMS
                    service, you consent to receive SMS messages as described
                    above. This consent is not a condition of any purchase. You
                    may opt-in to receive messages by entering your phone number
                    on our website, or by following any other opt-in process
                    outlined in our service sign-up.
                  </li>
                  <li>
                    <strong>Opting Out:</strong> You can opt out of receiving
                    text messages at any time by replying "STOP" to any message
                    we send. Once you opt out, you will no longer receive any
                    text messages. However, if you wish to opt back in, simply
                    reply "START" to our number. For help, reply "HELP."
                  </li>
                  <li>
                    <strong>Privacy and Data Collection :</strong> Your privacy
                    is important to us. Any personal information you provide to
                    us through our SMS service will be handled in accordance
                    with our{" "}
                    <a
                      href="https://prostrikers.com"
                      className="text-blue-600 cursor-pointer"
                    >
                      Pro Strikers
                    </a>{" "}
                    . By agreeing to these Terms and Conditions, you consent to
                    our collection and use of your information as outlined in
                    the Privacy Policy. We do not share your information with
                    third parties for marketing purposes without your consent.
                  </li>
                </ul>
              </li>

              <li>
                <h2 className="text-lg font-semibold text-gray-800">
                  Contact Us
                </h2>
                <p className="flex flex-wrap gap-1">
                  Help: For help with your
                  <a href="https://prostrikers.com" className="text-blue-600">
                    Pro Strikers
                  </a>
                  , please visit{" "}
                  <PrivacyPolicy>
                    <span className="text-blue-600 underline cursor-pointer">
                      Privacy Policy
                    </span>
                  </PrivacyPolicy>{" "}
                  or Call us at
                  <a href="tel:9168905834" className="text-blue-600">
                    (916)-890-5834
                  </a>
                  or Email:
                  <a
                    href="mailto:admin@prostrikers.com"
                    className="text-blue-600"
                  >
                    admin@prostrikers.com
                  </a>
                  We're happy to assist you! .
                </p>
              </li>
            </ol>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TermsCondition;
