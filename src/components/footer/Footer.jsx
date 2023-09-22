import React from "react";
import style from "./css/footer.module.css";
import { Link } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";

const Footer = () => {
  return (
    <div
      className={`${style.footer} min-h-[950px] md:min-h-[500px] lg:min-h-[350px] bg-[#3D4E60] relative`}
    >
      <div className="container absolute top-0 left-1/2 -translate-x-1/2 h-full w-full pt-10 z-10">
        <div className="flex gap-y-8 lg:gap-y-0 items-center flex-wrap">
          <div className="w-full px-6 lg:px-0 md:w-2/4 lg:w-1/4 box-border flex justify-start">
            <img
              src="/png/logo-903x1024.png"
              alt="school logo"
              className="h-[220px] w-auto"
            />
          </div>
          <div className="w-full px-6 lg:px-0 pt-16 md:pt-0 md:w-2/4 lg:w-1/4 text-white">
            <p>School Address</p>
            <p>
              Sattar Jute Mills Model High School, Kanchan, Rupgonj,
              Narayangonj.
            </p>
            <p>Tel : 01717-232810</p>
            <p>Mail: info@sjmmhs.com</p>
            <p>Web : sjmmhs.com</p>
          </div>
          <div className="w-full px-6 lg:px-0 md:w-2/4 lg:w-1/4 flex flex-col gap-2">
            <Link
              className={`flex items-center gap-2 transition_common ${style.footer_link}`}
              to="/"
            >
              {" "}
              <span
                className={`transition_common text-white ${style.arrowSpan}`}
              >
                <FiChevronsRight />
              </span>{" "}
              <span
                className={`transition_common text-white ${style.textSpan}`}
              >
                হোম পেজ
              </span>{" "}
            </Link>
            <Link
              className={`flex items-center gap-2 transition_common ${style.footer_link}`}
              to="/notice"
            >
              {" "}
              <span
                className={`transition_common text-white ${style.arrowSpan}`}
              >
                <FiChevronsRight />
              </span>{" "}
              <span
                className={`transition_common text-white ${style.textSpan}`}
              >
                প্রাতিষ্ঠানিক কার্যকম
              </span>{" "}
            </Link>
            <Link
              className={`flex items-center gap-2 transition_common ${style.footer_link}`}
              to="/admission/admissioninfo"
            >
              {" "}
              <span
                className={`transition_common text-white ${style.arrowSpan}`}
              >
                <FiChevronsRight />
              </span>{" "}
              <span
                className={`transition_common text-white ${style.textSpan}`}
              >
                ভর্তি তথ্য
              </span>{" "}
            </Link>
            <Link
              className={`flex items-center gap-2 transition_common ${style.footer_link}`}
              to="/result"
            >
              {" "}
              <span
                className={`transition_common text-white ${style.arrowSpan}`}
              >
                <FiChevronsRight />
              </span>{" "}
              <span
                className={`transition_common text-white ${style.textSpan}`}
              >
                [[ রেজাল্ট অনুসন্ধান ]]
              </span>{" "}
            </Link>
          </div>
          <div className="w-full px-6 lg:px-0 md:w-2/4 lg:w-1/4 flex flex-col gap-2">
            <Link
              className={`flex items-center gap-2 transition_common ${style.footer_link}`}
              to="/authority/principal"
            >
              {" "}
              <span
                className={`transition_common text-white ${style.arrowSpan}`}
              >
                <FiChevronsRight />
              </span>{" "}
              <span
                className={`transition_common text-white ${style.textSpan}`}
              >
                স্কুল প্রশাসন
              </span>{" "}
            </Link>
            <Link
              className={`flex items-center gap-2 transition_common ${style.footer_link}`}
              to="/authority/principal"
            >
              {" "}
              <span
                className={`transition_common text-white ${style.arrowSpan}`}
              >
                <FiChevronsRight />
              </span>{" "}
              <span
                className={`transition_common text-white ${style.textSpan}`}
              >
                আমাদের কথা
              </span>{" "}
            </Link>
            <Link
              className={`flex items-center gap-2 transition_common ${style.footer_link}`}
              to="/contact"
            >
              {" "}
              <span
                className={`transition_common text-white ${style.arrowSpan}`}
              >
                <FiChevronsRight />
              </span>{" "}
              <span
                className={`transition_common text-white ${style.textSpan}`}
              >
                যোগাযোগ
              </span>{" "}
            </Link>
            <Link
              to="/admin/login"
              className={`flex items-center gap-2 transition_common ${style.footer_link}`}
            >
              {" "}
              <span
                className={`transition_common text-white ${style.arrowSpan}`}
              >
                <FiChevronsRight />
              </span>{" "}
              <span
                className={`transition_common text-white ${style.textSpan}`}
              >
                [[ Admin Login ]]
              </span>{" "}
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center pt-7 pb-2">
          <img src="/png/deshiit.png" alt="IT logo" className="h-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
