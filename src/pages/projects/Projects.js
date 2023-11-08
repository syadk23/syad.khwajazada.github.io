import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import "./Projects.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="ot-portfolio-item">
                <figure class="effect-bubba">
                  <figcaption>
                    <h2>SVG Image Editor</h2>
                    <p>A web application that allows users to create, parse, edit and save SVG images.</p>
                    <button className="fig-btn">
                      <a href="https://github.com/syadk23/SVG-Image-Viewer-Editor" className="fig-btn-fill">View</a>
                    </button>
                    </figcaption>
                </figure>
              </div>
            </div>
            <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
            <TopButton theme={this.props.theme} />
          </Fade>
          </div>
        </div>
    );
  }
}

export default Projects;
