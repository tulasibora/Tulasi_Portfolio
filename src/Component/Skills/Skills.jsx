import Paper from "@mui/material/Paper";
import React from "react";
import "./Skills.css";
import reactlogo from "../../Images/reactlogo.png";
import reduxlogo from "../../Images/redux.png";
import javascript from "../../Images/javascript.png";
import css from "../../Images/css.png";
import html from "../../Images/html.png";
import mui from "../../Images/mui.png";
import GitHub from "../../Images/git.png";
import Git from "../../Images/github.png";
import json from "../../Images/jsonlogo.avif";
import postman from "../../Images/postman.png";
import api from "../../Images/restimage.png";
import { Card } from "@mui/material";

const Skills = () => {
  // const imageList = [
  //   {
  //     img: reactlogo,
  //     name: "React",
  //   },
  // ];

  return (
    <>
      <Card></Card>
      <Paper
        style={{
          height: "80vh",
          width: "90vw",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2em",
          backgroundColor: "black",
        }}
      >
        <p className="typohead">My Skills</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "10em",
            marginLeft: "0em",
            marginTop: "2em",
          }}
        >
          <img src={reactlogo} className="techicons" />
          <img src={reduxlogo} className="techicons" />
          <img src={javascript} className="techicons" />
          <img src={css} className="techicons" />
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "10em",
            marginLeft: "13em",
            marginTop: "2em",
          }}
        >
          <img src={html} className="techicons" />
          <img src={mui} className="techicons" />
          <img src={GitHub} className="techicons" />
          <img src={Git} className="techicons" />
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "10em",
            marginTop: "3em",
          }}
        >
          <img src={json} className="techicons" />
          <img src={postman} className="techicons" />
          <img src={api} className="techicons" />
        </div>
      </Paper>
    </>
  );
};

export default Skills;
