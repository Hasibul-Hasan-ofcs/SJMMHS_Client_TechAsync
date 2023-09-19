import React from "react";
import style from "./css/mc.module.css";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MiscellaneousCards = ({ title, listArr, imgLink, color }) => {
  return (
    <div className="w-full md:w-[calc(50%-8px)] shadow-lg border">
      <div
        className={`${color === "pink" && style.card_header_pink} ${
          color === "green" && style.card_header_green
        } ${color === "yellow" && style.card_header_yellow} ${
          color === "blue" && style.card_header_blue
        } h-[40px] ps-2 flex items-center`}
      >
        <h4 className="text-white">{title}</h4>
      </div>
      <div className="flex py-4">
        <div className="w-[45%] md:w-[40%] flex justify-center items-center">
          <img src={imgLink} alt="miscellaneous image" />
        </div>
        <div className="w-[55%] md:w-[60%]">
          <div className="flex flex-col gap-2">
            {listArr.map((el, indx) => (
              <Link
                to="/"
                className="flex items-center gap-2 text-[13px] hover:text-blue-800 transition_common"
                key={indx}
              >
                <FaCheck></FaCheck>
                {el}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiscellaneousCards;
