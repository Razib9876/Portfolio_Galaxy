import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2>Mohammad Razib</h2>
          <p>Full Stack Developer</p>
        </div>

        {/* Middle Section */}
        <div className="footer-center">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Mohammad Razib. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
