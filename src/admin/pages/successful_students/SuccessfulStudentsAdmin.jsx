import { Button, Card, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import Swal from "sweetalert2";
import { SuccessfulStudentsAPI } from "../../../api/SuccessfulStudentsAPI";
import { Oval } from "react-loader-spinner";
import AddSuccessfulStudents from "./add_successful_students_modal/AddSuccessfulStudents";
import { DeleteSuccessfulStudentsAdminAPI } from "../../API/successful_students/DeleteSuccessfulStudentsAdminAPI";

const TABLE_HEAD = ["সিরিয়াল", "নাম", "এচিভমেন্ট", "বছর", "ক্লাস", "একশন"];

const SuccessfulStudentsAdmin = () => {
  const { isLoading, refetch, data } = SuccessfulStudentsAPI();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const onDeleteHandler = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteSuccessfulStudentsAdminAPI(_id);
        refetch();
      }
    });
  };

  return (
    <div className="py-8 px-1">
      <div className="flex items-center justify-center py-10">
        <Button
          onClick={handleOpen}
          className="text-white rounded-md bg-[#013C57] w-[250px] py-4 text-base flex items-center justify-center"
        >
          <FiPlusCircle className="pe-3 text-4xl" /> ADD NEW STUDENT
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <Oval
            height={80}
            width={80}
            color="#013c57"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#013c57"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <Card className="container mx-auto my-10 h-full w-full overflow-x-scroll no-scrollbar">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-[#013c57] bg-[#013c57] p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none text-white"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  { name, achievement, passing_year, class_of_success, _id },
                  index
                ) => {
                  const isLast = index === data.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {index + 1}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-blue-gray-50/50`}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {achievement}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {passing_year}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {class_of_success}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          <Button
                            color="red"
                            className="mx-1"
                            onClick={() => onDeleteHandler(_id)}
                          >
                            Delete
                          </Button>
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </Card>
      )}
      <AddSuccessfulStudents
        open={open}
        handleOpen={handleOpen}
        refetch={refetch}
      ></AddSuccessfulStudents>
    </div>
  );
};

export default SuccessfulStudentsAdmin;
