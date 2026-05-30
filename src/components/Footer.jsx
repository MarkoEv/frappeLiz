import React from "react";
import { RiInstagramLine, RiTiktokLine, RiFacebookLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const WA_LINK =
  "https://wa.me/5216712345678?text=Hola!%20Quiero%20hacer%20un%20pedido%20🧋";

function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-center gap-5 rounded-3xl bg-rose-50 px-6 py-8 text-center">
      <div>
        <p className="text-2xl font-bold text-[#7c4a31]">🧋 Frappé Liz</p>
        <p className="mt-1 text-xs text-[#b07a5a]">Cuautepec, Guerrero</p>
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
          { icon: <RiFacebookLine size={20} />, href: "#", label: "Facebook" },
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
        © {new Date().getFullYear()} Frappé Liz · Hecho con 🫶 en Cuautepec
      </p>
    </footer>
  );
}

export { Footer };
