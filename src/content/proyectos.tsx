import React, { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ProyectosContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollDown = () => {
    setIsVisible(true);
  };

  const handleScrollUp = () => {
    setIsVisible(false);
  };

  const proyectos = [
    {
      nombre: "API Node",
      descripcion: "API desarrollada con Node.js y Express.",
      enlace: "https://github.com/xhris-spec/api-node",
    },
    {
      nombre: "Docker",
      descripcion: "Configuración y uso de contenedores con Docker.",
      enlace: "https://github.com/xhris-spec/docker",
    },
    {
      nombre: "Reflex",
      descripcion: "Proyecto de reflexión y aprendizaje personal.",
      enlace: "https://github.com/xhris-spec/reflex",
    },
    {
      nombre: "Symfony",
      descripcion: "Proyecto web desarrollado con el framework Symfony.",
      enlace: "https://github.com/xhris-spec/symfony",
    },
  ];

  return (
    <div className="text-center relative">
      <h1 className="mb-2 text-3xl font-bold text-[#D1E8FF]">Proyectos</h1>
      <p className="text-base text-[#A9BDC5]">
        Explora mis proyectos destacados, donde aplico tecnologías como Node.js,{" "}
        <br className="hidden md:block" />
        Docker, y Symfony para resolver problemas y crear soluciones{" "}
        <br className="hidden md:block" />
        innovadoras. ¡Haz clic en cada proyecto para obtener más detalles!
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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-full max-w-5xl">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="p-5 bg-[rgba(255,255,255,0.1)] rounded-lg shadow-lg text-center"
            >
              <h2 className="text-xl font-bold text-[#D1E8FF] mb-4 drop-shadow-lg">
                {proyecto.nombre}
              </h2>
              <p className="text-base mb-4 tracking-wide text-[#A9BDC5]">
                {proyecto.descripcion}
              </p>
              <a
                href={proyecto.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D1E8FF] underline hover:text-[#A9BDC5]"
              >
                Ver en GitHub
              </a>
            </div>
          ))}
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

export default ProyectosContent;
