import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SahapathAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["sahapathapi"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/sahapath")
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