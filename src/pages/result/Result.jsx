import React, { useRef, useState } from "react";
import { Select, Option, Input, Button } from "@material-tailwind/react";

const Result = () => {
  const [valueClass, setValueClass] = useState(null);
  const [valueYear, setValueYear] = useState(null);

  const handleChangeClass = (e) => {
    setValueClass(e.target?.value);
  };

  const handleChangeYear = (e) => {
    setValueYear(e.target?.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const reg = form.reg.value;

    console.log(valueClass, valueYear, reg);
  };

  return (
    <div className="container mx-auto bg-white rounded my-10">
      <div className="max-w-[600px] mx-auto py-10">
        <h3 className="text-red-900 font-bold py-14 text-center text-2xl">
          পরীক্ষার ফলাফল দেখতে তোমার ক্লাস, রোল নাম্বার এবং রেজিস্ট্রেশন
          নাম্বারটি লিখে সার্চ অপশনে ক্লিক করো
        </h3>
        <div>
          <form onSubmit={formSubmitHandler}>
            <p className="pt-6">Class:</p>
            <div className="w-full">
              <select
                name="select2"
                id="select2"
                value={valueClass}
                onChange={handleChangeClass}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <p className="pt-6">Year:</p>
            <div className="w-full">
              <select
                name="select2"
                id="select2"
                value={valueYear}
                onChange={handleChangeYear}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="2023">2023</option>
              </select>
            </div>

            <p className="pt-6">Reg No:</p>
            <div className="w-full">
              <Input label="Registration No." name="reg" />
            </div>
            <div className="pt-6">
              <Button type="submit">Result</Button>
            </div>
          </form>
        </div>

        <div className="my-6 bg-white p-4">
          <p>
            <span>Name: </span>
          </p>
          <p>
            <span>Registartion No: </span>
          </p>
          <p>
            <span>Result: </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
