import React, { useReducer, useState } from "react";
import { CircularAPI } from "../../api/CircularAPI";
import {
  Button,
  Card,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { Oval } from "react-loader-spinner";
import SetPageTitle from "../../components/page_title/SetPageTitle";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";

const TABLE_HEAD = ["সিরিয়াল", "পদ", "ঠিকানা", "বিবরণ", "ভিউ"];

const reducer = (state, action) => {
  console.log(action.payload);
  return {
    ...state,
    circular: action.payload,
  };
};

const Circular = () => {
  SetPageTitle("সার্কুলার");
  const { isLoading, data } = CircularAPI();

  const [open, setOpen] = useState(false);
  const [circularState, dispatch] = useReducer(reducer, { circular: {} });

  const handleOpen = (Position, Location, Description, form_link) => {
    setOpen(!open);
    dispatch({
      payload: {
        position: Position,
        location: Location,
        description: Description,
        formLink: form_link,
      },
    });

    console.log(circularState);
  };

  return (
    <div className="container mx-auto min-h-[400px] my-14 bg-white rounded-2xl">
      <h1 className="pt-6 pb-5 text-center text-3xl">সার্কুলার</h1>
      <CustomUnderline></CustomUnderline>

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
                  { Position, Location, Description, form_link, _id },
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
                          {Position}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Location}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-blue-gray-50/50`}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal w-[600px] truncate"
                        >
                          {Description}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                          onClick={() =>
                            handleOpen(
                              Position,
                              Location,
                              Description,
                              form_link
                            )
                          }
                        >
                          <Button>View</Button>
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
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <h1 className="font-bold text-xl">
            {circularState.circular.position}
          </h1>
        </DialogHeader>
        <DialogBody divider>
          <p className="font-bold">{circularState.circular.location}</p>
          <p className="my-4">{circularState.circular.description}</p>
          <a href={circularState.circular.formLink} target="_blank">
            <Button className="w-full my-4 py-6 bg-[#044E71]">
              Apply with Google Form
            </Button>
          </a>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="gray"
            onClick={handleOpen}
            className="w-full"
          >
            <span>OK</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default Circular;
