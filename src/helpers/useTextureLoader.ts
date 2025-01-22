import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const useTextureLoader = (texturePath: string) => {
  return useLoader(THREE.TextureLoader, texturePath);
};

export default useTextureLoader;
