import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");

  // Safety check (prevents NaN crash)
  if (!earth || !earth.scene) return null;

  return (
    <primitive
      object={earth.scene}
      scale={2.3}
      position={[0, -0.5, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  /* Detect Mobile Screen */
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    setIsMobile(media.matches);

    const handler = (e) => setIsMobile(e.matches);

    media.addEventListener("change", handler);

    return () => {
      media.removeEventListener("change", handler);
    };
  }, []);

  /* Disable 3D on Mobile (Fix crash) */
  if (isMobile) {
    return null;
  }

  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping
          dampingFactor={0.05}
        />

        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;

useGLTF.preload("/planet/scene.gltf");
