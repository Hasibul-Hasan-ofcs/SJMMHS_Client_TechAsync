import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ManagementAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["managementapi"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/management")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};

export { ManagementAPI };