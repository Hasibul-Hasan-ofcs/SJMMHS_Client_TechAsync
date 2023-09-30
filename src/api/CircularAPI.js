import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CircularAPI = () => {
  const { isLoading, refetch, error, data } = useQuery({
    queryKey: ["circularapi"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/circular")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, refetch, error, data };
};

export { CircularAPI };
