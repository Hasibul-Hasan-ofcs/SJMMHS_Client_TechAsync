import React from "react";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";
import { Link } from "react-router-dom";
import style from "./css/pg.module.css";
import { PhotoGalleryAPI } from "../../api/PhotoGalleryAPI";
import SetPageTitle from "../../components/page_title/SetPageTitle";
import { Oval } from "react-loader-spinner";
import { BsZoomIn } from "react-icons/bs";

const PhotoGallery = () => {
  SetPageTitle("ফটোগ্যালারী");

  const { isLoading, data } = PhotoGalleryAPI();
  console.log(data);

  return (
    <div className="container mx-auto min-h-[400px] my-14 bg-white rounded-2xl">
      <h1 className="pt-6 pb-5 text-center text-3xl">ফটোগ্যালারী</h1>
      <CustomUnderline></CustomUnderline>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <Oval
            height={80}
            width={80}
            color="#013c57"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#013c57"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <div className="flex flex-wrap flex-row px-1 py-16">
          {data.map(({ _id, main_image_url, other_images, context }, indx) => (
            <div className="p-1 w-full md:w-[50%] lg:w-[25%]" key={_id}>
              <div className="p-1 shadow border">
                <div className={`w-full min-h-[150px] overflow-hidden`}>
                  <Link
                    to={`/gallery/photo-gallery/${_id}`}
                    className={`${style.img_link} block h-full w-full relative`}
                  >
                    <img
                      src={main_image_url}
                      alt="school photos"
                      className="w-full h-auto hover:scale-105 transition_common"
                    />
                    <span className={`${style.span} transition_common`}>
                      <span className="h-full w-full flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">
                          <BsZoomIn />
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                <p className="py-3 text-center">{context}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
