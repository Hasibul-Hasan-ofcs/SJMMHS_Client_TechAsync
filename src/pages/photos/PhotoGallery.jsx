import React from "react";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";
import { Link } from "react-router-dom";
import style from "./css/pg.module.css";

const PhotoGallery = () => {
  return (
    <div className="container mx-auto min-h-[400px] my-14 bg-white rounded-2xl">
      <h1 className="pt-6 pb-5 text-center text-3xl">ফটোগ্যালারী</h1>
      <CustomUnderline></CustomUnderline>

      <div className="flex flex-wrap flex-row px-1 py-16">
        <div className="p-1 w-full md:w-[50%] lg:w-[25%]">
          <div className="p-1 shadow border">
            <div
              className={`${style.img_link} w-full min-h-[150px] relative overflow-hidden`}
            >
              <Link to="" className={`block h-full w-full relative`}>
                <img
                  src="https://educational.deshiit.net/wp-content/uploads/2023/08/16797543_1243397979047192_3024470787716646307_o-1024x569.jpg"
                  alt="school photos"
                  className="w-full h-auto hover:scale-105 transition_common"
                />
              </Link>
            </div>
            <p className="py-3 text-center">প্রাক্তন শিক্ষার্থী</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
