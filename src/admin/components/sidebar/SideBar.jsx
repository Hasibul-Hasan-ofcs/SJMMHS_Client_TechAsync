import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { PresentationChartBarIcon } from "@heroicons/react/24/solid";
import ActiveRoute from "../dashboard_active_route/ActiveRoute";

const SideBar = () => {
  return (
    <Card className="h-[100vh] w-full max-w-[20rem] p-4 shadow-xl border shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sjmmhs-techasync
        </Typography>
      </div>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>শিক্ষার্থীদের তথ্য</ListItem>
        </ActiveRoute>
      </List>
      {/* <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>ছুটির তালিকা</ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>কক্ষ সংখ্যা</ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>ছাত্রছাত্রীর আসন সংখ্যা</ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>সার্কুলার</ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>নোটিশ</ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>ফলাফল</ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>শিক্ষকবৃন্দ</ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>পরিচালনা পরিষদ</ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>ম্যানেজিং কমিটি</ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>কর্মকর্তা কর্মচারী</ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>প্রাক্তন প্রধান শিক্ষক</ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>কৃতি শিক্ষার্থী</ListItem>
        </ActiveRoute>
      </List> */}
    </Card>
  );
};

export default SideBar;
