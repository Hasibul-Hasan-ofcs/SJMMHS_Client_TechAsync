import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const NoOfRoomsAPI = () => {
  const { isLoading, refetch, error, data } = useQuery({
    queryKey: ["noofrooms"],
    queryFn: () =>
      axios
        .get("https://sjmmhs-server-techasync.vercel.app/no-of-rooms")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, refetch, error, data };
};

export { NoOfRoomsAPI };
