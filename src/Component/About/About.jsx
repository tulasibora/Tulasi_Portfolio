import React, { useState } from "react";
import "./About.css";
import image from "../../Images/girl3.jpg";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
const About = () => {
  const [more, Setmore] = useState(false);
  const handleSetMore = () => {
    Setmore(true);
  };
  return (
    <>
      <p className="aboutme">
        <p> About </p>
        <p>&nbsp;</p>
        <p style={{ color: "#33f1cb" }}> Me </p>
      </p>

      <div className="aboutdiv">
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <img src={image} className="tulasiimage" />
          </Grid>
          <Grid item xs={8}>
            <p style={{ fontSize: "3em" }}>Frontend Developer</p>
            <p>&nbsp;</p>

            <p className="content">
              I'm Tulasi, a passionate React.js developer dedicated to crafting
              user-friendly and efficient web applications.
              <br />
              <br /> I've been honing my skills in web development for one and
              half year.
              <br /> I have hands-on experience in developing a variety of web
              applications. I'm particularly passionate about React.js because
              of its flexibility and the seamless user experiences it enables.
              <br />
              <br />
              From building interactive interfaces to optimizing performance, I
              thrive on the challenges that React.js presents.
              <br />
              <br />
              {more ? (
                <p>
                  My skill set includes:
                  <br /> React.js development <br />
                  State management with Redux <br />
                  Responsive web design <br />
                  RESTful API integration <br />
                  Fully integrated comprehensive laboratory information system
                  <br />
                  <br />
                  LABGEN: Full automation reduces errors, improves efficiency
                  and reduces costs. Versions available for commercial
                  laboratories, hospital laboratories and physician office
                  laboratories (POL).
                  <br />
                  <br />I believe in creating web applications that not only
                  meet functional requirements but also provide a seamless and
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
              variant="contained"
              size="medium"
              style={{
                borderRadius: "1.5em 1.5em 1.5em 1.5em",
                backgroundColor: "#33f1cb",
                color: "black",
              }}
              onClick={() => Setmore(!more)}
            >
              {more ? "Readless" : "Readmore.."}
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default About;
