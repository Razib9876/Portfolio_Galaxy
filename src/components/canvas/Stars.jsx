// import { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// import "../../styles/stars.css";

// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() =>
//     random.inSphere(new Float32Array(5000), { radius: 1.2 }),
//   );

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color="#f272c8"
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className="stars-canvas-wrapper">
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>
//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;

import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

import "../../styles/stars.css";

/* ============================= */
/* Stars Component */
/* ============================= */

const Stars = (props) => {
  const ref = useRef();

  // Reduce points for performance
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(2500), { radius: 1.2 }),
  );

  useFrame((state, delta) => {
    if (!ref.current) return; // ✅ Safety check

    ref.current.rotation.x -= delta * 0.05;
    ref.current.rotation.y -= delta * 0.03;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.0025}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

/* ============================= */
/* Canvas Wrapper */
/* ============================= */

const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);

    const handler = (e) => setIsMobile(e.matches);
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  // ❌ Disable stars on mobile (prevents crash)
  if (isMobile) return null;

  return (
    <div className="stars-canvas-wrapper">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]} // Mobile GPU safe
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
