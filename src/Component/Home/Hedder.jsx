import React from "react";
import "./Hedder.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Images/logo1.jpg";
const Hedder = () => {
  return (
    <>
      <nav className="navbar">
        <div style={{ display: "flex" }}>
          <img src={logo} alt="logo" className="logo" />
          <Link to="/" className="desctopmenu">
            <ul style={{ display: "flex" }}>
              <li>
                <NavLink to="/" className="desctopItems">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="desctopItems">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="desctopItems">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/Skills" className="desctopItems">
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/contactme" className="desctopItems">
                  contact me
                </NavLink>
              </li>
            </ul>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Hedder;
