import { Modal } from "antd";
import { useState } from "react";

const ShopReturnPolicy = ({ children }: any) => {
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
        title="Shop Return Policy"
        centered
        open={open}
      >
        <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
          <h1 className="text-3xl font-bold text-center mb-6">
            Pro Strikers Shop Return Policy
          </h1>

          <p>
            Thank you for choosing to shop at www.prostrikers.com. We value your
            satisfaction and are here to assist you. If you are not completely
            satisfied with your purchase, we are happy to help. To initiate a
            return, please adhere to the following guidelines:
          </p>

          <ul className="list-disc pl-5 my-4 space-y-2">
            <li>
              Goods must be returned within 7 days from the date of delivery, in
              unused condition.
            </li>
            <li>
              The items must be returned in their original packaging and at your
              own expense and risk.
            </li>
            <li>
              We cannot accept goods that have been used, even once, or have had
              their original manufacturer packaging removed.
            </li>
            <li>
              As the recipient, you have a legal obligation to take reasonable
              care of the goods while they are in your possession. Failure to
              comply may result in potential compensation claims against you.
              This policy applies to all returned goods.
            </li>
            <li>
              Please note that clearance items are not eligible for returns,
              refunds, or exchanges unless we have shipped the incorrect product
              to you.
            </li>
            <li>
              Before sending a return, you must first submit a return request to{" "}
              <a
                href="mailto:admin@prostrikers.com"
                className="text-blue-600 underline"
              >
                admin@prostrikers.com
              </a>
              .
            </li>
            <li>
              Orders can be canceled prior to packing and shipping, though a
              restocking fee of 10% may apply to your refund. Customized items,
              including those that have undergone bat oiling, knocking in,
              and/or the application of face sheets, cannot be canceled once the
              customization work has been carried out.
            </li>
            <li>
              Our return policy allows for product returns within 7 days from
              the delivery date. You may exchange the product for another or
              request a refund.
            </li>
          </ul>

          <p>To be eligible for a return, please ensure the following:</p>
          <ul className="list-disc pl-5 my-4 space-y-2">
            <li>The product was purchased within the last 7 days.</li>
            <li>The product is in its original packaging.</li>
            <li>The product is unused and undamaged.</li>
            <li>You possess the receipt or proof of purchase.</li>
            <li>
              Products failing to meet these criteria will not be considered for
              return.
            </li>
          </ul>

          <p>Before sending the product back, please contact us:</p>
          <ul className="list-disc pl-5 my-4 space-y-2">
            <li>By phone: 916-890-5834</li>
            <li>
              By email:{" "}
              <a
                href="mailto:admin@prostrikers.com"
                className="text-blue-600 underline"
              >
                admin@prostrikers.com
              </a>
            </li>
            <li>
              By visiting this page on our website:{" "}
              <a
                href="https://www.prostrikers.com/contact"
                className="text-blue-600 underline"
              >
                https://www.prostrikers.com/contact
              </a>
            </li>
          </ul>

          <p>
            Return the product, along with its original packaging and the
            receipt or proof of purchase, to the following address:
            <br />
            <br />
            <strong>Prostrikers</strong>
            <br />
            2230, 16th Street, Sacramento CA 95818
          </p>

          <h2 className="text-lg font-semibold mt-6">Shipping charges:</h2>
          <p>
            The shipping charges associated with returning a product are
            non-refundable. You are responsible for covering the shipping costs
            and assuming the risk of loss or damage during transit, both when
            returning the item and when it is in our possession. Additionally,
            if your original order qualified for free shipping and the refund
            brings the total order value below the threshold for free shipping,
            shipping charges will be deducted from the refund amount.
          </p>

          <h2 className="text-lg font-semibold mt-6">Damaged items:</h2>
          <p>
            If you have received a damaged product, please contact us
            immediately for assistance. Cricket bats are manufactured using
            willow, and their durability is subject to proper usage. It is
            essential for customers to handle the bats correctly to avoid
            breakage. Consequently, if a customer fails to use the bat
            appropriately and it breaks due to improper usage, they will be held
            accountable for the damage incurred.
          </p>

          <h2 className="text-lg font-semibold mt-6">Bowling Machines:</h2>
          <p>
            Returned bowling machines that have been opened or turned on within
            the 7-day return period will incur a minimum restocking fee of 25%.
          </p>

          <h2 className="text-lg font-semibold mt-6">Sale items:</h2>
          <p>
            Unfortunately, we cannot offer refunds for sale items. Only
            regular-priced items are eligible for refunds.
          </p>

          <h2 className="text-lg font-semibold mt-6">PayPal Transactions:</h2>
          <p>
            If you cancel your order for any reason and have paid via PayPal, a
            3.5% deduction will apply due to PayPal’s policy of not refunding
            merchant fees after the transaction is processed.
          </p>

          <h2 className="text-lg font-semibold mt-6">Contact us:</h2>
          <ul className="list-disc pl-5 my-4 space-y-2">
            <li>By phone: (916)-890-5834</li>
            <li>
              By email:{" "}
              <a
                href="mailto:admin@prostrikers.com"
                className="text-blue-600 underline"
              >
                admin@prostrikers.com
              </a>
            </li>
            <li>
              By visiting this page on our website:{" "}
              <a
                href="https://www.prostrikers.com/contact"
                className="text-blue-600 underline"
              >
                https://www.prostrikers.com/contact
              </a>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default ShopReturnPolicy;
