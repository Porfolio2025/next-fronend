import { useLoader } from "@react-three/fiber";
import { FC } from "react";
import { GLTFLoader } from "three-stdlib";

type GLBModelProps = {
  path: string;
  position: [number, number, number];
  scale: [number, number, number];
  onClick: () => void;
};

const GLBModel: FC<GLBModelProps> = ({ path, position, scale, onClick }) => {
  const gltf = useLoader(GLTFLoader, path);

  return (
    <primitive
      object={gltf.scene}
      position={position}
      scale={scale}
      onClick={onClick}
    />
  );
};


export default GLBModel;
