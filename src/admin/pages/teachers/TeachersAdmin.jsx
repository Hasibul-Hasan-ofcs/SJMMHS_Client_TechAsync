import { Button, Card, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { Oval } from "react-loader-spinner";
import Swal from "sweetalert2";
import { TeachersAPI } from "../../../api/TeachersAPI";
import { DeleteTeachersAdminAPI } from "../../API/teachers/DeleteTeachersAdminAPI";
import AddTeachers from "./add_teachers_modal/AddTeachers";

const TABLE_HEAD = ["সিরিয়াল", "নাম", "্পদ", "ফোন", "একশন"];

const TeachersAdmin = () => {
  const { isLoading, refetch, data } = TeachersAPI();
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
        DeleteTeachersAdminAPI(_id);
        refetch();
      }
    });
  };

  return (
    <div className="py-8 pe-6">
      <div className="flex items-center justify-center py-10">
        <Button
          onClick={handleOpen}
          className="text-white rounded-md bg-[#013C57] min-w-[250px] py-4 text-base flex items-center justify-center"
        >
          <FiPlusCircle className="pe-3 text-4xl" /> ADD NEW TEACHER DATA
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
              {data.map(({ name, designation, phone_number, _id }, index) => {
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
                        {designation}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {phone_number}
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
              })}
            </tbody>
          </table>
        </Card>
      )}
      <AddTeachers
        open={open}
        handleOpen={handleOpen}
        refetch={refetch}
      ></AddTeachers>
    </div>
  );
};

export default TeachersAdmin;