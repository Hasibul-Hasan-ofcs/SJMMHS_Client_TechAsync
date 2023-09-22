import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab } from "@material-tailwind/react";
import TabpanelComponent from "./tabpanel/TabpanelComponent";

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
  return (
    <div className="container mx-auto my-10 pb-10">
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
    </div>
  );
};

export default StudentInformationAdmin;
