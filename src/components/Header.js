import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Devon from "../assets/Devon.jpg";

const Styles = styled.div`
  .header {
    height: 230px;
    border-bottom: 1px solid lightgrey;
    background-color: #1e3f62;
    // border-radius: 100%/0 0 30px 30px;
    display: flex;
    justify-content: center;
    color: #ffffcc;
  }

  .headerText {
    text-align: center;
    top: 150px;
    position: relative;
    color: #ffffcc;
  }

  .headshotParent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .headshot {
    background: url(${Devon}) no-repeat;
    background-size: cover;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 1px solid #ffffcc;
    top: 170px;
    position: relative;
  }

  .welcomeText{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 200px;
    position: relative;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <Styles>
        {/* <Jumbo className='Jumbo1'> */}
        <div className="header">
          <Container>
            <div className="headerText">
              <h3>
                <span className="name">DEVON MIDDLETON</span>
              </h3>
              <p>Full Stack Software Developer</p>
            </div>
            <div className="headshotParent">
              <div className="headshot"></div>
            </div>
            <div className="welcomeText">
              <p>Welcome to my portfolio!</p>
              <p>Please feel free to have a look around.</p>
            </div>
          </Container>
        </div>
        {/* </Jumbo> */}
      </Styles>
    );
  }
}

export default Header;
