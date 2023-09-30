import axios from "axios";
import Swal from "sweetalert2";

const AddNoticeAdminAPI = (stDate, stNotice) => {
  axios
    .post(
      "https://sjmmhs-server-techasync.vercel.app/notices",
      {
        date: stDate,
        notice: stNotice,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      Swal.fire("Notice successfully added!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { AddNoticeAdminAPI };
