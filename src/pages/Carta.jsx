import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { MdFastfood } from "react-icons/md";

import "swiper/css/pagination";
import {
  FaCoffee,
  FaIceCream,
  FaCookieBite,
  FaAppleAlt,
  FaLeaf,
  FaHamburger,
  FaGlassWhiskey,
} from "react-icons/fa";
import { MdOutlineFreeBreakfast, MdBakeryDining } from "react-icons/md";
import { RiDrinks2Line } from "react-icons/ri";
import { MdCookie } from "react-icons/md";
import { LiaHamburgerSolid } from "react-icons/lia";
import { GiPoolTriangle } from "react-icons/gi";
import { TbCookieFilled } from "react-icons/tb";
import { RiDrinksFill } from "react-icons/ri";
import { LiaCookieSolid } from "react-icons/lia";
import { FaHotdog } from "react-icons/fa";

function Carta() {
  const navigate = useNavigate();

  // animation h1
  const [displayText, setText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const phrases = [
    "¿Qué se te antoja hoy?",
    "Explora nuestra carta",
    "Elige tu favorito",
  ];

  React.useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    let i = 0;
    let timeoutId;
    const timer = setInterval(() => {
      if (i < currentPhrase.length) {
        setText(currentPhrase.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        timeoutId = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
          setText("");
        }, 10000);
      }
    }, 30);

    return () => {
      clearInterval(timer);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentIndex]);

  const slides = [
    {
      src: "https://placehold.co/620x300/f8c5d8/7c4a31?text=Imagen+Principal",
      alt: "slide 1",
    },
    {
      src: "https://placehold.co/620x300/d8e8d4/7c4a31?text=Imagen+Secundaria",
      alt: "slide 2",
    },
    {
      src: "https://placehold.co/620x300/ffe4ec/7c4a31?text=Imagen+Promocional",
      alt: "slide 3",
    },
  ];

  const iconClass =
    "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#7c4a31]";

  const categories = {
    frappes: {
      icon: <RiDrinks2Line className={iconClass} />,
      label: "Frappés",
    },
    snacks: {
      icon: <MdFastfood className={iconClass} />,
      label: "Snacks",
    },
    waffles: {
      icon: <TbCookieFilled className={iconClass} />,
      label: "Waffles",
    },

    crepas: {
      icon: <GiPoolTriangle className={iconClass} />,
      label: "Crepas",
    },

    esquimos: {
      icon: <RiDrinksFill className={iconClass} />,
      label: "Eskimos",
    },
  };

  return (
    <>
      <section className="rounded-2xl bg-white/90 p-8 shadow-[0_22px_60px_rgba(124,74,49,0.1)] md:p-12">
        <h1
          className="text-center font-bold tracking-wide text-[#7c4a31] p-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-h-[48px] sm:min-h-[64px] md:min-h-[72px] lg:min-h-[88px] flex items-center justify-center"
          aria-live="polite"
          aria-atomic="true"
        >
          {displayText}
        </h1>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => navigate(`/carta/${key}`)}
              className="cursor-pointer flex flex-col items-center gap-3 rounded-xl border border-rose-200 bg-white px-3 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8 xl:px-8 xl:py-10 lg:gap-4 transition-colors hover:bg-rose-50 active:scale-[0.98]"
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 items-center justify-center rounded-full bg-rose-50">
                {category.icon}
              </div>
              <span className="text-[10px] sm:text-xs lg:text-sm xl:text-base font-semibold tracking-widest text-[#7c4a31]">
                {category.label}
              </span>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export { Carta };
