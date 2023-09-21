import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const NoOfSeatsAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["noofseats"],
    queryFn: () =>
      axios
        .get("https://sjmmhs-server-techasync.vercel.app/no-of-seats")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};

export { NoOfSeatsAPI };
