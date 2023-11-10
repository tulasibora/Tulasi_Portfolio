import React from "react";
import "./Tulasi.css";
export const Tulasi = () => {
  return (
    <section id="intro">
      <div className="intrcontent">
        <div className="intro-text">
          <p className="hii">Hi, It's me </p>
          <h1 className="name">MS.TULASI</h1>
          <p className="para" style={{ display: "flex" }}>
            <p
              style={{
                fontSize: "1.5em",
              }}
            >
              And I'm a software
            </p>
            <p style={{ fontSize: "2em", color: " #378b7a" }}>
              Frontend Developer
            </p>
          </p>
          <p style={{ fontSize: "2em" }}>
            with a passion for learning new things everyday.
          </p>
          <div className="socialmedia">
            <a href="#">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i class="bx bxl-gmail"></i>
            </a>
          </div>
          <button className="downloadbtn">Download CV</button>
        </div>
      </div>
    </section>
  );
};
