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
          <ListItem>
            {/* <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix> */}
            শিক্ষার্থীদের তথ্য
          </ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>
            {/* <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix> */}
            ছুটির তালিকা
          </ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>
            {/* <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix> */}
            কক্ষ সংখ্যা
          </ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>
            {/* <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix> */}
            ছাত্রছাত্রীর আসন সংখ্যা
          </ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>
            {/* <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix> */}
            সার্কুলার
          </ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>
            {/* <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix> */}
            নোটিশ
          </ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>
            {/* <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix> */}
            ফলাফল
          </ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>
            {/* <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix> */}
            শিক্ষকবৃন্দ
          </ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>
            {/* <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix> */}
            পরিচালনা পরিষদ
          </ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>
            {/* <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix> */}
            ম্যানেজিং কমিটি
          </ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>
            {/* <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix> */}
            কর্মকর্তা কর্মচারী
          </ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>
            {/* <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix> */}
            প্রাক্তন প্রধান শিক্ষক
          </ListItem>
        </ActiveRoute>
      </List>
      <List className="py-[2px]">
        <ActiveRoute>
          <ListItem>
            {/* <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix> */}
            কৃতি শিক্ষার্থী
          </ListItem>
        </ActiveRoute>
      </List>
    </Card>
  );
};

export default SideBar;
