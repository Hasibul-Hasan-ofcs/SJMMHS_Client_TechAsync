import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({ items, to }) => {
  return (
    <div className="w-[200px] bg-[#F9FAFB] py-[1px] flex flex-col">
      {items.map((el, indx) => (
        <Link
          className={`bg-[#013c57] w-[200px] h-[40px] transition_common hover:bg-white text-white hover:text-black flex-grow flex items-center ps-3`}
          to={to}
          key={indx}
        >
          {el}
        </Link>
      ))}
    </div>
  );
};

export default DropDown;
