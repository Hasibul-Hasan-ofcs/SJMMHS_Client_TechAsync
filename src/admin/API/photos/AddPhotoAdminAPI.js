import axios from "axios";
import Swal from "sweetalert2";

const AddPhotoAdminAPI = (
  stContext,
  stMainImg,
  stSubImg1,
  stSubImg2,
  stSubImg3,
  refetch
) => {
  axios
    .post("http://localhost:5000/photo-gallery", {
      main_image_url: stMainImg,
      other_images: [stSubImg1, stSubImg2, stSubImg3],
      context: stContext,
    })
    .then(function (response) {
      Swal.fire("Photo Data successfully added!");
      refetch();
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { AddPhotoAdminAPI };
