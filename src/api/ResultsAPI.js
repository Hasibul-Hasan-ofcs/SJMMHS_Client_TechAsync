import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ResultAPI = (valueClass, reg) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["resultapi"],
    queryFn: () =>
      axios
        .get(`http://localhost:5000/result/${valueClass}/${reg}`)
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};

export { ResultAPI };
