import React from "react";
import SetPageTitle from "../../components/page_title/SetPageTitle";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";
import { Oval } from "react-loader-spinner";
import { ComputerUsageAPI } from "../../api/ComputerUsageAPI";

const ComputerUsage = () => {
  SetPageTitle("কম্পিউটার ব্যবহার");
  const { isLoading, data } = ComputerUsageAPI();

  return (
    <div className="container mx-auto min-h-[400px] my-14 bg-white rounded-2xl">
      <h1 className="pt-6 pb-5 text-center text-3xl">কম্পিউটার ব্যবহার</h1>
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
          <img src={data[0].img} className="w-full" />
          <p className="font-bold">{data[0].usage_report.special_focus}</p>
          <p>বিভাগঃ {data[0].usage_report.departments[0].department_name}</p>
          <p>হেডঃ {data[0].usage_report.departments[0].head_of_department}</p>
          <ul className="list-disc px-8">
            {data[0].usage_report?.departments[0]?.courses_offered?.map(
              (el, indx) => (
                <li key={indx}>{el}</li>
              )
            )}
          </ul>
          <p>এচিভমেন্টস ঃ</p>
          <ul className="list-disc px-8">
            {data[0].usage_report.achievements.map((el, indx) => (
              <li key={indx}>{el}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ComputerUsage;
