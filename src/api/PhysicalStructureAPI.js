import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PhysicalStructureAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["physicalstructureapi"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/physical-structure")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};

export { PhysicalStructureAPI };
