import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { AddPhotoAdminAPI } from "../../../API/photos/AddPhotoAdminAPI";

const AddPhoto = ({ open, handleOpen, refetch }) => {
  const [stContext, setStContext] = useState("");
  const [stMainImg, setStMainImg] = useState("");
  const [stSubImg1, setStSubImg1] = useState("");
  const [stSubImg2, setStSubImg2] = useState("");
  const [stSubImg3, setStSubImg3] = useState("");

  const setContextHandler = (e) => {
    setStContext(e.target.value);
  };

  const setMainImgHandler = (e) => {
    setStMainImg(e.target.value);
  };

  const setSubImg1Handler = (e) => {
    setStSubImg1(e.target.value);
  };

  const setSubImg2Handler = (e) => {
    setStSubImg2(e.target.value);
  };

  const setSubImg3Handler = (e) => {
    setStSubImg3(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    AddPhotoAdminAPI(
      stContext,
      stMainImg,
      stSubImg1,
      stSubImg2,
      stSubImg3,
      refetch
    );
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <form onSubmit={(e) => formSubmitHandler(e)}>
        <DialogHeader>Add Photo Information</DialogHeader>
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
            value={stMainImg}
            onChange={setMainImgHandler}
            required
            placeholder="Sub Main Image"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            value={stSubImg1}
            onChange={setSubImg1Handler}
            required
            placeholder="Sub Image 1"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            value={stSubImg2}
            onChange={setSubImg2Handler}
            required
            placeholder="Sub Image 2"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            value={stSubImg3}
            onChange={setSubImg3Handler}
            required
            placeholder="Sub Image 3"
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

export default AddPhoto;
