import React from "react";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";
import { MultimediaClassRoomAPI } from "../../api/MultimediaClassroomAPI";
import { AiFillCaretRight } from "react-icons/ai";
import SetPageTitle from "../../components/page_title/SetPageTitle";
import { Oval } from "react-loader-spinner";

const MultimediaClassroom = () => {
  SetPageTitle("মাল্টিমিডিয়া ক্লাসরুম");
  const { isLoading, data } = MultimediaClassRoomAPI();

  return (
    <div className="container mx-auto min-h-[400px] my-14 bg-white rounded-2xl">
      <h1 className="pt-6 pb-5 text-center text-3xl">মাল্টিমিডিয়া ক্লাসরুম</h1>
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
        <div className="p-5">
          <img
            src={data[0].image_link}
            alt="multimedia classroom image"
            className="w-full"
          />
          <div className="py-10">
            {data[0].features.map((el, indx) => (
              <p className="flex gap-2 items-center" key={indx}>
                <AiFillCaretRight />
                {el}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultimediaClassroom;
