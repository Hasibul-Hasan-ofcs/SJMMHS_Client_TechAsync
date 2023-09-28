import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { AddSuccessfulStudentsAdminAPI } from "../../../API/successful_students/AddSuccessfulStudentsAdminAPI";

const AddSuccessfulStudents = ({ open, handleOpen, refetch }) => {
  const [stname, setStName] = useState("");
  const [stachievement, setStAchievement] = useState("");
  const [stpassing_year, setStPassing_year] = useState("");
  const [stclass_of_success, setStClass_of_success] = useState("");

  const setNameHandler = (e) => {
    setStName(e.target.value);
  };

  const setAchievementHandler = (e) => {
    setStAchievement(e.target.value);
  };

  const setPassingYearHandler = (e) => {
    setStPassing_year(e.target.value);
  };

  const setClassOfSuccessHandler = (e) => {
    setStClass_of_success(e.target.value);
  };

  const formSubmitHandler = (
    e,
    stname,
    stachievement,
    stpassing_year,
    stclass_of_success
  ) => {
    e.preventDefault();

    const result = AddSuccessfulStudentsAdminAPI(
      stname,
      stachievement,
      stpassing_year,
      stclass_of_success
    );

    refetch();

    console.log(result);
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <form
        onSubmit={(e) =>
          formSubmitHandler(
            e,
            stname,
            stachievement,
            stpassing_year,
            stclass_of_success
          )
        }
      >
        <DialogHeader>Add Successful Student Information</DialogHeader>
        <DialogBody>
          <input
            type="text"
            value={stname}
            onChange={setNameHandler}
            required
            placeholder="Name"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            value={stachievement}
            onChange={setAchievementHandler}
            required
            placeholder="Achievement"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            value={stpassing_year}
            onChange={setPassingYearHandler}
            required
            placeholder="Passing year"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            value={stclass_of_success}
            onChange={setClassOfSuccessHandler}
            required
            placeholder="Class of success"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleOpen}
            type="submit"
          >
            <span>Add</span>
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};

export default AddSuccessfulStudents;
