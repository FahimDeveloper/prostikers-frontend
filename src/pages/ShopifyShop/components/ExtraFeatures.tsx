import { CiCreditCard1, CiDeliveryTruck, CiDiscount1 } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const ExtraFeatures = () => {
  return (
    <div className="bg-[#F0FFFE] py-12 px-5">
      <div className="grid grid-cols-4 gap-5">
        <div className="flex justify-center items-center gap-3">
          <TfiHeadphoneAlt className="size-8 text-primary" />
          <div className="space-y-1">
            <h3 className="text-base uppercase text-secondary tracking-wider">
              Online support 24/7
            </h3>
            <p className="text-sm text-[#717171]">
              Support online 24 hours a day
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <CiDeliveryTruck className="size-10 text-primary" />
          <div className="space-y-1">
            <h3 className="text-base uppercase text-secondary tracking-wider">
              Free Delivery
            </h3>
            <p className="text-sm text-[#717171]">Free shipping on all order</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <CiDiscount1 className="size-10 text-primary" />
          <div className="space-y-1">
            <h3 className="text-base uppercase text-secondary tracking-wider">
              Member Discount
            </h3>
            <p className="text-sm text-[#717171]">On order over $220.00</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <CiCreditCard1 className="size-10 text-primary" />
          <div className="space-y-1">
            <h3 className="text-base uppercase text-secondary tracking-wider">
              Secure Payment
            </h3>
            <p className="text-sm text-[#717171]">All cards accepted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraFeatures;
