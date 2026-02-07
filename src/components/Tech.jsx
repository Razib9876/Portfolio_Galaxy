// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");

import React from "react";

import "../styles/tech.css";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="tech-container">
      {technologies.map((technology) => (
        <div className="tech-item" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

// import React from "react";
// import "../styles/tech.css";
// import BallCanvas from "../components/canvas/Ball"; // keep your latest BallCanvas
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className="tech-marquee">
//       <div className="tech-marquee-track">
//         {technologies.map((technology) => (
//           <div className="tech-marquee-item" key={technology.name}>
//             <BallCanvas icon={technology.icon} />
//           </div>
//         ))}
//         {/* Duplicate items for smooth infinite scroll */}
//         {technologies.map((technology) => (
//           <div className="tech-marquee-item" key={technology.name + "-dup"}>
//             <BallCanvas icon={technology.icon} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");
