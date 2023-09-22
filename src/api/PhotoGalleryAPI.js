import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PhotoGalleryAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["photogalleryapi"],
    queryFn: () =>
      axios
        .get("https://sjmmhs-server-techasync.vercel.app/photo-gallery")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};

export { PhotoGalleryAPI };
