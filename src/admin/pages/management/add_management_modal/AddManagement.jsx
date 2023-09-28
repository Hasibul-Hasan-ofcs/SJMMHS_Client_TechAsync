import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { AddManagementAdminAPI } from "../../../API/management/AddManagementAdminAPI";

const AddManagement = ({ open, handleOpen, refetch }) => {
  const [stName, setStName] = useState("");
  const [stDesignation, setStDesignation] = useState("");
  const [stPhone_number, setStPhoneNo] = useState("");

  const setNameHandler = (e) => {
    setStName(e.target.value);
  };

  const setDesignationHandler = (e) => {
    setStDesignation(e.target.value);
  };

  const setPhoneNoHandler = (e) => {
    setStPhoneNo(e.target.value);
  };

  const formSubmitHandler = (e, stName, stDesignation, stPhone_number) => {
    e.preventDefault();

    const result = AddManagementAdminAPI(stName, stDesignation, stPhone_number);

    refetch();

    console.log(result);
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <form
        onSubmit={(e) =>
          formSubmitHandler(e, stName, stDesignation, stPhone_number)
        }
      >
        <DialogHeader>Add Holiday Information</DialogHeader>
        <DialogBody>
          <input
            type="text"
            name="title"
            value={stName}
            onChange={setNameHandler}
            required
            placeholder="Name"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            name="dayname"
            value={stDesignation}
            onChange={setDesignationHandler}
            required
            placeholder="Designation"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            name="date"
            value={stPhone_number}
            onChange={setPhoneNoHandler}
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

export default AddManagement;
