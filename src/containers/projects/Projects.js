import React, { Component } from "react";
import "./Projects.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="projects-header-div">
          <Fade bottom duration={2000} distance="20px"></Fade>
        </div>
        <div className="projects-body-div">
          {degrees.degrees.map((degree) => {
            return <DegreeCard degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
