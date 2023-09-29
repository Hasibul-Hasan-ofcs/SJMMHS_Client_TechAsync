import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const VideosAPI = () => {
  const { isLoading, refetch, error, data } = useQuery({
    queryKey: ["videosapi"],
    queryFn: () =>
      axios
        .get("https://sjmmhs-server-techasync.vercel.app/video-gallery")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, refetch, error, data };
};

export { VideosAPI };
