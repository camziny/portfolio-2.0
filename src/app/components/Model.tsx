import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/data/images/robot_playground.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/data/images/robot_playground.glb"
  );
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    console.log(actions);
    if (actions && actions["Experiment"]) {
      //@ts-ignore
      actions["Experiment"].play().paused = true;
    } else {
      console.warn("Animation 'Experiment' not found.");
    }
  }, [actions]);

  useFrame(() => {
    if (actions && actions["Experiment"]) {
      //@ts-ignore
      actions["Experiment"].time =
        (actions["Experiment"].getClip().duration * scroll.offset) / 4;
    }
  });

  return (
    <group ref={group} position={[0, -3, 0]} scale={[3, 3, 3]}>
      <primitive object={scene} />
    </group>
  );
}
