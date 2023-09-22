import React, { useContext } from "react";
import style from "./css/drawer.module.css";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HomeContext } from "../../context/HomeContextProvider";
import {
  admissionData,
  authorityData,
  galleryData,
  miscellaneousData,
  studentData,
} from "../../data/navbar/NavBarElementData";

const Sidebar = () => {
  const contextData = useContext(HomeContext);

  let sideBarActiveData = contextData?.sideBarActive,
    setSideBarActiveData = contextData?.setSideBarActive;

  let cstmStyle, overlayStyle, closeBtnStyle;

  if (sideBarActiveData) {
    cstmStyle = {
      display: "block",
      left: 0,
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
    if (setSideBarActiveData) setSideBarActiveData(false);
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
      <div className={style.drawer} style={cstmStyle}>
        <div className={`${style.drawer_items} flex flex-col p-5 gap-2`}>
          {authorityData.map(({ link, item }, indx) => (
            <Link
              to={link}
              className={`flex items-center gap-2 border ${style.bs_common}`}
              key={indx}
            >
              <span className="text-xl">{item}</span>
            </Link>
          ))}
          {studentData.map(({ link, item }, indx) => (
            <Link
              to={link}
              className={`flex items-center gap-2 border ${style.bs_common}`}
              key={indx}
            >
              <span className="text-xl">{item}</span>
            </Link>
          ))}
          {admissionData.map(({ link, item }, indx) => (
            <Link
              to={link}
              className={`flex items-center gap-2 border ${style.bs_common}`}
              key={indx}
            >
              <span className="text-xl">{item}</span>
            </Link>
          ))}
          {galleryData.map(({ link, item }, indx) => (
            <Link
              to={link}
              className={`flex items-center gap-2 border ${style.bs_common}`}
              key={indx}
            >
              <span className="text-xl">{item}</span>
            </Link>
          ))}
          {miscellaneousData.map(({ link, item }, indx) => (
            <Link
              to={link}
              className={`flex items-center gap-2 border ${style.bs_common}`}
              key={indx}
            >
              <span className="text-xl">{item}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
