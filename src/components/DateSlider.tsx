/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useState, useEffect } from "react";

const DateSlider = ({
  activeDate,
  setActiveDate,
}: {
  activeDate: Date;
  setActiveDate: any;
}) => {
  const [dateCount, setDateCount] = useState(7); // Default count is 7

  // Update dateCount based on screen width
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

    updateDateCount(); // Set initial date count
    window.addEventListener("resize", updateDateCount); // Listen for resize events

    return () => window.removeEventListener("resize", updateDateCount); // Clean up listener
  }, []);

  const getDayName = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  const getDates = () => {
    const dates = [];
    const half = Math.floor(dateCount / 2);
    for (let i = -half; i <= half; i++) {
      const date = new Date(activeDate);
      date.setDate(activeDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const handleSelect = (date: Date) => {
    setActiveDate(date);
  };

  const handleNext = () => {
    const newDate = new Date(activeDate);
    newDate.setDate(activeDate.getDate() + 1);
    setActiveDate(newDate);
  };

  const handlePrevious = () => {
    const newDate = new Date(activeDate);
    newDate.setDate(activeDate.getDate() - 1);
    setActiveDate(newDate);
  };

  return (
    <div className="flex justify-between w-full items-center gap-1">
      <IoMdArrowDropleft
        className="sm:size-1/3 size-1/2 cursor-pointer text-[#323232]"
        onClick={handlePrevious}
      />
      {getDates().map((date, index) => (
        <div
          key={index}
          className={`text-center space-y-1 w-full py-2 px-4 cursor-pointer rounded transition-all ${
            date.toDateString() === activeDate.toDateString()
              ? "bg-primary text-[#EAFFFF]"
              : "bg-[#EAFFFF] text-primary hover:bg-primary hover:text-[#EAFFFF]"
          }`}
          onClick={() => handleSelect(date)}
        >
          <div className="text-sm font-medium">{getDayName(date)}</div>
          <div className="md:text-xl sm:text-lg text-base font-extrabold ">
            {date.getDate()}
          </div>
        </div>
      ))}
      <IoMdArrowDropright
        className="sm:size-1/3 size-1/2 cursor-pointer text-[#323232]"
        onClick={handleNext}
      />
    </div>
  );
};

export default DateSlider;
