import axios from "axios";
import Swal from "sweetalert2";

const EditExamRoutineAdminAPI = (stClass, stDownloadUrl, refetch, id) => {
  axios
    .patch(`https://sjmmhs-server-techasync.vercel.app/exam-routine/${id}`, {
      class: stClass,
      downloadurl: stDownloadUrl,
    })
    .then(function (response) {
      Swal.fire("Exam Routine successfully edited!");
      refetch();
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { EditExamRoutineAdminAPI };
