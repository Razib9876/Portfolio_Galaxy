import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/navbar.css";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="logo-img" />
          <p className="logo-text">
            Razib&nbsp;
            <span className="logo-subtext"> | Js Portfolio Galaxy</span>
          </p>
        </Link>

        {/* Desktop menu */}
        <ul className="nav-links">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`nav-link ${active === nav.title ? "active" : ""}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="mobile-menu">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="menu-icon"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`mobile-dropdown ${toggle ? "show" : ""}`}>
            <ul className="mobile-links">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`mobile-link ${
                    active === nav.title ? "active" : ""
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
