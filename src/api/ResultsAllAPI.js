import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ResultsAllAPI = (value) => {
  const { isLoading, refetch, error, data } = useQuery({
    queryKey: ["resultsallapi", value],
    queryFn: () =>
      axios
        .get(`http://localhost:5000/result/${value}`)
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, refetch, error, data };
};

export { ResultsAllAPI };
