import axios from "axios";
import Swal from "sweetalert2";

const AddTeachersAdminAPI = (stname, stdesignation, stphone_number) => {
  axios
    .post("http://localhost:5000/teachers", {
      name: stname,
      designation: stdesignation,
      phone_number: stphone_number,
    })
    .then(function (response) {
      Swal.fire("Teacher successfully added!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { AddTeachersAdminAPI };
