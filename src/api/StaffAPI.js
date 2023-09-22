import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const StaffAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["staffapi"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/staff")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};

export { StaffAPI };
