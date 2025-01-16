import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, CameraControls } from "@react-three/drei";
import { FC, useState, useRef } from "react";
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
  isVisible: boolean;
}> = ({ position, onClick, texturePath, isVisible }) => {
  const texture = useLoader(THREE.TextureLoader, texturePath);

  if (!isVisible) return null;

  return (
    <mesh
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
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
  const [activePlanet, setActivePlanet] = useState<string | null>(null);
  const cameraControlsRef = useRef<any>();

  const handlePlanetClick = (
    name: string,
    position: [number, number, number]
  ) => {
    setActivePlanet(name);
    if (cameraControlsRef.current) {
      cameraControlsRef.current.setLookAt(
        position[0],
        position[1], 
        2, 
        position[0],
        position[1],
        0,
        true
      );
    }
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

        
        <CameraControls ref={cameraControlsRef} />

        
        <Planet
          name="Inicio"
          position={[0, 0, 0]}
          onClick={() => handlePlanetClick("Inicio", [0, 0, 0])}
          texturePath="/textures/8k_earth_daymap.jpg"
          isVisible={activePlanet === null || activePlanet === "Inicio"}
        />
        <Planet
          name="Proyectos"
          position={[2, 0, 0]}
          onClick={() => handlePlanetClick("Proyectos", [2, 0, 0])}
          texturePath="/textures/8k_mars.jpg"
          isVisible={activePlanet === null || activePlanet === "Proyectos"}
        />
        <Planet
          name="Contacto"
          position={[-2, 0, 0]}
          onClick={() => handlePlanetClick("Contacto", [-2, 0, 0])}
          texturePath="/textures/8k_jupiter.jpg"
          isVisible={activePlanet === null || activePlanet === "Contacto"}
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
            "linear-gradient(to top, rgba(16, 24, 32, 1), transparent)",
          color: "white",
          fontSize: "1.2rem",
          transition: "opacity 0.5s",
          opacity: activePlanet ? 1 : 0,
        }}
      >
        {activePlanet && contentMap[activePlanet]}
      </div>
    </div>
  );
};

export default PlanetScene;
