import axios from "axios";
import Swal from "sweetalert2";

const DeleteSuccessfulStudentsAdminAPI = (_id) => {
  const id = _id;

  axios
    .delete(`http://localhost:5000/successful-students/${id}`)
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
