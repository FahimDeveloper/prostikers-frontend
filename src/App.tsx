import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import { useEffect, useState } from "react";
// import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const App = () => {
  // const [slideCount, setSlideCount] = useState(-3);
  // const [schedule, setSchedule] = useState<
  //   Array<{
  //     count: number;
  //     day: string;
  //     date: string;
  //   }>
  // >([]);
  // useEffect(() => {
  //   const today = new Date();
  //   let count = -3;
  //   const dateArray = [];
  //   for (let i = slideCount; i <= slideCount + 6; i++) {
  //     const currentDate = new Date(today);
  //     currentDate.setDate(today.getDate() + i);
  //     const dateObject = {
  //       count,
  //       date: String(currentDate.getDate()).padStart(2, "0"),
  //       day: currentDate.toLocaleString("default", { weekday: "short" }),
  //     };
  //     dateArray.push(dateObject);
  //     count++;
  //   }
  //   setSchedule(dateArray);
  // }, [slideCount]);

  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      {/* <div className="flex justify-between items-center gap-2">
        <IoMdArrowDropleft
          className="size-7 px-1 cursor-pointer text-[#323232]"
          onClick={() => setSlideCount(slideCount - 1)}
        />
        <div className="flex w-full justify-around gap-1">
          {schedule.map((date, index) => {
            return (
              <div
                onClick={() => setSlideCount(slideCount + date.count)}
                key={date.date}
                className={`text-center w-full py-2 px-4 cursor-pointer rounded transition-all ${
                  index === 3
                    ? "bg-primary text-[#EAFFFF]"
                    : "bg-[#EAFFFF] text-primary hover:bg-primary hover:text-[#EAFFFF]"
                }`}
              >
                <div
                  className={`text-base ${
                    index === 3 ? "text-[#EAFFFF]" : "text-[#292929]"
                  } font-semibold`}
                >
                  {date.day}
                </div>
                <div className="text-2xl font-extrabold">{date.date}</div>
              </div>
            );
          })}
        </div>
        <IoMdArrowDropright
          className="size-7 px-1 cursor-pointer text-[#323232]"
          onClick={() => setSlideCount(slideCount + 1)}
        />
      </div> */}
      <Footer />
      {/* nice job reviews popup */}
      <div className="nj-engage" data-position="left"></div>
    </>
  );
};

export default App;
