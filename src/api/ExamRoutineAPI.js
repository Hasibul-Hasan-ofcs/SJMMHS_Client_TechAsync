import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ExamRoutineAPI = () => {
  const { isLoading, refetch, error, data } = useQuery({
    queryKey: ["examroutineapi"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/exam-routine")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, refetch, error, data };
};

export { ExamRoutineAPI };
