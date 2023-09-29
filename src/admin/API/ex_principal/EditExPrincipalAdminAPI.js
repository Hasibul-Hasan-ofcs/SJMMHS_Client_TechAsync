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
    .patch(`https://sjmmhs-server-techasync.vercel.app/ex-principal/${id}`, {
      name: stName,
      phone_number: stPhone_number,
      image_link: stImage_link,
      designation: stDesignation,
      description: stDescription,
    })
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
