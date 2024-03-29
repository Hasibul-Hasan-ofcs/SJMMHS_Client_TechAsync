import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const StaffAPI = () => {
  const { isLoading, refetch, error, data } = useQuery({
    queryKey: ["staffapi"],
    queryFn: () =>
      axios
        .get("https://sjmmhs-server-techasync.vercel.app/staff")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, refetch, error, data };
};

export { StaffAPI };
