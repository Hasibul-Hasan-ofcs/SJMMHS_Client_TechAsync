import axios from "axios";
import Swal from "sweetalert2";

const DeleteBlogsAdminAPI = (_id) => {
  const id = _id;

  axios
    .delete(`http://localhost:5000/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        "Content-Type": "application/json",
      },
    })
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
