import React from "react";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";

const Videos = () => {
  return (
    <div className="container mx-auto min-h-[400px] my-14 bg-white rounded-2xl">
      <h1 className="pt-6 pb-5 text-center text-3xl">ভিডিও গ্যালারী</h1>
      <CustomUnderline></CustomUnderline>

      <h3 className="text-2xl text-[#013c57] font-bold text-center">
        Looks like no Video Uploaded yet
      </h3>
    </div>
  );
};

export default Videos;
