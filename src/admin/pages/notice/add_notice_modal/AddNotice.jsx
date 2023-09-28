import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { AddNoticeAdminAPI } from "../../../API/notice/AddNoticeAdminAPI";

const AddNotice = ({ open, handleOpen, refetch }) => {
  const [stDate, setStDate] = useState("");
  const [stNotice, setStNotice] = useState("");

  const setDateHandler = (e) => {
    setStDate(e.target.value);
  };

  const setNoticeHandler = (e) => {
    setStNotice(e.target.value);
  };

  const formSubmitHandler = (e, stDate, stNotice) => {
    e.preventDefault();

    const result = AddNoticeAdminAPI(stDate, stNotice);

    refetch();

    console.log(result);
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <form onSubmit={(e) => formSubmitHandler(e, stDate, stNotice)}>
        <DialogHeader>Add Notice Information</DialogHeader>
        <DialogBody>
          <input
            type="text"
            value={stDate}
            onChange={setDateHandler}
            required
            placeholder="Date"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            value={stNotice}
            onChange={setNoticeHandler}
            required
            placeholder="Notice"
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

export default AddNotice;
