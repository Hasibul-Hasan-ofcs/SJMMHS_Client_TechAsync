import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { AddCircularAdminAPI } from "../../../API/circular/AddCircularAdminAPI";

const AddCircular = ({ open, handleOpen, refetch }) => {
  const [stPosition, setStPosition] = useState("");
  const [stSchool, setStSchool] = useState("");
  const [stLocation, setStLocation] = useState("");
  const [stDescription, setStDescription] = useState("");

  const setPositionHandler = (e) => {
    setStPosition(e.target.value);
  };

  const setSchoolHandler = (e) => {
    setStSchool(e.target.value);
  };

  const setLocationHandler = (e) => {
    setStLocation(e.target.value);
  };

  const setDescriptionHandler = (e) => {
    setStDescription(e.target.value);
  };

  const formSubmitHandler = (
    e,
    stPosition,
    stSchool,
    stLocation,
    stDescription
  ) => {
    e.preventDefault();

    const result = AddCircularAdminAPI(
      stPosition,
      stSchool,
      stLocation,
      stDescription
    );

    refetch();

    console.log(result);
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <form
        onSubmit={(e) =>
          formSubmitHandler(e, stPosition, stSchool, stLocation, stDescription)
        }
      >
        <DialogHeader>Add Holiday Information</DialogHeader>
        <DialogBody>
          <input
            type="text"
            name="title"
            value={stPosition}
            onChange={setPositionHandler}
            required
            placeholder="Holiday Title"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            name="dayname"
            value={stSchool}
            onChange={setSchoolHandler}
            required
            placeholder="Day Name"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            name="date"
            value={stLocation}
            onChange={setLocationHandler}
            required
            placeholder="Date"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            name="noofdays"
            value={stDescription}
            onChange={setDescriptionHandler}
            required
            placeholder="No. of Days"
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

export default AddCircular;
