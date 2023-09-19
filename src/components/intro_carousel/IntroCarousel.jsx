import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";

const IntroCarousel = () => {
  return (
    <div>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="aspect-[6/2] overflow-hidden relative">
          <img
            src="https://educational.deshiit.net/wp-content/uploads/2023/08/336239839_598663918505024_8932535369376052111_n.jpg"
            alt="school event image"
            className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          />
        </SwiperSlide>
        <SwiperSlide className="aspect-[6/2] overflow-hidden relative">
          <img
            src="https://educational.deshiit.net/wp-content/uploads/2023/08/312041708_1536954210096928_142248407057641174_n.jpg"
            alt="school event image"
            className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          />
        </SwiperSlide>
        <SwiperSlide className="aspect-[6/2] overflow-hidden relative">
          <img
            src="https://educational.deshiit.net/wp-content/uploads/2023/08/b1.jpg"
            alt="school event image"
            className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          />
        </SwiperSlide>
        <SwiperSlide className="aspect-[6/2] overflow-hidden relative">
          <img
            src="https://educational.deshiit.net/wp-content/uploads/2023/08/banner.jpg"
            alt="school event image"
            className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          />
        </SwiperSlide>
        <SwiperSlide className="aspect-[6/2] overflow-hidden relative">
          <img
            src="https://educational.deshiit.net/wp-content/uploads/2023/08/2023-08-13-1.jpg"
            alt="school event image"
            className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default IntroCarousel;
