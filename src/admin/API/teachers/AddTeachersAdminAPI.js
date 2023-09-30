import axios from "axios";
import Swal from "sweetalert2";

const AddTeachersAdminAPI = (stname, stdesignation, stphone_number) => {
  axios
    .post(
      "https://sjmmhs-server-techasync.vercel.app/teachers",
      {
        name: stname,
        designation: stdesignation,
        phone_number: stphone_number,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      Swal.fire("Teacher successfully added!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { AddTeachersAdminAPI };
