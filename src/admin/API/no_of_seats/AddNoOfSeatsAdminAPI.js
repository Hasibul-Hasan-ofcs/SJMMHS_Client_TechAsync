import axios from "axios";
import Swal from "sweetalert2";

const AddNoOfSeatsAdminAPI = (stclass, stnoofseats) => {
  axios
    .post(
      "http://localhost:5000/no-of-seats",
      {
        class: stclass,
        noofseats: stnoofseats,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      Swal.fire("Seat count successfully added!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { AddNoOfSeatsAdminAPI };
