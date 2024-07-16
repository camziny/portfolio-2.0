import ThreeDScene from "../components/ThreeDScene";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("../components/Scene"), { ssr: false });

const threeDPage = () => {
  return (
    <div className="h-full">
      <Scene />
    </div>
  );
};

export default threeDPage;
