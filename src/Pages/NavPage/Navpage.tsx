import React, { useRef, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import {
  useGLTF,
  Environment,
  AccumulativeShadows,
  Lightformer,
  RandomizedLight,
} from "@react-three/drei";
import * as THREE from "three";
import { easing } from "maath";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import "./NavPage.css";
import Particles from "./Particles";

const NavPage: React.FC = () => {
  const [perfSucks, degrade] = useState(false);

  return (
    <div className="Navpage-wrapper">
      <Canvas
        shadows
        dpr={[1, perfSucks ? 1.5 : 2]}
        camera={{ position: [0, 0, 1], fov: 15 }}
      >
        <VideoBackground url="/public/Videos/Overlays/navOverlay.webm" />
        <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <PyramidScene />
          <RandomizedLight
            amount={8}
            radius={6}
            ambient={0.5}
            intensity={1}
            position={[-1.5, 2.5, -2.5]}
            bias={0.001}
          />
        </group>
        <Env perfSucks={perfSucks}></Env>
        <Particles particlesCount={100} />
        <EffectComposer>
          {/* Bloom effect */}
          <Bloom
            intensity={0.02} // Adjust intensity as needed
            kernelSize={3} // Control blur amount (1 - 5)
            luminanceThreshold={0.2} // Luminance threshold for the bloom effect
            luminanceSmoothing={0.9} // Smoothing for luminance values
          />
          {/* Depth of field */}
          <DepthOfField
            focusDistance={0.02} // Where to focus (0 = near, 1 = far)
            focalLength={0.05} // Focal length
            bokehScale={2} // Bokeh size
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};
function VideoBackground({ url }: { url: string }) {
  const { scene } = useThree();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Create a video element
    const video = document.createElement("video");
    video.src = url;
    video.crossOrigin = "Anonymous";
    video.loop = true;
    video.muted = true;
    video.play();

    // Create a video texture
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;

    // Set the scene background to the video texture
    scene.background = videoTexture;

    // Cleanup
    return () => {
      video.pause();
      video.src = "";
      scene.background = null;
    };
  }, [scene, url]);

  return null;
}
function PyramidScene(props: JSX.IntrinsicElements["group"]) {
  const { scene } = useGLTF("/public/models/PyramidNav.glb") as any;
  const meshRef = useRef<THREE.Group>(null);
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const [hoveredObject, setHoveredObject] = useState<string | null>(null);
  const navigate = useNavigate();
  const originalScales = useRef<Record<string, THREE.Vector3>>({});

  // Mapping from the bounding boxes to the corresponding text objects
  const targetNames = ["inter_1", "inter_2", "inter_3", "inter_4"];
  const realObjectMap: Record<string, string> = {
    inter_1: "Text",
    inter_2: "Text001",
    inter_3: "Text002",
    inter_4: "Text003",
  };

  const handleMouseMove = useCallback((event: MouseEvent) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Reset all text objects to their original scale
    Object.values(realObjectMap).forEach((textName) => {
      const textObject = meshRef.current!.getObjectByName(textName);
      if (textObject && originalScales.current[textName]) {
        textObject.scale.copy(originalScales.current[textName]);
      }
    });

    // Raycasting to detect hover on bounding boxes
    raycaster.current.setFromCamera(mouse.current, state.camera);
    const intersects = raycaster.current.intersectObjects(
      meshRef.current.children,
      true
    );

    if (intersects.length > 0) {
      const object = intersects[0].object;

      // Check if the intersected object is one of the bounding boxes
      if (targetNames.includes(object.name)) {
        setHoveredObject(object.name);
        const realObjectName = realObjectMap[object.name];

        if (realObjectName) {
          const textObject = meshRef.current.getObjectByName(realObjectName);
          if (textObject) {
            if (!originalScales.current[realObjectName]) {
              originalScales.current[realObjectName] = textObject.scale.clone();
              console.log(
                realObjectName +
                  "'s scale is: " +
                  originalScales.current[realObjectName].x +
                  " " +
                  originalScales.current[realObjectName].y +
                  " " +
                  originalScales.current[realObjectName].z
              );
            }

            // Apply hover effect to the text object
            textObject.scale.set(
              originalScales.current[realObjectName].x * 1.1,
              originalScales.current[realObjectName].y * 1.1,
              originalScales.current[realObjectName].z * 1.1
            );
          }
        }
      } else {
        setHoveredObject(null);
      }
    } else {
      setHoveredObject(null);
    }
  });

  const handleClick = useCallback(() => {
    if (hoveredObject) {
      switch (hoveredObject) {
        case "inter_1":
          navigate("/home");
          break;
        case "inter_2":
          navigate("/crafts");
          break;
        case "inter_3":
          navigate("/about");
          break;
        case "inter_4":
          navigate("/contact");
          break;
        default:
          break;
      }
    }
  }, [hoveredObject, navigate]);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <group {...props} dispose={null} ref={meshRef}>
      <primitive object={scene} />
    </group>
  );
}
function DynamicBackground() {
  const colorRef = useRef(new THREE.Color("#f0f0f0"));
  useFrame((state) => {
    // Cycle through colors over time
    const elapsedTime = state.clock.getElapsedTime();
    colorRef.current.setHSL(Math.sin(elapsedTime / 2) * 0.5 + 0.5, 0.5, 0.5);
    state.gl.setClearColor(colorRef.current);
  });
  return null;
}

function Env({ perfSucks }: { perfSucks: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    // Animate the environment and camera
    if (!perfSucks) {
      if (ref.current) {
        // Damping individual rotational components for the environment
        easing.damp(
          ref.current.rotation,
          "y",
          state.clock.elapsedTime / 5 + state.pointer.x,
          0.2,
          delta
        );
      }
      easing.damp3(
        state.camera.position,
        [
          Math.sin(state.pointer.x / 4) * 9,
          1.25 + state.pointer.y,
          Math.cos(state.pointer.x / 4) * 9,
        ],
        0.5,
        delta
      );
      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <Environment
      frames={perfSucks ? 1 : Infinity}
      resolution={256}
      background
      blur={0.8}
    >
      <Lightformer
        intensity={4}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <Lightformer
        intensity={4}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <group rotation={[Math.PI / 2, 1, 0]}>
        {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
          <Lightformer
            key={i}
            intensity={1}
            rotation={[Math.PI / 4, 0, 0]}
            position={[x, 4, i * 4]}
            scale={[4, 1, 1]}
          />
        ))}
        <Lightformer
          intensity={0.5}
          rotation-y={Math.PI / 2}
          position={[-5, 1, -1]}
          scale={[50, 2, 1]}
        />
        <Lightformer
          intensity={0.5}
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[50, 2, 1]}
        />
        <Lightformer
          intensity={0.5}
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[50, 2, 1]}
        />
      </group>
    </Environment>
  );
}

useGLTF.preload("/public/models/PyramidNav.glb"); // Preload the GLTF model

export default NavPage;
