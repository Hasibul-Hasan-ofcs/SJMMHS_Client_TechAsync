import axios from "axios";
import Swal from "sweetalert2";

const DeleteNoOfRoomsAdminAPI = (_id) => {
  const id = _id;

  axios
    .delete(`http://localhost:5000/no-of-rooms/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      console.log(response);
      Swal.fire("Room count data successfully deleted!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { DeleteNoOfRoomsAdminAPI };
