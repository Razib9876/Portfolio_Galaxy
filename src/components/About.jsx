// import React from "react";
// // import Tilt from "react-parallax-tilt";
// import Tilt from "react-parallax-tilt";

// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className="xs:w-[250px] w-full">
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
//       >
//         <img
//           src={icon}
//           alt="web-development"
//           className="w-16 h-16 object-contain"
//         />

//         <h3 className="text-white text-[20px] font-bold text-center">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
//       >
//         I'm a skilled software developer with experience in TypeScript and
//         JavaScript, and expertise in frameworks like React, Node.js, and
//         Three.js. I'm a quick learner and collaborate closely with clients to
//         create efficient, scalable, and user-friendly solutions that solve
//         real-world problems. Let's work together to bring your ideas to life!
//       </motion.p>

//       <div className="mt-20 flex flex-wrap gap-10">
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// const WrappedAbout = SectionWrapper(About, "about");

// export default WrappedAbout;

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import "../styles/about.css";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="service-card-tilt">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="service-card-gradient"
    >
      <div
        className="service-card"
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <img src={icon} alt="web-development" className="service-card-icon" />

        <h3 className="service-card-title">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* <div className="about-title"> */}
      <motion.div variants={textVariant()} className="about-header">
        <p className="section-sub-text">Introduction</p>
        <h2 className="section-head-text">Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="about-description">
        I'm a creative full-stack developer focused on building fast, scalable,
        and visually appealing web applications. With strong skills in React,
        Node.js, and modern web technologies, I help turn complex ideas into
        simple and powerful digital experiences.
        <br />
        I'm always eager to learn new technologies and improve my skills.
      </motion.p>
      {/* </div> */}

      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
