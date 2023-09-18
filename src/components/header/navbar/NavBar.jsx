import React from "react";
import ActiveRoute from "../../active_route/ActiveRoute";

const NavBar = () => {
  return (
    <div className="bg-navbar min-h-[40px] flex flex-wrap justify-center">
      <ActiveRoute
        to="/"
        classes="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow"
      >
        প্রচ্ছদ
      </ActiveRoute>
      <ActiveRoute
        to="/authority"
        classes="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow"
      >
        প্রশাসন
      </ActiveRoute>
      <ActiveRoute
        to="/student-info"
        classes="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow"
      >
        শিক্ষার্থীদের তথ্য
      </ActiveRoute>
      <ActiveRoute
        to="/admission"
        classes="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow"
      >
        ভর্তি
      </ActiveRoute>
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
      <ActiveRoute
        to="/gallery"
        classes="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow"
      >
        গ্যালারী
      </ActiveRoute>
      <ActiveRoute
        to="/miscellaneous"
        classes="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-[#74010d] hover:bg-[#044E71] flex-grow"
      >
        বিভিন্ন তথ্য
      </ActiveRoute>
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