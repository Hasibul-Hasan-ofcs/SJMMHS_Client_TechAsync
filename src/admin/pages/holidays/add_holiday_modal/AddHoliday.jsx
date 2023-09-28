import React, { useState } from "react";
import { AddHolidaysAdminAPI } from "../../../API/holidays/AddHolidaysAdminAPI";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

const AddHoliday = ({ open, handleOpen, refetch }) => {
  const [stTitle, setStTitle] = useState("");
  const [stDayName, setStDayName] = useState("");
  const [stDate, setStDate] = useState("");
  const [stNoOfDays, setStNoOfDays] = useState("");

  const setTitleHandler = (e) => {
    setStTitle(e.target.value);
  };

  const setDayNameHandler = (e) => {
    setStDayName(e.target.value);
  };

  const setDateHandler = (e) => {
    setStDate(e.target.value);
  };

  const setNoOfDaysHandler = (e) => {
    setStNoOfDays(e.target.value);
  };

  const formSubmitHandler = (e, stTitle, stDayName, stDate, stNoOfDays) => {
    e.preventDefault();

    const result = AddHolidaysAdminAPI(stTitle, stDayName, stDate, stNoOfDays);

    refetch();

    console.log(result);
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <form
        onSubmit={(e) =>
          formSubmitHandler(e, stTitle, stDayName, stDate, stNoOfDays)
        }
      >
        <DialogHeader>Add Holiday Information</DialogHeader>
        <DialogBody>
          <input
            type="text"
            name="title"
            value={stTitle}
            onChange={setTitleHandler}
            required
            placeholder="Holiday Title"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            name="dayname"
            value={stDayName}
            onChange={setDayNameHandler}
            required
            placeholder="Day Name"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            name="date"
            value={stDate}
            onChange={setDateHandler}
            required
            placeholder="Date"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            name="noofdays"
            value={stNoOfDays}
            onChange={setNoOfDaysHandler}
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

export default AddHoliday;
