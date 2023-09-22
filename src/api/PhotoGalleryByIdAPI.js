import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PhotoGalleryByIdAPI = (id) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["photogallerybyidapi"],
    queryFn: () =>
      axios
        .get(`https://sjmmhs-server-techasync.vercel.app/photo-gallery/${id}`)
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};

export { PhotoGalleryByIdAPI };
