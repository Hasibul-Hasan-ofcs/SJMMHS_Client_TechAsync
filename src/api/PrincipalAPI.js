import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PrincipalAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["principalapi"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/principal")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};

export { PrincipalAPI };
