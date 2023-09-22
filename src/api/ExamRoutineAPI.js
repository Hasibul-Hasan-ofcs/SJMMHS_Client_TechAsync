import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ExamRoutineAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["examroutineapi"],
    queryFn: () =>
      axios
        .get("https://sjmmhs-server-techasync.vercel.app/exam-routine")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        }),
  });

  return { isLoading, error, data };
};

export { ExamRoutineAPI };
