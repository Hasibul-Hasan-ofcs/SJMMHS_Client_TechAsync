import React from "react";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";
import { VideosAPI } from "../../api/VideosAPI";
import { Oval } from "react-loader-spinner";

const Videos = () => {
  const { isLoading, refetch, data } = VideosAPI();

  return (
    <div className="container mx-auto min-h-[400px] my-14 bg-white rounded-2xl">
      <h1 className="pt-6 pb-5 text-center text-3xl">ভিডিও গ্যালারী</h1>
      <CustomUnderline></CustomUnderline>

      <div className="flex justify-center items-center py-28">
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
          <div className="flex flex-wrap flex-row px-1">
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
                  <p className="py-3 text-center">{context}</p>

                  {/* <div className="flex justify-center py-3">
                    <Button
                      color="red"
                      className="mx-1"
                      onClick={() => onDeleteHandler(_id)}
                    >
                      Delete
                    </Button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* <h3 className="text-2xl text-[#013c57] font-bold text-center pt-9">
        Looks like no Video Uploaded yet
      </h3> */}
    </div>
  );
};

export default Videos;
