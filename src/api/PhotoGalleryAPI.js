import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PhotoGalleryAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["photogalleryapi"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/photo-gallery")
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
