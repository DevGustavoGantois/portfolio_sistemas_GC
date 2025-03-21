"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { testimonials } from "../v-data";

export function TestimonialsClients() {
  return (
    <div className="relative my-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full h-full"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            key={index}
            className="p-4 bg-gradient-to-r from-[#000000] via-[#03001A] to-[#050505] border border-white/15 rounded-2xl lg:p-16 
                       h-[300px] flex flex-col justify-between items-center text-center lg:items-start lg:text-start shadow-md"
          >
            <p className="text-gray-400 max-w-[500px] flex-1">{item.quote}</p>
            <div className="mt-4 flex flex-col gap-12 items-center justify-center lg:justify-start lg:items-start">
              <h3 className="text-lg text-white font-semibold">{item.name}</h3>
              <span className="text-sm text-white/50 font-light lg:text-xl">{item.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
