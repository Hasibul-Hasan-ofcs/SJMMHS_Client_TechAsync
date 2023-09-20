import React from "react";
import style from "../css/ai.module.css";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";

const AdmissionInformation = () => {
  return (
    <div className="container mx-auto py-9 px-4 md:px-8 lg:px-16 shadow bg-white my-6">
      <h2 className="text-center font-bold text-3xl py-9">ভর্তি তথ্য</h2>
      <p>
        এতদ্বারা জানানো যাচ্ছে যে, আগামী ১৬.১২.২০২০২৩ইং তারিখে সাত্তার জুট মিলস
        মডেল হাই স্কুলের নবম শ্রেণীতে নতুন ছাত্রছাত্রীদের ভর্তি করা হবে। যারা
        জেএসসি পরীক্ষায় ২.০ পেয়েছে কেবল তারাই আবেদন করতে পারবে। আগ্রহীরা
        ওয়েবসাইট থেকে ফরম ডাউনলোড করে পূরণ করে আমাদের ই-মেইলে অথবা সরাসরি আমাদের
        অফিসে জমা দেয়ার জন্য বলা হলো।
        <br />
        <br />
        ফরম মূল্য : ২০০ টাকা <br /> ভর্তি ফি : ২০০০ টাকা
        <br />
        <br />
        মো: আবুল কালাম আজাদ <br /> প্রিন্সিপাল <br /> সাত্তার জুট মিলস মডেল হাই
        স্কুল <br /> হাটাবো, কাঞ্চন, রূপগঞ্জ।
      </p>
      <div className="flex justify-center py-[80px]">
        <Link
          to="/admissionform"
          className={`${style.slidingButton} text-white flex items-center justify-center gap-4
          text-base md:text-xl px-5 md:px-20 py-[10px] 
          `}
        >
          <BsSend className="text-xl text-white"></BsSend>
          ভর্তি ফরম পূরণ করুন
        </Link>
      </div>
    </div>
  );
};

export default AdmissionInformation;
