import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { AddVideoAdminAPI } from "../../../API/videos/AddVideoAdminAPI";

const AddVideo = ({ open, handleOpen, refetch }) => {
  const [stContext, setStContext] = useState("");
  const [stMainVideoUrl, setStMainVideoUrl] = useState("");

  const setContextHandler = (e) => {
    setStContext(e.target.value);
  };

  const setMainVideoHandler = (e) => {
    setStMainVideoUrl(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    AddVideoAdminAPI(stContext, stMainVideoUrl, refetch);
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <form onSubmit={(e) => formSubmitHandler(e)}>
        <DialogHeader>Add Video Information</DialogHeader>
        <DialogBody>
          <input
            type="text"
            value={stContext}
            onChange={setContextHandler}
            required
            placeholder="Context"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            value={stMainVideoUrl}
            onChange={setMainVideoHandler}
            required
            placeholder="https://media.istockphoto.com/id/1277475769/video/colorful-fireworks-exploding-in-night-sky-loop-animation-background-celebration-event.mp4?s=mp4-640x640-is&k=20&c=Kpo6eIu7ADmYcVrqRjqT8c9r-KzeUcDDPhpIBRXDf8Y="
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

export default AddVideo;
