import axios from "axios";
import Swal from "sweetalert2";

const AddCircularAdminAPI = (
  stPosition,
  stSchool,
  stLocation,
  stDescription
) => {
  axios
    .post(
      "https://sjmmhs-server-techasync.vercel.app/circular",
      {
        Position: stPosition,
        School: stSchool,
        Location: stLocation,
        Description: stDescription,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      Swal.fire("Circular successfully added!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { AddCircularAdminAPI };
