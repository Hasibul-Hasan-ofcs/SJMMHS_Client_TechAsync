import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import CustomUnderline from "../../components/custom_underline/CustomUnderline";
import SetPageTitle from "../../components/page_title/SetPageTitle";

const Principal = () => {
  SetPageTitle("প্রধান শিক্ষক");

  return (
    <div className="container mx-auto p-2 lg:p-10 bg-white shadow my-9">
      <h1 className="pt-4 pb-5 text-center text-3xl">প্রধান শিক্ষক</h1>
      <CustomUnderline></CustomUnderline>

      <div className="py-12">
        <div className="h-auto w-[300px] float-left pe-4 pb-4">
          <img
            src="https://educational.deshiit.net/wp-content/uploads/2023/08/WhatsApp-Image-2022-11-23-at-2.18.45-PM-2.jpeg"
            alt="school image"
            className="rounded-2xl w-full"
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
        <div className="flex gap-4 flex-col">
          <h1 className="text-4xl text-[#051939]">আবুল কালাম আজাদ</h1>
          <p className="text-[#9A462D]">
            প্রধান শিক্ষক <br /> নাম্বার : 01711-000000
          </p>
          <p className="text-[#353535] text-justify">
            তথ্য ও যোগাযোগের প্রযুক্তি (Information and Communication
            Technology-ICT) মানুষের জীবন ধারণের পদ্ধতিকে বদলে দিয়েছে- জীবনকে
            করেছে সহজ ও আনন্দময়। শিক্ষাক্ষেত্রেও তথ্য ও যোগযোগ প্রযুক্তি যোগ
            করেছে নতুন মাত্রা। আইসিটি স্থান করে নিয়েছে গ্রামের বিদ্যালয়ের সেই
            ছোট্ট শ্রেণিকক্ষেও - যেখানে শিক্ষার্থীরা বই-খাতার পাশাপাশি
            কম্পিউটারেও শিখতে শুরু করেছে। জাতীয় শিক্ষানীতি ২০১০-এর আলোকে আধুনিক
            জ্ঞান-বিজ্ঞান এবং সকল ক্ষেত্রে তথ্য ও যোগযোগ প্রযুক্তি ব্যবহারের
            মাধ্যমে নতুন প্রজন্মকে ডিজিটাল বাংলাদেশের যোগ্য রূপকার হিসাবে গড়ে
            তোলে ‘‘ভিশন ২০২৩’’ বাস্তবায়নের জন্য এই ওয়েবসাইট অত্যন্ত সহায়ক ভূমিকা
            পালন করবে বলে আমি বিশ্বাস করি। মূলত শিক্ষক, শিক্ষার্থী এবং অভিভাবক
            এই তিন অনুসঙ্গের নিকট তথ্য, উপাত্ত সহজে ও দ্রুততার সহিত পৌঁছানো এবং
            তথ্য প্রযুক্তির সর্বোত্তম ব্যবহার নিশ্চিত করে শিক্ষা সংশ্লিষ্ট
            বিভিন্ন দপ্তর এবং অন্যান্য সরকারি অফিসের যোগাযোগ রক্ষা করা এই
            ওয়েবসাইটের লক্ষ্য। নারায়ণগঞ্জ জেলার অন্যতম শিক্ষা প্রতিষ্ঠান সরকারি
            উচ্চ বিদ্যালয়, নারায়ণগঞ্জ ইতোমধ্যে সকল শিক্ষকদের নিয়ে
            ‘‘মাল্টিমিডিয়া ক্লাসরুম’’ বিষয়ক অভ্যন্তরিন প্রশিক্ষন সম্পন্ন করেছে।
            এই ওয়েবসাইটটি খোলার মাধ্যমে বিদ্যালয়ের সামগ্রিক মান উন্নয়ন ও তথ্যের
            অবাধ প্রবাহ নিশ্চিত করণে একটি নতুন মাত্রা যুক্ত হবে এই প্রত্যাশা
            করছি।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Principal;
