import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

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
            <p>dbmiddle39@gmail.com</p>
          </Container>
        </div>
        
      </Styles>
    );
  }
}

export default Header;
