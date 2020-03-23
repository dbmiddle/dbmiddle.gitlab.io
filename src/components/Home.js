import React from "react";
import Header from "./Header";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import styled from "styled-components";

const Styles = styled.div`
  .projects {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 450px;
    position: relative;
  }

  .about {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 550px;
    position: relative;
  }

  h3 {
    color: #ffffcc;
  }

  hr {
    background-color: #ffffcc;
    width: 50%;
  }
  .componentContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

class Home extends React.Component {
  render() {
    return (
      <Styles>
        <Header />
        <div className="componentContainer">
          <div id="portfolio" className="projects">
            <h3>PROJECTS</h3>
            <hr />
            <Portfolio />
          </div>
          <div id="about" className="about">
            <h3>ABOUT</h3>
            <hr />
            <About />
          </div>
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Styles>
    );
  }
}

export default Home;
