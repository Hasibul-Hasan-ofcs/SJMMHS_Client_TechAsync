import axios from "axios";
import Swal from "sweetalert2";

const AddManagementAdminAPI = (stName, stDesignation, stPhone_number) => {
  axios
    .post(
      "http://localhost:5000/management",
      {
        name: stName,
        designation: stDesignation,
        phone_number: stPhone_number,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      Swal.fire("Person successfully added!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { AddManagementAdminAPI };
