import axios from "axios";
import Swal from "sweetalert2";

const DeleteNoOfSeatsAdminAPI = (_id) => {
  const id = _id;

  axios
    .delete(`https://sjmmhs-server-techasync.vercel.app/no-of-seats/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      console.log(response);
      Swal.fire("Seat count data successfully deleted!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { DeleteNoOfSeatsAdminAPI };
