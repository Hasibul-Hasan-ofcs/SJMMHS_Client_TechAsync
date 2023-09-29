import React, { useState } from "react";
import { VideosAPI } from "../../../api/VideosAPI";
import { DeleteVideoAdminAPI } from "../../API/videos/DeleteVideoGalleryAdminAPI";
import { Button } from "@material-tailwind/react";
import { FiPlusCircle } from "react-icons/fi";
import AddVideo from "./add_video_modal/AddVideo";
import { Oval } from "react-loader-spinner";
import Swal from "sweetalert2";

const VideoGalleryAdmin = () => {
  const { isLoading, refetch, data } = VideosAPI();
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
        DeleteVideoAdminAPI(_id);
        refetch();
      }
    });
  };

  return (
    <div className="py-8 pe-6">
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
          {data.map(({ _id, video_url, context }, indx) => (
            <div className="p-4 w-full md:w-[50%] h-full" key={_id}>
              <div className="p-1 shadow border">
                <div className={`w-full min-h-[150px] overflow-hidden`}>
                  <video
                    className="w-full h-auto hover:scale-105 transition_common"
                    controls={true}
                    autoPlay
                  >
                    <source src={video_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="py-3 text-center">
                  {" "}
                  <span className="font-bold text-lg">Context:</span> {context}
                </p>
                <p className="py-3 text-center">
                  {" "}
                  <span className="font-bold text-lg">
                    <a
                      href={video_url}
                      className="text-blue-800 hover:text-blue-500 hover:underline"
                    >{`Main video${indx + 1}`}</a>
                  </span>
                </p>

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
      <AddVideo
        open={open}
        handleOpen={handleOpen}
        refetch={refetch}
      ></AddVideo>
    </div>
  );
};

export default VideoGalleryAdmin;
