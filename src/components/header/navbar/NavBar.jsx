import React, { useContext } from "react";
import ActiveRoute from "./active_route/ActiveRoute";
import { PiCaretDownFill } from "react-icons/pi";
import style from "./css/navbar.module.css";
import DropDown from "./dropdown/DropDown";
import {
  admissionData,
  authorityData,
  galleryData,
  miscellaneousData,
  studentData,
} from "../../../data/navbar/NavBarElementData";
import { HomeContext } from "../../../context/HomeContextProvider";
import { CgMenuRight } from "react-icons/cg";

const NavBar = () => {
  const { setSideBarActive } = useContext(HomeContext);
  return (
    <>
      <div className="bg-navbar min-h-[40px] flex lg:hidden justify-end">
        <button
          className="border border-white text-white p-4 rounded-lg shadow-md m-2 block lg:hidden z-[5]"
          onClick={() => setSideBarActive && setSideBarActive(true)}
        >
          <CgMenuRight></CgMenuRight>
        </button>
      </div>
      <div className="bg-navbar min-h-[40px] hidden lg:flex flex-wrap justify-center">
        <ActiveRoute
          to="/"
          classes="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow"
        >
          প্রচ্ছদ
        </ActiveRoute>
        <div className={`${style.dropdown_item}`}>
          <ActiveRoute
            to="/authority/principal"
            classes={`transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow`}
          >
            প্রশাসন &nbsp;<PiCaretDownFill></PiCaretDownFill>
          </ActiveRoute>
          <DropDown items={authorityData}></DropDown>
        </div>
        <div className={`${style.dropdown_item}`}>
          <ActiveRoute
            to="/student-information/6"
            classes={`transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow`}
          >
            শিক্ষার্থীদের তথ্য &nbsp; <PiCaretDownFill></PiCaretDownFill>
          </ActiveRoute>
          <DropDown items={studentData}></DropDown>
        </div>

        <div className={`${style.dropdown_item}`}>
          <ActiveRoute
            to="/admission/admissioninfo"
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
          to="/result"
          classes="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow"
        >
          ফলাফল
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
            to="/gallery/photo-gallery"
            classes={`transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow`}
          >
            গ্যালারী &nbsp;<PiCaretDownFill></PiCaretDownFill>
          </ActiveRoute>
          <DropDown items={galleryData}></DropDown>
        </div>
        <div className={`${style.dropdown_item}`}>
          <ActiveRoute
            to="/miscellaneous/holidays"
            classes={`transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow`}
          >
            বিভিন্ন তথ্য &nbsp; <PiCaretDownFill></PiCaretDownFill>
          </ActiveRoute>
          <DropDown items={miscellaneousData}></DropDown>
        </div>
        <ActiveRoute
          to="/contact"
          classes="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow"
        >
          যোগাযোগ
        </ActiveRoute>
      </div>
    </>
  );
};

export default NavBar;
