import React, { useRef, useState } from "react";
import {
  TabPanel,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Oval } from "react-loader-spinner";
import { ResultsAllAPI } from "../../../../api/ResultsAllAPI";
import { DeleteResultAdminAPI } from "../../../API/results/DeleteResultAdminAPI";
import Swal from "sweetalert2";
import { EditResultAdminAPI } from "../../../API/results/EditResultAdminAPI";

const TABLE_HEAD = ["serial", "name", "reg. no.", "result", "actions"];

const TabpanelComponent = ({ value }) => {
  const { isLoading, refetch, data } = ResultsAllAPI(value);
  const [open, setOpen] = useState(false);
  const [stName, setStName] = useState("");
  const [stRegB, setStRegB] = useState("");
  const [stRegE, setStRegE] = useState("");
  const [stResult, setStResult] = useState("");
  const [_id, set_id] = useState("");

  const setNameHandler = (e) => {
    setStName(e.target.value);
  };

  const setRegEHandler = (e) => {
    setStRegE(e.target.value);
  };

  const setRegBHandler = (e) => {
    setStRegB(e.target.value);
  };

  const setResultHandler = (e) => {
    setStResult(e.target.value);
  };

  const handleOpen = (_id, rege, regb, result, name) => {
    setOpen(!open);
    setStName(name);
    setStRegE(rege);
    setStRegB(regb);
    setStResult(result);
    set_id(_id);
  };

  const editResultAdminAPIHandler = (e) => {
    e.preventDefault();

    EditResultAdminAPI(stName, stRegE, stRegB, stResult, _id, value, refetch);

    // refetch();
  };

  const DeleteResultAdminHandler = (_id, value) => {
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
        DeleteResultAdminAPI(_id, value);
        refetch();
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
                data.map(({ name, rege, regb, result, _id }, index) => {
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
                          className="font-normal"
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
                          {regb}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {result}
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
                            onClick={() => DeleteResultAdminHandler(_id, value)}
                          >
                            Delete
                          </Button>

                          <>
                            <Button
                              onClick={() =>
                                handleOpen(_id, rege, regb, result, name)
                              }
                              variant="gradient"
                            >
                              Edit
                            </Button>
                          </>
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <Dialog open={open} handler={handleOpen}>
            <form onSubmit={(e) => editResultAdminAPIHandler(e)}>
              <DialogHeader>Edit Student Information</DialogHeader>
              <DialogBody>
                <input
                  type="text"
                  name="name"
                  value={stName}
                  onChange={setNameHandler}
                  placeholder="Student name"
                  className="border border-gray-500 rounded p-3 text-xl font-semibold w-full my-4 shadow"
                />
                <input
                  type="text"
                  name="rege"
                  value={stRegE}
                  onChange={setRegEHandler}
                  placeholder="Student Registration No. English"
                  className="border border-gray-500 rounded p-3 text-xl font-semibold w-full my-4 shadow"
                />
                <input
                  type="text"
                  name="regb"
                  value={stRegB}
                  onChange={setRegBHandler}
                  placeholder="Student Registration No. Bengali"
                  className="border border-gray-500 rounded p-3 text-xl font-semibold w-full my-4 shadow"
                />
                <input
                  type="text"
                  name="result"
                  value={stResult}
                  onChange={setResultHandler}
                  placeholder="Student Result"
                  className="border border-gray-500 rounded p-3 text-xl font-semibold w-full my-4 shadow"
                />
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button
                  variant="gradient"
                  color="green"
                  onClick={handleOpen}
                  type="submit"
                >
                  <span>Confirm</span>
                </Button>
              </DialogFooter>
            </form>
          </Dialog>
        </Card>
      )}
    </TabPanel>
  );
};

export default TabpanelComponent;
