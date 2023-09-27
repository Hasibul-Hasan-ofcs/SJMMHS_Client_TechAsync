import axios from "axios";
import Swal from "sweetalert2";

const DeleteTeachersAdminAPI = (_id) => {
  const id = _id;

  axios
    .delete(`http://localhost:5000/teachers/${id}`)
    .then(function (response) {
      console.log(response);
      Swal.fire("Teacher successfully deleted!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { DeleteTeachersAdminAPI };
