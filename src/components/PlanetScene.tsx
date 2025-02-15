import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, CameraControls } from "@react-three/drei";
import { FC, useState, useRef } from "react";

import GLBModel from "@/components/GLBModel";

import * as THREE from "three";

import { ContentMap } from "@/helpers/planetInteractions";

import { handleBackToPlanets } from "@/helpers/planetInteractions";

import InicioContent from "@/content/Inicio";
import ProyectoContent from "@/content/Proyectos";
import ContactoContent from "@/content/Contacto";

const contentMap: ContentMap = {
  Inicio: <InicioContent />,
  Proyectos: <ProyectoContent />,
  Contacto: <ContactoContent />,
};

const CUSTOM_MOUSE = {
  ...THREE.MOUSE,
  NONE: 0 as unknown as THREE.MOUSE,
};

const PlanetScene: FC = () => {
  const [activePlanet, setActivePlanet] = useState<string | null>(null);
  const cameraControlsRef = useRef<CameraControls>(null!);

  return (
    <div className="w-screen h-screen m-0 p-0 overflow-hidden relative bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
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

        <CameraControls
          ref={cameraControlsRef}
          mouseButtons={{
            left: CUSTOM_MOUSE.NONE,
            middle: CUSTOM_MOUSE.NONE,
            right: CUSTOM_MOUSE.NONE,
            wheel: CUSTOM_MOUSE.NONE,
          }}
          enabled={true}
        />

        <GLBModel
          path="/models/evironment_pack_planets.glb"
          position={[-0.1, -1, 1.5]}
          scale={[2, 2, 2]}
          // onClick={() =>
          //   handlePlanetClick(
          //     "Sol",
          //     [0, 0, -2],
          //     cameraControlsRef,
          //     setActivePlanet
          //   )
          // }
        />

        <OrbitControls enabled={false} />
      </Canvas>

      {activePlanet && (
        <button
          onClick={() =>
            handleBackToPlanets(setActivePlanet, cameraControlsRef)
          }
          className="absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2 border-2 border-[#d1e8ff] text-[#d1e8ff] rounded-lg hover:bg-[#d1e8ff] hover:text-black transition duration-300 shadow-white z-50"
        >
          Volver a los planetas
        </button>
      )}

      <div
        className={`absolute bottom-0 left-0 w-full p-10 text-center text-white text-xl bg-gradient-to-t from-[#101820] to-transparent transition-opacity duration-500 ${
          activePlanet ? "opacity-100" : "opacity-0"
        }`}
      >
        {activePlanet && contentMap[activePlanet]}
      </div>
    </div>
  );
};

export default PlanetScene;
