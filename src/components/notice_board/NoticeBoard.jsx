import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const NoticeBoard = ({ classes }) => {
  return (
    <div className={`${classes} flex-grow flex flex-col`}>
      <div className="container_header h-[40px] flex items-center ps-2">
        <p className="text-white">নোটিশ বোর্ড</p>
      </div>
      <div className="bg-[#EBEBEB] py-2 px-4 box-border flex-grow flex flex-col relative">
        <ul className="list-disc box-border flex-grow flex flex-col ps-4 gap-2">
          <li className="text-[#2A73BD]">
            <Link to="/" className="hover:underline">
              সাত্তার জুট মিলস মডেল উচ্চ বিদ্যালয়ের অফিসিয়াল ওয়েবসাইটে আপনাকে
              স্বাগতম।
            </Link>
          </li>
          <li className="text-[#2A73BD]">
            <Link to="/" className="hover:underline">
              আমাদের স্কুলে একজন গণিত শিক্ষক নিয়োগ দেয়া হবে
            </Link>
          </li>
          <li className="text-[#2A73BD]">
            <Link to="/" className="hover:underline">
              ১৫ আগস্ট আমাদের স্কুলে অনুষ্ঠান আয়োজন করা হবে
            </Link>
          </li>
          <li className="text-[#2A73BD]">
            <Link to="/" className="hover:underline">
              ১৬ আগস্ট স্কুল বন্ধ থাকিবে{" "}
            </Link>
          </li>
          <li className="text-[#2A73BD]">
            <Link to="/" className="hover:underline">
              আগামী নির্বাচনী পরীক্ষা ৭ আগস্টের পরিবর্তে ৫ সেপ্টেম্বর অনুষ্ঠিত
              হবে
            </Link>
          </li>
        </ul>
        <Link
          to="/notice"
          className="h-[30px] w-full text-sm flex items-center justify-center bg-gray-900 border absolute bottom-0 left-0 transition_common hover:bg-gray-800 text-white"
        >
          সমস্ত বিজ্ঞপ্তি দেখুন
        </Link>
      </div>
    </div>
  );
};

export default NoticeBoard;
