import { Canvas, useFrame } from "@react-three/fiber";

import { useRef, useMemo } from "react";
import * as THREE from "three";

function Cube({ position, scale, speed }: { position: [number, number, number], scale: number, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    meshRef.current.rotation.x += 0.01 * speed;
    meshRef.current.rotation.y += 0.01 * speed;

    meshRef.current.position.y =
      position[1] + Math.sin(t * speed) * 0.5;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} />
    </mesh>
  );
}

function FloatingCubes() {
  const cubes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 40; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ] as [number, number, number],
        scale: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 1 + 0.5,
      });
    }
    return temp;
  }, []);

  return (
    <>
      {cubes.map((cube, i) => (
        <Cube key={i} {...cube} />
      ))}
    </>
  );
}

function CameraRig() {
  useFrame(({ camera }) => {
    camera.position.x = Math.sin(Date.now() * 0.0002) * 2;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function FloatingCubesHero() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0b0f1a] to-[#02040a]">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        {/* Fog for depth */}
        <fog attach="fog" args={["#02040a", 5, 20]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Cubes */}
        <FloatingCubes />

        {/* Camera Drift */}
        <CameraRig />
      </Canvas>
    </div>
  );
}
