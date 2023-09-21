import React from "react";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";

const PhotoGallery = () => {
  return (
    <div className="container mx-auto min-h-[400px] my-14 bg-white rounded-2xl">
      <h1 className="pt-6 pb-5 text-center text-3xl">ফটোগ্যালারী</h1>
      <CustomUnderline></CustomUnderline>

      <div className="flex flex-wrap">
        <div className="w-full md:w-[50%] lg:w-[25%] p-4">
          <div className="w-full min-h-[120px] relative overflow-hidden">
            <Link to="">
              <img
                src=""
                alt="school photos"
                className="w-full h-auto hover:scale-105 transition_common"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
