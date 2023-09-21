import React, { useEffect, useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab } from "@material-tailwind/react";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";
import TabpanelComponent from "./tabpanel/TabpanelComponent";
import { useLocation, useParams } from "react-router-dom";
import SetPageTitle from "../../components/page_title/SetPageTitle";

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

const StudentInformation = () => {
  SetPageTitle("শিক্ষার্থীদের তথ্য");

  const params = useParams();
  const classNo = params.class;

  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    const url = "/student-information/7";
    const classId = url.slice(url.lastIndexOf("/") + 1);
    setPathname(classId);
    console.log(pathname);
  }, [location.pathname]);

  return (
    <div className="container mx-auto my-10 pb-10">
      <h1 className="pt-6 pb-5 text-center text-3xl">শিক্ষার্থীদের তথ্য</h1>
      <CustomUnderline></CustomUnderline>
      <br />
      <Tabs id="custom-animation" value={classNo}>
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

export default StudentInformation;
