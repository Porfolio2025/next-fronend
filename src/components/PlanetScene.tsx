import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { FC, useState } from "react";
import * as THREE from "three";

import InicioContent from "@/content/inicio";
import ProyectoContent from "@/content/proyectos";
import ContactoContent from "@/content/contacto";

const contentMap: { [key: string]: JSX.Element } = {
  Inicio: <InicioContent />,
  Proyectos: <ProyectoContent />,
  Contacto: <ContactoContent />,
};

const Planet: FC<{
  name: string;
  position: [number, number, number];
  onClick: () => void;
  texturePath: string;
}> = ({ position, onClick, texturePath }) => {
  const texture = useLoader(THREE.TextureLoader, texturePath);

  return (
    <mesh
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        const object = e.object;
        if (object instanceof THREE.Mesh) {
          object.material.emissiveIntensity = 0.5;
          object.material.needsUpdate = true;
        }
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        const object = e.object;
        if (object instanceof THREE.Mesh) {
          object.material.emissiveIntensity = 0;
          object.material.needsUpdate = true;
        }
      }}
    >
      <sphereGeometry args={[0.8, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        roughness={0.4}
        metalness={0.0}
        emissive={new THREE.Color("white")}
        emissiveIntensity={0}
      />
    </mesh>
  );
};

const PlanetScene: FC = () => {
  const [activeContent, setActiveContent] = useState<string>("");

  const handlePlanetClick = (name: string) => {
    setActiveContent(name);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        position: "relative",
        background: "black",
      }}
    >
      <Canvas camera={{ position: [0, 0, 7], fov: 70 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 10]} intensity={2.0} castShadow />
        <Stars
          radius={200}
          depth={50}
          count={5000}
          factor={7}
          saturation={1}
          fade
        />

        <Planet
          name="Inicio"
          position={[-4, 0, 0]}
          onClick={() => handlePlanetClick("Inicio")}
          texturePath="/textures/8k_earth_daymap.jpg"
        />
        <Planet
          name="Proyectos"
          position={[-2, 0, 0]}
          onClick={() => handlePlanetClick("Proyectos")}
          texturePath="/textures/8k_mars.jpg"
        />
        <Planet
          name="Contacto"
          position={[0, 0, 0]}
          onClick={() => handlePlanetClick("Contacto")}
          texturePath="/textures/8k_jupiter.jpg"
        />

        <OrbitControls />
      </Canvas>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          padding: "40px",
          textAlign: "center",
          background:
            "linear-gradient(to top, rgba(16, 24, 32, 1), transparent)", // Grey-blue fade
          color: "white",
          fontSize: "1.2rem",
          transition: "opacity 0.5s",
          opacity: activeContent ? 1 : 0,
        }}
      >
        {activeContent && contentMap[activeContent]}
      </div>
    </div>
  );
};

export default PlanetScene;
