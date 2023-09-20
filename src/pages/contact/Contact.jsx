import React from "react";
import { GoMail } from "react-icons/go";
import { BsGlobe } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="container mx-auto py-9 px-4 md:px-8 lg:px-16 shadow bg-white my-6">
      <h2 className="text-center font-bold text-3xl py-9">
        স্কুলের ঠিকানা/যোগাযোগ
      </h2>

      <div>
        <h3 className="text-center text-xl font-bold">
          সাত্তার জুট মিলস মডেল হাই স্কুল
        </h3>
        <p className="text-center font-bold pb-5">
          কাঞ্চন, রুপগঞ্জ, নারায়ণগঞ্জ
        </p>
        <p className="text-center font-bold">কোড নং: ১১২৫০৬</p>
        <p className="text-center flex items-center justify-center font-bold">
          <FiPhoneCall /> &nbsp; 01717-232810
        </p>
        <p className="text-center flex items-center justify-center font-bold">
          <GoMail /> &nbsp; info@sjmmhs.com
        </p>
        <p className="text-center flex items-center justify-center font-bold">
          <BsGlobe /> &nbsp; sjmmhs.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
