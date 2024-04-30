import { CiDollar } from "react-icons/ci";
import { GiElectric } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";
import { PiClockCountdownLight } from "react-icons/pi";
import { IoIosCheckmarkCircle } from "react-icons/io";

const RentalSidebar = () => {
  return (
    <div className="lg:space-y-9 space-y-8 border border-solid border-gray-300 lg:p-5 p-4 rounded-2xl">
      <div className="space-y-5">
        <h3 className="font-semibold text-2xl leading-5 px-5 py-3 bg-[#F9FAFB] rounded-lg">
          Informations
        </h3>
        <ul className="list-none space-y-4">
          <li className="flex items-center gap-4">
            <IoCalendarOutline className="size-7" />
            <p className="font-medium text-[#4B4B4B]">Booking for tomorrow</p>
          </li>
          <li className="flex items-center gap-4">
            <GiElectric className="size-7" />
            <p className="font-medium text-[#4B4B4B]">Instant Confirmation</p>
          </li>
          <li className="flex items-center gap-4">
            <GiElectric className="size-7" />
            <p className="font-medium text-[#4B4B4B]">No cancellation</p>
            {/* <Tooltip title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, distinctio.">
              <MdOutlineInfo className="size-6 text-sky-400 cursor-pointer" />
            </Tooltip> */}
          </li>
          <li className="flex items-center gap-4">
            <PiClockCountdownLight className="size-7" />
            <p className="font-medium text-[#4B4B4B]">Hourly booking rates</p>
          </li>
          <li className="flex items-center gap-4">
            <CiDollar className="size-7" />
            <p className="font-medium text-[#4B4B4B]">$60/hrs</p>
          </li>
        </ul>
      </div>
      <div className="space-y-5">
        <h3 className="font-semibold text-xl leading-5">What’s Included</h3>
        <ul className="list-none inclueded-list space-y-5 text-base text-[#4B4B4B] font-medium">
          <li className="flex gap-5 items-center">
            <IoIosCheckmarkCircle className="size-7 text-[#87D98B]" />
            <p>Field Size 2: 90 X 36</p>
          </li>
          <li className="flex gap-5 items-center">
            <IoIosCheckmarkCircle className="size-7 text-[#87D98B]" />
            <p>
              Professional turf with pace, bounce and spin including three full
              batting length lanes
            </p>
          </li>
          <li className="flex gap-5 items-center">
            <IoIosCheckmarkCircle className="size-7 text-[#87D98B]" />
            <p>Emergency first aid</p>
          </li>
          <li className="flex gap-5 items-center">
            <IoIosCheckmarkCircle className="size-7 text-[#87D98B]" />
            <p>Certified trainers if required (available on prior booking)</p>
          </li>
          <li className="flex gap-5 items-center">
            <IoIosCheckmarkCircle className="size-7 text-[#87D98B]" />
            <p>Online streaming for activities and games</p>
          </li>
          <li className="flex gap-5 items-center">
            <IoIosCheckmarkCircle className="size-7 text-[#87D98B]" />
            <p>Inbuilt nets to prevent injuries for players</p>
          </li>
          <li className="flex gap-5 items-center">
            <IoIosCheckmarkCircle className="size-7 text-[#87D98B]" />
            <p>
              Field training kits available for other sports on rent (Baseball,
              Soft Ball and Cricket)
            </p>
          </li>
          <li className="flex gap-5 items-center">
            <IoIosCheckmarkCircle className="size-7 text-[#87D98B]" />
            <p>Rental packages for practice, leagues and tournaments.</p>
          </li>
          <li className="flex gap-5 items-center">
            <IoIosCheckmarkCircle className="size-7 text-[#87D98B]" />
            <p>Exclusive membership offers</p>
          </li>
        </ul>
      </div>
      <div className="space-y-5">
        <h3 className="font-semibold text-xl leading-5">Opening Times</h3>
        <ul className="list-none text-[#063232] text-base font-medium space-y-2">
          <li className="flex justify-between bg-[#F6FFFF] px-5 py-3">
            <p>Sa</p>
            <p>9:00 AM - 10:00 PM</p>
          </li>
          <li className="flex justify-between bg-[#F6FFFF] px-5 py-3">
            <p>Su</p>
            <p>9:00 AM - 10:00 PM</p>
          </li>
          <li className="flex justify-between bg-[#F6FFFF] px-5 py-3">
            <p>Mo</p>
            <p>9:00 AM - 10:00 PM</p>
          </li>
          <li className="flex justify-between bg-[#F6FFFF] px-5 py-3">
            <p>Tu</p>
            <p>9:00 AM - 10:00 PM</p>
          </li>
          <li className="flex justify-between bg-[#F6FFFF] px-5 py-3">
            <p>We</p>
            <p>9:00 AM - 10:00 PM</p>
          </li>
          <li className="flex justify-between bg-[#F6FFFF] px-5 py-3">
            <p>Th</p>
            <p>9:00 AM - 10:00 PM</p>
          </li>
          <li className="flex justify-between bg-[#F6FFFF] px-5 py-3">
            <p>Fr</p>
            <p>9:00 AM - 10:00 PM</p>
          </li>
        </ul>
      </div>
      <div className="space-y-5">
        <h3 className="font-semibold text-xl leading-5">Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70591.4755857888!2d-121.54994067972568!3d38.562989384408354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad11e2ba74ebf%3A0x6a48ef45bb45fc90!2sPRO%20STRIKERS!5e0!3m2!1sen!2sbd!4v1711863972354!5m2!1sen!2sbd"
          width="100%"
          height="300"
          style={{ border: "0px", borderRadius: "10px" }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default RentalSidebar;
