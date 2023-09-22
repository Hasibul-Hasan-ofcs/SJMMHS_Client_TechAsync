import React from "react";
import { PhysicalStructureAPI } from "../../api/PhysicalStructureAPI";
import { Oval } from "react-loader-spinner";
import SetPageTitle from "../../components/page_title/SetPageTitle";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";

const PhysicalStructure = () => {
  SetPageTitle("ভৌতকাঠমো");
  const { isLoading, data } = PhysicalStructureAPI();

  return (
    <div className="container mx-auto min-h-[400px] my-14 bg-white rounded-2xl">
      <h1 className="pt-6 pb-5 text-center text-3xl">ভৌতকাঠমো</h1>
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
          <img
            src="https://educational.deshiit.net/wp-content/uploads/2023/08/school.jpg"
            className="w-full"
          />
          <p className="font-bold">{data[0].school_name}</p>
          <p>ঠিকানাঃ {data[0].location}</p>
          <p>বিল্ডিং এর ধরনঃ {data[0].building.building_type}</p>
          <p>ফ্লোরঃ {data[0].building.number_of_floors}</p>
          <p>ক্লাসরুমঃ {data[0].building.classrooms}</p>
          <p>সায়েন্স ল্যাবঃ {data[0].building.science_labs}</p>
          <p>প্লেগ্রাউন্ড সাইজঃ {data[0].playground.size_in_acres}</p>
          <p>ফেসালিটিসঃ</p>
          <ul className="list-disc px-8">
            {data[0].playground.sports_facilities.map((el, indx) => (
              <li key={indx}>{el}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PhysicalStructure;
