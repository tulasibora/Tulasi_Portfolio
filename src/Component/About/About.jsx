import React, { useState } from "react";
import "./About.css";
import image from "../../Images/Tulasi2.jpg";
import Button from "@mui/material/Button";
const About = () => {
  const [more, Setmore] = useState(false);
  return (
    <div className="aboutmaindiv">
      <p className="aboutme">
        <p> About </p>
        <span style={{ color: "#33f1cb" }}> Me </span>
      </p>
      <div className="aboutdiv">
        <img src={image} className="tulasiimage" />
        <div className="aboutcontent">
          <p className="FrontendDeveloper">Frontend Developer</p>
          <p>&nbsp;</p>
          <p className="content">
            I'm Tulasi, a passionate React.js developer dedicated to crafting
            user-friendly and efficient web applications.
            <br />
            <br /> I've been honing my skills in web development for one and
            half year.
            <br /> I have hands-on experience in developing a variety of web
            applications. I'm particularly passionate about React.js because of
            its flexibility and the seamless user experiences it enables.
            <br />
            <br />
            From building interactive interfaces to optimizing performance, I
            thrive on the challenges that React.js presents.
            <br />
            <br />
            {more ? (
              <p>
                <p className="skillshead">My skill set includes:</p>
                React.js development <br />
                State management with Redux <br />
                Responsive web design <br />
                RESTful API integration <br />
                Fully integrated comprehensive laboratory information system
                <br />
                <br />
                <p>LABGEN:</p>
                Full automation reduces errors, improves efficiency and reduces
                costs. Versions available for commercial laboratories, hospital
                laboratories and physician office laboratories (POL).
                <br />
                <br />I believe in creating web applications that not only meet
                functional requirements but also provide a seamless and
                enjoyable experience for users. Clean, well-documented code is
                at the core of my development philosophy.
                <br />
                <br /> Feel free to connect with me on LinkedIn or explore my
                projects on GitHub. I'm always open to new opportunities and
                collaborations!
              </p>
            ) : null}
          </p>
          <br />
          <Button
            className="readbutton"
            variant="contained"
            size="small"
            style={{
              borderRadius: "1.5em 1.5em 1.5em 1.5em",
              backgroundColor: "#33f1cb",
              color: "black",
              fontSize: "10px",
            }}
            onClick={() => Setmore(!more)}
          >
            {more ? "Readless" : "Readmore.."}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
