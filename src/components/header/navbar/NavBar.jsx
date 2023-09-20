import React from "react";
import ActiveRoute from "./active_route/ActiveRoute";
import { PiCaretDownFill } from "react-icons/pi";
import style from "./css/navbar.module.css";
import DropDown from "./dropdown/DropDown";

const authorityData = {
  link: "/",
  arr: [
    "প্রধান শিক্ষক",
    "শিক্ষকবৃন্দ",
    "পরিচালনা পরিষদ",
    "ম্যানেজিং কমিটি",
    "কর্মকর্তা কর্মচারী",
    "প্রাক্তন প্রধান শিক্ষক",
    "কৃতি শিক্ষার্থী",
  ],
};

const studentData = {
  link: "/",
  arr: ["৬ষ্ঠ শ্রেণী", "৭ম শ্রেণী", "৮ম শ্রেণী", "৯ম শ্রেণী", "১০ম শ্রেণী"],
};

const admissionData = [
  {
    link: "/admissioninfo",
    item: "ভর্তি তথ্য",
  },
  {
    link: "/admissionform",
    item: "ভর্তি ফরম",
  },
];

const galleryData = {
  link: "/",
  arr: ["ফটোগ্যালারী", "ভিডিও গ্যালারী"],
};

const miscellaneousData = {
  link: "/",
  arr: [
    "ছুটির তালিকা",
    "কক্ষ সংখ্যা",
    "ছাত্রছাত্রীর আসন সংখ্যা",
    "কম্পিউটার ব্যবহার",
    "ভৌতকাঠমো",
    "মাল্টিমিডিয়া ক্লাসরুম",
    "সহপাঠ",
    "সার্কুলার",
  ],
};
const NavBar = () => {
  return (
    <div className="bg-navbar min-h-[40px] flex flex-wrap justify-center">
      <ActiveRoute
        to="/"
        classes="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow"
      >
        প্রচ্ছদ
      </ActiveRoute>
      <div className={`${style.dropdown_item}`}>
        <ActiveRoute
          to="/authority"
          classes={`transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow`}
        >
          প্রশাসন &nbsp;<PiCaretDownFill></PiCaretDownFill>
        </ActiveRoute>
        <DropDown items={authorityData.arr} to={authorityData.link}></DropDown>
      </div>
      <div className={`${style.dropdown_item}`}>
        <ActiveRoute
          to="/student-info"
          classes={`transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow`}
        >
          শিক্ষার্থীদের তথ্য &nbsp; <PiCaretDownFill></PiCaretDownFill>
        </ActiveRoute>
        <DropDown items={studentData.arr} to={studentData.link}></DropDown>
      </div>

      <div className={`${style.dropdown_item}`}>
        <ActiveRoute
          to="/admission"
          classes={`transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow`}
        >
          ভর্তি &nbsp; <PiCaretDownFill></PiCaretDownFill>
        </ActiveRoute>
        <DropDown items={admissionData}></DropDown>
      </div>
      <ActiveRoute
        to="/download"
        classes="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow"
      >
        ডাউনলোড
      </ActiveRoute>
      <ActiveRoute
        to="/routine"
        classes="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow"
      >
        রুটিন
      </ActiveRoute>
      <ActiveRoute
        to="/notice"
        classes="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow"
      >
        নোটিশ
      </ActiveRoute>
      <ActiveRoute
        to="/blog"
        classes="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow"
      >
        ব্লগ
      </ActiveRoute>
      <div className={`${style.dropdown_item}`}>
        <ActiveRoute
          to="/gallery"
          classes={`transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow`}
        >
          গ্যালারী &nbsp;<PiCaretDownFill></PiCaretDownFill>
        </ActiveRoute>
        <DropDown items={galleryData.arr} to={galleryData.link}></DropDown>
      </div>
      <div className={`${style.dropdown_item}`}>
        <ActiveRoute
          to="/miscellaneous"
          classes={`transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow`}
        >
          বিভিন্ন তথ্য &nbsp; <PiCaretDownFill></PiCaretDownFill>
        </ActiveRoute>
        <DropDown
          items={miscellaneousData.arr}
          to={miscellaneousData.link}
        ></DropDown>
      </div>
      <ActiveRoute
        to="/contact"
        classes="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow"
      >
        যোগাযোগ
      </ActiveRoute>
    </div>
  );
};

export default NavBar;
