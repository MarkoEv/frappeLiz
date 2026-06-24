import React from "react";
import { RiInstagramLine, RiTiktokLine, RiFacebookLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../public/logos/logo.png";

const WA_LINK =
  "https://wa.me/527451119782?text=Hola!%20Quiero%20hacer%20un%20pedido%20🧋";

function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-center gap-5 rounded-3xl  px-6 py-8 text-center">
      <div>
        <img src={logo} alt="Logo" className="h-30 w-30" />
      </div>

      {/* Redes */}
      <div className="flex items-center gap-3">
        {[
          {
            icon: <RiInstagramLine size={20} />,
            href: "#",
            label: "Instagram",
          },
          { icon: <RiTiktokLine size={20} />, href: "#", label: "TikTok" },
          {
            icon: <RiFacebookLine size={20} />,
            href: "https://www.facebook.com/liizbetth.mrtnzferiia",
            label: "Facebook",
          },
          { icon: <FaWhatsapp size={20} />, href: WA_LINK, label: "WhatsApp" },
        ].map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#7c4a31] shadow-sm transition hover:bg-[#7c4a31] hover:text-white"
          >
            {icon}
          </a>
        ))}
      </div>

      <p className="text-xs text-[#b07a5a]">
        © {new Date().getFullYear()} Frappé Liz
      </p>
      {/* creador */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400">Creado por</span>
        <a
          href="https://www.facebook.com/markoevang/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 pl-1.5 transition hover:border-gray-300 hover:bg-gray-50"
        >
          {/* ícono Facebook */}
          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gray-100 bg-gray-100 text-[#1877f2] transition group-hover:bg-[#1877f2] group-hover:text-white">
            <RiFacebookLine className="h-3.5 w-3.5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[11px] text-gray-400">@MarkoEv</span>
            <span className="text-[13px] font-medium text-gray-800">
              Facebook
            </span>
          </span>
        </a>
      </div>
    </footer>
  );
}

export { Footer };
