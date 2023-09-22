import React, { useEffect } from "react";
import { TabPanel, Card, Typography, Button } from "@material-tailwind/react";
import { Oval } from "react-loader-spinner";
import { StudentInfoAPI } from "../../../../api/StudentInfoAPI";
import Swal from "sweetalert2";

const TABLE_HEAD = ["serial", "name", "reg. no.", "actions"];

const TabpanelComponent = ({ value }) => {
  const { isLoading, data } = StudentInfoAPI(value);

  const onDeleteHandler = (_id, value) => {
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
        fetch(`https://sjmmhs-server-techasync.vercel.app/${value}/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (response.status === 200) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            } else if (response.status === 404) {
              console.error("Item not found");
            } else {
              console.error("Error deleting item");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });
  };

  return (
    <TabPanel key={value} value={value}>
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
              {data &&
                data.map(({ name, reg, _id }, index) => {
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
                      <td className={`${classes} bg-blue-gray-50/50`}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal w-[400px]"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {reg}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {/* <Button color="blue-gray" className="mx-1">
                            Edit
                          </Button> */}
                          <Button
                            color="red"
                            className="mx-1"
                            onClick={() => onDeleteHandler(_id, value)}
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
    </TabPanel>
  );
};

export default TabpanelComponent;
