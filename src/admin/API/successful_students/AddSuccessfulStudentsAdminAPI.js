import axios from "axios";
import Swal from "sweetalert2";

const AddSuccessfulStudentsAdminAPI = (
  stname,
  stachievement,
  stpassing_year,
  stclass_of_success
) => {
  axios
    .post(
      "http://localhost:5000/successful-students",
      {
        name: stname,
        achievement: stachievement,
        passing_year: stpassing_year,
        class_of_success: stclass_of_success,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      Swal.fire("Successful student successfully added!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { AddSuccessfulStudentsAdminAPI };
