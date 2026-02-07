import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import "../styles/contact.css";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );
      console.log("API URL:", import.meta.env.VITE_API_URL);

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Ahh, something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="contact-form-wrapper"
      >
        <h3 className="section-head-text">Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <label className="form-label">
            <span className="form-label-text">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="form-input"
              required
            />
          </label>

          <label className="form-label">
            <span className="form-label-text">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="form-input"
              required
            />
          </label>

          <label className="form-label">
            <span className="form-label-text">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="form-textarea"
              required
            />
          </label>

          <button type="submit" className="submit-btn">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="contact-canvas"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
