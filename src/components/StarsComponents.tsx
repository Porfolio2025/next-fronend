import seedrandom from "seedrandom";
import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import * as THREE from "three";

const generateFixedStarPositions = () => {
  const rng = seedrandom("12345");
  const positions = [];
  for (let i = 0; i < 500; i++) {
    const x = (rng() - 0.5) * 100;
    const y = (rng() - 0.5) * 100;
    const z = (rng() - 0.5) * 100;
    positions.push(x, y, z);
  }
  return new Float32Array(positions);
};

export const StarryBackground = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  const positions = useMemo(() => generateFixedStarPositions(), []);

  const starMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
          varying float vOpacity;
          uniform float time;
          void main() {
            float flicker = sin(position.x * 0.5 + time * 2.0) * 0.5 + 0.5;
            vOpacity = flicker;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = 3.0;
          }
        `,
      fragmentShader: `
          varying float vOpacity;
          void main() {
            float r = 0.5 - distance(gl_PointCoord, vec2(0.5));
            if(r < 0.0) discard;
            gl_FragColor = vec4(1.0, 1.0, 1.0, vOpacity);
          }
        `,
      transparent: true,
    });
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <primitive object={starMaterial} ref={materialRef} />
    </points>
  );
};
