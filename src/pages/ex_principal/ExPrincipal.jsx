import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";
import SetPageTitle from "../../components/page_title/SetPageTitle";
import { ExPrincipalAPI } from "../../api/ExPrincipalAPI";
import { Oval } from "react-loader-spinner";

const ExPrincipal = () => {
  SetPageTitle("প্রধান শিক্ষক");

  const { isLoading, data } = ExPrincipalAPI();
  console.log(data);

  return (
    <div className="container mx-auto p-2 lg:p-10 bg-white shadow my-9">
      <h1 className="pt-4 pb-5 text-center text-3xl">প্রাক্তন প্রধান শিক্ষক</h1>
      <CustomUnderline></CustomUnderline>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <Oval
            height={80}
            width={80}
            color="#013c57"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#013c57"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <div className="py-12 flex flex-col lg:flex-row">
          <div className="h-auto w-full lg:w-[30%] pe-4 pb-4 flex items-center justify-center flex-col">
            <img
              src={data[0].image_link}
              alt="school image"
              className="rounded-2xl w-[500px]"
            />
            <div className="flex gap-2 py-3 justify-center">
              <a
                className="transition_common border border-[#013c57] text-[#013c57] h-[30px] w-[30px] flex justify-center items-center hover:border-[#74010d] hover:text-[#74010d]"
                href="https://www.facebook.com/"
              >
                <FaFacebookF />
              </a>
              <a
                className="transition_common border border-[#013c57] text-[#013c57] h-[30px] w-[30px] flex justify-center items-center hover:border-[#74010d] hover:text-[#74010d]"
                href="https://twitter.com/"
              >
                <BsTwitter />
              </a>
              <a
                className="transition_common border border-[#013c57] text-[#013c57] h-[30px] w-[30px] flex justify-center items-center hover:border-[#74010d] hover:text-[#74010d]"
                href="https://www.whatsapp.com/"
              >
                <FaWhatsapp />
              </a>
              <a
                className="transition_common border border-[#013c57] text-[#013c57] h-[30px] w-[30px] flex justify-center items-center hover:border-[#74010d] hover:text-[#74010d]"
                href="https://www.linkedin.com/"
              >
                <BiLogoLinkedin />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[70%] flex gap-4 flex-col">
            <h1 className="text-4xl text-[#051939]">{data[0].name}</h1>
            <p className="text-[#9A462D]">
              {data[0].designation} <br /> নাম্বার : {data[0].phone_number}
            </p>
            <p className="text-[#353535] text-justify">{data[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExPrincipal;
