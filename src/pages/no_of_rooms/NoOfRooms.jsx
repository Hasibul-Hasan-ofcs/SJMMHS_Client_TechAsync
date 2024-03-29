import React from "react";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";
import { Card, Typography } from "@material-tailwind/react";
import { Oval } from "react-loader-spinner";
import { NoOfRoomsAPI } from "../../api/NoOfRoomsAPI";
import SetPageTitle from "../../components/page_title/SetPageTitle";

const TABLE_HEAD = ["সিরিয়াল", "ফ্লোর", "ক্লাস সংখ্যা"];

const NoOfRooms = () => {
  SetPageTitle("কক্ষ সংখ্যা");
  const { isLoading, data } = NoOfRoomsAPI();

  return (
    <div className="container mx-auto my-10 pb-10">
      <h1 className="pt-6 pb-5 text-center text-3xl">কক্ষ সংখ্যা</h1>
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
              {data &&
                data.map(({ floor, numberofclasses, _id }, index) => {
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
                          className="font-normal w-[600px]"
                        >
                          {floor}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {numberofclasses}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
};

export default NoOfRooms;
