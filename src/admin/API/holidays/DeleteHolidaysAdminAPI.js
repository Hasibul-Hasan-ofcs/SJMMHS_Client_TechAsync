import axios from "axios";
import Swal from "sweetalert2";

const DeleteHolidaysAdminAPI = (_id) => {
  const id = _id;

  axios
    .delete(`http://localhost:5000/holidays/${id}`)
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
