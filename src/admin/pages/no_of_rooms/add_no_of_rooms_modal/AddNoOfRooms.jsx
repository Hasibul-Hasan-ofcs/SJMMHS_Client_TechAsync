import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { AddNoOfRoomsAdminAPI } from "../../../API/no_of_rooms/AddNoOfRoomsAdminAPI";

const AddNoOfRooms = ({ open, handleOpen, refetch }) => {
  const [stFloor, setStFloor] = useState("");
  const [stNoOfClasses, setStNoOfClasses] = useState("");

  const setFloorHandler = (e) => {
    setStFloor(e.target.value);
  };

  const setNoOfClassesHandler = (e) => {
    setStNoOfClasses(e.target.value);
  };

  const formSubmitHandler = (e, stFloor, stNoOfClasses) => {
    e.preventDefault();

    const result = AddNoOfRoomsAdminAPI(stFloor, stNoOfClasses);

    refetch();

    console.log(result);
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <form onSubmit={(e) => formSubmitHandler(e, stFloor, stNoOfClasses)}>
        <DialogHeader>Add Holiday Information</DialogHeader>
        <DialogBody>
          <input
            type="text"
            name="floor"
            value={stFloor}
            onChange={setFloorHandler}
            required
            placeholder="Holiday Title"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            name="no of classes"
            value={stNoOfClasses}
            onChange={setNoOfClassesHandler}
            required
            placeholder="Day Name"
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

export default AddNoOfRooms;
