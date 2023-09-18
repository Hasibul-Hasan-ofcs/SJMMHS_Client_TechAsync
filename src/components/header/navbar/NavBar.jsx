import React from "react";

const NavBar = () => {
  return (
    <div className="bg-navbar min-h-[40px] flex flex-wrap justify-center">
      <button className="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-red-500 hover:bg-[#044E71] flex-grow">
        প্রচ্ছদ
      </button>
      <button className="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-red-500 hover:bg-[#044E71] flex-grow">
        প্রশাসন
      </button>
      <button className="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-red-500 hover:bg-[#044E71] flex-grow">
        শিক্ষার্থীদের তথ্য
      </button>
      <button className="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-red-500 hover:bg-[#044E71] flex-grow">
        ভর্তি
      </button>
      <button className="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-red-500 hover:bg-[#044E71] flex-grow">
        ডাউনলোড
      </button>
      <button className="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-red-500 hover:bg-[#044E71] flex-grow">
        রুটিন
      </button>
      <button className="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-red-500 hover:bg-[#044E71] flex-grow">
        নোটিশ
      </button>
      <button className="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-red-500 hover:bg-[#044E71] flex-grow">
        ব্লগ
      </button>
      <button className="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-red-500 hover:bg-[#044E71] flex-grow">
        গ্যালারী
      </button>
      <button className="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-red-500 hover:bg-[#044E71] flex-grow">
        বিভিন্ন তথ্য
      </button>
      <button className="transition_common text-white flex items-center justify-center h-full px-3 py-2 border border-red-500 hover:bg-[#044E71] flex-grow">
        যোগাযোগ
      </button>
    </div>
  );
};

export default NavBar;
