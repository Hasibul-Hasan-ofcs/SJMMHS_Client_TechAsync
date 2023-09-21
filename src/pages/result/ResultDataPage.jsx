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
        <></>
      ) : (
        <>
          {data.map((el, indx) => (
            <div className="my-6 bg-white p-4">
              <p className="text-2xl text-[#013c57] font-bold">
                <span>Name: </span>
                {el.name}
              </p>
              <p className="text-2xl text-[#013c57] font-bold">
                <span>Registartion No: </span>
                {el.reg}
              </p>
              <p className="text-2xl text-[#013c57] font-bold">
                <span>Result: </span>
                {el.result}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ResultDataPage;
