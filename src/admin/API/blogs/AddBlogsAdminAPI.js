import axios from "axios";
import Swal from "sweetalert2";

const AddBlogsAdminAPI = (stTitle, stContent) => {
  axios
    .post(
      "https://sjmmhs-server-techasync.vercel.app/blogs",
      {
        title: stTitle,
        content: stContent,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      Swal.fire("Holiday successfully added!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { AddBlogsAdminAPI };
