import axios from "axios";
import Swal from "sweetalert2";

const AddVideoAdminAPI = (stContext, stMainVideoUrl, refetch) => {
  axios
    .post(
      "https://sjmmhs-server-techasync.vercel.app/video-gallery",
      {
        video_url: stMainVideoUrl,
        context: stContext,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      Swal.fire("Video Data successfully added!");
      refetch();
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { AddVideoAdminAPI };
