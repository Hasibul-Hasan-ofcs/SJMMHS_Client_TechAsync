import axios from "axios";
import Swal from "sweetalert2";

const DeleteSuccessfulStudentsAdminAPI = (_id) => {
  const id = _id;

  axios
    .delete(
      `https://sjmmhs-server-techasync.vercel.app/successful-students/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log(response);
      Swal.fire("Successful student data successfully deleted!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { DeleteSuccessfulStudentsAdminAPI };
