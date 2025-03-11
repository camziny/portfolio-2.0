"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Script from "next/script";

interface VantaBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

const VantaBackground = ({ children, className = "" }: VantaBackgroundProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !scriptsLoaded) return;
    if (typeof window === 'undefined') return;
    
    if (vantaEffect) {
      vantaEffect.destroy();
      setVantaEffect(null);
    }

    const timer = setTimeout(() => {
      if (!window.VANTA) {
        console.error("VANTA is not loaded");
        return;
      }

      try {
        const isDarkMode = resolvedTheme === 'dark';
        const backgroundColor = isDarkMode ? 0x111827 : 0xf9fafb;
        const effectColor = isDarkMode ? 0x0891b2 : 0x0e7490;
        
        const effect = window.VANTA.TOPOLOGY({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 300.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: effectColor,
          backgroundColor: backgroundColor,
          points: 10,
          maxDistance: 25.00,
          spacing: 18.00
        });
        
        setVantaEffect(effect);
      } catch (error) {
        console.error("Failed to initialize Vanta effect:", error);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [resolvedTheme, mounted, scriptsLoaded, vantaEffect]);

  const bgColor = mounted && resolvedTheme === 'dark' ? '#111827' : '#f9fafb';

  const handleScriptsLoad = () => {
    setScriptsLoaded(true);
  };

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        onLoad={() => {
          const p5Script = document.createElement('script');
          p5Script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js";
          p5Script.onload = () => {
            const vantaScript = document.createElement('script');
            vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js";
            vantaScript.onload = handleScriptsLoad;
            document.head.appendChild(vantaScript);
          };
          document.head.appendChild(p5Script);
        }}
      />
      
      <div 
        ref={vantaRef} 
        className={`relative ${className}`}
        style={{ 
          background: bgColor,
          overflow: 'hidden'
        }}
      >
        {children && <div className="relative z-10">{children}</div>}
      </div>
    </>
  );
};

declare global {
  interface Window {
    VANTA: {
      TOPOLOGY: (options: any) => any;
      [key: string]: any;
    };
  }
}

export default VantaBackground; 