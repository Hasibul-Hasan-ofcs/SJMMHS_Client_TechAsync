import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import TabpanelComponent from "./tabpanel/TabpanelComponent";
import { FiPlusCircle } from "react-icons/fi";
import addHandler from "./tabpanel/add_handler/AddHandler";

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
  const [stName, setStName] = useState("");
  const [stReg, setStReg] = useState("");
  const [classValue, setClassValue] = useState("");

  const setNameHandler = (e) => {
    setStName(e.target.value);
  };

  const setRegHandler = (e) => {
    setStReg(e.target.value);
  };

  const setClassHandler = (e) => {
    setClassValue(e.target.value);
  };

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

      <Dialog open={open} handler={handleOpen}>
        <form onSubmit={(e) => addHandler(e, stName, stReg, classValue)}>
          <DialogHeader>Add Student Information</DialogHeader>
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
              name="reg"
              value={stReg}
              onChange={setRegHandler}
              placeholder="Student Registration No."
              className="border border-gray-500 rounded p-3 text-xl font-semibold w-full my-4 shadow"
            />
            <input
              type="text"
              name="className"
              value={classValue}
              onChange={setClassHandler}
              placeholder="Student Class"
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
              <span>Add</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
};

export default StudentInformationAdmin;
