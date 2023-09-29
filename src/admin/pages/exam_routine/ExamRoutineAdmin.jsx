import React, { useState } from "react";
import { ExamRoutineAPI } from "../../../api/ExamRoutineAPI";
import { Oval } from "react-loader-spinner";
import EditExamRoutine from "./edit_exam_routine_modal/EditExamRoutine";
import { Button } from "@material-tailwind/react";

const ExamRoutineAdmin = () => {
  const { isLoading, refetch, data } = ExamRoutineAPI();

  const [open, setOpen] = useState(false);
  const [stClass, setStClass] = useState("");
  const [stId, setId] = useState("");
  const [stDownloadUrl, setStDownloadUrl] = useState("");

  const handleOpen = (el) => {
    setOpen(!open);
    setStClass(el.class);
    setStDownloadUrl(el.downloadurl);
    setId(el._id);
  };

  return (
    <div className="py-8 px-1">
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
        <div>
          {data.map((el, indx) => (
            <div className="p-4 border shadow-md rounded-lg my-3" key={indx}>
              <p className="">
                Class:{" "}
                <span className="text-xl font-bold text-gray-800">
                  {el.class}
                </span>{" "}
              </p>
              <a
                href={el.downloadurl}
                className="hover:underline text-blue-800 hover:text-blue-400"
              >
                {el.downloadurl}
              </a>
              <div className="py-4">
                <Button onClick={() => handleOpen(el)} variant="gradient">
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
      <EditExamRoutine
        open={open}
        handleOpen={handleOpen}
        refetch={refetch}
        stClass={stClass}
        stDownloadUrl={stDownloadUrl}
        setStClass={setStClass}
        setStDownloadUrl={setStDownloadUrl}
        id={stId}
      ></EditExamRoutine>
    </div>
  );
};

export default ExamRoutineAdmin;
