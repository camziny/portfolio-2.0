"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface VantaBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

const VantaBackground = ({ children, className = "" }: VantaBackgroundProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    const preloadScripts = () => {
      const scripts = [
        "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js",
        "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js"
      ];
      
      scripts.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'script';
        link.href = src;
        document.head.appendChild(link);
      });
    };
    
    preloadScripts();
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (typeof window === 'undefined') return;
    
    const loadScripts = async () => {
      setIsLoading(true);
      
      if (vantaEffect) {
        vantaEffect.destroy();
      }

      try {
        await Promise.all([
          !window.THREE ? new Promise(resolve => {
            const script = document.createElement('script');
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
            script.onload = resolve;
            document.head.appendChild(script);
          }) : Promise.resolve(),
          
          !window.p5 ? new Promise(resolve => {
            const script = document.createElement('script');
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js";
            script.onload = resolve;
            document.head.appendChild(script);
          }) : Promise.resolve()
        ]);
        
        if (!window.VANTA) {
          await new Promise(resolve => {
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js";
            script.onload = resolve;
            document.head.appendChild(script);
          });
        }

        console.log("Initializing Vanta effect");
        const isDarkMode = resolvedTheme === 'dark';
        const backgroundColor = isDarkMode ? 0x111827 : 0xf9fafb;
        const effectColor = isDarkMode ? 0x0891b2 : 0x0e7490;
        
        setTimeout(() => {
          const effect = window.VANTA.TOPOLOGY({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 500.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: effectColor,
            backgroundColor: backgroundColor,
            points: 10,
            maxDistance: 25.00,
            spacing: 18.00,
            showDots: true,
            speed: 1.0,
            chaos: 4.0,
            pinning: 0.2
          });
          
          setVantaEffect(effect);
          setIsLoading(false);
          console.log("Vanta effect initialized");
        }, 100);
      } catch (error) {
        console.error("Failed to initialize Vanta effect:", error);
        setIsLoading(false);
      }
    };

    loadScripts();

    return () => {
      if (vantaEffect) {
        console.log("Destroying Vanta effect");
        vantaEffect.destroy();
      }
    };
  }, [resolvedTheme, mounted, vantaEffect]);

  const bgColor = mounted && resolvedTheme === 'dark' ? '#111827' : '#f9fafb';

  return (
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
  );
};

declare global {
  interface Window {
    THREE: any;
    p5: any;
    VANTA: {
      TOPOLOGY: (options: any) => any;
      [key: string]: any;
    };
  }
}

export default VantaBackground; 