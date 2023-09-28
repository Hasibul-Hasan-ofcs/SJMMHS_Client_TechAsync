import axios from "axios";
import Swal from "sweetalert2";

const AddManagementAdminAPI = (stName, stDesignation, stPhone_number) => {
  axios
    .post("https://sjmmhs-server-techasync.vercel.app/management", {
      name: stName,
      designation: stDesignation,
      phone_number: stPhone_number,
    })
    .then(function (response) {
      Swal.fire("Person successfully added!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { AddManagementAdminAPI };
