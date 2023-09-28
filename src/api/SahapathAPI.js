import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SahapathAPI = () => {
  const { isLoading, refetch, error, data } = useQuery({
    queryKey: ["sahapathapi"],
    queryFn: () =>
      axios
        .get("https://sjmmhs-server-techasync.vercel.app/sahapath")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, refetch, error, data };
};

export { SahapathAPI };
