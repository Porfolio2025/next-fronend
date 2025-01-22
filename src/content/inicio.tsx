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
        className={`fixed inset-0 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white transition-transform duration-700 flex items-center justify-center z-50 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="p-5 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#D1E8FF] mb-4 drop-shadow-lg">
            🌌 Sobre Mí
          </h2>
          <p className="text-base mb-4 tracking-wide text-[#A9BDC5]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            quos, delectus vitae minus in eius perspiciatis ab officiis alias
            maiores voluptatibus beatae nesciunt excepturi fuga blanditiis ut
            eveniet. Consequatur, eum?
          </p>
          <p className="text-base mb-4 tracking-wide text-[#A9BDC5]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt
            est deserunt distinctio, recusandae soluta libero doloremque error!
            Eum ea omnis ducimus ut rem assumenda voluptas impedit eligendi,
            culpa in!
          </p>
          <p className="text-base tracking-wide text-[#A9BDC5]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, non inventore. A labore nobis aliquam? Tempore
            dignissimos eveniet eius necessitatibus quidem, consequuntur aut ab
            nulla voluptatibus quasi, quo, magnam voluptates?
          </p>
          <div
            onClick={handleScrollUp}
            className="mt-5 inline-block cursor-pointer animate-bounce"
          >
            <ArrowUpwardIcon className="text-[#D1E8FF] text-5xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioContent;
