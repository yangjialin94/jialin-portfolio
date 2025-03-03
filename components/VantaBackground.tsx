'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import VANTA from 'vanta/dist/vanta.fog.min';

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<ReturnType<typeof VANTA> | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (vantaEffect.current) {
      vantaEffect.current.destroy();
    }

    const isDarkMode = resolvedTheme === 'dark';

    vantaEffect.current = VANTA({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: isDarkMode ? 0xe5e7eb : 0xe5e7eb,
      midtoneColor: isDarkMode ? 0xe5e7eb : 0xe5e7eb,
      lowlightColor: isDarkMode ? 0xb3b3b3 : 0x525252,
      baseColor: isDarkMode ? 0x000000 : 0xffffff,
      speed: 2.0,
      zoom: 0.8,
      THREE,
    });

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [resolvedTheme]);

  return <div ref={vantaRef} className="absolute inset-0 -z-10" />;
}
