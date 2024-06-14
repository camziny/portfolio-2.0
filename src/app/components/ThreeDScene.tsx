"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

const TexturedBox: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const texture = useTexture(
    isDarkMode
      ? "/data/images/dark_coding_image.png"
      : "/data/images/coding_image.png"
  );
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.007;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const ThreeDScene: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <Canvas style={{ width: "500px", height: "500px" }}>
      <ambientLight intensity={2.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <TexturedBox isDarkMode={isDarkMode} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeDScene;
