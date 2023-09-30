import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const StudentInfoAPI = (value) => {
  const { isLoading, error, refetch, data } = useQuery(
    ["studentinfoapi", value],
    () =>
      axios
        .get(`http://localhost:5000/student-info/${value}`)
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
