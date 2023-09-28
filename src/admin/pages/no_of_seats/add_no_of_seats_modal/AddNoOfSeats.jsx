import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { AddNoOfSeatsAdminAPI } from "../../../API/no_of_seats/AddNoOfSeatsAdminAPI";

const AddNoOfSeats = ({ open, handleOpen, refetch }) => {
  const [stclass, setStClass] = useState("");
  const [stnoofseats, setstnoofseats] = useState("");

  const setClassHandler = (e) => {
    setStClass(e.target.value);
  };

  const setNoOfSeatsHandler = (e) => {
    setstnoofseats(e.target.value);
  };

  const formSubmitHandler = (e, stclass, stnoofseats) => {
    e.preventDefault();

    const result = AddNoOfSeatsAdminAPI(stclass, stnoofseats);

    refetch();

    console.log(result);
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <form onSubmit={(e) => formSubmitHandler(e, stclass, stnoofseats)}>
        <DialogHeader>Add Class Information</DialogHeader>
        <DialogBody>
          <input
            type="text"
            value={stclass}
            onChange={setClassHandler}
            required
            placeholder="Class"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            value={stnoofseats}
            onChange={setNoOfSeatsHandler}
            required
            placeholder="No of seats"
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

export default AddNoOfSeats;
