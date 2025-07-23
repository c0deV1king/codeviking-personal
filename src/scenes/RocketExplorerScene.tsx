import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const RocketExplorerScene: React.FC = () => {
  function RotatingCylinder() {
    const meshRef = useRef<Mesh>(null!);

    useFrame((_, delta) => {
      meshRef.current.rotation.y += delta * -0.3;
    });
    return (
      <mesh ref={meshRef}>
        <cylinderGeometry args={[0.3, 0.5, 1.5, 8]} />
        <meshStandardMaterial color="silver" wireframe={true} />
      </mesh>
    );
  }

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 1, 1], fov: 110 }}
      onCreated={({ camera }) => {
        camera.lookAt(0, 0, 0);
      }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <RotatingCylinder />
    </Canvas>
  );
};
