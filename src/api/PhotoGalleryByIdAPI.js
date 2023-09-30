import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PhotoGalleryByIdAPI = (id) => {
  const { isLoading, refetch, error, data } = useQuery({
    queryKey: ["photogallerybyidapi"],
    queryFn: () =>
      axios
        .get(`http://localhost:5000/photo-gallery/${id}`)
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, refetch, error, data };
};

export { PhotoGalleryByIdAPI };
