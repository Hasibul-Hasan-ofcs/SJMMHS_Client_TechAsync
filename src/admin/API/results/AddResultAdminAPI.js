import axios from "axios";
import Swal from "sweetalert2";

const AddResultAdminAPI = (stName, stRegE, stRegB, stResult, classValue) => {
  const value = classValue;
  axios
    .post(`https://sjmmhs-server-techasync.vercel.app/result/${value}`, {
      name: stName,
      rege: stRegE,
      regb: stRegB,
      result: stResult,
    })
    .then(function (response) {
      Swal.fire("Result successfully added!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { AddResultAdminAPI };
