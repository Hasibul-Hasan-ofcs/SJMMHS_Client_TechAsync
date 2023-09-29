import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { EditExamRoutineAdminAPI } from "../../../API/exam_routine/EditExamRoutineAdminAPI";

const EditExamRoutine = ({
  open,
  handleOpen,
  refetch,
  stClass,
  stDownloadUrl,
  setStClass,
  setStDownloadUrl,
  id,
}) => {
  const setClassHandler = (e) => {
    setStClass(e.target.value);
  };

  const setDownloadUrlHandler = (e) => {
    setStDownloadUrl(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    EditExamRoutineAdminAPI(stClass, stDownloadUrl, refetch, id);
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <form onSubmit={(e) => formSubmitHandler(e)}>
        <DialogHeader>Edit Routine Information</DialogHeader>
        <DialogBody>
          <input
            type="text"
            value={stClass}
            onChange={setClassHandler}
            placeholder="Student name"
            className="border border-gray-500 rounded p-3 text-xl font-semibold w-full my-4 shadow"
          />
          <input
            type="text"
            value={stDownloadUrl}
            onChange={setDownloadUrlHandler}
            placeholder="Student Registration No."
            className="border border-gray-500 rounded p-3 text-xl font-semibold w-full my-4 shadow"
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
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};

export default EditExamRoutine;
