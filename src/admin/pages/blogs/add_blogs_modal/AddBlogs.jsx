import React, { useState } from "react";
import { AddBlogsAdminAPI } from "../../../API/blogs/AddBlogsAdminAPI";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

const AddBlogs = ({ open, handleOpen, refetch }) => {
  const [stTitle, setStTitle] = useState("");
  const [stContent, setStContent] = useState("");

  const setTitleHandler = (e) => {
    setStTitle(e.target.value);
  };

  const setContentHandler = (e) => {
    setStContent(e.target.value);
  };

  const formSubmitHandler = (e, stTitle, stContent) => {
    e.preventDefault();

    const result = AddBlogsAdminAPI(stTitle, stContent);

    refetch();

    console.log(result);
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <form onSubmit={(e) => formSubmitHandler(e, stTitle, stContent)}>
        <DialogHeader>Add Holiday Information</DialogHeader>
        <DialogBody>
          <input
            type="text"
            value={stTitle}
            onChange={setTitleHandler}
            required
            placeholder="Blog Title"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <textarea
            type="text"
            value={stContent}
            onChange={setContentHandler}
            required
            placeholder="Content"
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
export default AddBlogs;
