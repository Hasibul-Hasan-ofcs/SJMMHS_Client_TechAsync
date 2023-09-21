import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const HolidaysAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["holidays"],
    queryFn: () =>
      axios
        .get("https://sjmmhs-server-techasync.vercel.app/holidays")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};

export { HolidaysAPI };
