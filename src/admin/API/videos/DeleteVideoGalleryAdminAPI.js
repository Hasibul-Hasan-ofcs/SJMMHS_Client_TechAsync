import axios from "axios";
import Swal from "sweetalert2";

const DeleteVideoAdminAPI = (_id) => {
  const id = _id;

  axios
    .delete(`http://localhost:5000/video-gallery/${id}`)
    .then(function (response) {
      console.log(response);
      Swal.fire("Video Data successfully deleted!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { DeleteVideoAdminAPI };