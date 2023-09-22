import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BlogsAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["blogsapi"],
    queryFn: () =>
      axios
        .get("https://sjmmhs-server-techasync.vercel.app/blogs")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};

export { BlogsAPI };
