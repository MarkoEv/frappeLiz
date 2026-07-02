import imageLoading from "../../public/logos/loading.png";

function LoadingScreen() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#fffaf6] via-[#fdf6f0] to-[#f8efe8] animate-[fadeIn_0.4s_ease-out]"
    >
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative h-28 w-28">
          {/* Glow de fondo */}
          <div className="absolute inset-0 rounded-full bg-[#f3e4d7] blur-2xl opacity-60 animate-[pulseGlow_2.4s_ease-in-out_infinite]" />

          {/* Anillo giratorio */}
          <div className="absolute inset-0 rounded-full border-[3px] border-[#e5cdb8] border-t-[#7c4a31] animate-[spin_1.1s_cubic-bezier(0.65,0,0.35,1)_infinite]" />

          {/* Anillo secundario, más lento y en sentido contrario */}
          <div className="absolute inset-1 rounded-full border-[2px] border-transparent border-b-[#b98a63]/60 animate-[spinReverse_2.2s_linear_infinite]" />

          {/* Imagen */}
          <div className="absolute inset-3 flex items-center justify-center rounded-full bg-white shadow-xl">
            <img
              src={imageLoading}
              alt="Cargando"
              className="h-16 w-16 object-contain animate-[breathe_2.4s_ease-in-out_infinite]"
            />
          </div>
        </div>

        {/* Texto */}
        <h2 className="mt-8 text-lg font-semibold tracking-wide text-[#7c4a31] animate-[fadeIn_0.6s_ease-out_0.1s_both]">
          Preparando tu experiencia
        </h2>

        <p className="mt-2 flex items-center gap-1 text-sm text-[#8c6a56] animate-[fadeIn_0.6s_ease-out_0.2s_both]">
          Un momento
          <span className="flex gap-0.5">
            <span className="h-1 w-1 rounded-full bg-[#8c6a56] animate-[dotBounce_1.2s_ease-in-out_infinite]" />
            <span className="h-1 w-1 rounded-full bg-[#8c6a56] animate-[dotBounce_1.2s_ease-in-out_0.15s_infinite]" />
            <span className="h-1 w-1 rounded-full bg-[#8c6a56] animate-[dotBounce_1.2s_ease-in-out_0.3s_infinite]" />
          </span>
        </p>

        {/* Barra de carga animada */}
        <div className="mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-[#ead7c8]">
          <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#b98a63] to-[#7c4a31] animate-[loading_1.6s_cubic-bezier(0.65,0,0.35,1)_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.45; transform: scale(0.95); }
          50% { opacity: 0.75; transform: scale(1.05); }
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.06); opacity: 0.85; }
        }

        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes dotBounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-3px); opacity: 1; }
        }

        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(150%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}

export { LoadingScreen };
