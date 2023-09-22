import React from "react";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";
import { PhotoGalleryByIdAPI } from "../../api/PhotoGalleryByIdAPI";
import SetPageTitle from "../../components/page_title/SetPageTitle";
import { Oval } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const OtherPhotos = () => {
  SetPageTitle("ফটোগ্যালারী");

  const { id } = useParams();

  const { isLoading, data } = PhotoGalleryByIdAPI(id);
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
        <PhotoProvider>
          <div className="foo flex flex-wrap flex-row px-1 py-16">
            {data[0].other_images.map((el, indx) => (
              <div className="p-1 w-full md:w-[50%] lg:w-[33%]" key={indx}>
                <div className="p-1 shadow border">
                  <div className={`w-full h-[250px] relative overflow-hidden`}>
                    <Link to={``} className={`block h-full w-full relative`}>
                      <PhotoView key={indx} src={el}>
                        <img
                          src={el}
                          alt="school photos"
                          className="w-full h-full hover:scale-105 transition_common"
                        />
                      </PhotoView>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PhotoProvider>
      )}
    </div>
  );
};

export default OtherPhotos;
