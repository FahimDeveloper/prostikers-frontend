import { Modal } from "antd";
import { useState } from "react";

const MembershipConditions = ({ children }: any) => {
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
        title="Membership Terms and Conditions"
        centered
        open={open}
      >
        <div className="text-gray-800 space-y-6 leading-relaxed">
          <h1 className="text-3xl font-bold text-center">
            <strong>Pro Strikers Membership Terms and Conditions</strong>
          </h1>

          <div>
            <h2 className="text-lg font-semibold">
              1. Cancellations and Freezes Conditions
            </h2>
            <p>
              All Pro Strikers memberships (monthly/annually), including the
              Individual Pro, Individual Pro Unlimited, and all custom
              memberships for teams, organizations, and individuals, require a
              minimum commitment of three months before a user can request
              cancellation or freezing of their membership. After the initial
              three-month period, users can freeze their membership for up to
              two month (only one time within a year with Pro Strikers Manager's
              approval). Each time a user restarts their membership, the
              three-month cancellation/freezing period resets.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">2. Membership Details</h2>

            <h3 className="font-semibold">Individual Pro Membership:</h3>
            <ul className="list-disc pl-6">
              <li>Enjoy 4 hours of net sessions for just $150 per month.</li>
              <li>Bring one additional player for free!</li>
              <li>
                For each additional player, there is a small fee of $10 per
                hour.
              </li>
              <li>Includes a complimentary pitching machine.</li>
            </ul>

            <h3 className="font-semibold mt-4">
              Individual Pro Unlimited Membership:
            </h3>
            <ul className="list-disc pl-6">
              <li>Get an unlimited monthly membership for only $450.</li>
              <li>
                Bring a friend to your practice sessions at no extra cost,
                provided the membership holder is present.
              </li>
              <li>Includes a complimentary pitching machine.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">3. Booking Restrictions</h2>
            <ul className="list-disc pl-6">
              <li>
                All memberships have restricted hourly booking limits as
                follows:
              </li>
              <li>
                During Thursday to Friday from 5 PM to 8 PM, bookings are
                limited to one hour per day.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">4. Annual Memberships</h2>
            <ul className="list-disc pl-6">
              <li>
                Annual membership purchases can be canceled anytime before three
                months, with a cancellation fee equal to three months' payments
                at monthly membership rates.
              </li>
              <li>
                Cancellations made between three to nine months will incur a fee
                at the monthly membership rate for the months used.
              </li>
              <li>
                Annual memberships cannot be canceled after nine months, as the
                free three months apply at the end of the term.
              </li>
              <li>
                Annual memberships can be frozen for up to two months (only one
                time within a year) with Pro Strikers Manager's approval.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              5. Bookings and Cancellations Under Memberships
            </h2>
            <p>
              <strong>Bookings:</strong> All reservations must be made through
              our website, app, or in person at the facility and are subject to
              availability.
            </p>
            <p>
              <strong>Payments:</strong> Payment must be made in full at the
              time of booking unless otherwise specified.
            </p>

            <h3 className="font-semibold mt-4">Cancellation Policy:</h3>
            <p>
              <strong>
                Limited Memberships (all memberships except Individual Unlimited
                Membership):
              </strong>
            </p>
            <ul className="list-disc pl-6">
              <li>
                Cancellations within 2 hours of the reservation time will be
                charged the full amount of the reservation credits.
              </li>
              <li>
                Cancellations on the same day, within 2-4 hours before the
                reservation, will incur a 50% charge of the reservation credit.
              </li>
              <li>
                Cancellations made more than 4 hours in advance will not incur a
                cancellation fee, and the full credit amount will be refunded.
              </li>
            </ul>

            <p className="mt-2">
              <strong>Individual Pro Unlimited Membership:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>
                Cancellations within 2 hours of the reservation time will incur
                a $40 cancellation fee.
              </li>
              <li>
                Cancellations made more than 2 hours in advance will not incur a
                cancellation fee, and the full credit amount will be refunded
                (special perk of the Unlimited membership only).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              6. Youth Training Membership
            </h2>
            <p>
              This membership is designed solely for attending Pro Strikers
              Academy weekly group sessions.
            </p>

            <h3 className="font-semibold mt-2">Benefits of Membership:</h3>
            <ul className="list-disc pl-6">
              <li>Month-to-month economic membership.</li>
              <li>
                Exclusive monthly bundle pack including four training session
                passes.
              </li>
              <li>Easily book preferred time slots with adjustable options.</li>
              <li>
                Enjoy a $40 discount off the regular training session rate.
              </li>
              <li>
                Youth memberships can be frozen at monthly intervals, with a
                limit of 2 months per year, subject to Pro Strikers Manager's
                approval.
              </li>
              <li>
                Users attending academy training without a youth training
                membership will be charged the drop-in class price (full price
                of a session: $50 per player).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              7. One-Time Pack Purchases
            </h2>
            <ul className="list-disc pl-6">
              <li>
                One-time pass packs can be purchased for lane rental only or
                lane rental with a pitching machine.
              </li>
              <li>
                All one-time passes will be valid for a period of six months
                from the purchase date and are non-refundable.
              </li>
            </ul>
          </div>

          <div>
            <p>
              By signing up for a Pro Strikers membership, you agree to the
              membership terms and conditions stated above and Pro Strikers
              Terms & conditions, privacy policy and liability waiver as
              mentioned at{" "}
              <a
                href="https://www.prostrikers.com"
                className="text-blue-600 underline"
              >
                www.prostrikers.com
              </a>
              . For any questions or clarifications, please contact Pro Strikers
              staff.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <ul className="list-disc pl-6">
              <li>
                By phone:{" "}
                <a href="tel:9168905834" className="text-blue-600">
                  (916)-890-5834
                </a>
              </li>
              <li>
                By email:{" "}
                <a
                  href="mailto:admin@prostrikers.com"
                  className="text-blue-600"
                >
                  admin@prostrikers.com
                </a>
              </li>
              <li>
                By visiting this page on our website:{" "}
                <a
                  href="https://www.prostrikers.com/contact"
                  className="text-blue-600"
                >
                  https://www.prostrikers.com/contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MembershipConditions;
