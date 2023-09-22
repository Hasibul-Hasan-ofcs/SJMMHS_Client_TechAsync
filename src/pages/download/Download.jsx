import React from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import { Oval } from "react-loader-spinner";
import { ExamRoutineAPI } from "../../api/ExamRoutineAPI";
import SetPageTitle from "../../components/page_title/SetPageTitle";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";
import { FiDownload } from "react-icons/fi";

const TABLE_HEAD = [
  "৬ষ্ঠ শ্রেণী",
  "৭ম শ্রেণী",
  "৮ম শ্রেণী",
  "৯ম শ্রেণী",
  "১০ম শ্রেণী",
];

const Download = () => {
  SetPageTitle("ডাউনলোড");

  const { isLoading, data } = ExamRoutineAPI();

  return (
    <div className="container mx-auto min-h-[400px] my-14 bg-white rounded-2xl">
      <h1 className="pt-6 pb-5 text-center text-3xl">ডাউনলোড</h1>
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
              <tr>
                <td>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <a href={data[0].downloadurl}>
                      <Button
                        color="blue"
                        className="flex items-center justify-center m-2"
                      >
                        <FiDownload className="text-xl" />
                        &nbsp; <span>Download</span>
                      </Button>
                    </a>
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <a href={data[0].downloadurl}>
                      <Button
                        color="blue"
                        className="flex items-center justify-center m-2"
                      >
                        <FiDownload className="text-xl" />
                        &nbsp; <span>Download</span>
                      </Button>
                    </a>
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <a href={data[0].downloadurl}>
                      <Button
                        color="blue"
                        className="flex items-center justify-center m-2"
                      >
                        <FiDownload className="text-xl" />
                        &nbsp; <span>Download</span>
                      </Button>
                    </a>
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <a href={data[0].downloadurl}>
                      <Button
                        color="blue"
                        className="flex items-center justify-center m-2"
                      >
                        <FiDownload className="text-xl" />
                        &nbsp; <span>Download</span>
                      </Button>
                    </a>
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <a href={data[0].downloadurl}>
                      <Button
                        color="blue"
                        className="flex items-center justify-center m-2"
                      >
                        <FiDownload className="text-xl" />
                        &nbsp; <span>Download</span>
                      </Button>
                    </a>
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
};

export default Download;
