import * as THREE from "three";
import { FC } from "react";
import useTextureLoader from "@/helpers/useTextureLoader";

type PlanetProps = {
  name: string;
  position: [number, number, number];
  onClick?: () => void;
  texturePath: string;
  isVisible?: boolean;
  args: [number, number, number];
  scale?: [number, number, number];
};

const Planet: FC<PlanetProps> = ({
  position,
  onClick,
  texturePath,
  isVisible,
  args,
  scale = 1,
}) => {
  const texture = useTextureLoader(texturePath);

  if (!isVisible) return null;

  return (
    <mesh
      position={position}
      scale={scale}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) {
          onClick();
        }
      }}
    >
      <sphereGeometry args={args} />
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
