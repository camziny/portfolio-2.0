"use client";
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

const TexturedBox: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const textures = useLoader(
    THREE.TextureLoader,
    isDarkMode
      ? [
          "/data/images/browser_dark.png",
          "/data/images/code_computer_dark.png",
          "/data/images/cam_ziny_code_dark.png",
          "/data/images/laptop_dark.png",
          "/data/images/dark_coding_image.png",
          "/data/images/database_dark.png",
        ]
      : [
          "/data/images/browser.png",
          "/data/images/code_computer.png",
          "/data/images/cam_ziny_code.png",
          "/data/images/laptop.png",
          "/data/images/coding_image.png",
          "/data/images/database.png",
        ]
  );

  const meshRef = useRef<THREE.Mesh>(null!);

  const SPEED_Y = 0.006;
  const SPEED_X = 0.00001;

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += SPEED_Y * delta * 60;
      meshRef.current.rotation.x += SPEED_X * delta * 60;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      {textures.map((texture, index) => (
        <meshStandardMaterial
          key={index}
          attach={`material-${index}`}
          map={texture}
        />
      ))}
    </mesh>
  );
};

const ThreeDScene: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="w-full h-[500px] sm:h-[500px] md:h-[500px] lg:h-[600px] xl:h-[800px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={2.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <TexturedBox isDarkMode={isDarkMode} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ThreeDScene;
