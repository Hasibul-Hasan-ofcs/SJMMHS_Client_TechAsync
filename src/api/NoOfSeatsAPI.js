import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const NoOfSeatsAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["noofseats"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/no-of-seats")
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
