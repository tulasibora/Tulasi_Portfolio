import React from "react";
import "./Tulasi.css";
import resume from "./AprilPaySlip.pdf";
import sample from "../../Images/vedio.mp4";
export const Tulasi = () => {
  return (
    <>
      <section className="intro">
        <video src={sample} autoPlay loop muted />
        <div className="intrcontent">
          <div className="intro-text">
            <p className="hii">Hi, It's me </p>
            <h1 className="name">MS.TULASI</h1>
            <p className="para" style={{ display: "flex" }}>
              <p
                style={{
                  fontSize: "2em",
                }}
              >
                And I'm a software
              </p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p style={{ fontSize: "2em", color: "#33f1cb" }}>
                Frontend Developer
              </p>
            </p>
            <p style={{ fontSize: "2em" }}>
              with a passion for learning new things everyday.
            </p>
            <div className="socialmedia">
              <a href="https://www.facebook.com/tulasi.bora.7">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="https://twitter.com/Twitter">
                <i class="bx bxl-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/feed/">
                <i class="bx bxl-linkedin"></i>
              </a>
            </div>
            <a className="downloadbtn" href={resume}>
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
