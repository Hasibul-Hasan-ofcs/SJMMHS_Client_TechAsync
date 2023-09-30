import axios from "axios";
import Swal from "sweetalert2";

const DeleteStaffAdminAPI = (_id) => {
  const id = _id;

  axios
    .delete(`http://localhost:5000/staff/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      console.log(response);
      Swal.fire("Staff successfully deleted!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { DeleteStaffAdminAPI };
