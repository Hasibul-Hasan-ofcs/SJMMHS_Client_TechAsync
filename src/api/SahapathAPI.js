import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SahapathAPI = () => {
  const { isLoading, error, data } = useQuery({
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

  return { isLoading, error, data };
};

export { SahapathAPI };
