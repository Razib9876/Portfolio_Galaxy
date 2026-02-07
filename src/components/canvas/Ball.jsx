// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color="#fff8eb"
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop="demand"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;
// --------------------------------------------------------------------------------------------

// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Ball = ({ imgUrl }) => {
//   const [decal] = useTexture([imgUrl]);

//   return (
//     <Float speed={3} rotationIntensity={1.4} floatIntensity={2.2}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[3, 3, 3]} intensity={1} />

//       <mesh scale={2.75}>
//         <sphereGeometry args={[1, 64, 64]} />

//         <meshStandardMaterial
//           color="#fff8eb"
//           roughness={0.25}
//           metalness={0.1}
//           polygonOffset
//           polygonOffsetFactor={-5}
//         />

//         <Decal
//           position={[0, 0, 1]}
//           rotation={[0, 0, 0]}
//           scale={0.9}
//           map={decal}
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop="always"
//       dpr={1} // ⬇ forces faster render on most devices
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           enablePan={false}
//           enableRotate
//           enableDamping
//           dampingFactor={0.04}
//         />

//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;
// ------------------------------------------------------------------------------
// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Ball = ({ imgUrl }) => {
//   const [decal] = useTexture([imgUrl]);

//   return (
//     <Float speed={3} rotationIntensity={1.4} floatIntensity={2.2}>
//       {/* Global light */}
//       <ambientLight intensity={0.35} />

//       {/* Key light */}
//       <directionalLight position={[5, 5, 5]} intensity={1.2} />

//       {/* Fill light */}
//       <directionalLight position={[-5, -5, -5]} intensity={0.6} />

//       <mesh scale={2.75}>
//         {/* PERFECTLY ROUND BALL */}
//         <sphereGeometry args={[1, 64, 64]} />

//         {/* STONE / MARBLE MATERIAL */}
//         <meshStandardMaterial
//           color="#7a7a7a"
//           roughness={0.6}
//           metalness={0.05}
//           envMapIntensity={1}
//           polygonOffset
//           polygonOffsetFactor={-5}
//         />

//         {/* LOGO / ICON DECAL */}
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[0, 0, 0]}
//           scale={0.85}
//           map={decal}
//         />

//         {/* Rim light to define shape */}
//         <pointLight position={[0, 0, 3]} intensity={0.4} color="#ffffff" />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas frameloop="always" dpr={1} gl={{ preserveDrawingBuffer: true }}>
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           enablePan={false}
//           enableRotate
//           enableDamping
//           dampingFactor={0.04}
//         />

//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;
// --------------------------------------------------------------------------------------
// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, Decal, useTexture } from "@react-three/drei";
// import { Physics, useSphere, usePlane } from "@react-three/cannon";

// import CanvasLoader from "../Loader";

// /* ================= FLOOR ================= */
// const Floor = () => {
//   usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//     position: [0, -2.5, 0], // slightly higher so balls rest nicely
//   }));

//   return null; // invisible floor
// };

// /* ================= WALLS ================= */
// const Wall = ({ position, rotation }) => {
//   usePlane(() => ({
//     position,
//     rotation,
//   }));
//   return null;
// };

// /* ================= BALL ================= */
// const Ball = ({ position, imgUrl }) => {
//   const [decal] = useTexture([imgUrl]);

//   const [ref] = useSphere(() => ({
//     mass: 1,
//     position,
//     args: [1.5], // increase radius for visibility
//     material: {
//       friction: 0.3,
//       restitution: 0.9, // bounciness
//     },
//   }));

//   return (
//     <mesh ref={ref} castShadow receiveShadow>
//       <sphereGeometry args={[1.5, 64, 64]} /> {/* larger ball */}
//       <meshStandardMaterial color="#7a7a7a" roughness={0.4} metalness={0.2} />
//       <Decal position={[0, 0, 1]} scale={1} map={decal} />
//     </mesh>
//   );
// };

// /* ================= SCENE ================= */
// const BallCanvas = ({ icon, icons = [] }) => {
//   const balls = icons.length ? icons : icon ? [icon] : [];

//   // fixed positions for all balls in a single space
//   const positions = balls.map((_, i) => [0, 2 + i * 0.1, 0]);

//   return (
//     <Canvas
//       frameloop="always"
//       dpr={[1, 2]}
//       camera={{ position: [0, 6, 12], fov: 50 }}
//       shadows
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <ambientLight intensity={0.6} />
//         <directionalLight
//           castShadow
//           position={[5, 10, 5]}
//           intensity={1.2}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//         />

//         <Physics gravity={[0, -9.8, 0]}>
//           <Floor />

//           <Wall position={[0, 0, -6]} rotation={[0, 0, 0]} />
//           <Wall position={[0, 0, 6]} rotation={[0, Math.PI, 0]} />
//           <Wall position={[-6, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
//           <Wall position={[6, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />

//           {balls.map((img, i) => (
//             <Ball key={i} imgUrl={img} position={positions[i]} />
//           ))}
//         </Physics>

//         <OrbitControls enableZoom={true} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;
// ---------------------------------------down working code ---------------------------

// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";
// import CanvasLoader from "../Loader";

// const Ball = ({ imgUrl }) => {
//   const [decal] = useTexture([imgUrl]);

//   return (
//     <Float speed={4} rotationIntensity={3} floatIntensity={3}>
//       {/* Increased speed and rotation */}
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[2, 5, 2]} intensity={1} />
//       <mesh castShadow receiveShadow scale={3}>
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
//           scale={1.2} // slightly bigger decal for visibility
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop="always" // changed from 'demand' for continuous movement
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{ position: [0, 0, 8], fov: 50 }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;
// ---------------------------------------------------------------------------------
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, mouse }) => {
  const [decal] = useTexture([imgUrl]);
  const meshRef = useRef();

  // Rotate/tilt towards cursor
  useFrame(() => {
    if (meshRef.current && mouse) {
      // Smoothly interpolate rotation to follow cursor
      meshRef.current.rotation.y +=
        ((mouse.x * Math.PI) / 4 - meshRef.current.rotation.y) * 0.1;
      meshRef.current.rotation.x +=
        ((mouse.y * Math.PI) / 4 - meshRef.current.rotation.x) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
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

const BallCanvas = ({ icon }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // normalize -1 to 1
      const y = -(e.clientY / window.innerHeight - 0.5) * 2; // normalize -1 to 1
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 8], fov: 50 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Ball imgUrl={icon} mouse={mouse} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
