import axios from "axios";
import Swal from "sweetalert2";

const DeleteNoOfSeatsAdminAPI = (_id) => {
  const id = _id;

  axios
    .delete(`http://localhost:5000/no-of-seats/${id}`)
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
