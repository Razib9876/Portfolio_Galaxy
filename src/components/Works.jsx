import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import "../styles/works.css";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt="project_image" className="project-image" />

        <div className="project-overlay">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="github-icon-wrapper"
          >
            <img src={github} alt="source code" className="github-icon" />
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{name}</h3>
        <p className="project-description">{description}</p>
      </div>

      <div className="project-tags">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`project-tag ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="projects-header">
        <p className="section-sub-text">My work</p>
        <h2 className="section-head-text">Projects.</h2>
      </motion.div>

      <div className="works-description-wrapper">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="works-description"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
