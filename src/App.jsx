// import { BrowserRouter } from "react-router-dom";

// import {
//   About,
//   Contact,
//   Experience,
//   Feedbacks,
//   Hero,
//   Navbar,
//   Tech,
//   Works,
//   StarsCanvas,
// } from "./components";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//         </div>
//         <About />
//         <Experience />
//         <Tech />
//         <Works />
//         <Feedbacks />
//         <div className="relative z-0">
//           <Contact />
//           <StarsCanvas />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

import { BrowserRouter } from "react-router-dom";

import "./styles/app.css";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-root">
        <div className="hero-wrapper">
          <Navbar />
          <Hero />
        </div>

        <div className="contact-wrapper">
          <About />
          <StarsCanvas />
        </div>
        <div className="contact-wrapper">
          <Experience />
          <StarsCanvas />
        </div>

        <Tech />

        <div className="contact-wrapper">
          <Works />
          <StarsCanvas />
        </div>
        <div className="contact-wrapper">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
