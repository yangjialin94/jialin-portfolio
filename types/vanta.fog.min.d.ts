// vanta.fog.min.d.ts
declare module "vanta/dist/vanta.fog.min" {
  import * as THREE from "three";

  export interface VantaOptions {
    el: HTMLElement | null;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
    speed?: number;
    zoom?: number;
    THREE: typeof THREE;
  }

  export interface VantaEffect {
    destroy: () => void;
    resize?: () => void;
  }

  function VANTA(options: VantaOptions): VantaEffect;

  export default VANTA;
}
