import { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const InicioContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollDown = () => {
    setIsVisible(true);
    const nextSection = document.getElementById("more-content");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-center">
      <h1 className="mb-2 text-3xl font-bold text-[#D1E8FF]">Inicio</h1>
      <p className="text-base text-[#A9BDC5]">
        Bienvenido al inicio. Aquí puedes añadir información relevante de esta
        sección.
      </p>
      {/* Flecha para bajar */}
      <div
        onClick={handleScrollDown}
        className="mt-5 inline-block cursor-pointer animate-bounce"
      >
        <ArrowDownwardIcon className="text-[#D1E8FF] text-5xl" />
      </div>
      {/* Animación personalizada */}
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
      {/* Contenido adicional */}
      <div
        id="more-content"
        className={`${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }  duration-800 ease-in-out p-5 mt-12 bg-[rgba(16,24,32,0.9)] text-white rounded-lg ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <h2 className="text-lg font-bold">Más Contenido</h2>
        <p>
          Aquí puedes añadir más contenido relacionado con la sección
          seleccionada.
        </p>
      </div>
    </div>
  );
};

export default InicioContent;
