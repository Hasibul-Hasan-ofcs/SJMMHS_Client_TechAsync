import React, { useState } from "react";
import { PhotoGalleryAPI } from "../../../api/PhotoGalleryAPI";
import { Oval } from "react-loader-spinner";
import { Button } from "@material-tailwind/react";
import { FiPlusCircle } from "react-icons/fi";
import Swal from "sweetalert2";
import { DeletePhotoAdminAPI } from "../../API/photos/DeletePhotoAdminAPI";
import AddPhoto from "./add_photo_modal/AddPhoto";

const PhotoGalleryAdmin = () => {
  const { isLoading, refetch, data } = PhotoGalleryAPI();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const onDeleteHandler = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        DeletePhotoAdminAPI(_id);
        refetch();
      }
    });
  };

  return (
    <div className="py-8 px-1">
      <div className="flex items-center justify-center py-10">
        <Button
          onClick={handleOpen}
          className="text-white rounded-md bg-[#013C57] min-w-[250px] py-4 text-base flex items-center justify-center"
        >
          <FiPlusCircle className="pe-3 text-4xl" /> ADD NEW PHOTODATA
        </Button>
      </div>

      {isLoading ? (
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
        <div className="flex flex-wrap flex-row px-1 py-16">
          {data.map(({ _id, main_image_url, other_images, context }, indx) => (
            <div className="p-4 w-full md:w-[50%] h-full" key={_id}>
              <div className="p-4 shadow border">
                <div className={`w-full min-h-[150px] overflow-hidden`}>
                  <img
                    src={main_image_url}
                    alt="school photos"
                    className="w-full h-auto hover:scale-105 transition_common"
                  />
                </div>
                <p className="py-3 text-center">
                  {" "}
                  <span className="font-bold text-lg">Context:</span> {context}
                </p>
                <p className="py-3 text-center">
                  {" "}
                  <span className="font-bold text-lg">
                    <a
                      href={main_image_url}
                      className="text-blue-800 hover:text-blue-500 hover:underline"
                    >{`Main Image${indx + 1}`}</a>
                  </span>
                </p>

                {other_images.map((el, indx) => (
                  <p className="py-1 text-center" key={indx}>
                    <span className="font-bold text-lg"></span>{" "}
                    <a
                      href={el}
                      className="text-blue-800 hover:text-blue-500 hover:underline"
                    >{`Sub Image${indx + 1}`}</a>
                  </p>
                ))}
                <div className="flex justify-center py-3">
                  <Button
                    color="red"
                    className="mx-1"
                    onClick={() => onDeleteHandler(_id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <AddPhoto
        open={open}
        handleOpen={handleOpen}
        refetch={refetch}
      ></AddPhoto>
    </div>
  );
};

export default PhotoGalleryAdmin;
