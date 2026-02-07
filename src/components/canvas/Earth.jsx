// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Earth = () => {
//   const earth = useGLTF("./planet/scene.gltf");

//   return (
//     <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
//   );
// };

// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop='demand'
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: 45,
//         near: 0.1,
//         far: 200,
//         position: [-4, 3, 6],
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Earth />

//         <Preload all />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

/* ============================= */
/* Earth Model Component */
/* ============================= */

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

/* ============================= */
/* Main Canvas Component */
/* ============================= */

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
      frameloop="always" // Stable rendering
      dpr={[1, 1.5]} // GPU friendly
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

/* ============================= */
/* Preload Model */
/* ============================= */

useGLTF.preload("/planet/scene.gltf");
