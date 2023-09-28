import axios from "axios";
import Swal from "sweetalert2";

const DeleteBlogsAdminAPI = (_id) => {
  const id = _id;

  axios
    .delete(`https://sjmmhs-server-techasync.vercel.app/blogs/${id}`)
    .then(function (response) {
      console.log(response);
      Swal.fire("Blog successfully deleted!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { DeleteBlogsAdminAPI };
