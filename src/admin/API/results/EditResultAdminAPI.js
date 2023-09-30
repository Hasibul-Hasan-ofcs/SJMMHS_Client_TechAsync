import axios from "axios";
import Swal from "sweetalert2";

const EditResultAdminAPI = (
  stName,
  stRegE,
  stRegB,
  stResult,
  _id,
  value,
  refetch
) => {
  const id = _id;
  axios
    .patch(
      `https://sjmmhs-server-techasync.vercel.app/result/${value}/${id}`,
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
      Swal.fire("Result successfully Updated!");
      refetch();
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { EditResultAdminAPI };
