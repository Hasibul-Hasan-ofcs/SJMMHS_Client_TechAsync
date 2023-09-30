import axios from "axios";
import Swal from "sweetalert2";

const EditExPrincipalAdminAPI = (
  stId,
  stName,
  stPhone_number,
  stImage_link,
  stDesignation,
  stDescription,
  refetch
) => {
  const id = stId;

  axios
    .patch(
      `http://localhost:5000/ex-principal/${id}`,
      {
        name: stName,
        phone_number: stPhone_number,
        image_link: stImage_link,
        designation: stDesignation,
        description: stDescription,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      Swal.fire("ExPrincipal data successfully updated!");
      refetch();
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { EditExPrincipalAdminAPI };
