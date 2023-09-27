import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { FiPlusCircle } from "react-icons/fi";
import { BlogsAPI } from "../../../api/BlogsAPI";
import { Oval } from "react-loader-spinner";
import { FaBlogger } from "react-icons/fa";

const BlogsAdmin = () => {
  const { isLoading, refetch, data } = BlogsAPI();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="py-8 pe-6">
      <div className="flex items-center justify-center py-10">
        <Button
          onClick={handleOpen}
          className="text-white rounded-md bg-[#013C57] w-[250px] py-4 text-base flex items-center justify-center"
        >
          <FiPlusCircle className="pe-3 text-4xl" /> ADD NEW BLOG
        </Button>
      </div>

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
          {data.map(({ title, content, _id }, indx) => (
            <div
              className="mx-2 rounded-2xl p-5 flex flex-col gap-4 shadow border my-5"
              key={_id}
            >
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

export default BlogsAdmin;
