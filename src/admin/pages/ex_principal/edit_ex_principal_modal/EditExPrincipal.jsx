import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { EditExPrincipalAdminAPI } from "../../../API/ex_principal/EditExPrincipalAdminAPI";
import { BsCloudUploadFill } from "react-icons/bs";
import { Oval } from "react-loader-spinner";

const EditExPrincipal = ({
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
  const [loadingM, setLoadingM] = useState(false);

  const setNameHandler = (e) => {
    setStName(e.target.value);
  };
  const setPhone_numberHandler = (e) => {
    setStPhone_number(e.target.value);
  };
  const setImage_linkHandler = (e) => {
    const imgFile = e.target.files[0];
    const image_upload_api_key = import.meta.env.VITE_Image_Upload_Api_Key;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_upload_api_key}`;
    const formData = new FormData();
    formData.append("image", imgFile);
    setLoadingM(true);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        console.log(imgRes);
        if (imgRes.success) {
          const img_url = imgRes.data.display_url;
          setStImage_link(img_url);
          setLoadingM(false);
        } else {
          toast("Image upload failed Please try again!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoadingM(false);
        }
      });
  };
  const setDesignationHandler = (e) => {
    setStDesignation(e.target.value);
  };
  const setDescriptionHandler = (e) => {
    setStDescription(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    EditExPrincipalAdminAPI(
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
          <div className="relative border rounded-lg shadow cursor-pointer mt-4 py-4 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center cursor-pointer">
              <BsCloudUploadFill className="text-3xl cursor-pointer" />
              <p className="text-center cursor-pointer truncate">
                {stImage_link}
              </p>
              <p className="text-center cursor-pointer">
                Upload Ex-Headteacher Image
              </p>
            </div>

            {loadingM ? (
              <div className="flex justify-center items-center">
                <Oval
                  height={80}
                  width={80}
                  color="#013c57"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#013c57"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              </div>
            ) : (
              <input
                type="file"
                name="imgFile"
                onChange={setImage_linkHandler}
                placeholder="Image Link"
                className="border border-gray-500 rounded p-3 text-base w-full my-4 shadow opacity-0"
              />
            )}
          </div>
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

export default EditExPrincipal;
