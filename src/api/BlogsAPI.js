import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BlogsAPI = () => {
  const { isLoading, refetch, error, data } = useQuery({
    queryKey: ["blogsapi"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/blogs")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, refetch, error, data };
};

export { BlogsAPI };
