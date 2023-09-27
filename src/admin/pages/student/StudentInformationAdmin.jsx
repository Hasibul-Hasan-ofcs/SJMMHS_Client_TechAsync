import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  Button,
} from "@material-tailwind/react";
import TabpanelComponent from "./tabpanel/TabpanelComponent";
import { FiPlusCircle } from "react-icons/fi";
import AddStudent from "./add_student_modal/AddStudent";

const data = [
  {
    label: "৬ষ্ঠ শ্রেণী",
    value: "6",
  },
  {
    label: "৭ম শ্রেণী",
    value: "7",
  },
  {
    label: "৮ম শ্রেণী",
    value: "8",
  },
  {
    label: "৯ম শ্রেণী",
    value: "9",
  },
  {
    label: "১০ম শ্রেণী",
    value: "10",
  },
];

const StudentInformationAdmin = () => {
  const [open, setOpen] = useState(false);
  const [reRender, setRerender] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="container mx-auto my-10 pb-10">
      <div className="flex items-center justify-center py-10">
        <Button
          onClick={handleOpen}
          className="text-white rounded-md bg-[#013C57] w-[250px] py-4 text-base flex items-center justify-center"
        >
          <FiPlusCircle className="pe-3 text-4xl" /> ADD STUDENT
        </Button>
      </div>
      <Tabs id="custom-animation" value={"6"}>
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value }) => (
            <TabpanelComponent value={value} key={value}></TabpanelComponent>
          ))}
        </TabsBody>
      </Tabs>

      <AddStudent
        open={open}
        handleOpen={handleOpen}
        reRender={reRender}
        setRerender={setRerender}
      ></AddStudent>
    </div>
  );
};

export default StudentInformationAdmin;
