import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const SteamTrackerScene: React.FC = () => {
  function RotatingBox() {
    const meshRef = useRef<Mesh>(null!);

    useFrame((_, delta) => {
      meshRef.current.rotation.y += delta * 0.3;
    });
    return (
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1, 1]} />
        <meshStandardMaterial color="silver" wireframe={true} />
      </mesh>
    );
  }

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 1, 2], fov: 50 }}
      onCreated={({ camera }) => {
        camera.lookAt(0, 0, 0);
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingBox />
    </Canvas>
  );
};
