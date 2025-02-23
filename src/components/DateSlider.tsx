import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useState, useEffect } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

dayjs.extend(utc);
dayjs.extend(timezone);

const DateSlider = ({
  activeDate,
  setActiveDate,
}: {
  activeDate: Dayjs;
  setActiveDate: (date: Dayjs) => void;
}) => {
  const [dateCount, setDateCount] = useState(7);
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(false);

  useEffect(() => {
    const updateDateCount = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 435) {
        setDateCount(3);
      } else if (screenWidth <= 768) {
        setDateCount(5);
      } else {
        setDateCount(7);
      }
    };

    updateDateCount();
    window.addEventListener("resize", updateDateCount);
    return () => window.removeEventListener("resize", updateDateCount);
  }, []);

  useEffect(() => {
    const today = dayjs().tz("America/Los_Angeles").startOf("day");
    setIsPreviousDisabled(activeDate.isSame(today, "day"));
  }, [activeDate]);

  const getDayName = (date: Dayjs) => {
    return date.format("ddd");
  };

  const getDates = () => {
    const dates: Dayjs[] = [];
    const half = Math.floor(dateCount / 2);
    for (let i = -half; i <= half; i++) {
      dates.push(activeDate.add(i, "day"));
    }
    return dates;
  };

  const handleSelect = (date: Dayjs) => {
    const today = dayjs().tz("America/Los_Angeles").startOf("day");
    if (date.isAfter(today) || date.isSame(today, "day")) {
      setActiveDate(date);
    }
  };

  const handleNext = () => {
    setActiveDate(activeDate.add(1, "day"));
  };

  const handlePrevious = () => {
    if (!isPreviousDisabled) {
      setActiveDate(activeDate.subtract(1, "day"));
    }
  };

  return (
    <div className="flex justify-between w-full items-center gap-1">
      <IoMdArrowDropleft
        className={`sm:size-1/3 size-1/2 text-[#323232] ${
          isPreviousDisabled
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer"
        }`}
        onClick={handlePrevious}
      />
      {getDates().map((date, index) => {
        const today = dayjs().tz("America/Los_Angeles").startOf("day");
        const isPastDate = date.isBefore(today, "day");

        return (
          <div
            key={index}
            className={`text-center space-y-1 w-full py-2 px-4 rounded transition-all ${
              date.isSame(activeDate, "day")
                ? "bg-primary text-[#EAFFFF]"
                : isPastDate
                ? "bg-[#EAFFFF] text-primary opacity-50 cursor-not-allowed"
                : "bg-[#EAFFFF] text-primary hover:bg-primary hover:text-[#EAFFFF] cursor-pointer"
            }`}
            onClick={() => !isPastDate && handleSelect(date)}
          >
            <div className="text-sm font-medium">{getDayName(date)}</div>
            <div className="md:text-xl sm:text-lg text-base font-extrabold">
              {date.date()}
            </div>
          </div>
        );
      })}
      <IoMdArrowDropright
        className="sm:size-1/3 size-1/2 cursor-pointer text-[#323232]"
        onClick={handleNext}
      />
    </div>
  );
};

export default DateSlider;
