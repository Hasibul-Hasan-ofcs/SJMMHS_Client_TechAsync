import React from "react";

const OfficialLinks = () => {
  return (
    <div className={``}>
      <div className="container_header h-[40px] flex items-center ps-2">
        <p className="text-white">অফিসিয়াল লিংক</p>
      </div>
      <div className="bg-[#EBEBEB] p-4 box-border">
        <Link
          to="/"
          className="h-[50px] transition_common bg-red-700 hover:bg-green-700 text-white flex items-center ps-3 gap-2"
        >
          <FaRegArrowAltCircleRight className="text-xl text-[#333333] font-bold"></FaRegArrowAltCircleRight>
          <span className="text-[#54595F]">ভর্তি তথ্য</span>
        </Link>
      </div>
    </div>
  );
};

export default OfficialLinks;
