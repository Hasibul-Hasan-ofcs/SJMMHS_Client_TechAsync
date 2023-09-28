import axios from "axios";
import Swal from "sweetalert2";

const DeleteCircularAdminAPI = (_id) => {
  const id = _id;

  axios
    .delete(`https://sjmmhs-server-techasync.vercel.app/circular/${id}`)
    .then(function (response) {
      console.log(response);
      Swal.fire("Circular successfully deleted!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { DeleteCircularAdminAPI };
