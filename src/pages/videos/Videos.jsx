import React from "react";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";

const Videos = () => {
  return (
    <div className="container mx-auto min-h-[400px] my-14 bg-white rounded-2xl">
      <h1 className="pt-6 pb-5 text-center text-3xl">ভিডিও গ্যালারী</h1>
      <CustomUnderline></CustomUnderline>

      <div className="flex justify-center items-center py-28">
        <iframe
          width="840"
          height="480"
          src="https://www.youtube.com/embed/cpP-fCo8Dn4?si=IlNwkEfiHV-HJoBe&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      {/* <h3 className="text-2xl text-[#013c57] font-bold text-center pt-9">
        Looks like no Video Uploaded yet
      </h3> */}
    </div>
  );
};

export default Videos;
