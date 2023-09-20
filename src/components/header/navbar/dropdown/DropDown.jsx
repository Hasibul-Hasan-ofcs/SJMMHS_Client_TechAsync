import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({ items }) => {
  return (
    <div className="w-[200px] bg-[#F9FAFB] py-[1px] flex flex-col">
      {items.map((el, indx) => (
        <Link
          className={`bg-[#013c57] w-[200px] h-[40px] transition_common hover:bg-white text-white hover:text-black flex-grow flex items-center ps-3`}
          to={el.link}
          key={indx}
        >
          {el.item}
        </Link>
      ))}
    </div>
  );
};

export default DropDown;
