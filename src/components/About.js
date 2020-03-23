import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  h4 {
    text-align: center;
  }

p {
    color: #ffffcc;
}

  div {
      margin-top: 25px;
  }

  span {
      color: darkorange;
  }
`;

class About extends React.Component {
  render() {
    return (
      <Styles>
        <div>
          <Container>
            <p>
              Hello, I'm Devon Middleton, a software developer based in
              Indianapolis, IN. I broke into tech in 2019 after spending over 10
              years in pharmaceuticals, and I can proudly say that this has been
              the most challenging yet fulfillig work I have ever been apart of.
              As I have progressed through my young software developer career I
              have acquired professional-level skill in working with <span>Python,
              Django, MongoDB, JavaScript, React, Redux, TDD, HTML, CSS</span> and a
              host of libraries amongst other technologies. I have also had the
              opportunity to coach others in working through different coding
              challenges, giving them constructive feedback in order to enhance
              their code quality and comprehension.
              <br />
              <br />
              While I do spend much of my time learning and sharpening my
              skills, I also enjoy gaming, hiking, traveling, fantasy football
              and anything FOOD!{" "}
            </p>
          </Container>
        </div>
      </Styles>
    );
  }
}

export default About;
