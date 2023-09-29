import axios from "axios";
import Swal from "sweetalert2";

const AddVideoAdminAPI = (stContext, stMainVideoUrl, refetch) => {
  axios
    .post("https://sjmmhs-server-techasync.vercel.app/video-gallery", {
      video_url: stMainVideoUrl,
      context: stContext,
    })
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
