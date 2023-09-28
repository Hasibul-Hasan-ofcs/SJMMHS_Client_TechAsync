import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { AddStaffAdminAPI } from "../../../API/staff/AddStaffAdminAPI";

const AddStaff = ({ open, handleOpen, refetch }) => {
  const [stname, setStname] = useState("");
  const [stdesignation, setStdesignation] = useState("");
  const [stphone_number, setStphone_number] = useState("");

  const setNameHandler = (e) => {
    setStname(e.target.value);
  };

  const setDesignationHandler = (e) => {
    setStdesignation(e.target.value);
  };

  const setPhoneHandler = (e) => {
    setStphone_number(e.target.value);
  };

  const formSubmitHandler = (e, stname, stdesignation, stphone_number) => {
    e.preventDefault();

    const result = AddStaffAdminAPI(stname, stdesignation, stphone_number);

    refetch();

    console.log(result);
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <form
        onSubmit={(e) =>
          formSubmitHandler(e, stname, stdesignation, stphone_number)
        }
      >
        <DialogHeader>Add Staff Information</DialogHeader>
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
            value={stdesignation}
            onChange={setDesignationHandler}
            required
            placeholder="Designation"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            value={stphone_number}
            onChange={setPhoneHandler}
            required
            placeholder="Phone No."
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
export default AddStaff;
