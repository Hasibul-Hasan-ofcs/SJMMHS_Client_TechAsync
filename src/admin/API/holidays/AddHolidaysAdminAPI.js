import axios from "axios";
import Swal from "sweetalert2";

const AddHolidaysAdminAPI = (stTitle, stDayName, stDate, stNoOfDays) => {
  axios
    .post("https://sjmmhs-server-techasync.vercel.app/holidays", {
      holiday: stTitle,
      day: stDayName,
      date: stDate,
      noofdays: stNoOfDays,
    })
    .then(function (response) {
      Swal.fire("Holiday successfully added!");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { AddHolidaysAdminAPI };
