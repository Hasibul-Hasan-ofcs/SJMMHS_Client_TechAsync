import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import { NoticeAPI } from "../../api/NoticeAPI";
import SetPageTitle from "../../components/page_title/SetPageTitle";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = ["সিরিয়াল", "তারিখ", "নোটিশ", "ভিউ"];

export function Notice() {
  SetPageTitle("নোটিশ");

  const { isLoading, data } = NoticeAPI();
  const [open, setOpen] = useState(false);
  const [stDate, setDate] = useState("");
  const [stNotice, setNotice] = useState("");

  const handleOpen = (date, notice) => {
    setOpen(!open);
    setDate(date);
    setNotice(notice);
  };

  return (
    <div className="container mx-auto min-h-[400px] my-14 bg-white rounded-2xl">
      <h1 className="pt-6 pb-5 text-center text-3xl">নোটিশ</h1>
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
              {data.map(({ notice, date, _id }, index) => {
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
                        {date}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal w-[600px]"
                      >
                        {notice}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        onClick={() => handleOpen(date, notice)}
                      >
                        <Button>View</Button>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      )}

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{stDate}</DialogHeader>
        <DialogBody divider>{stNotice}</DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>OK</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default Notice;
