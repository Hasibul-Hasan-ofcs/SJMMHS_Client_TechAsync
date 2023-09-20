import React from "react";
import style from "../css/ai.module.css";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";

const AdmissionForm = () => {
  return (
    <div className="container mx-auto my-5 shadow pb-10">
      <h2 className="text-center font-bold text-3xl py-9">ভর্তি ফরম</h2>
      <p className="text-center">নির্বাচিত ছাত্রীদের ভর্তির জন্য ভর্তি ফরম</p>
      <div className="flex items-center justify-center">
        <img
          src="/jpg/school-apply-form-718x1024.jpg"
          alt="student admission form"
        />
      </div>
      <div className="flex justify-center py-[80px]">
        <a
          href="https://educational.deshiit.net/wp-content/uploads/2023/08/form57.pdf"
          className={`${style.slidingButton} text-white flex items-center justify-center gap-4
          text-base md:text-xl px-5 md:px-20 py-[10px] 
          `}
        >
          <BsSend className="text-xl text-white"></BsSend>
          ভর্তি ফরম ডাউনলোড করুন
        </a>
      </div>
    </div>
  );
};

export default AdmissionForm;
