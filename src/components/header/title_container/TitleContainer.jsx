import React from "react";

const TitleContainer = () => {
  return (
    <div className="h-[140px] flex justify-between items-center">
      <div className="w-1/5 box-border flex justify-center">
        <img
          src="/png/logo-903x1024.png"
          alt="school logo"
          className="max-h-[135px] w-auto"
        />
      </div>
      <div className="text-black max-w-[60%] h-full box-border flex flex-col items-center justify-center ">
        <h1 className="text-[36px] font-[500] text-center scale-[0.45] md:scale-[0.75] lg:scale-[1] ">
          সাত্তার জুট মিলস মডেল হাই স্কুল
        </h1>
        <h4 className="text-[21px] text-center font-[500]  scale-[0.5] md:scale-[0.75] lg:scale-[1] ">
          কাঞ্চন, রুপগঞ্জ, নারায়ণগঞ্জ
        </h4>
        <h4 className="text-[21px] text-center font-[500]  scale-[0.5] md:scale-[0.75] lg:scale-[1] ">
          কোড নং: ১১২৫০৬, স্থাপিত ১৯৮০ সাল
        </h4>
      </div>
      <div className="w-1/5 box-border flex justify-center">
        <img
          src="/png/Board_of_Intermediate_and_Secondary_Education_Dhaka_Monogram.png"
          alt="dhaka education board logo"
          className="max-h-[120px] w-auto"
        />
      </div>
    </div>
  );
};

export default TitleContainer;
