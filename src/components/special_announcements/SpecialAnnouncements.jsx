import React from "react";
import style from "./css/special_announcements.module.css";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

// raw data needs to be changed with API data
const SAData = [
  {
    to: "/",
    item: "◉ সাত্তার জুট মিলস মডেল উচ্চ বিদ্যালয়ের অফিসিয়াল ওয়েবসাইটে আপনাকে স্বাগতম।",
  },
  {
    to: "/",
    item: "◉ আমাদের স্কুলে একজন গণিত শিক্ষক নিয়োগ দেয়া হবে",
  },
  {
    to: "/",
    item: "◉ ১৫ আগস্ট আমাদের স্কুলে অনুষ্ঠান আয়োজন করা হবে",
  },
  {
    to: "/",
    item: "◉ ১৬ আগস্ট স্কুল বন্ধ থাকিবে",
  },
  {
    to: "/",
    item: "◉ আগামী নির্বাচনী পরীক্ষা ৭ আগস্টের পরিবর্তে ৫ সেপ্টেম্বর অনুষ্ঠিত হবে",
  },
];

const SpecialAnnouncements = () => {
  return (
    <div className="h-[40px] my-6 relative flex items-center bg-[#EDEDED]">
      <div
        className={`${style.sp_text} absolute top-0 left-0 z-10 h-full w-[120px] flex items-center justify-center text-white`}
      >
        বিশেষ ঘোষণা
      </div>
      <Marquee speed={40} pauseOnHover>
        <div className="flex">
          {SAData.map((el, indx) => (
            <Link
              className="text-red-700 hover:text-green-700 ps-[50px]"
              to={el.to}
              key={indx}
            >
              {el.item}
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default SpecialAnnouncements;
