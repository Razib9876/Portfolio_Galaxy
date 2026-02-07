// import React, { Suspense, useRef, useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Decal, Preload, useTexture } from "@react-three/drei";
// import CanvasLoader from "../Loader";

// const Ball = ({ imgUrl, mouse }) => {
//   const [decal] = useTexture([imgUrl]);
//   const meshRef = useRef();

//   // Rotate/tilt towards cursor
//   useFrame(() => {
//     if (meshRef.current && mouse) {
//       // Smoothly interpolate
//       meshRef.current.rotation.y +=
//         ((mouse.x * Math.PI) / 4 - meshRef.current.rotation.y) * 0.1;
//       meshRef.current.rotation.x +=
//         ((mouse.y * Math.PI) / 4 - meshRef.current.rotation.x) * 0.1;
//     }
//   });

//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[2, 5, 2]} intensity={1} />
//       <mesh ref={meshRef} castShadow receiveShadow scale={3}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color="#fff8eb"
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//           roughness={0.5}
//           metalness={0.2}
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1.2}
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });

//   // Track mouse movement
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 2;
//       const y = -(e.clientY / window.innerHeight - 0.5) * 2;
//       setMouse({ x, y });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <Canvas
//       frameloop="always"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{ position: [0, 0, 8], fov: 50 }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <Ball imgUrl={icon} mouse={mouse} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;

import React, {
  Suspense,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

/* ============================= */
/* Ball Component */
/* ============================= */

const Ball = ({ imgUrl, mouse }) => {
  const meshRef = useRef(null);

  /* Load Texture */
  const [decal] = useTexture([imgUrl]);

  /* Safety Check */
  if (!decal) return null;

  /* Mouse Rotation Effect */
  useFrame(() => {
    if (!meshRef.current || !mouse) return;

    const targetY = (mouse.x * Math.PI) / 4;
    const targetX = (mouse.y * Math.PI) / 4;

    meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.1;

    meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.1;
  });

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.5} />

      <directionalLight position={[2, 5, 2]} intensity={1} castShadow />

      {/* Ball Mesh */}
      <mesh ref={meshRef} castShadow receiveShadow scale={3}>
        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          roughness={0.5}
          metalness={0.2}
        />

        {/* Decal */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.2}
          map={decal}
          flatShading
        />
      </mesh>
    </>
  );
};

/* ============================= */
/* Main Canvas */
/* ============================= */

const BallCanvas = ({ icon }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const [isMobile, setIsMobile] = useState(false);

  /* Detect Mobile */
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    setIsMobile(media.matches);

    const handler = (e) => setIsMobile(e.matches);

    media.addEventListener("change", handler);

    return () => {
      media.removeEventListener("change", handler);
    };
  }, []);

  /* Mouse Tracking */
  const handleMouseMove = useCallback((e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;

    const y = -(e.clientY / window.innerHeight - 0.5) * 2;

    setMouse({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  /* Disable on Mobile (Performance Fix) */
  if (isMobile) {
    return null;
  }

  return (
    <Canvas
      frameloop="always"
      dpr={[1, 1.5]} // Mobile-friendly
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        position: [0, 0, 8],
        fov: 50,
        near: 0.1,
        far: 200,
      }}
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
        <Ball imgUrl={icon} mouse={mouse} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
