// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915EFF]">Adrian</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop 3D visuals, user <br className="sm:block hidden" />
//             interfaces and web applications
//           </p>
//         </div>
//       </div>

//       <ComputersCanvas />

//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// // export default Hero;

import { motion } from "framer-motion";

import "../styles/hero.css";
import { ProfileImg } from "../assets";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-indicator">
          <div className="hero-dot" />
          <div className="hero-line" />
        </div>

        <div>
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Razib</span>
          </h1>
          <p className="hero-subtitle">
            Specializing in building modern web applications <br />
            with React JS, Node JS, MongoDB, Mongoose, <br />
            TypeScript, Next JS, Redux, and Tailwind CSS
          </p>
        </div>

        {/* <div className="hero-image">
          <img
            src={ProfileImg}
            alt="Razib profile"
            className="hero-profile-img"
          />
        </div> */}
      </div>

      {/* <ComputersCanvas /> */}

      <div className="hero-scroll">
        <a href="#about">
          <div className="scroll-box">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="scroll-dot"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
