import axios from "axios";
import Swal from "sweetalert2";

const AddResultAdminAPI = (stName, stRegE, stRegB, stResult, classValue) => {
  const value = classValue;
  axios
    .post(
      `http://localhost:5000/result/${value}`,
      {
        name: stName,
        rege: stRegE,
        regb: stRegB,
        result: stResult,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      Swal.fire("Result successfully added!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { AddResultAdminAPI };
