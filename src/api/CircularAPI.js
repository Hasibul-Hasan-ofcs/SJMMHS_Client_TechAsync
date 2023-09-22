import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CircularAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["circularapi"],
    queryFn: () =>
      axios
        .get("https://sjmmhs-server-techasync.vercel.app/circular")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};

export { CircularAPI };
