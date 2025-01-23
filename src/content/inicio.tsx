import { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const InicioContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollDown = () => {
    setIsVisible(true);
  };

  const handleScrollUp = () => {
    setIsVisible(false);
  };

  return (
    <div className="text-center relative">
      <h1 className="mb-2 text-3xl font-bold text-[#D1E8FF]">Inicio</h1>
      <p className="text-base text-[#A9BDC5]">
        Bienvenido al inicio. Aquí puedes añadir información relevante de esta
        sección.
      </p>

      <div
        onClick={handleScrollDown}
        className="mt-5 inline-block cursor-pointer animate-bounce"
      >
        <ArrowDownwardIcon className="text-[#D1E8FF] text-5xl" />
      </div>

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>

      <div
        id="more-content"
        className={`fixed inset-0 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white transition-transform duration-700 flex flex-col items-center z-50 overflow-y-auto pt-10 px-5 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <h1 className="text-3xl font-bold text-[#D1E8FF] mb-10 text-center drop-shadow-lg">
          🌟 Título del Contenido 🌟
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-full max-w-5xl">
          <div className="p-5 bg-[rgba(255,255,255,0.1)] rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-[#D1E8FF] mb-4 drop-shadow-lg">
              🌌 Sobre Mí
            </h2>
            <p className="text-base mb-4 tracking-wide text-[#A9BDC5]">
              ¡Hola! Soy un desarrollador apasionado por crear soluciones
              tecnológicas que impacten de manera positiva.
            </p>
          </div>
          <div className="p-5 bg-[rgba(255,255,255,0.1)] rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-[#D1E8FF] mb-4 drop-shadow-lg">
              🚀 Experiencia
            </h2>
            <p className="text-base mb-4 tracking-wide text-[#A9BDC5]">
              Experiencia en desarrollo web con React, TypeScript, Node.js y
              más.
            </p>
          </div>
          <div className="p-5 bg-[rgba(255,255,255,0.1)] rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-[#D1E8FF] mb-4 drop-shadow-lg">
              🎯 Misión
            </h2>
            <p className="text-base mb-4 tracking-wide text-[#A9BDC5]">
              Enfocado en la calidad, innovación y soluciones escalables.
            </p>
          </div>
          <div className="p-5 bg-[rgba(255,255,255,0.1)] rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-[#D1E8FF] mb-4 drop-shadow-lg">
              🎯 Misión
            </h2>
            <p className="text-base mb-4 tracking-wide text-[#A9BDC5]">
              Enfocado en la calidad, innovación y soluciones escalables.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center mt-10">
          <div
            onClick={handleScrollUp}
            className="cursor-pointer animate-bounce"
          >
            <ArrowUpwardIcon className="text-[#D1E8FF] text-5xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioContent;
