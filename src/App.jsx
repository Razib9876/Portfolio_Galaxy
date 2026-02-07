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
