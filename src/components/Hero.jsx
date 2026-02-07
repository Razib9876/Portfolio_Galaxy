import { motion } from "framer-motion";
import "../styles/hero.css";
import profileImage from "../assets/profileImage.jpeg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-indicator">
            <div className="hero-dot" />
            <div className="hero-vertical-line" />
          </div>

          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Razib</span>
            </h1>

            <p className="hero-subtitle">
              Specializing in building modern web applications <br />
              with React JS, Node JS, MongoDB, Mongoose, <br />
              TypeScript, Next JS, Redux, and Tailwind CSS
            </p>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            src={profileImage}
            alt="Mohammad Razib"
            className="hero-profile-image"
          />
        </div>
      </div>
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
