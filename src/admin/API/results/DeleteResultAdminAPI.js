import axios from "axios";
import Swal from "sweetalert2";

const DeleteResultAdminAPI = (_id, value) => {
  const id = _id;

  axios
    .delete(`http://localhost:5000/result/${value}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      console.log(response);
      Swal.fire("Result successfully deleted!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { DeleteResultAdminAPI };
