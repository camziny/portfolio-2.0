"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("@/utils/aurora"), { ssr: false });
const LiquidChrome = dynamic(() => import("@/utils/liquidChrome"), { ssr: false });

const AnimatedBackground: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="absolute inset-0 w-full h-full z-0"></div>;
  }

  const darkModeColors = ["#2D80E0", "#0A5E85", "#001E66"];
  
  const lightModeBaseColor: [number, number, number] = [0.75, 0.95, 1.0]; 

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {isDarkMode ? (
        <div className="opacity-70 w-full h-full">
          <Aurora
            colorStops={darkModeColors}
            blend={0.45}
            amplitude={1.0}
            speed={1}
          />
        </div>
      ) : (
        <LiquidChrome
          baseColor={lightModeBaseColor}
          speed={0.18}
          amplitude={0.35}
          frequencyX={2.0}
          frequencyY={1.3}
          className="w-full h-full opacity-75" 
        />
      )}
    </div>
  );
};

export default AnimatedBackground; 