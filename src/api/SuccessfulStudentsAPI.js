import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SuccessfulStudentsAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["successfulstudentsapi"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/successful-students")
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
