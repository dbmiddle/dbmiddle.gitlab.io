import React from "react";
import styled from "styled-components";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import './Home.css'

const Styles = styled.div`
  .header {
    display: flex;
    align-items: center;
    position: relative;
    top: 100px;
  }
  .headerText {
    text-align: center;
  }

  .name {
    color: orange;
  }
`;

class Home extends React.Component {
  render() {
    return (
      <Styles>
        {/* <Jumbo className='Jumbo1'> */}
        <div className="header">
          <Container>
            <div className="headerText">
              <p>Hello, my name is</p>
              <h1>
                <span className="name">DEVON MIDDLETON.</span>
              </h1>
              <p>I'm a Full Stack Software Developer.</p>
              <Link to='/portfolio'>
                <Button variant="dark">Check out my work</Button>
              </Link>
            </div>
          </Container>
        </div>
        {/* </Jumbo> */}
      </Styles>
    );
  }
}

export default Home;
