import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ExPrincipalAPI = () => {
  const { isLoading, refetch, error, data } = useQuery({
    queryKey: ["exprincipalapi"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/ex-principal")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, refetch, error, data };
};

export { ExPrincipalAPI };
