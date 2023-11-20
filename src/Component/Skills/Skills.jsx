import React from "react";
import "./Skills.css";
import reactlogo from "../../Images/react.png";
import reduxlogo from "../../Images/redux.png";
import javascript from "../../Images/js.png";
import css from "../../Images/css-3.png";
import html from "../../Images/html.png";
import mui from "../../Images/pngwing.com.png";
import GitHub from "../../Images/code.png";
import Git from "../../Images/commit-git.png";
import json from "../../Images/json.png";
import postman from "../../Images/postman.png";
import api from "../../Images/api.png";
import { Box, Grid } from "@mui/material";

const Skills = () => {
  return (
    <>
      <Box className="paperDiv">
        <p className="typohead">My Skills</p>
        <div className="linediv1">
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Box className="boxstyle">
                <img src={reactlogo} alt="react " className="imagesize" />
                <p>React</p>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="boxstyle">
                <img src={reduxlogo} alt="Redux " className="imagesize" />
                <p>Redux</p>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="boxstyle">
                <img src={javascript} alt="Redux " className="imagesize" />
                <p>JavaScript</p>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className="linediv1">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box className="boxstyle">
                <img src={css} className="imagesize" alt="Redux " />
                <p>CSS</p>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="boxstyle">
                <img src={html} alt="Redux " className="imagesize" />
                <p>HTML</p>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="boxstyle">
                <img src={mui} alt="Redux " className="imagesize" />
                <p>MUI</p>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="boxstyle">
                <img src={GitHub} alt="Redux " className="imagesize" />
                <p>GitHub</p>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="boxstyle">
                <img src={Git} alt="Redux " className="imagesize" />
                <p>Git</p>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="boxstyle">
                <img src={json} alt="Redux " className="imagesize" />
                <p>JSON</p>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className="linediv1">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box className="boxstyle">
                <img src={postman} alt="Redux " className="imagesize" />
                <p>Postman</p>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="boxstyle">
                <img src={api} alt="Redux " className="imagesize" />
                <p>Api</p>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default Skills;
