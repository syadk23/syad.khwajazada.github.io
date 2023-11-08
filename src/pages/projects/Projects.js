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
        <Fade bottom duration={2000} distance="40px">
        <div className="basic-projects">
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
        </div>
          <div className="wrapper">
            <div className="row">
              <div className="item1">
                <figure>
                  <img src={require("../../assets/images/svg_logo.png")} alt="svg_logo" className="svg-pic"/>
                  <figcaption>
                    <h2>SVG Image Editor</h2>
                    <p>A web application that allows users to create, parse, edit and save SVG images.</p>
                    <h1>Web</h1>
                    <ul>
                      <li>C</li>
                      <li>Javascript</li>
                      <li>HTML</li>
                      <li>CSS</li>
                    </ul>
                    <button className="fig-btn">
                      <a href="https://github.com/syadk23/SVG-Image-Viewer-Editor" className="fig-btn-fill">View</a>
                    </button>
                    </figcaption>
                </figure>
              </div>
              <div className="item2">
                <figure>
                  <img src={require("../../assets/images/discord_logo.png")} alt="discord_logo" className="svg-pic"/>
                  <figcaption>
                    <h2>Discord Bot</h2>
                    <p>A multi-purpose bot that interacts with the user to do things such as play music, play quick games and is able to change the server region host.</p>
                    <h1>Server Bot</h1>
                    <ul>
                      <li>Javascript</li>
                      <li>Discord API</li>
                    </ul>
                    <button className="fig-btn">
                      <a href="https://github.com/syadk23/Discord-Bot" className="fig-btn-fill">View</a>
                    </button>
                    </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
          <TopButton theme={this.props.theme} />
          </Fade>
        </div>
    );
  }
}

export default Projects;
