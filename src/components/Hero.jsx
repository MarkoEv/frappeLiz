import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { RiDrinks2Line } from "react-icons/ri";
import { MdOutlineDeliveryDining } from "react-icons/md";

function Hero() {
  const slides = [
    {
      src: "https://placehold.co/620x300/f8c5d8/7c4a31?text=Frappe+Liz+1",
      alt: "FrappeLiz hero 1",
    },
    {
      src: "https://placehold.co/620x300/d8e8d4/7c4a31?text=Frappe+Liz+2",
      alt: "FrappeLiz hero 2",
    },
    {
      src: "https://placehold.co/620x300/ffe4ec/7c4a31?text=Frappe+Liz+3",
      alt: "FrappeLiz hero 3",
    },
  ];

  return (
    <>
      <section className="rounded-2xl bg-white/90 p-8 shadow-[0_22px_60px_rgba(124,74,49,0.1)] md:p-12">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          className="overflow-hidden rounded-3xl"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.src}>
              <img
                className="h-75 w-full object-cover sm:h-40"
                src={slide.src}
                alt={slide.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center pt-8">
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
            <button className="flex flex-col items-center gap-3 rounded-xl border border-rose-200 bg-white px-4 py-6 transition-colors hover:bg-rose-50 active:scale-[0.98]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-50">
                <RiDrinks2Line className="text-2xl text-[#7c4a31]" />
              </div>
              <span className="text-xs font-semibold tracking-widest text-[#7c4a31]">
                CARTA
              </span>
            </button>
            <button className="flex flex-col items-center gap-3 rounded-xl border border-rose-200 bg-white px-4 py-6 transition-colors hover:bg-rose-50 active:scale-[0.98]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-50">
                <MdOutlineDeliveryDining className="text-2xl text-[#7c4a31]" />
              </div>
              <span className="text-xs font-semibold tracking-widest text-[#7c4a31]">
                DESAYUNOS
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export { Hero };
