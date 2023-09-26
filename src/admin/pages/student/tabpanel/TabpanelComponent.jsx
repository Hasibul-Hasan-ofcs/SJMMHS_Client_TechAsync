import React, { useEffect, useRef, useState } from "react";
import {
  TabPanel,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { Oval } from "react-loader-spinner";
import { StudentInfoAPI } from "../../../../api/StudentInfoAPI";
import onDeleteHandler from "./delete_handler/DeleteHandler";
import editHandler from "./edit_handler/EditHandler";

const TABLE_HEAD = ["serial", "name", "reg. no.", "actions"];

const TabpanelComponent = ({ value }) => {
  const { isLoading, refetch, data } = StudentInfoAPI(value);
  const [open, setOpen] = useState(false);
  const [stName, setStName] = useState("");
  const [stReg, setStReg] = useState("");
  const [_id, set_id] = useState("");

  const nameRef = useRef();
  const regRef = useRef();

  const setNameHandler = (e) => {
    setStName(e.target.value);
  };

  const setRegHandler = (e) => {
    setStReg(e.target.value);
  };

  const handleOpen = (_id, reg, name) => {
    setOpen(!open);
    setStName(name);
    setStReg(reg);
    set_id(_id);
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
                          <Button
                            color="red"
                            className="mx-1"
                            onClick={() => onDeleteHandler(_id, value, refetch)}
                          >
                            Delete
                          </Button>

                          <>
                            <Button
                              onClick={() => handleOpen(_id, reg, name)}
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
            <form
              onSubmit={(e) =>
                editHandler(e, _id, value, refetch, stName, stReg)
              }
            >
              <DialogHeader>Edit Student Information</DialogHeader>
              <DialogBody>
                <input
                  type="text"
                  name="name"
                  value={stName}
                  ref={nameRef}
                  onChange={setNameHandler}
                  placeholder="Student name"
                  className="border border-gray-500 rounded p-3 text-xl font-semibold w-full my-4 shadow"
                />
                <input
                  type="text"
                  name="reg"
                  value={stReg}
                  ref={regRef}
                  onChange={setRegHandler}
                  placeholder="Student Registration No."
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
