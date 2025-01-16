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
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          marginBottom: "10px",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#D1E8FF",
        }}
      >
        Inicio
      </h1>
      <p style={{ fontSize: "1rem", color: "#A9BDC5" }}>
        Bienvenido al inicio. Aquí puedes añadir información relevante de esta sección.
      </p>
      {/* Flecha para bajar */}
      <div
        onClick={handleScrollDown}
        style={{
          cursor: "pointer",
          marginTop: "20px",
          display: "inline-block",
          animation: "bounce 2s infinite",
        }}
      >
        <ArrowDownwardIcon
          style={{
            fontSize: "3rem",
            color: "#D1E8FF",
          }}
        />
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
      {/* Contenido adicional */}
      <div
        id="more-content"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          padding: "20px",
          marginTop: "50px",
          background: "rgba(16, 24, 32, 0.9)",
          color: "#fff",
          borderRadius: "8px",
          display: isVisible ? "block" : "none", // Ocultarlo completamente si no es visible
        }}
      >
        <h2>Más Contenido</h2>
        <p>Aquí puedes añadir más contenido relacionado con la sección seleccionada.</p>
      </div>
    </div>
  );
};

export default InicioContent;
