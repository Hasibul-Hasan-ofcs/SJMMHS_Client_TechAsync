import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ComputerUsageAPI = () => {
  const { isLoading, refetch, error, data } = useQuery({
    queryKey: ["computerusageapi"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/computer-usage")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, refetch, error, data };
};

export { ComputerUsageAPI };
