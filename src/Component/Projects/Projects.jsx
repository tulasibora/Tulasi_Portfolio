import React from "react";
import "./ProjectStyle.css";
import logo from "../../Images/logo-labgen.jpg";
import ecartlogo from "../../Images/logo-ecart.webp";
export const Projects = () => {
  return (
    <div>
      <p className="head">
        My <span className="head1">Projects</span>
      </p>
      <div className="maindiv">
        <img src={logo} className="labgenlogo" />
        <div className="div2">
          <h1>LABGEN</h1>
          <p>
            An expert system, LABGEN, for management support of analytical
            laboratories by means of simulation is presented. <br />
            In an interactive session with the user, it constructs a simulation
            model of the laboratory without any programming or knowledge about
            simulation being required.
            <br /> The organizational aspects of the laboratory and how they are
            modelled by LABGEN are discussed.
            <br />
            <br />
            LABGEN stores data which is related to patient like patient details
            ,insurence details ,physicians details ....,
          </p>
        </div>
      </div>
      <br />
      <div className="maindiv">
        <img src={ecartlogo} className="labgenlogo" />
        <div className="div2">
          <h1>ECART</h1>
          <p>
            An expert system, LABGEN, for management support of analytical
            laboratories by means of simulation is presented. <br />
            In an interactive session with the user, it constructs a simulation
            model of the laboratory without any programming or knowledge about
            simulation being required.
            <br /> The organizational aspects of the laboratory and how they are
            modelled by LABGEN are discussed.
            <br />
            <br />
            LABGEN stores data which is related to patient like patient details
            ,insurence details ,physicians details ....,
          </p>
        </div>
      </div>
    </div>
  );
};
