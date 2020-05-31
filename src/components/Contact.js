import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import linkedinlogo from "../assets/linkedinlogo.jpg";
import githublogo from "../assets/githublogo.jpg";

const Styles = styled.div`
  .footer {
    height: 130px;
    border-top: 1px solid lightgrey;
    background-color: #1e3f62;
    position: relative;
    top: 600px;
    text-align: center;
    color: #ffffcc;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <Styles>
        
        <div className="footer">
          <Container>
            <p><a href='mailto:dbmiddle39@gmail.com?subject="Regarding your software development services"'>dbmiddle39@gmail.com</a></p>
            <a href='https://www.linkedin.com/in/devon-middleton/'><img src={linkedinlogo} style={{width: '30px', margin: '3px'}} alt='linkedinLogo' /></a>
            <a href='https://github.com/dbmiddle'><img src={githublogo} style={{width: '30px', margin:'3px'}} alt='githubLogo'/></a>
          </Container>
        </div>
        
      </Styles>
    );
  }
}

export default Header;
