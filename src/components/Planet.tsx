import * as THREE from "three";
import { FC } from "react";
import useTextureLoader from "@/helpers/useTextureLoader";

type PlanetProps = {
  name: string;
  position: [number, number, number];
  onClick: () => void;
  texturePath: string;
  isVisible: boolean;
};

const Planet: FC<PlanetProps> = ({
  position,
  onClick,
  texturePath,
  isVisible,
}) => {
  const texture = useTextureLoader(texturePath);

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

export default Planet;
