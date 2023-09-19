import React from "react";
import style from "./css/mc.module.css";
import { FaCheck } from "react-icons/fa6";

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
          <ul className="flex flex-col gap-2">
            {listArr.map((el, indx) => (
              <li className="flex items-center gap-2 text-[13px]" key={indx}>
                <FaCheck></FaCheck>
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MiscellaneousCards;
