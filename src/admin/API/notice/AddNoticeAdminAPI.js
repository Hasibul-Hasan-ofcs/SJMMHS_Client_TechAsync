import axios from "axios";
import Swal from "sweetalert2";

const AddNoticeAdminAPI = (stDate, stNotice) => {
  axios
    .post(
      "http://localhost:5000/notices",
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
