import React from "react";
import style from "./css/special_announcements.module.css";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const SpecialAnnouncements = ({ data }) => {
  return (
    <div className="h-[40px] my-6 relative flex items-center bg-[#EDEDED]">
      <div
        className={`${style.sp_text} absolute top-0 left-0 z-10 h-full w-[120px] flex items-center justify-center text-white`}
      >
        বিশেষ ঘোষণা
      </div>
      <Marquee speed={40} pauseOnHover>
        <div className="flex">
          {data.map((el, indx) => (
            <Link
              className="text-red-700 hover:text-green-700 ps-[50px]"
              to={el.to}
              key={indx}
            >
              {`◉ ${el.notice}`}
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default SpecialAnnouncements;
