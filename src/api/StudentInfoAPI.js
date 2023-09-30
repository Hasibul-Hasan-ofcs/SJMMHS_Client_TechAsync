import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const StudentInfoAPI = (value) => {
  const { isLoading, error, refetch, data } = useQuery(
    ["studentinfoapi", value],
    () =>
      axios
        .get(`https://sjmmhs-server-techasync.vercel.app/student-info/${value}`)
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        })
  );

  return { isLoading, error, refetch, data };
};

export { StudentInfoAPI };
