import React from "react";
import { officialLinksData } from "../../data/official/Officiallinks";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const OfficialLinks = () => {
  return (
    <div className={``}>
      <div className="container_header h-[40px] flex items-center ps-2">
        <p className="text-white">অফিসিয়াল লিংক</p>
      </div>
      <div className="bg-[#EBEBEB] p-4 box-border">
        {officialLinksData.map((el, indx) => (
          <Link
            to="/"
            className="h-[35px] transition_common hover:opacity-80 flex items-center ps-3 gap-2"
            key={indx}
          >
            <FaRegArrowAltCircleRight className="text-xl text-[#333333] font-bold"></FaRegArrowAltCircleRight>
            <span className="text-[#54595F]">{el.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OfficialLinks;
