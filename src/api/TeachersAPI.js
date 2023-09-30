import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TeachersAPI = () => {
  const { isLoading, refetch, error, data } = useQuery({
    queryKey: ["teachersapi"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/teachers")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, refetch, error, data };
};

export { TeachersAPI };
