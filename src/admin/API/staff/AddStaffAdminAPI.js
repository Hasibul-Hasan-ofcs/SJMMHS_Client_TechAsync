import axios from "axios";
import Swal from "sweetalert2";

const AddStaffAdminAPI = (stname, stdesignation, stphone_number) => {
  axios
    .post(
      "https://sjmmhs-server-techasync.vercel.app/staff",
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
      Swal.fire("Staff successfully added!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { AddStaffAdminAPI };
