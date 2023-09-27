import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import addHandler from "./add_handler/AddHandler";

const AddStudent = ({ open, handleOpen, reRender, setRerender }) => {
  const [stName, setStName] = useState("");
  const [stReg, setStReg] = useState("");
  const [classValue, setClassValue] = useState("");

  const setNameHandler = (e) => {
    setStName(e.target.value);
  };

  const setRegHandler = (e) => {
    setStReg(e.target.value);
  };

  const setClassHandler = (e) => {
    setClassValue(e.target.value);
  };

  const controlHandler = (e, stName, stReg, classValue) => {
    e.preventDefault();
    addHandler(stName, stReg, classValue);

    setRerender(!reRender);
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <form onSubmit={(e) => controlHandler(e, stName, stReg, classValue)}>
        <DialogHeader>Add Student Information</DialogHeader>
        <DialogBody>
          <input
            type="text"
            name="name"
            value={stName}
            onChange={setNameHandler}
            placeholder="Student name"
            className="border border-gray-500 rounded p-3 text-xl font-semibold w-full my-4 shadow"
          />
          <input
            type="text"
            name="reg"
            value={stReg}
            onChange={setRegHandler}
            placeholder="Student Registration No."
            className="border border-gray-500 rounded p-3 text-xl font-semibold w-full my-4 shadow"
          />
          <select
            name="select2"
            id="select2"
            value={classValue}
            onChange={setClassHandler}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a Class</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
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

export default AddStudent;
