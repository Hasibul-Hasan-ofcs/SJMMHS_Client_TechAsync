import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TeachersAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["teachersapi"],
    queryFn: () =>
      axios
        .get("https://sjmmhs-server-techasync.vercel.app/teachers")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};

export { TeachersAPI };
