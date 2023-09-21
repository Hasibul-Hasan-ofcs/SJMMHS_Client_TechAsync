import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const StudentInfoAPI = (value) => {
  const { isLoading, error, data } = useQuery(["studentinfoapi", value], () =>
    axios
      .get(`https://sjmmhs-server-techasync.vercel.app/student-info/${value}`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
  );

  return { isLoading, error, data };
};

export { StudentInfoAPI };
