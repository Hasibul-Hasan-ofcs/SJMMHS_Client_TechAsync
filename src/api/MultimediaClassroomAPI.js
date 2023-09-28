import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const MultimediaClassRoomAPI = () => {
  const { isLoading, refetch, error, data } = useQuery({
    queryKey: ["multimediaclassroomapi"],
    queryFn: () =>
      axios
        .get("https://sjmmhs-server-techasync.vercel.app/multimedia-classroom")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, refetch, error, data };
};

export { MultimediaClassRoomAPI };
