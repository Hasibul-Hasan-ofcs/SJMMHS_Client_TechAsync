import React from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ShortCutNavigatorHome = () => {
  return (
    <div className="flex flex-col gap-3">
      <Link
        to="/admission/admissioninfo"
        className="h-[50px] transition_common bg-red-700 hover:bg-green-700 text-white flex items-center ps-3 gap-2"
      >
        <FaRegArrowAltCircleRight className="text-xl font-bold"></FaRegArrowAltCircleRight>
        <span>ভর্তি তথ্য</span>
      </Link>
      <Link
        to="/admission/admissionform"
        className="h-[50px] transition_common bg-red-700 hover:bg-green-700 text-white flex items-center ps-3 gap-2"
      >
        <FaRegArrowAltCircleRight className="text-xl font-bold"></FaRegArrowAltCircleRight>
        <span>ভর্তি ফরম</span>
      </Link>
      <Link
        to="/gallery/photo-gallery"
        className="h-[50px] transition_common bg-red-700 hover:bg-green-700 text-white flex items-center ps-3 gap-2"
      >
        <FaRegArrowAltCircleRight className="text-xl font-bold"></FaRegArrowAltCircleRight>
        <span>ফটোগ্যালারী</span>
      </Link>
      <Link
        to="/gallery/video-gallery"
        className="h-[50px] transition_common bg-red-700 hover:bg-green-700 text-white flex items-center ps-3 gap-2"
      >
        <FaRegArrowAltCircleRight className="text-xl font-bold"></FaRegArrowAltCircleRight>
        <span>ভিডিও গ্যালারী</span>
      </Link>
    </div>
  );
};

export default ShortCutNavigatorHome;
