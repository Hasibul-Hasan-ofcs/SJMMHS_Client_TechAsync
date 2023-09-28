import axios from "axios";
import Swal from "sweetalert2";

const DeleteStaffAdminAPI = (_id) => {
  const id = _id;

  axios
    .delete(`https://sjmmhs-server-techasync.vercel.app/staff/${id}`)
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
