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

      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
