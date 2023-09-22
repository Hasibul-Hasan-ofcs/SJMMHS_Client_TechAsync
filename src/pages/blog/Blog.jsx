import React from "react";
import { FaBlogger } from "react-icons/fa";
import { Oval } from "react-loader-spinner";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";
import { BlogsAPI } from "../../api/BlogsAPI";
import SetPageTitle from "../../components/page_title/SetPageTitle";

const Blog = () => {
  SetPageTitle("ব্লগ");

  const { isLoading, data } = BlogsAPI();

  return (
    <div className="container mx-auto min-h-[400px] my-14 bg-white rounded-2xl">
      <h1 className="pt-6 pb-5 text-center text-3xl">ব্লগ</h1>
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
        <>
          {data.map(({ title, content }, indx) => (
            <div className="mx-2 rounded-2xl p-5 flex flex-col gap-4 shadow border my-5">
              <FaBlogger className="text-[#013c57] text-6xl" />
              <h2 className="font-bold text-xl">{title}</h2>
              <p className="">{content}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Blog;
