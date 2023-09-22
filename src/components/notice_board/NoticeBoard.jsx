import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const NoticeBoard = ({ classes, data }) => {
  return (
    <div className={`${classes} flex-grow flex flex-col`}>
      <div className="container_header h-[40px] flex items-center ps-2">
        <p className="text-white">নোটিশ বোর্ড</p>
      </div>
      <div className="bg-[#EBEBEB] py-2 px-4 box-border flex-grow flex flex-col relative">
        <ul className="list-disc box-border flex-grow flex flex-col ps-4 gap-2">
          {data.map(({ _id, notice }, indx) => (
            <li className="text-[#2A73BD]" key={_id}>
              <Link to="/" className="hover:underline">
                {notice}
              </Link>
            </li>
          ))}
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
