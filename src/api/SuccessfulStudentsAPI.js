import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SuccessfulStudentsAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["successfulstudentsapi"],
    queryFn: () =>
      axios
        .get("https://sjmmhs-server-techasync.vercel.app/successful-students")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};

export { SuccessfulStudentsAPI };
