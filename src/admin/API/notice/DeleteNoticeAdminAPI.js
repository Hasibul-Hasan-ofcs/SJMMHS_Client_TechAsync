import axios from "axios";
import Swal from "sweetalert2";

const DeleteNoticeAdminAPI = (_id) => {
  const id = _id;

  axios
    .delete(`http://localhost:5000/notices/${id}`)
    .then(function (response) {
      console.log(response);
      Swal.fire("Notice successfully deleted!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { DeleteNoticeAdminAPI };
