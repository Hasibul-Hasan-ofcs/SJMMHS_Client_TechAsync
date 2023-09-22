import React from "react";
import SetPageTitle from "../../components/page_title/SetPageTitle";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";
import { SahapathAPI } from "../../api/SahapathAPI";
import { Oval } from "react-loader-spinner";

const Sahapath = () => {
  SetPageTitle("সহপাঠ");
  const { isLoading, data } = SahapathAPI();

  return (
    <div className="container mx-auto min-h-[400px] my-14 bg-white rounded-2xl">
      <h1 className="pt-6 pb-5 text-center text-3xl">সহপাঠ</h1>
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
        <div className="py-10 px-9 flex flex-col gap-4">
          <p className="font-bold">{data[0].topic}</p>
          <p>{data[0].description}</p>
          <p>{data[0].importance}</p>
          <ul className="list-disc px-8">
            {data[0].examples.map((el, indx) => (
              <li key={indx}>{el}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sahapath;
