import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { EditPrincipalAdminAPI } from "../../../API/principal/EditPrincipalAdminAPI";

const EditPrincipal = ({
  open,
  handleOpen,
  refetch,
  stId,
  stName,
  stPhone_number,
  stImage_link,
  stDesignation,
  stDescription,
  setStName,
  setStPhone_number,
  setStImage_link,
  setStDesignation,
  setStDescription,
}) => {
  const setNameHandler = (e) => {
    setStName(e.target.value);
  };
  const setPhone_numberHandler = (e) => {
    setStPhone_number(e.target.value);
  };
  const setImage_linkHandler = (e) => {
    setStImage_link(e.target.value);
  };
  const setDesignationHandler = (e) => {
    setStDesignation(e.target.value);
  };
  const setDescriptionHandler = (e) => {
    setStDescription(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    EditPrincipalAdminAPI(
      stId,
      stName,
      stPhone_number,
      stImage_link,
      stDesignation,
      stDescription,
      refetch
    );
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <form onSubmit={(e) => formSubmitHandler(e)}>
        <DialogHeader>Update Principal Information</DialogHeader>
        <DialogBody>
          <input
            type="text"
            value={stName}
            onChange={setNameHandler}
            required
            placeholder="Name"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            value={stPhone_number}
            onChange={setPhone_numberHandler}
            required
            placeholder="Phone No."
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            value={stImage_link}
            onChange={setImage_linkHandler}
            required
            placeholder="Image Link"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            value={stDesignation}
            onChange={setDesignationHandler}
            required
            placeholder="Designation"
            className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow"
          />
          <input
            type="text"
            value={stDescription}
            onChange={setDescriptionHandler}
            required
            placeholder="Description"
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

export default EditPrincipal;
