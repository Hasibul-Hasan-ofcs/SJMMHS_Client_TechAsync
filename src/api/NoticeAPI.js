import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const NoticeAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["notices"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/notices")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};

export { NoticeAPI };