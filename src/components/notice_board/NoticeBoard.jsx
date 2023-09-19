import React from "react";
import Marquee from "react-fast-marquee";

const NoticeBoard = ({ classes }) => {
  return (
    <div className={`${classes} flex-grow flex flex-col`}>
      <div className="container_header h-[40px] flex items-center ps-2">
        <p className="text-white">নোটিশ বোর্ড</p>
      </div>
      <div className="bg-[#EBEBEB] py-2 px-4 box-border flex-grow flex flex-col">
        {/* <Marquee speed={40} pauseOnHover direction="up"> */}
        <ul className="list-disc box-border flex-grow flex flex-col ps-4 gap-2">
          <li className="text-[#2A73BD]">
            সাত্তার জুট মিলস মডেল উচ্চ বিদ্যালয়ের অফিসিয়াল ওয়েবসাইটে আপনাকে
            স্বাগতম।
          </li>
          <li className="text-[#2A73BD]">
            আমাদের স্কুলে একজন গণিত শিক্ষক নিয়োগ দেয়া হবে
          </li>
          <li className="text-[#2A73BD]">
            ১৫ আগস্ট আমাদের স্কুলে অনুষ্ঠান আয়োজন করা হবে
          </li>
          <li className="text-[#2A73BD]">১৬ আগস্ট স্কুল বন্ধ থাকিবে</li>
          <li className="text-[#2A73BD]">
            আগামী নির্বাচনী পরীক্ষা ৭ আগস্টের পরিবর্তে ৫ সেপ্টেম্বর অনুষ্ঠিত হবে
          </li>
        </ul>
        {/* </Marquee> */}
      </div>
    </div>
  );
};

export default NoticeBoard;
