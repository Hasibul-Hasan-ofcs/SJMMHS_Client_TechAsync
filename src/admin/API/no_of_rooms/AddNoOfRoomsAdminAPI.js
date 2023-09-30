import axios from "axios";
import Swal from "sweetalert2";

const AddNoOfRoomsAdminAPI = (stFloor, stNoOfClasses) => {
  axios
    .post(
      "https://sjmmhs-server-techasync.vercel.app/no-of-rooms",
      {
        floor: stFloor,
        numberofclasses: stNoOfClasses,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      Swal.fire("Room details successfully added!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { AddNoOfRoomsAdminAPI };
