import React from "react";
import style from "./css/footer.module.css";
import { Link } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";

const Footer = () => {
  return (
    <div className={`${style.footer} min-h-[350px] bg-[#3D4E60] relative`}>
      <div className="container absolute top-0 left-1/2 -translate-x-1/2 min-h-[350px] w-full pt-10 z-10">
        <div className="flex items-center ">
          <div className="w-1/4 box-border flex justify-start">
            <img
              src="/png/logo-903x1024.png"
              alt="school logo"
              className="h-[220px] w-auto"
            />
          </div>
          <div className="w-1/4 text-white">
            <p>School Address</p>
            <p>
              Sattar Jute Mills Model High School, Kanchan, Rupgonj,
              Narayangonj.
            </p>
            <p>Tel : 01717-232810</p>
            <p>Mail: info@sjmmhs.com</p>
            <p>Web : sjmmhs.com</p>
          </div>
          <div className="w-1/4 flex flex-col gap-2">
            <Link
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
                হোম পেজ
              </span>{" "}
            </Link>
            <Link
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
                প্রাতিষ্ঠানিক কার্যকম
              </span>{" "}
            </Link>
            <Link
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
                ভর্তি তথ্য
              </span>{" "}
            </Link>
            <Link
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
                [[ রেজাল্ট অনুসন্ধান ]]
              </span>{" "}
            </Link>
          </div>
          <div className="w-1/4 flex flex-col gap-2">
            <Link
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
                স্কুল প্রশাসন
              </span>{" "}
            </Link>
            <Link
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
                আমাদের কথা
              </span>{" "}
            </Link>
            <Link
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
                যোগাযোগ
              </span>{" "}
            </Link>
            <Link
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
        <div className="flex items-center justify-center py-5">
          <img src="/png/deshiit.png" alt="IT logo" className="h-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
