import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

useGLTF.preload("/data/images/robot_playground.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/data/images/robot_playground.glb"
  );
  const { actions } = useAnimations(animations, scene);

  useFrame(() => {
    if (actions && actions["Experiment"]) {
      actions["Experiment"].play();
    }
  });

  return (
    <group ref={group} position={[0, -3, 0]} scale={[3, 3, 3]}>
      <primitive object={scene} />
    </group>
  );
}
