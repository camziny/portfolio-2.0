"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { useProgress, Html, ScrollControls } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      className="relative w-full h-full"
      camera={{ position: [0, 1, 10], fov: 50 }}
    >
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.5} pages={0}>
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
