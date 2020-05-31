import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import RockPaperScissors from "../assets/RockPaperScissors.jpg";
import TowerOfHanoi from "../assets/TowerOfHanoi.jpg";
import ConnectFour from "../assets/ConnectFour.jpg";
import Sokoban from "../assets/Sokoban.jpg";
import BugTracker from "../assets/BugTracker.jpg";
import TwitterClone from "../assets/TwitterClone.jpg";
import styled from "styled-components";

const Styles = styled.div`
  div {
    margin: auto;
    margin-top: 25px;
    color: #ffffcc;
  }
`;

class Portfolio extends React.Component {
  render() {
    return (
      <Styles>
        <div className="portfolioStyle">
          <Container>
            <Row>
              <div>
                <Col>
                  <Card style={{ width: "18rem", backgroundColor: "#1e3f62" }}>
                    <Card.Img
                      variant="top"
                      src={RockPaperScissors}
                      width={"286px"}
                      height={"175px"}
                    />
                    <Card.Body>
                      <Card.Title>Rock, Paper, Scissors</Card.Title>
                      <Card.Text>
                        The popular game of chance built with JavaScript.
                      </Card.Text>
                      <Button variant="primary" href='https://dbmiddle.gitlab.io/Rock_Paper_Scissors/'>View Project</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div>
                <Col>
                  <Card style={{ width: "18rem", backgroundColor: "#1e3f62" }}>
                    <Card.Img
                      variant="top"
                      src={TowerOfHanoi}
                      width={"286px"}
                      height={"175px"}
                    />
                    <Card.Body>
                      <Card.Title>Tower of Hanoi</Card.Title>
                      <Card.Text>
                        Game that involves moving discs to the far-right tower. But you can't place a larger disc on top of a smaller one! Built with JavaScript.
                      </Card.Text>
                      <Button variant="primary" href='https://dbmiddle.gitlab.io/tower_of_hanoi/'>View Project</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div>
                <Col>
                  <Card style={{ width: "18rem", backgroundColor: "#1e3f62" }}>
                    <Card.Img
                      variant="top"
                      src={ConnectFour}
                      width={"286px"}
                      height={"175px"}
                    />
                    <Card.Body>
                      <Card.Title>Connect Four</Card.Title>
                      <Card.Text>
                        First to get 4-in-a-row wins! Built with JavaScript.
                      </Card.Text>
                      <Button variant="primary" href='https://dbmiddle.gitlab.io/connect_four/'>View Project</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>

              <div>
                <Col>
                  <Card style={{ width: "18rem", backgroundColor: "#1e3f62" }}>
                    <Card.Img
                      variant="top"
                      src={Sokoban}
                      width={"286px"}
                      height={"175px"}
                    />
                    <Card.Body>
                      <Card.Title>Sokoban</Card.Title>
                      <Card.Text>
                        The popular crate storage game. Built with JavaScript
                      </Card.Text>
                      <Button variant="primary" href='https://dbmiddle.gitlab.io/sokoban_/'>View Project</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div>
                <Col>
                  <Card style={{ width: "18rem", backgroundColor: "#1e3f62" }}>
                    <Card.Img
                      variant="top"
                      src={BugTracker}
                      width={"286px"}
                      height={"175px"}
                    />
                    <Card.Body>
                      <Card.Title>Bug Tracker</Card.Title>
                      <Card.Text>
                        Ticketing system that tracks bugs. Built with Django.
                      </Card.Text>
                      <Button variant="primary" href='https://github.com/dbmiddle/bug_tracker'>View Project</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div>
                <Col>
                  <Card style={{ width: "18rem", backgroundColor: "#1e3f62" }}>
                    <Card.Img
                      variant="top"
                      src={TwitterClone}
                      width={"286px"}
                      height={"175px"}
                    />
                    <Card.Body>
                      <Card.Title>Twitter-Clone</Card.Title>
                      <Card.Text>
                        Twitter-clone that is back end focused. Built with Django.
                      </Card.Text>
                      <Button variant="primary" href='https://github.com/dbmiddle/twitter_clone'>View Project</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            </Row>
          </Container>
        </div>
      </Styles>
    );
  }
}

export default Portfolio;
