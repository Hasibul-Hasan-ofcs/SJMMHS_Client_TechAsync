import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PrincipalAPI = () => {
  const { isLoading, refetch, error, data } = useQuery({
    queryKey: ["principalapi"],
    queryFn: () =>
      axios
        .get("https://sjmmhs-server-techasync.vercel.app/principal")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, refetch, error, data };
};

export { PrincipalAPI };
