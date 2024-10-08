import React, {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SmallPyramid.css";
import { useGSAP } from "@gsap/react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  GLTFAnimationPlugin,
  BloomPlugin,
  TemporalAAPlugin,
  GammaCorrectionPlugin,
  addBasePlugins,
  mobileAndTabletCheck,
  ITexture,
  TweakpaneUiPlugin,
  AssetManagerBasicPopupPlugin,
  CanvasSnipperPlugin,
  IViewerPlugin,
  // Color, // Import THREE.js internals
  // Texture, // Import THREE.js internals
} from "webgi";
const SmallPyramid: React.FC = () => {
  async function setupViewer() {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: canvasRef.current as HTMLCanvasElement,
    });

    // Add plugins individually.
    // await viewer.addPlugin(GBufferPlugin)
    // await viewer.addPlugin(new ProgressivePlugin(32))
    // await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
    // await viewer.addPlugin(GammaCorrectionPlugin)
    // await viewer.addPlugin(SSRPlugin)
    // await viewer.addPlugin(SSAOPlugin)
    // await viewer.addPlugin(DiamondPlugin)
    // await viewer.addPlugin(FrameFadePlugin)
    // await viewer.addPlugin(GLTFAnimationPlugin)
    // await viewer.addPlugin(GroundPlugin)
    // await viewer.addPlugin(BloomPlugin)
    // await viewer.addPlugin(TemporalAAPlugin)
    // await viewer.addPlugin(AnisotropyPlugin)
    // and many more...

    // or use this to add all main ones at once.
    await addBasePlugins(viewer); // check the source: https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added.

    // Add a popup(in HTML) with download progress when any asset is downloading.

    // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
    await viewer.addPlugin(CanvasSnipperPlugin);

    const manager = await viewer.getPlugin(AssetManagerPlugin);
    const pyramid = await manager!.addFromPath(
      "/src/assets/Models/smallPyramid.glb"
    );

    const gltfAnims = viewer.getPlugin(GLTFAnimationPlugin);

    // Play all animations
    gltfAnims!.playAnimation();

    // Disable orbit controls if present
    const controller = viewer.scene.activeCamera;
    const options = viewer.scene.activeCamera.getCameraOptions();

    const controls = viewer.scene.activeCamera.controls;
    controls!.enabled = false;
    // Load an environment map if not set in the glb file
    // await viewer.setEnvironmentMap("./assets/environment.hdr");
    canvasRef.current?.addEventListener("click", handleCanvasClick);
  }

  function handleCanvasClick(event: MouseEvent) {
    window.open("https://your-desired-page-url.com");
  }
  useEffect(() => {
    setupViewer();
  });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  return (
    <div id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default SmallPyramid;
