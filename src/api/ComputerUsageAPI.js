import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ComputerUsageAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["computerusageapi"],
    queryFn: () =>
      axios
        .get("https://sjmmhs-server-techasync.vercel.app/computer-usage")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};

export { ComputerUsageAPI };
