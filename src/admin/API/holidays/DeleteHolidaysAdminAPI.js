import axios from "axios";
import Swal from "sweetalert2";

const DeleteHolidaysAdminAPI = (_id) => {
  const id = _id;

  axios
    .delete(`https://sjmmhs-server-techasync.vercel.app/holidays/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      console.log(response);
      Swal.fire("Holiday successfully deleted!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { DeleteHolidaysAdminAPI };
