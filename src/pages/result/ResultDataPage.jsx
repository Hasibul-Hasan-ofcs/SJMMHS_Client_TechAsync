import React from "react";
import { ResultAPI } from "../../api/ResultsAPI";
import { useParams } from "react-router-dom";

const ResultDataPage = () => {
  const { valueClass, reg } = useParams();
  const { isLoading, data } = ResultAPI(valueClass, reg);
  console.log(valueClass, reg, data);

  return (
    <div className="container mx-auto bg-white rounded my-10 min-h-[400px] flex items-center justify-center">
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {data.length == 0 ? (
            <p className="text-center text-red-700 text-xl font-bold">
              Result Not Found!
            </p>
          ) : (
            data.map((el, indx) => (
              <div className="my-6 bg-white p-4" key={el}>
                <div className="flex justify-center">
                  <img
                    src="https://st2.depositphotos.com/14903220/46378/v/450/depositphotos_463781336-stock-illustration-man-avatar-graphic-sign-anonymous.jpg"
                    alt="default image"
                    className="w-[100px]"
                  />
                </div>
                <p className="text-3xl text-[#013c57] font-bold py-4 text-center">
                  {el.name}
                </p>
                <p className="text-2xl text-[#013c57] font-bold text-center">
                  <span>Registartion No: </span>
                  {el.regb}
                </p>
                <p className="text-2xl text-[#013c57] font-bold text-center">
                  <span>Result: </span>
                  <span className="text-green-800 text-4xl">{el.result}</span>
                </p>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
};

export default ResultDataPage;
