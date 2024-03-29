import React, { useContext } from "react";
import style from "./css/drawer.module.css";
import { RxCross1 } from "react-icons/rx";
import { AdminContext } from "../../provider/AdminProvider";
import { List, ListItem } from "@material-tailwind/react";
import ActiveRoute from "../dashboard_active_route/ActiveRoute";

const Sidebar = () => {
  const { sideBarActive, setSideBarActive } = useContext(AdminContext);
  console.log(sideBarActive);

  let cstmStyle, overlayStyle, closeBtnStyle;

  if (sideBarActive) {
    cstmStyle = {
      display: "block",
      left: "0px",
    };

    overlayStyle = {
      display: "block",
    };

    closeBtnStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
  }

  const closeSideBarHandler = () => {
    if (setSideBarActive) setSideBarActive(false);
  };

  return (
    <>
      <div
        className={style.overlay}
        style={overlayStyle}
        onClick={closeSideBarHandler}
      ></div>
      <button
        className={style.close_sidebar_btn}
        style={closeBtnStyle}
        onClick={closeSideBarHandler}
      >
        <RxCross1></RxCross1>
      </button>
      <div style={cstmStyle} className={style.drawer}>
        <div className={`${style.drawer_items} flex flex-col gap-2`}>
          <div className="py-9 flex items-center justify-center">
            <img
              src="/png/deshiit.png"
              className="h-[60px] bg-[#013C57] rounded-lg"
              alt="main logo"
            />
          </div>

          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/student-information">
              <ListItem>শিক্ষার্থীদের তথ্য</ListItem>
            </ActiveRoute>
          </List>
          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/results">
              <ListItem>ফলাফল</ListItem>
            </ActiveRoute>
          </List>
          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/holidays">
              <ListItem>ছুটির তালিকা</ListItem>
            </ActiveRoute>
          </List>
          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/no-of-rooms">
              <ListItem>কক্ষ সংখ্যা</ListItem>
            </ActiveRoute>
          </List>
          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/exam-routine">
              <ListItem>পরিক্ষাসূচি</ListItem>
            </ActiveRoute>
          </List>
          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/circular">
              <ListItem>সার্কুলার</ListItem>
            </ActiveRoute>
          </List>
          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/no-of-seats">
              <ListItem>ছাত্রছাত্রীর আসন সংখ্যা</ListItem>
            </ActiveRoute>
          </List>
          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/notices">
              <ListItem>নোটিশ</ListItem>
            </ActiveRoute>
          </List>
          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/blogs">
              <ListItem>ব্লগ</ListItem>
            </ActiveRoute>
          </List>
          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/teachers">
              <ListItem>শিক্ষকবৃন্দ</ListItem>
            </ActiveRoute>
          </List>
          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/management">
              <ListItem>ম্যানেজিং কমিটি</ListItem>
            </ActiveRoute>
          </List>
          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/staffs">
              <ListItem>কর্মকর্তা কর্মচারী</ListItem>
            </ActiveRoute>
          </List>
          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/principal">
              <ListItem>প্রধান শিক্ষক</ListItem>
            </ActiveRoute>
          </List>
          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/ex-principal">
              <ListItem>প্রাক্তন প্রধান শিক্ষক</ListItem>
            </ActiveRoute>
          </List>
          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/successful-students">
              <ListItem>কৃতি শিক্ষার্থী</ListItem>
            </ActiveRoute>
          </List>
          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/photo-gallery">
              <ListItem>ফটোগ্যালারী</ListItem>
            </ActiveRoute>
          </List>
          <List className="py-[2px]">
            <ActiveRoute to="/admin/dashboard/video-gallery">
              <ListItem>ভিডিও গ্যালারী</ListItem>
            </ActiveRoute>
          </List>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
